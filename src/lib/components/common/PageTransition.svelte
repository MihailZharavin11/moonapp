<script lang="ts">
    import { fly } from 'svelte/transition';
    export let pathname: string = '';
</script>

{#key pathname}
    <div class="h-full w-full" in:fly={{ x: -10, duration: 500, delay: 500 }} out:fly={{ x: 5, duration: 200 }}>
        <slot />
    </div>
{/key}