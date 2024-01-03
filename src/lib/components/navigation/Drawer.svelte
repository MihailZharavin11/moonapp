<script>
    import Navbar from './Navbar.svelte';
</script>

<div class="drawer drawer-end">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
        <Navbar />
        <div class="flex">
            <div class="flex-shrink-1 flex-grow basis-auto">
                <slot />
            </div>
        </div>
    </div>
</div>
