<script lang="ts">
    import { page } from "$app/state";
    import { Search } from "$lib/components/organisms/search";
    import type { LayoutProps } from "./$types";

    const { data: layoutData }: LayoutProps = $props();
</script>

<div class="km_homepage">
    <h1 class="km_homepage_heading">Stari Kolomoni</h1>
    <h5 class="km_homepage_subheading">slovenski odprti fantazijski slovar</h5>

    <Search
        class="km_homepage_search"
        availableCategories={layoutData.availableCategories}
    />
</div>
