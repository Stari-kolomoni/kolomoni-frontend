<script lang="ts">
    import { onMount } from "svelte";
    import type { PageData } from "./$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();

    let word = $derived(data.wordInfo.word);

    onMount(() => {
        const updatedHealedUrl = new URL(window.location.href);

        const lastSlashIndex = updatedHealedUrl.pathname.lastIndexOf("/")
        const pathWithoutLastSegment = updatedHealedUrl.pathname.slice(0, lastSlashIndex + 1);
        const healedLastSegment = `${data.wordInfo.word.lemma}:${data.wordInfo.word.id}`;

        updatedHealedUrl.pathname = pathWithoutLastSegment + healedLastSegment;

        console.log("Healed URL "  + window.location.href.toString() + " to: " + updatedHealedUrl.toString());

        history.replaceState(
            history.state,
            '',
            updatedHealedUrl,
        );
    });
</script>


<!--<div class="km-container km-centering-container">
    <div class="o-central-column km-elevated">
        <div class="c-heading">
            <h3 class="c-heading__lemma">{ word.lemma }</h3>
            <span class="c-heading__disambiguation">({ word.disambiguation })</span>
        </div>
        <p>{ word.description }</p>
    </div>
</div>-->


<div class="km_dictionary-en">
    <div class="km_dictionary-en_container">
        <div class="km_word-en">
            <div class="km_word-en_lemma">
                {word.lemma}
            </div>
        
            <div class="km_word-en_description">
                {word.description}
            </div>
        </div>
    </div>
</div>
<!-- 
<p>{ data.lemma }</p>
<p>{ JSON.stringify(data.wordInfo) }</p> -->
