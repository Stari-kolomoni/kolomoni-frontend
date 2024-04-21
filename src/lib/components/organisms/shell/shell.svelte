<script lang="ts">
    import { mergeBaseWithOptionalCssClasses } from "$lib/utilities";

    export let headerClasses: string | null = null;
    export let sidebarClasses: string | null = null;


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
    {#if $$slots.header}
        <header class={finalHeaderClasses}>
            <slot name="header"></slot>
        </header>
    {/if}

    <div class="km_shell_primary-container">
        {#if $$slots.sidebar}
            <aside class={finalSidebarClasses}>
                <slot name="sidebar"></slot>
            </aside>
        {/if}

        <main class="km_shell_main">
            <slot></slot>
        </main>
    </div>

    {#if $$slots.footer}
        <footer class="km_shell_footer">
            <slot name="footer"></slot>
        </footer>
    {/if}
</div>
