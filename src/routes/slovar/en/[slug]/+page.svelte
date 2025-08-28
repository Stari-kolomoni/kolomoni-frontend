<script lang="ts">
    import { onMount } from "svelte";
    import type { PageData } from "./$types";
    import { replaceState } from "$app/navigation";
    import { page } from "$app/state";
    import type { Category, EnglishWordMeaningWithDetails, EnglishWordWithMeanings, SloveneTranslation, SloveneWordMeaning } from "$lib/api/schemaTypes";
    import { CommonColors } from "$lib/colour";
    import Logger from "$lib/logger";

    const log = new Logger("slovar-en", CommonColors.TUMBLEWEED);

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();

    type ComputedSloveneWordMeaning = SloveneWordMeaning & {
        abbreviationExists: boolean,
        disambiguationExists: boolean
        descriptionExists: boolean,
    };
    
    type ComputedSloveneTranslation = Omit<SloveneTranslation, "word_meaning"> & {
        destinationPath: string,
        word_meaning: ComputedSloveneWordMeaning
    };

    type ComputedEnglishWordMeaningWithDetails = Omit<EnglishWordMeaningWithDetails, "translations"> & {
        abbreviationExists: boolean,
        disambiguationExists: boolean
        descriptionExists: boolean,
        resolvedCategories: Category[],
        translations: ComputedSloveneTranslation[]
    };

    type EnglishWordWithComputedMeanings = Omit<EnglishWordWithMeanings, "meanings"> & {
        meanings: ComputedEnglishWordMeaningWithDetails[]
    };

    let word = $derived.by<EnglishWordWithComputedMeanings>(() => {
        data.wordInfo.word

        const computedMeanings: ComputedEnglishWordMeaningWithDetails[] = [];

        for (const meaning of data.wordInfo.word.meanings) {
            const resolvedCategories: Category[] = [];

            for (const categoryId of meaning.categories) {
                const matchedCategory = data.availableCategories[categoryId];
                if (typeof matchedCategory === "undefined") {
                    log.error(`Unrecognized category ID: ${categoryId}?!`);
                    continue;
                }

                resolvedCategories.push(matchedCategory);
            }

            const computedTranslations: ComputedSloveneTranslation[] = [];

            for (const translation of meaning.translations) {
                const destinationPath = `/slovar/sl/${translation.word.lemma}:${translation.word.id}`;

                computedTranslations.push({
                    ...translation,
                    destinationPath,
                    word_meaning: {
                        ...translation.word_meaning,
                        abbreviationExists: translation.word_meaning.abbreviation !== null && typeof translation.word_meaning.abbreviation !== "undefined",
                        disambiguationExists: translation.word_meaning.disambiguation !== null && typeof translation.word_meaning.disambiguation !== "undefined",
                        descriptionExists: translation.word_meaning.description !== null && typeof translation.word_meaning.description !== "undefined",
                    }
                });
            }

            computedMeanings.push({
                ...meaning,
                abbreviationExists: meaning.abbreviation !== null && typeof meaning.abbreviation !== "undefined",
                disambiguationExists: meaning.disambiguation !== null && typeof meaning.disambiguation !== "undefined",
                descriptionExists: meaning.description !== null && typeof meaning.description !== "undefined",
                resolvedCategories,
                translations: computedTranslations
            });
        }

        return {
            ...data.wordInfo.word,
            meanings: computedMeanings
        };
    });

    onMount(() => {
        const updatedHealedUrl = new URL(window.location.href);

        const lastSlashIndex = updatedHealedUrl.pathname.lastIndexOf("/")
        const pathWithoutLastSegment = updatedHealedUrl.pathname.slice(0, lastSlashIndex + 1);
        const healedLastSegment = `${data.wordInfo.word.lemma}:${data.wordInfo.word.id}`;

        updatedHealedUrl.pathname = pathWithoutLastSegment + healedLastSegment;

        console.log("Healed URL "  + window.location.href.toString() + " to: " + updatedHealedUrl.toString());

        replaceState(
            updatedHealedUrl,
            page
        );
    });
</script>


<div class="km_dictionary-en">
    <div class="km_dictionary-en_container">
        <div class="km_word km_word--en">
            <div class="km_word__introduction">
                Angleška beseda &bdquo;{word.lemma}&OpenCurlyDoubleQuote; ima sledeče pomene:
            </div>

            {#each word.meanings as meaning, iteration_index (meaning.word_meaning_id)}
            <div class="km_word-meaning">
                <div class="word-meaning__top-line">
                    <div class="lemma">
                        &bdquo;{word.lemma}&OpenCurlyDoubleQuote;
                    </div>
                    {#if meaning.abbreviationExists && meaning.disambiguationExists}
                        <div class="extra-info">({meaning.abbreviation}; {meaning.disambiguation})</div>
                    {:else if meaning.abbreviationExists}
                        <div class="extra-info">({meaning.abbreviation})</div>
                    {:else if meaning.disambiguationExists}
                        <div class="extra-info">({meaning.disambiguation})</div>
                    {/if}
                </div>

                <div class="word-meaning__body">
                    {#if meaning.descriptionExists}
                        <div class="description">
                            {meaning.description}
                        </div>
                    {/if}

                    {#if meaning.resolvedCategories.length > 0}
                        <div class="categories">
                            {#each meaning.resolvedCategories as category (category.id)}
                                <span class="category">{category.english_name}</span>
                            {/each}
                        </div>
                    {/if}
                </div>

                <div class="word-meaning__named-separator">
                    <span class="horizontal-line"></span>
                    <span class="separator-label">ima prevode</span>
                    <span class="horizontal-line"></span>
                </div>

                <div class="word-meaning__translations">
                    {#each meaning.translations as translation (translation.word_meaning.word_meaning_id)}
                        <a
                            class="translation translation--slovene"
                            href={translation.destinationPath}
                        >
                            <span class="translation__lemma">{translation.word.lemma}</span>
                            {#if translation.word_meaning.abbreviationExists && translation.word_meaning.disambiguationExists}
                                <span class="translation__extra-info">
                                    ({translation.word_meaning.abbreviation}; {translation.word_meaning.disambiguation})
                                </span>
                            {:else if translation.word_meaning.abbreviationExists}
                                <span class="translation__extra-info">
                                    ({translation.word_meaning.abbreviation})
                                </span>
                            {:else if translation.word_meaning.disambiguationExists}
                                <span class="translation__extra-info">
                                    ({translation.word_meaning.disambiguation})
                                </span>
                            {/if}
                        </a>
                    {/each}
                </div>
            </div>

            <!-- {#if iteration_index != (word.meanings.length - 1)}
            <div class="km_word-meaning-separator">
                <span class="km_word-meaning-separator__horizontal-line"></span>
            </div>
            {/if} -->
            {/each}
        </div>
    </div>
</div>
<!-- 
<p>{ data.lemma }</p>
<p>{ JSON.stringify(data.wordInfo) }</p> -->
