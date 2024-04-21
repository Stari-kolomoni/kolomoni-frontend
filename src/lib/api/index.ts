import { PUBLIC_BASE_API_URL } from "$env/static/public";
import { MissingAuthenticationError, StatusCodeError } from "$lib/errors";
import type { EnglishWordResponse, SearchRequest, SearchResponse, UserInformationResponse, UserLoginRequest, UserLoginResponse } from "./schemaTypes";
import { validateEnglishWordResponse, validateSearchResponse, validateUserInformationResponse, validateUserLoginResponse } from "./schemaValidators";

export class AmbientApiParameters {
    public readonly fetcher: typeof fetch;

    constructor(
        fetcher: typeof fetch,
    ) {
        this.fetcher = fetcher;
    }

    public static native(): AmbientApiParameters {
        return new AmbientApiParameters(fetch);
    }

    public static svelte(svelteFetch: typeof fetch): AmbientApiParameters {
        return new AmbientApiParameters(svelteFetch);
    }
}

/**
 * A user authentication state; contains solely the access token (if any).
 */
export class UserAuthentication {
    private accessToken: string | null;

    constructor(
        accessToken: string | null
    ) {
        this.accessToken = accessToken;
    }


    public static newWithAuthentication(accessToken: string): UserAuthentication {        
        return new UserAuthentication(accessToken);
    }

    public static newWithoutAuthentication(): UserAuthentication {
        return new UserAuthentication(null);
    }


    public getAccessToken(): string | null {
        return this.accessToken;
    }

    public setAccessToken(accessToken: string | null) {
        this.accessToken = accessToken;
    }

    public usingUpdatedAccessToken(accessToken: string | null): UserAuthentication {
        this.setAccessToken(accessToken);
        return this;
    }

    public hasToken(): boolean {
        return this.accessToken !== null;
    }
}



function buildFullApiUrl(subroute: string): string {
    return `${PUBLIC_BASE_API_URL}${subroute}`;
}

interface FetchWithContextOptions {
    endpoint: string,
    method: "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH",
    body?: string | null,
    includeAccessToken?: boolean,
}

const FETCH_WITH_CONTEXT_DEFAULT_OPTIONS: Partial<FetchWithContextOptions> = {
    body: null,
    includeAccessToken: false,
};

async function fetchWithContext(
    ambientApiParameters: AmbientApiParameters,
    loginState: UserAuthentication,
    options: FetchWithContextOptions,
): Promise<Response> {
    options = {
        ...FETCH_WITH_CONTEXT_DEFAULT_OPTIONS,
        ...options
    };

    const fullEndpoint = buildFullApiUrl(options.endpoint);

    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    if (options.includeAccessToken) {
        const accessToken = loginState.getAccessToken();
        if (accessToken === null) {
            throw new MissingAuthenticationError();
        }

        headers.append("Authorization", `Bearer ${accessToken}`);
    }


    const response = await ambientApiParameters.fetcher(
        fullEndpoint,
        {
            method: options.method,
            body: typeof options.body === "undefined" ? null : options.body,
            headers,
            mode: "cors",
            credentials: "omit",
            redirect: "follow",
        }
    );

    // TODO We'll eventually need to handle 249 Too Many Requests, but no need yet.

    if (response.status < 200 || response.status >= 300) {
        throw new StatusCodeError(response.status, response.statusText);
    }

    return response;
}


export class Api {
    private ambientApiParameters: AmbientApiParameters;
    private userAuthentication: UserAuthentication;

    constructor(
        ambientApiParameters: AmbientApiParameters,
        userAuthentication: UserAuthentication
    ) {
        this.ambientApiParameters = ambientApiParameters;
        this.userAuthentication = userAuthentication;
    }


    public static newWithoutAuthentication(ambientApiParameters: AmbientApiParameters): Api {
        return new Api(ambientApiParameters, UserAuthentication.newWithoutAuthentication());
    }

    public static newWithAccessToken(
        ambientApiParameters: AmbientApiParameters,
        accessToken: string,
    ): Api {
        return new Api(ambientApiParameters, UserAuthentication.newWithAuthentication(accessToken))
    }

    public static newUsingNativeFetch(
        userAuthentication: UserAuthentication
    ): Api {
        return new Api(AmbientApiParameters.native(), userAuthentication)
    }

    public static newUsingSvelteFetch(
        svelteFetch: typeof fetch,
        userAuthentication: UserAuthentication | string | null,
    ): Api {
        if (userAuthentication instanceof UserAuthentication) {
            return new Api(AmbientApiParameters.svelte(svelteFetch), userAuthentication)
        }

        if (userAuthentication === null) {
            return new Api(AmbientApiParameters.svelte(svelteFetch), UserAuthentication.newWithoutAuthentication());
        } else {
            return new Api(AmbientApiParameters.svelte(svelteFetch), UserAuthentication.newWithAuthentication(userAuthentication));
        }
    }

    public static newUsingSvelteFetchWithoutAuthentication(
        svelteFetch: typeof fetch,
    ): Api {
        return new Api(AmbientApiParameters.svelte(svelteFetch), UserAuthentication.newWithoutAuthentication())
    }

    public static newFull(
        ambientApiParameters: AmbientApiParameters,
        userAuthentication: UserAuthentication
    ): Api {
        return new Api(ambientApiParameters, userAuthentication)
    }


    public async loginUser(
        username: string,
        password: string,
    ): Promise<UserLoginResponse> {
        const bodyContent: UserLoginRequest = {
            username,
            password
        };

        const response = await fetchWithContext(
            this.ambientApiParameters,
            this.userAuthentication,
            {
                endpoint: "/login",
                method: "POST",
                body: JSON.stringify(bodyContent)
            }
        );

        const responseJson = await response.json();
        validateUserLoginResponse(responseJson);

        return responseJson;
    }

    public async getCurrentUserInformation(): Promise<UserInformationResponse> {
        const response = await fetchWithContext(
            this.ambientApiParameters,
            this.userAuthentication,
            {
                endpoint: "/users/me",
                method: "GET",
                includeAccessToken: true,
            }
        );

        const responseJson = await response.json();
        validateUserInformationResponse(responseJson);

        return responseJson;
    }

    public async search(searchTerm: string): Promise<SearchResponse> {
        const requestBody: SearchRequest = {
            search_query: searchTerm
        };

        const response = await fetchWithContext(
            this.ambientApiParameters,
            this.userAuthentication,
            {
                endpoint: "/dictionary/search",
                method: "POST",
                includeAccessToken: false,
                body: JSON.stringify(requestBody)
            }
        );

        const responseJson = await response.json();
        validateSearchResponse(responseJson);

        return responseJson;
    }

    public async getEnglishWordByLemma(lemma: string): Promise<EnglishWordResponse> {
        const response = await fetchWithContext(
            this.ambientApiParameters,
            this.userAuthentication,
            {
                endpoint: "/dictionary/english/by-lemma/" + lemma,
                method: "GET",
                includeAccessToken: false,
            }
        );

        const responseJson = await response.json();
        validateEnglishWordResponse(responseJson);

        return responseJson;
    }

    // TODO
    // public async getEnglishWordByLemma(lemma: string): Promise<
}
