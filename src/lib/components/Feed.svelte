<script>
    import MapBig from "./MapBig.svelte";
    import FeedColumn from "./FeedColumn.svelte";
</script>
<MapBig />
<div class="flex gap-4">
    <FeedColumn ad={true}/>
    <FeedColumn />
</div>