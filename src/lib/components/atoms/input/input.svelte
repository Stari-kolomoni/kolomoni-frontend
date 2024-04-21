<script lang="ts">
    import { mergeBaseWithOptionalCssClasses } from "$lib/utilities";

    export let value: string;
    
    let className: string | null = null;
    export { className as class };

    const baseInputClassName = "km_input";
    const finalInputClassName = mergeBaseWithOptionalCssClasses(
        baseInputClassName,
        className
    );
</script>

<input
    class={finalInputClassName}
    type="text"
    bind:value={value}
	{...$$restProps}
	on:blur
	on:change
	on:click
	on:focus
	on:focusin
	on:focusout
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	on:input
	on:wheel
>
