<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

    $: word = data.wordInfo.word;
</script>


<div class="km-container km-centering-container">
    <div class="o-central-column km-elevated">
        <div class="c-heading">
            <h3 class="c-heading__lemma">{ word.lemma }</h3>
            <span class="c-heading__disambiguation">({ word.disambiguation })</span>
        </div>
        <p>{ word.description }</p>
    </div>
</div>

<p>{ data.lemma }</p>
<p>{ JSON.stringify(data.wordInfo) }</p>
