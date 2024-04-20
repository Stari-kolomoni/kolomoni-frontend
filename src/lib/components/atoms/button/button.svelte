<script lang="ts">
    import { Button as ButtonPrimitive } from "bits-ui";
</script>

<ButtonPrimitive.Root
    class="km_button"
	type="button"
	{...$$restProps}
	on:click
	on:keydown
>
    <slot></slot>
</ButtonPrimitive.Root>
