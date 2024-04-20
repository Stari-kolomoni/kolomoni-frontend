import { Api, UserAuthentication } from "$lib/api";
import { UserInfo } from "$lib/api/userInfo";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch, parent }) => {
    const parentData = await parent();

    const userAuthentication = new UserAuthentication(parentData.accessToken);

    if (userAuthentication.hasToken()) {
        const api = Api.newUsingSvelteFetch(fetch, userAuthentication);
        const userInfoLoadPromise = api.getCurrentUserInformation()
            .then((rawUserData) => {
                return UserInfo.fromApiResponse(rawUserData).serialize();
            });

        return {
            userInfo: await userInfoLoadPromise
        }
    } else {
        throw redirect(304, "/prijava");
    }
}) satisfies PageLoad;
