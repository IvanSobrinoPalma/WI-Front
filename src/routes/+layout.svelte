<script>
	import '$lib/styles/app.scss'
	import Nav from '$lib/components/Nav.svelte'
	import Background from '$lib/components/Background.svelte'
</script>

<style>
	.container-scroll {
		position: relative;
		scroll-snap-type: y proximity;
		overflow-y: auto;
		height: 100vh;
		width: 100%;
	}
</style>

<div class="container-scroll">
	<div class="container">
		<Background />
		<Nav />
		<slot />
	</div>
</div>
