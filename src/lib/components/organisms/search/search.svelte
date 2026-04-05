<script lang="ts">
import { SearchIcon } from "@indaco/svelte-iconoir/search";
import { Api } from "$lib/api";
import type { Category } from "$lib/api/schemaTypes";
import { Input } from "$lib/components/atoms/input";
import { userAuthenticationContext } from "$lib/contexts";
import Logger, { CommonColors } from "$lib/logger";
import { curryAsyncCallbackWithThrottling, mergeBaseWithOptionalCssClasses } from "$lib/utilities";
import { get, writable, type Writable } from "svelte/store";
import { flattenWordResultsIntoSingleMeanings, type ParsedWordMeaningSearchResult } from "./result";
import SearchResult from "$lib/components/molecules/searchResult/SearchResult.svelte";
import { page } from "$app/state";



interface Props {
    class?: string | null;
    inputClassName?: string | null;
    inputContainerClassName?: string | null;
    availableCategories: Record<string, Category>
}

let { 
    class: className = null,
    inputClassName = null,
    inputContainerClassName = null,
    availableCategories
}: Props = $props();


const baseSearchClassName = "km_search";
const finalSearchClassName = mergeBaseWithOptionalCssClasses(
    baseSearchClassName,
    className
);

const baseInputContainerClassName = "km_search_input_container";
const finalInputContainerClassName = mergeBaseWithOptionalCssClasses(
    baseInputContainerClassName,
    inputContainerClassName
);

const baseInputClassName = "km_search_input";
const finalInputClassName = mergeBaseWithOptionalCssClasses(
    baseInputClassName,
    inputClassName
);

const log = new Logger("search", CommonColors.STRAW);
const loginStateStore = userAuthenticationContext.get();


let searchText: string = $state("");
let searchResultsStore: Writable<null | ParsedWordMeaningSearchResult[]> = writable(null);

async function performUnthrottledSearch() {
    log.info(`User is searching for: ${searchText}`);

    if (searchText === "") {
        searchResultsStore.set(null);
        return;
    }

    const loginState = get(loginStateStore);
    const api = Api.newUsingNativeFetch(loginState);
    
    const searchResults = await api.search(searchText);

    const parsedSearchResults: ParsedWordMeaningSearchResult[] = [];

    log.info("Got search results:");
    for (const searchResult of searchResults.search_results) {
        if (searchResult.type === "slovene") {
            log.info(` - (sl) ${searchResult.word.lemma}`);
        } else if (searchResult.type === "english") {
            log.info(` - (en) ${searchResult.word.lemma}`);
        }

        parsedSearchResults.push(...flattenWordResultsIntoSingleMeanings(searchResult, availableCategories));
    }

    searchResultsStore.set(parsedSearchResults);
}


// TODO This needs to be optimized: the current throttling system mostly does duplicates lookups 80ms apart.
// We should instead set a throttle, but only repeat the HTTP request if the search term changed in those 80ms.
let performThrottledSearch = curryAsyncCallbackWithThrottling(performUnthrottledSearch, 80);
</script>


<div class={finalSearchClassName}>
    <div class={finalInputContainerClassName} class:has-results={$searchResultsStore !== null && $searchResultsStore.length > 0}>
        <SearchIcon class="km_search_input_icon" />

        <Input
            type="text"
            placeholder="Poišči besedo"
            class={finalInputClassName}
            bind:value={searchText}
            on:input={performThrottledSearch}
        />
    </div>

    <div class="km_search_results" class:visible={$searchResultsStore !== null && $searchResultsStore.length > 0}>
        <!-- results will be loaded here -->

        {#if $searchResultsStore !== null}
            {#each $searchResultsStore as searchResult (searchResult.wordMeaning.word_meaning_id)}
                <SearchResult
                    searchResult={searchResult}
                    availableCategories={availableCategories}
                />
            {/each}
        {/if}

    </div>
</div>
