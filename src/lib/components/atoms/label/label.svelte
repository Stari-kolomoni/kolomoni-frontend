<script lang="ts">
    import { Label as LabelPrimitive } from "bits-ui";
    interface Props {
        children?: import('svelte').Snippet;
        [key: string]: any
    }

    let { children, ...rest }: Props = $props();
</script>

<LabelPrimitive.Root class="km_label" on:mousedown {...rest}>
    {@render children?.()}
</LabelPrimitive.Root>
