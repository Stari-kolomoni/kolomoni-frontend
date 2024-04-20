<script lang="ts">
    export let inputId: string;
    export let value: string;
</script>

<input
    class="km_text-input"
    type="text"
    id={inputId}
    bind:value={value}
    on:input
    on:focus
    on:blur
>
