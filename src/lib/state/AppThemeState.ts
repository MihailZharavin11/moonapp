import {localStorageStore} from "@skeletonlabs/skeleton";

export const AppThemeState = localStorageStore('theme', 'skeleton', {storage: 'local'});
