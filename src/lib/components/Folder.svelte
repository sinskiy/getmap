<script>
    import Maps from "./Maps.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        /**
         * @type {HTMLElement}
         */
        // @ts-ignore
        const folderMaps = document.querySelector(".FOLDER_MAPS");
        /**
         * @type {?HTMLInputElement}
         */
        const checkboxDropdown = document.querySelector("#real_world");

        function dropdownOpen() {
            // @ts-ignore
            if (checkboxDropdown.checked) {
                folderMaps.style.display = "flex";
            }
            else {
                folderMaps.style.display = "none";
            }
        }

        // @ts-ignore
        checkboxDropdown.addEventListener("click", dropdownOpen)
    })
</script>

<label for="real_world" class="sr-only">See folder</label>
<div class="relative max-w-[16.5rem] p-3 bg-surfaceContainerHighest rounded-full flex gap-1 content-center mb-4">
    <input type="checkbox" name="folder" id="real_world" class="absolute top-0 min-w-full min-h-full opacity-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="self-center">
        <path d="M3.3335 6L8.00016 10.6667L12.6668 6H3.3335Z" fill="#CCC6BD"/>
    </svg>
    <h3 class="text-onSurface select-none">Real world</h3>
</div>
<div class="FOLDER_MAPS flex">
    <div class="w-[16px] min-h-full bg-outline ml-5 mr-6 rounded-full"></div>
    <div class="py-2 flex flex-col gap-4">
        <Maps />
    </div>
</div>