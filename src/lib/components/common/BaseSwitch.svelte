<script lang="ts">
    import {SlideToggle} from '@skeletonlabs/skeleton';
    import {IconMinusVertical, IconCircle} from '@tabler/icons-svelte';
    import {modeCurrent} from '@skeletonlabs/skeleton';

    export let title: string | null = null;


    export let dir = 'ltr';
    export let name: string;
    export let checked: boolean;
    export let disabled: boolean = false;
</script>

<div dir="ltr">
    <label class="flex flex-col label cursor-pointer items-center">
        {#if title}
            <span class="title mb-1 font-medium text-base">{title}</span>
        {/if}
        <slot/>
        <div class="toggle self-end relative">
            <div class="absolute top-2 left-2.5 !z-20 {checked ? '' : 'hidden'} {$modeCurrent ^ checked ? '' : 'invert'}">
                <IconMinusVertical size="17" class="text-black dark:text-white"/>
            </div>
            <div class=" absolute top-2 right-3 !z-20 {checked ? 'hidden' : ''} {$modeCurrent ^ checked ? '' : 'invert'}">
                <IconCircle size="17" class="text-white dark:text-black"/>
            </div>
            <SlideToggle bind:checked bind:name bind:disabled on:change/>
        </div>
    </label>
</div>