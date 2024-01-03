<script>
    import {AppBar, getDrawerStore} from "@skeletonlabs/skeleton";
    import {page} from "$app/stores";
    import { IconMenu2 } from '@tabler/icons-svelte';


    const drawerStore = getDrawerStore();

    const drawerOpen = () => {
        drawerStore.open();
    };


    $:hideBurgerMenu = $page.data.pathname === '/signin' || $page.data.pathname === '/login'

</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
    <svelte:fragment slot="lead">
        <div class="flex items-baseline gap-3">
            <div on:click={drawerOpen} class="{hideBurgerMenu? 'hidden':''} sm:block md:hidden h-8 w-8">
                <label class="btn-circle cursor-pointer align-center items-center" for="drawer">
                    <IconMenu2 size="30"/>
                </label>
            </div>
            <div class="xs:hidden lg:flex items-center" dir="auto">
                <span>👋 USERNAME</span>
            </div>
        </div>

    </svelte:fragment>
    <div>
        TITLE
    </div>
    <svelte:fragment slot="trail">
        <div dir="ltr" class="flex items-center gap-3">
            <div class="xs:hidden lg:flex flex-col gap-y-1">
                TEST
            </div>
        </div>
    </svelte:fragment>
</AppBar>