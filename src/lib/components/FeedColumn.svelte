<script>
    /**
     * @type boolean
     */
    export let ad = false;
    import Ad from "./Ad.svelte";
    import Maps from "./Maps.svelte";
</script>
<div class="flex flex-col gap-4 box-content">
    {#if ad}
        <Ad />
    {/if}
    <Maps />
</div>