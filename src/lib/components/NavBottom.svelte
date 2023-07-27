<script>
    import NavLink from "./NavLink.svelte";
</script>
<nav class="fixed h-[80px] min-w-full flex gap-2 bg-surfaceContainer bottom-0 px-2">
    <NavLink />
    <NavLink link="saved"/>
    <NavLink link="profile"/>
</nav>