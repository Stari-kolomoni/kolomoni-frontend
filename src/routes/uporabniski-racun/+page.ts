import { Api } from "$lib/api";
import { UserInfo } from "$lib/api/userInfo";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch, parent }) => {
    const parentData = await parent();

    if (parentData.accessToken !== null) {
        const api = Api.newUsingSvelteFetch(fetch, parentData.accessToken);
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
