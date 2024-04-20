import { Api, UserAuthentication } from "$lib/api";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch, parent }) => {
    // TODO fetch english word

    const accessToken = (await parent()).accessToken;

    let api;
    if (accessToken === null) {
        api = Api.newUsingSvelteFetchWithoutAuthentication(fetch);
    } else {
        api = Api.newUsingSvelteFetch(fetch, UserAuthentication.newWithAuthentication(accessToken));
    }


    const wordInfo = await api.getEnglishWordByLemma(params.lemma);

    return {
        lemma: params.lemma,
        wordInfo
    }
};
