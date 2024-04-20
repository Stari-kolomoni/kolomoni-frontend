import { Api, UserAuthentication } from "$lib/api";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({
    data, fetch
}) => {
    if (data.accessToken === null) {
        return {
            ...data,
            userInfo: null,
        };
    }


    const api = Api.newUsingSvelteFetch(fetch, new UserAuthentication(data.accessToken));
    const userInfoPromise = api.getCurrentUserInformation();

    return {
        ...data,
        userInfo: await userInfoPromise,
    }
};
