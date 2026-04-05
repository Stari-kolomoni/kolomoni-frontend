<script lang="ts">
import { page } from "$app/state";
import type { Category, EnglishWordMeaningWithDetails, ScoredEnglishWordMeaningWithDetails, ScoredSloveneWordMeaningWithDetails } from "$lib/api/schemaTypes";
import CategoryTag from "$lib/components/atoms/categoryTag/CategoryTag.svelte";
import type { ParsedWordMeaningSearchResult } from "$lib/components/organisms/search/result";
import Logger, { CommonColors } from "$lib/logger";

import { FastArrowDownIcon } from "@indaco/svelte-iconoir/fast-arrow-down";

const log = new Logger("search", CommonColors.PINE_TREE);

interface Props {
    searchResult: ParsedWordMeaningSearchResult,
}

let { searchResult }: Props = $props();

// type ComputedWordMeaningCategories = {
//     categories: Category[]
// };
//
// type ComputedSearchResult = Omit<ParsedSearchResult, "word_meaning"> & {
//     word_meaning: Omit<EnglishWordMeaningWithDetails, "categories"> & ComputedWordMeaningCategories
// };
// 
// function getCategoryDetailsById(categoryId: string): Category | null {
//     return availableCategories[categoryId] || null;
// }
// 
// const result: ComputedSearchResult = $derived.by(() => {
//     const computedCategories = [];
//     for (const categoryId of searchResult.word_meaning.categories) {
//         const mappedCategory = getCategoryDetailsById(categoryId);
//         if (mappedCategory === null) {
//             log.warn(`Category ID was not recognized: ${categoryId}.`);
//         } else {
//             computedCategories.push(mappedCategory);
//         }
//     }
// 
//     return {
//         ...searchResult,
//         word_meaning: {
//             ...searchResult.word_meaning,
//             categories: computedCategories
//         }
//     };
// });
</script>

{#if searchResult.type === "english"}
<a href={searchResult.destinationUrl} class="km_search-result km_search-result_english">
    <!-- TODO -->
    <div class="search-result__row">
        <span>
            <span class="search-result__lemma search-result__source-lemma">
                {searchResult.word.lemma}
            </span>
            
            {#if searchResult.wordMeaning.abbreviation !== null}
            <span class="search-result__abbreviation">
                {searchResult.wordMeaning.abbreviation}
            </span>
            {/if}
            
            {#if searchResult.wordMeaning.disambiguation !== null}
            <span class="search-result__disambiguation">
                ({searchResult.wordMeaning.disambiguation})
            </span>
            {/if}

            <span class="search-result__categories">
                {#each searchResult.wordMeaning.categories as category (category.id)}
                    <CategoryTag label={category.english_name} />
                {/each}
            </span>
        </span>

        {#if searchResult.wordMeaning.description !== null}
        <span>
            <span class="search-result__description">
                {searchResult.wordMeaning.description}
            </span>
        </span>
        {/if}
    </div>

    <FastArrowDownIcon class="search-result__arrow-separator" />

    {#if searchResult.wordMeaning.translations.length > 0}
    <div class="search-result__row">
        {#each searchResult.wordMeaning.translations as translation (translation.word_meaning.word_meaning_id)}
            <span>
                <span>{translation.word.lemma}</span>
            
                {#if translation.word_meaning.abbreviation !== null}
                <span class="search-result__abbreviation">
                    {translation.word_meaning.abbreviation}
                </span>
                {/if}

                {#if translation.word_meaning.disambiguation !== null}
                <span class="search-result__disambiguation">
                    ({translation.word_meaning.disambiguation})
                </span>
                {/if}
            </span>
            {#if translation.word_meaning.description !== null}
            <span>{translation.word_meaning.description}</span>
            {/if}
        {/each}
    </div>
    {/if}
</a>
{:else if searchResult.type === "slovene"}
<a href={searchResult.destinationUrl} class="km_search-result km_search-result_slovene">
    <!-- TODO -->
    <span class="search-result__entry-row">
        <span class="search-result__lemma">
            {searchResult.word.lemma}
        </span>
        
        {#if searchResult.wordMeaning.abbreviation !== null}
        <span class="search-result__abbreviation">
            {searchResult.wordMeaning.abbreviation}
        </span>
        {/if}
        
        {#if searchResult.wordMeaning.disambiguation !== null}
        <span class="search-result__disambiguation">
            ({searchResult.wordMeaning.disambiguation})
        </span>
        {/if}
    </span>

    {#if searchResult.wordMeaning.description !== null}
    <span class="search-result__entry-row">
        <span class="search-result__description">
            {searchResult.wordMeaning.description}
        </span>
    </span>
    {/if}
</a>
{/if}

