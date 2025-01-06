<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
    import { mergeBaseWithOptionalCssClasses } from "$lib/utilities";

    
	interface Props {
		value: string;
		class?: string | null;
		[key: string]: any
	}

	let { value = $bindable(), class: className = null, ...rest }: Props = $props();
    

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
	{...rest}
	onblur={bubble('blur')}
	onchange={bubble('change')}
	onclick={bubble('click')}
	onfocus={bubble('focus')}
	onfocusin={bubble('focusin')}
	onfocusout={bubble('focusout')}
	onkeydown={bubble('keydown')}
	onkeypress={bubble('keypress')}
	onkeyup={bubble('keyup')}
	onmouseover={bubble('mouseover')}
	onmouseenter={bubble('mouseenter')}
	onmouseleave={bubble('mouseleave')}
	onpaste={bubble('paste')}
	oninput={bubble('input')}
	onwheel={bubble('wheel')}
>
