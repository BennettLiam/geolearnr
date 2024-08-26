<script>
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
</script>

<div class="my-0 mx-auto py-0 px-4 h-full">
	<Nav />
	<slot></slot>
</div>

<style>
	:global(body) {
		background-color: rgb(241, 241, 241);
		font-family: sans-serif;
		margin: 0;
	}
	div {
		max-width: min(1000px, 100vw);
		background-color: rgb(241, 233, 218);
	}
</style>
