import type {LayoutServerLoad} from '../../.svelte-kit/types/src/routes/$types';

export const load: LayoutServerLoad = async ({url: {pathname}}) => {
    return {pathname};
};
