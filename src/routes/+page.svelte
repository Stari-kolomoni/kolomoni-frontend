<script lang="ts">
    import { Api } from "$lib/api";
    import TextInput from "$lib/components/atoms/TextInput/TextInput.svelte";
    import { userAuthenticationContext } from "$lib/contexts";
    import Logger, { CommonColors } from "$lib/logger";
    import { curryAsyncCallbackWithThrottling } from "$lib/utilities";
    import { get } from "svelte/store";

    const log = new Logger("login", CommonColors.CAMEL);
    const loginStateStore = userAuthenticationContext.get();


    let searchBarText: string = "";


    async function performUnthrottledSearch(
        event: { currentTarget: EventTarget & HTMLInputElement }
    ) {
        log.info(`User is searching for: ${searchBarText}`);

        const loginState = get(loginStateStore);
        const api = Api.newUsingNativeFetch(loginState);
        
        const searchResults = await api.search(searchBarText);

        log.info("Got search results:");
        for (const englishResult of searchResults.search_results.english_results) {
            log.info(` - ${englishResult.lemma}`)
        }
        for (const sloveneResult of searchResults.search_results.slovene_results) {
            log.info(` - ${sloveneResult.lemma}`)
        }
    }

    let performThrottledSearch = curryAsyncCallbackWithThrottling(performUnthrottledSearch, 50);
</script>


<h1>Stari Kolomoni</h1>
<p>odprti slovenski fantazijski slovar</p>

<div>
    <TextInput
        bind:value={searchBarText}
        on:input={performThrottledSearch}
        inputId="search-input"
    ></TextInput>
</div>
