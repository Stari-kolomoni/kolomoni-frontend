<script lang="ts">
    import { Button as ButtonPrimitive } from "bits-ui";

	interface Props {
		type?: "submit" | "reset" | "button";
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { type = "button", children, ...rest }: Props = $props();
</script>

<ButtonPrimitive.Root
    class="km_button"
	type={type}
	{...rest}
	on:click
	on:keydown
>
    {@render children?.()}
</ButtonPrimitive.Root>
