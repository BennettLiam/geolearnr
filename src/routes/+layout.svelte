<script>
	import Nav from '$lib/Nav.svelte';
</script>

<div>
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
		margin: 0 auto;
		background-color: rgb(241, 233, 218);
		padding: 0 1rem;
		height: 100vh;
	}
</style>
