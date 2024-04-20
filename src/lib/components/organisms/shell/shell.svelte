<script lang="ts">

</script>


<div class="km_shell">
    {#if $$slots.header}
        <header class="km_shell-header">
            <slot name="header"></slot>
        </header>
    {/if}

    <div class="km_shell_primary-container">
        {#if $$slots.sidebar}
            <aside class="km_shell_sidebar">
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
