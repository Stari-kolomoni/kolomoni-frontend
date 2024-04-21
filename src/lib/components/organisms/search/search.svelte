<script lang="ts">
    import { goto } from "$app/navigation";
    import { Api } from "$lib/api";
    import type { EnglishWord, SloveneWord } from "$lib/api/schemaTypes";
    import { Input } from "$lib/components/atoms/input";
    import { userAuthenticationContext } from "$lib/contexts";
    import Logger, { CommonColors } from "$lib/logger";
    import { curryAsyncCallbackWithThrottling, mergeBaseWithOptionalCssClasses } from "$lib/utilities";
    import { get, writable, type Writable } from "svelte/store";

    let className: string | null = null;
    export { className as class };

    export let inputClassName: string | null = null;


    const baseSearchClassName = "km_search";
    const finalSearchClassName = mergeBaseWithOptionalCssClasses(
        baseSearchClassName,
        className
    );

    const baseInputClassName = "km_search_input";
    const finalInputClassName = mergeBaseWithOptionalCssClasses(
        baseInputClassName,
        inputClassName
    );

    const log = new Logger("search", CommonColors.STRAW);
    const loginStateStore = userAuthenticationContext.get();


    let searchText: string = "";
    let searchResultsStore: Writable<null | {
        english: EnglishWord[],
        slovene: SloveneWord[],
    }> = writable(null);

    async function performUnthrottledSearch() {
        log.info(`User is searching for: ${searchText}`);

        if (searchText === "") {
            searchResultsStore.set(null);
            return;
        }

        const loginState = get(loginStateStore);
        const api = Api.newUsingNativeFetch(loginState);
        
        const searchResults = await api.search(searchText);

        log.info("Got search results:");
        for (const englishResult of searchResults.search_results.english_results) {
            log.info(` - (en) ${englishResult.lemma}`)
        }
        for (const sloveneResult of searchResults.search_results.slovene_results) {
            log.info(` - (sl) ${sloveneResult.lemma}`)
        }

        searchResultsStore.set({
            english: searchResults.search_results.english_results,
            slovene: searchResults.search_results.slovene_results,
        });
    }

    async function goToEnglishWord(englishWordLemma: string): Promise<void> {
        await goto("/slovar/en/" + englishWordLemma);
    }

    async function goToSloveneWord(sloveneWordLemma: string): Promise<void> {
        await goto("/slovar/sl/" + sloveneWordLemma);
    }

    let performThrottledSearch = curryAsyncCallbackWithThrottling(performUnthrottledSearch, 50);
</script>


<div class={finalSearchClassName}>
    <Input
        type="text"
        placeholder="Poišči besedo"
        class={finalInputClassName}
        bind:value={searchText}
        on:input={performThrottledSearch}
    />

    <div class="km_search_results">
        <!-- results will be loaded here -->

        {#if $searchResultsStore !== null}
            {#each $searchResultsStore.english as englishWord}
                <button 
                    class="km_search-result km_search_english-result"
                    on:click={() => goToEnglishWord(englishWord.lemma)}
                    tabindex="0"
                >
                    <span class="km_search-result_lemma">
                        {englishWord.lemma}
                    </span>
                </button>
            {/each}

            {#each $searchResultsStore.slovene as sloveneWord}
                <button
                    class="km_search-result km_search_slovene-result"
                    on:click={() => goToSloveneWord(sloveneWord.lemma)}
                    tabindex="0"
                >
                    <span class="km_search-result_lemma">
                        {sloveneWord.lemma}
                    </span>
                </button>
            {/each}
        {/if}

    </div>
</div>
