<script>
    import { onMount } from 'svelte';
    import Filter from "$lib/components/Filter.svelte";
    /**
     * @type string[]
     */
    const universe = ["all", "modern", "world war 2", "world war 1"];
    /**
     * @type string[]
     */
    const places = ["all", "world", "asia", "south america", "mars", "north america"];

    onMount(() => {
        /**
         * @type HTMLElement
         */
        // @ts-ignore
        const filters = document.querySelector(".FILTERS");
        const everyFilter = document.querySelectorAll(".FILTER");
        let isDragging = false;

        /**
		 * @param {event} event
		 */
        function dragging(event) {
            if (!isDragging) return;
            // @ts-ignore
            this.scrollLeft -= event.movementX;
        }

        everyFilter.forEach((filter) => {
            filter.addEventListener("mousedown", () => isDragging = true);
        });
        document.addEventListener("mouseup", () => isDragging = false);
        everyFilter.forEach(filter => {
            filter.addEventListener("mousemove", dragging);
        });
    });
</script>

<div class="FILTERS my-5 flex flex-col gap-2 max-w-full absolute z-10 select-none overflow-x-hidden">
    <Filter tags={universe}/>
    <Filter tags={places}/>
</div>