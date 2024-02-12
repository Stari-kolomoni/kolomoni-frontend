import { PUBLIC_BASE_API_URL } from "$env/static/public";
import { MissingAuthenticationError, StatusCodeError } from "$lib/errors";
import type { UserInformationResponse, UserLoginRequest, UserLoginResponse } from "./schemaTypes";
import { validateUserInformationResponse, validateUserLoginResponse } from "./schemaValidators";

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

export class UserLoginState {
    private accessToken: string | null;

    constructor(
        accessToken: string | null
    ) {
        this.accessToken = accessToken;
    }

    public getAccessToken(): string | null {
        return this.accessToken;
    }

    public setAccessToken(accessToken: string | null) {
        this.accessToken = accessToken;
    }

    public withUpdatedAccessToken(accessToken: string | null): UserLoginState {
        this.setAccessToken(accessToken);
        return this;
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
    loginState: UserLoginState,
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

export const Api = {
    loginUser: async (
        ambientApiParameters: AmbientApiParameters,
        loginState: UserLoginState,
        username: string,
        password: string,
    ): Promise<UserLoginResponse> => {
        const bodyContent: UserLoginRequest = {
            username,
            password
        };

        const response = await fetchWithContext(
            ambientApiParameters,
            loginState,
            {
                endpoint: "/login",
                method: "POST",
                body: JSON.stringify(bodyContent)
            }
        );

        const responseJson = await response.json();
        validateUserLoginResponse(responseJson);

        return responseJson;
    },

    getCurrentUserInformation: async (
        ambientApiParameters: AmbientApiParameters,
        loginState: UserLoginState,
    ): Promise<UserInformationResponse> => {
        const response = await fetchWithContext(
            ambientApiParameters,
            loginState,
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
}
