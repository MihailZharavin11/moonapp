<script lang="ts">
	import type { SelectOptionModel } from '$lib/models/select-option.model';

	export let options: Array<SelectOptionModel>;
	export let title: string | null = null;
	export let dir = 'ltr';
	export let name: string;
	export let value: number | string;
	export let disabled = false;
	export let className = '';
	export let pulse = false;
</script>

<div class="w-full">
	{#if title}
		<div class="title mb-1 font-medium text-base {dir}">
			{title}
		</div>
	{/if}
	<div class="{pulse ? 'pulse-ping-animation' : ''}">
		<select bind:value {name} {disabled} class="select rounded {className}" on:select on:click on:change>
			{#if options}
				{#each options as option, index}
					<option value={option.value}>{option.displayValue}</option>
				{/each}
			{/if}
		</select>
	</div>

</div>
