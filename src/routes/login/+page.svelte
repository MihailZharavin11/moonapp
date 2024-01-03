<script lang="ts">
    import BaseButton from '../../lib/components/common/BaseButton.svelte'
    import {superForm} from 'sveltekit-superforms/client';
    import {focusTrap} from '@skeletonlabs/skeleton';
    import {page} from "$app/stores";
    import type {PageData} from './$types';

    export let data: PageData;

    const {form, errors, enhance} = superForm(data.form);
    let email = '';
    let password = '';
</script>

<div class="w-full max-h-full flex items-center justify-center h-[80vh]" dir="ltr">
    <form
            method="POST"
            class="lg:w-1/4 sm:w-1/2 flex flex-col gap-2"
            action="#"
            use:enhance
            use:focusTrap={true}
    >
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Email</label
            >
            <input
                    type="text"
                    name="email"
                    id="email"
                    bind:value={$form.email}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="abc@gmail.com"
            />
            {#if $errors.email}
                <div class="text-error-500-400-token">{$errors.email}</div>
            {/if}
        </div>
        <div class="mt-3">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
            >
            <input
                    type="password"
                    name="password"
                    id="password"
                    bind:value={$form.password}
                    placeholder="Password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
        </div>

        {#if $errors.password}
            <div class="text-error-500-400-token">{$errors.password}</div>
        {/if}

        {#if $page.form?.error}
            <div class="text-error-500-400-token">{$page.form?.error}</div>
        {/if}

        <BaseButton disabled={!$form.email || !$form.password } type="submit" className="mt-6">Login to your account
        </BaseButton>
    </form>
</div>
