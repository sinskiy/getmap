<script>
    /**
     * @type string
     */
    export let link = "";
</script>
<a href={`/${link}`} class="flex flex-col flex-grow justify-center gap-1">
    <div class="mx-5 flex justify-center">
        <img src={`${link === "" ? "home" : link}.svg`} alt={link === "" ? "home" : link}>
    </div>
    <p class="self-center text-onSurface capitalize">{link === "" ? "home" : link}</p>
</a>