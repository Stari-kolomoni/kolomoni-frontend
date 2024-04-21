<script lang="ts">
    import { Button as ButtonPrimitive } from "bits-ui";

    export let type: "submit" | "reset" | "button" = "button";
</script>

<ButtonPrimitive.Root
    class="km_button"
	type={type}
	{...$$restProps}
	on:click
	on:keydown
>
    <slot></slot>
</ButtonPrimitive.Root>
