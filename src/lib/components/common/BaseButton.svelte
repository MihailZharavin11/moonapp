<script lang="ts">
	export let disabled: boolean | null = null;
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let name: string = '';
	export let background = '';
	export let className = '';
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let variant = 'filled';
</script>

<button
	{type}
	{disabled}
	{name}
	class="btn btn-{size} variant-{variant} gap-2 {className}"
	on:click
	on:focus
	style="background:{background && background}"
	on:mouseover
	on:mouseenter
	on:mouseleave
>
	<slot />
</button>
