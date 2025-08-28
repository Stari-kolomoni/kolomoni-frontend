<script lang="ts">
    import { page } from '$app/state';
    import type { Snippet } from "svelte";

    interface Props {
        label: string,
        path: string,
        // The parameter tells the snippet whether the icon is active.
        icon: Snippet<[boolean]>
    }

	let { label, path, icon }: Props = $props();

    const isSidebarItemActive = $derived.by(() => {
        const currentLeafPageName = page.url.pathname.split("/")[1];
        const targetLeafPageName = path.split("/")[1];

        return currentLeafPageName === targetLeafPageName;
    });

    const IconComponent = $derived(icon);
</script>


<a
    class="km_sidebar_item"
    class:active={isSidebarItemActive}
    href={path}
>
    {@render icon(isSidebarItemActive)}
    <span class="km_sidebar_item__label">{label}</span>
</a>
