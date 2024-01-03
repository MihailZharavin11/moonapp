<script lang="ts">
    import "../app.css";
    import {AppShell, Drawer} from "@skeletonlabs/skeleton";
    import Menu from "$lib/components/navigation/Menu.svelte";
    import PageTransition from "$lib/components/common/PageTransition.svelte";
    import Navbar from "$lib/components/navigation/Navbar.svelte";
    import {initializeStores} from '@skeletonlabs/skeleton';
    import {browser} from "$app/environment";
    import {AppThemeState} from "$lib/state/AppThemeState";


    initializeStores();

    export let data;


    $: {
        if (browser) {
            document.body.setAttribute('data-theme', $AppThemeState);
        }
    }


</script>


<Drawer position="left" width="w-52" class="block  !rounded-none">
    <Menu/>
</Drawer>


<AppShell
        regionPage="relative"
        slotSidebarLeft="xs:hidden md:flex flex-row justify-between w-40"
>
    <svelte:fragment slot="header">
        <Navbar fullname='TEST'/>
    </svelte:fragment>
    <svelte:fragment slot="sidebarLeft">
        <Menu/>
    </svelte:fragment>

    <PageTransition pathname={data?.pathname}>
        <slot/>
    </PageTransition>

</AppShell>

