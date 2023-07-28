<script>
    /**
     * @type {string}
     */
    export let label;
        /**
     * @type {string}
     */
     export let placeholder;
</script>

<label class="flex flex-col gap-4 bg-inherit relative">
    <div class="absolute -top-3 left-4 bg-inherit">
        <small class="text-onSurface select-none">{label}</small>
    </div>
    <input type="text" placeholder={placeholder} class="bg-inherit rounded-md border-solid border-outline border-2 focus-visible:border-primary py-2 px-4 placeholder:text-onSurface/40 text-onSurface">
</label>