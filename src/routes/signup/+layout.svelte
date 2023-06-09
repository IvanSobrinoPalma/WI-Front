<script>
  import Background from '$lib/components/Background.svelte'
	import Nav from '$lib/components/Nav.svelte'
</script>

<Nav showNavbarElements={false} />
<Background background="tundra" />
<slot />