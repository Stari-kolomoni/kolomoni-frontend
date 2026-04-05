import type { Category, EnglishWord, ScoredEnglishWordMeaningWithDetails, ScoredSloveneWordMeaningWithDetails, SloveneWord, WordSearchResult } from "$lib/api/schemaTypes";

export type ParsedScoredSloveneWordMeaningWithDetails = Omit<ScoredSloveneWordMeaningWithDetails, "categories"> & {
    categories: Category[]
};

export type ParsedScoredEnglishWordMeaningWithDetails = Omit<ScoredEnglishWordMeaningWithDetails, "categories"> & {
    categories: Category[]
};

export type ParsedWordMeaningSearchResult = {
    type: "slovene",
    score: number,
    word: SloveneWord,
    wordMeaning: ParsedScoredSloveneWordMeaningWithDetails,
    destinationUrl: string,
} | {
    type: "english",
    score: number,
    word: EnglishWord,
    wordMeaning: ParsedScoredEnglishWordMeaningWithDetails,
    destinationUrl: string,
};

export function prepareSloveneWordMeaning(
    wordMeaning: ScoredSloveneWordMeaningWithDetails,
    availableCategories: Record<string, Category>
): ParsedScoredSloveneWordMeaningWithDetails {
    const categories: Category[] = [];

    for (const categoryId of wordMeaning.categories) {
        const mappedCategory = availableCategories[categoryId];
        if (typeof mappedCategory !== "undefined") {
            categories.push(mappedCategory);
        }
    }

    return {
        word_meaning_id: wordMeaning.word_meaning_id,
        abbreviation: wordMeaning.abbreviation,
        disambiguation: wordMeaning.disambiguation,
        description: wordMeaning.description,
        created_at: wordMeaning.created_at,
        last_modified_at: wordMeaning.last_modified_at,
        categories,
        score: wordMeaning.score,
        translations: wordMeaning.translations
    };
}

export function prepareEnglishWordMeaning(
    wordMeaning: ScoredEnglishWordMeaningWithDetails,
    availableCategories: Record<string, Category>
): ParsedScoredEnglishWordMeaningWithDetails {
    const categories: Category[] = [];

    for (const categoryId of wordMeaning.categories) {
        const mappedCategory = availableCategories[categoryId];
        if (typeof mappedCategory !== "undefined") {
            categories.push(mappedCategory);
        }
    }

    return {
        word_meaning_id: wordMeaning.word_meaning_id,
        abbreviation: wordMeaning.abbreviation,
        disambiguation: wordMeaning.disambiguation,
        description: wordMeaning.description,
        created_at: wordMeaning.created_at,
        last_modified_at: wordMeaning.last_modified_at,
        categories,
        score: wordMeaning.score,
        translations: wordMeaning.translations
    };
}


export function flattenWordResultsIntoSingleMeanings(
    searchResult: WordSearchResult,
    availableCategories: Record<string, Category>
): ParsedWordMeaningSearchResult[] {
    const parsedMeanings: ParsedWordMeaningSearchResult[] = [];

    for (const rawMeaning of searchResult.word_meanings) {
        if (searchResult.type === "english") {
            parsedMeanings.push({
                type: "english",
                score: rawMeaning.score,
                word: searchResult.word,
                wordMeaning: prepareEnglishWordMeaning(rawMeaning, availableCategories),
                destinationUrl: `/slovar/en/${searchResult.word.lemma}:${searchResult.word.id}?meaning=${rawMeaning.word_meaning_id}`
            });
        } else if (searchResult.type === "slovene") {
            parsedMeanings.push({
                type: "slovene",
                score: rawMeaning.score,
                word: searchResult.word,
                wordMeaning: prepareSloveneWordMeaning(rawMeaning, availableCategories),
                destinationUrl: `/slovar/sl/${searchResult.word.lemma}:${searchResult.word.id}?meaning=${rawMeaning.word_meaning_id}`
            });
        }
    }

    return parsedMeanings;
}
