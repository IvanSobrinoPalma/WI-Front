<script>
  import Background from '$lib/components/Background.svelte'
	import Nav from '$lib/components/Nav.svelte'
  import Footer from '$lib/components/Footer.svelte';
</script>

<Nav showNavbarElements={false} />
<Background background="tundra" />
<slot />
<Footer />