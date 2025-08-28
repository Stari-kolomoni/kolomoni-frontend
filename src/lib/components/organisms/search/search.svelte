<script lang="ts">
    import { SearchIcon } from "@indaco/svelte-iconoir/search";
    import { Api } from "$lib/api";
    import type { SearchedWordMeaning } from "$lib/api/schemaTypes";
    import { Input } from "$lib/components/atoms/input";
    import { userAuthenticationContext } from "$lib/contexts";
    import Logger, { CommonColors } from "$lib/logger";
    import { curryAsyncCallbackWithThrottling, mergeBaseWithOptionalCssClasses } from "$lib/utilities";
    import { get, writable, type Writable } from "svelte/store";

    

    interface Props {
        class?: string | null;
        inputClassName?: string | null;
        inputContainerClassName?: string | null;
    }

    let { 
        class: className = null,
        inputClassName = null,
        inputContainerClassName = null
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


    type DestinationUrl = {
        destination_url: string
    };

    type ParsedSearchResult = SearchedWordMeaning & DestinationUrl;

    let searchText: string = $state("");
    let searchResultsStore: Writable<null | ParsedSearchResult[]> = writable(null);

    async function performUnthrottledSearch() {
        log.info(`User is searching for: ${searchText}`);

        if (searchText === "") {
            searchResultsStore.set(null);
            return;
        }

        const loginState = get(loginStateStore);
        const api = Api.newUsingNativeFetch(loginState);
        
        const searchResults = await api.search(searchText);

        const parsedSearchResults: ParsedSearchResult[] = [];

        log.info("Got search results:");
        for (const searchResult of searchResults.word_meanings) {
            if (searchResult.type === "slovene") {
                log.info(` - (sl) ${searchResult.word.lemma}`);
                parsedSearchResults.push({
                    ...searchResult,
                    destination_url: `/slovar/sl/${searchResult.word.lemma}:${searchResult.word.id}`
                })
            } else if (searchResult.type === "english") {
                log.info(` - (en) ${searchResult.word.lemma}`);
                parsedSearchResults.push({
                    ...searchResult,
                    destination_url: `/slovar/en/${searchResult.word.lemma}:${searchResult.word.id}`
                })
            }
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
            {#each $searchResultsStore as searchResult}
                {#if searchResult.type === "english"}
                <a 
                    class="km_search-result km_search_english-result"
                    href={searchResult.destination_url}
                >
                    <span class="search-result__entry-row">
                        <span class="search-result__lemma">
                            {searchResult.word.lemma}
                        </span>
                        
                        {#if searchResult.word_meaning.abbreviation !== null}
                        <span class="search-result__abbreviation">
                            {searchResult.word_meaning.abbreviation}
                        </span>
                        {/if}
                        
                        {#if searchResult.word_meaning.disambiguation !== null}
                        <span class="search-result__disambiguation">
                            ({searchResult.word_meaning.disambiguation})
                        </span>
                        {/if}
                    </span>

                    {#if searchResult.word_meaning.description !== null}
                    <span class="search-result__entry-row">
                        <span class="search-result__description">
                            {searchResult.word_meaning.description}
                        </span>
                    </span>
                    {/if}
                </a>
                {:else if searchResult.type === "slovene"}
                <a 
                    class="km_search-result km_search_slovene-result"
                    href={searchResult.destination_url}
                >
                    <span class="search-result__entry-row">
                        <span class="search-result__lemma">
                            {searchResult.word.lemma}
                        </span>
                        
                        {#if searchResult.word_meaning.abbreviation !== null}
                        <span class="search-result__abbreviation">
                            {searchResult.word_meaning.abbreviation}
                        </span>
                        {/if}
                        
                        {#if searchResult.word_meaning.disambiguation !== null}
                        <span class="search-result__disambiguation">
                            ({searchResult.word_meaning.disambiguation})
                        </span>
                        {/if}
                    </span>

                    {#if searchResult.word_meaning.description !== null}
                    <span class="search-result__entry-row">
                        <span class="search-result__description">
                            {searchResult.word_meaning.description}
                        </span>
                    </span>
                    {/if}
                </a>
                {/if}
            {/each}
        {/if}

    </div>
</div>
