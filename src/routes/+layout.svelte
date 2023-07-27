<script>
	import '../app.postcss';
	import NavBottom from '$lib/components/NavBottom.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=roboto:400,500,700" rel="stylesheet" />
</svelte:head>

<div class="p-4">
	<slot />
</div>
<NavBottom />