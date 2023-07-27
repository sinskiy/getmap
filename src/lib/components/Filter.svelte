<script>
    /**
     * @type string[]
     */
    export let tags;
</script>
<div class="FILTER horizontal-scrollbar flex flex-nowrap gap-2 overflow-x-scroll desktop:overflow-x-hidden">
    {#each tags as tag}
         <button class="bg-surfaceContainerHigh text-onSurface/30 rounded-full flex flex-nowrap whitespace-nowrap min-w-fit py-2 px-6 text-sm font-medium capitalize">{tag}</button>
    {/each}
</div>