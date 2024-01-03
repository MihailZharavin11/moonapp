<script>
    import {AppThemeState} from "../../state/AppThemeState";

    export let dir = 'ltr';


</script>

<div class="">
    <select bind:value={$AppThemeState}
            {dir}
            class="select select-bordered select-primary w-full max-w-3xl text-lg"
    >
        <option disabled={true} selected={true}>Choose a theme</option>
        <option value="skeleton">Skeleton</option>
        <option value="modern">Modern</option>
        <option value="rocket">Rocket</option>
        <option value="seafoam">Seafoam</option>
        <option value="vintage">Vintage</option>
        <option value="sahara">Sahara</option>
        <option value="hamlindigo">Hamlindigo</option>
        <option value="gold-nouveau">Gold-nouveau</option>
        <option value="crimson">Crimson</option>
    </select>
</div>
