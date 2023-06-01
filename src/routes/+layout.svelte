<script>
	import '$lib/styles/app.scss'
	import Nav from '$lib/components/Nav.svelte'
	import Background from '$lib/components/Background.svelte';
</script>

<div class="container">
	<Background />
	<Nav />
	<slot />
</div>
