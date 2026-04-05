<script lang="ts">
    interface Props {
        label: string
    }

    const {
        label
    }: Props = $props();
</script>

<span class="km_category-tag">
    {label}
</span>
