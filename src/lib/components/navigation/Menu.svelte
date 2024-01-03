<script lang="ts">
    import {getDrawerStore, ListBox, ListBoxItem} from '@skeletonlabs/skeleton';
    import ThemeSwitcher from '../common/ThemeSwitcher.svelte';
    import {IconHome, IconLogout2} from '@tabler/icons-svelte';
    import {page} from '$app/stores';
    import BaseButton from '../common/BaseButton.svelte'

    const drawerStore = getDrawerStore();
    const role = $page.data?.user?.role;
    const menuItems = [
        {value: 'students', url: '/students', prefetch: true},
        {value: 'users', url: '/users', prefetch: true},
    ];


    $: classesActive = (href: string) =>
        href === $page.url.pathname ? '!bg-primary-300 dark:!bg-transparent dark:border-2 dark:border-primary-500  font-bold' : '';
</script>


<div id="aside-bar" class="p-2 h-full bg-surface-200-700-token shadow-lg !rounded-none w-full">
    <ListBox class="h-full">
        <div class="flex flex-col h-full">
            {#if $page?.data?.user?.firstname?.length > 1}
                <div class="mt-5 mb-5 break-words w-full  md:flex flex-wrap lg:hidden px-3" dir="auto">
                    <pre class="mx-2">👋</pre>
                    <pre>{$page?.data?.user?.firstname} {$page?.data?.user?.lastname}</pre>
                </div>
                <div class="lg:hidden md:flex">
                    <hr/>
                </div>
            {/if}
            <div class="flex-1 flex flex-col gap-1 mt-5">
                <a href={'/'} on:click={() => drawerStore.close()}>
                    <ListBoxItem
                            name="home"
                            group="home"
                            value="home"
                            class="bg-transparent font-semibold dark:!bg-transparent border-2 border-transparent  !text-primary hover:bg-primary-300 dark:hover:border-2 dark:hover:border-primary-500 {classesActive(
							'/'
						)}"
                            rounded="rounded"
                            selected={$page.url.pathname === '/'}
                    >
                        <IconHome size={22} style="display: initial"/>
                    </ListBoxItem>
                </a>
                {#each menuItems as menuItem}
                    <a
                            href={menuItem.url}
                            target={menuItem.blank?'_blank':''}
                            sveltekit:prefetch={menuItem.prefetch}
                            on:click={() => drawerStore.close()}

                    >
                        <ListBoxItem
                                name={menuItem.value}
                                group={menuItem.value}
                                value={menuItem.translationKey}
                                href={menuItem.url}
                                class="!p-2 bg-transparent  dark:!bg-transparent font-semibold !text-primary hover:bg-primary-300 border-2 border-transparent dark:hover:border-2 dark:hover:border-primary-500 {classesActive(
								menuItem.url
							)}"
                                rounded="rounded"
                        >
                            <span class="text-base">{menuItem.value}</span>
                        </ListBoxItem>
                    </a>
                {/each}
            </div>

            <div class="flex flex-col pl-2 gap-y-1">
                <ThemeSwitcher/>
                <hr class="my-3"/>
                <div class="">
                    <form class="self-end" method="post" action="/api/logOut">
                        <BaseButton type="submit" className=" rounded p-0 h-7 w-full bg-none">
							<span>
								<IconLogout2 size={20}/>
							</span>
                        </BaseButton>
                    </form>
                </div>
            </div>
        </div>
    </ListBox>
</div>
