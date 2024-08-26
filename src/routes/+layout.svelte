<script>
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
</script>

<Nav />
<div class="my-0 mx-auto h-full">
	<div class="p-4">
		<slot></slot>
	</div>
</div>

<style>
	:global(body) {
		font-family: sans-serif;
		margin: 0;
	}
	div {
		max-width: min(1000px, 100vw);
	}
</style>
