<script lang="ts">
    import { mergeBaseWithOptionalCssClasses } from "$lib/utilities";

    interface Props {
        headerClasses?: string | null;
        sidebarClasses?: string | null;
        header?: import('svelte').Snippet;
        sidebar?: import('svelte').Snippet;
        children?: import('svelte').Snippet;
        footer?: import('svelte').Snippet;
    }

    let {
        headerClasses = null,
        sidebarClasses = null,
        header,
        sidebar,
        children,
        footer
    }: Props = $props();


    const baseHeaderClasses: string = "km_shell_header";
    const baseSidebarClasses: string = "km_shell_sidebar";


    const finalHeaderClasses = mergeBaseWithOptionalCssClasses(
        baseHeaderClasses,
        headerClasses
    );

    const finalSidebarClasses = mergeBaseWithOptionalCssClasses(
        baseSidebarClasses,
        sidebarClasses
    );
</script>


<div class="km_shell">
    {#if header}
        <header class={finalHeaderClasses}>
            {@render header?.()}
        </header>
    {/if}

    <div class="km_shell_primary-container">
        {#if sidebar}
            <aside class={finalSidebarClasses}>
                {@render sidebar?.()}
            </aside>
        {/if}

        <main class="km_shell_main">
            {@render children?.()}
        </main>
    </div>

    {#if footer}
        <footer class="km_shell_footer">
            {@render footer?.()}
        </footer>
    {/if}
</div>
