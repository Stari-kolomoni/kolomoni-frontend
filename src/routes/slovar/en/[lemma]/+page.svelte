<script lang="ts">
    import type { PageData } from "./$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();

    let word = $derived(data.wordInfo.word);
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
