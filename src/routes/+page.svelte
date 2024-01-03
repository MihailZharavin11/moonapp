<script lang="ts">
    import {RangeSlider, Ratings} from "@skeletonlabs/skeleton";
    import axios from "axios";

    let value = 15;

    const handleClick = async () => {
        const data = await axios.post('/api/users', {name: 'TEST', email: 'abc@gmail.com', password: '123'});

        debugger;
    }
</script>


<!--<div class="flex">-->
<!--    <button on:click={handleClick} class="px-3 px-2 bg-primary-500 cursor-pointer">-->
<!--        Button-->
<!--    </button>-->
<!--</div>-->


<RangeSlider name="range-slider" bind:value={value} max={25} step={1} ticked>Range</RangeSlider>