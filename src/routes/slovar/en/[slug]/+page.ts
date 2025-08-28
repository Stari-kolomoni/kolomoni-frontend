import { Api, UserAuthentication } from "$lib/api";
import type { EnglishWordInfoResponse } from "$lib/api/schemaTypes";
import type { PageLoad } from "./$types";


/**
 * Invariant: either `lemma` or `wordId` is always non-`null`.
 */
interface ParsedSlugWithLemma {
    type: "lemma-only",
    lemma: string
}

interface ParsedSlugWithId {
    type: "id-only",
    wordId: string
}

interface ParsedSlugWithLemmaAndId {
    type: "lemma-and-id",
    lemma: string,
    wordId: string
}

type ParsedSlug = ParsedSlugWithLemma | ParsedSlugWithId | ParsedSlugWithLemmaAndId;


function parseSlug(slug: string): ParsedSlug {
    if (slug.startsWith(":")) {
        // This is the "word ID"-only variant.
        const wordId = slug.slice(1);

        return {
            type: "id-only",
            wordId
        };
    }

    if (slug.includes(":")) {
        // This is the "lemma:wordid" variant.
        const lastUnderscore = slug.lastIndexOf(":");

        const lemma = slug.substring(0, lastUnderscore + 1);
        const wordId = slug.substring(lastUnderscore + 1, slug.length);

        return {
            type: "lemma-and-id",
            lemma,
            wordId
        };
    }

    // This is the "lemma" variant.
    return {
        type: "lemma-only",
        lemma: slug
    };
}


export const load: PageLoad = async ({ params, fetch, parent }) => {
    const parsedSlug = parseSlug(params.slug);

    const accessToken = (await parent()).accessToken;

    let api;
    if (accessToken === null) {
        api = Api.newUsingSvelteFetchWithoutAuthentication(fetch);
    } else {
        api = Api.newUsingSvelteFetch(fetch, UserAuthentication.newWithAuthentication(accessToken));
    }

    let wordInfo: EnglishWordInfoResponse;
    if (parsedSlug.type === "id-only" || parsedSlug.type === "lemma-and-id") {
        wordInfo = await api.getEnglishWordById(parsedSlug.wordId);
    } else {
        wordInfo = await api.getEnglishWordByLemma(parsedSlug.lemma);
    }

    return { wordInfo }
};
