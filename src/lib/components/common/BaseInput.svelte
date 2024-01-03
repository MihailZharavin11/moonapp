<script lang="ts">
    import {t} from '$lib/i18n/config';
    import {cn} from '$lib/common/utils';

    export let title: string | null = null;
    export let placeHolder: string = $t('common.baseInput.defaultPlaceholder');
    export let dir = 'rtl';
    export let value: string | number | null = '';
    export let name: string;
    export let required = false;
    export let disabled = false;
    export let className = '';
    export let inputClasses = '';
    export let pulse = false;
    export let disablePaste = false;

</script>

<div class="w-full {className}">
    {#if title}
        <div class="block input__title font-medium text-base mb-1">
            {title}
        </div>
    {/if}
    <div class="{pulse ? 'pulse-ping-animation bg-sky-400' : ''}">
        <input
                {required}
                {name}
                {dir}
                {disabled}
                bind:value
                placeholder={placeHolder}
                class={cn('w-full input rounded p-2 overflow-visibles indent-2 tracking-wide', inputClasses)}
                on:input
                onpaste="return {!disablePaste};"
        />
    </div>
</div>


<style lang="scss">
  .input-ltr {
    input:-moz-placeholder {
      text-align: right;
    }

    input:-ms-input-placeholder {
      text-align: right;
    }

    input::-webkit-input-placeholder {
      text-align: right;
    }


  }
</style>
