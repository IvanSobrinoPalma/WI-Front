<script>
  import logo128 from '$lib/assets/images/logo128.png'
  import search_img from '$lib/assets/images/search.png'

  export let showNavbarElements = true

  let isMobile = true;

  function toggleMobileNav() {
    isMobile = !isMobile;
  }
</script>

<nav class="navbar navbar-expand-md fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">
      <img src={logo128} alt="WildInfo Logo">
      <span class="nav__title" style="color: white;">WildInfo</span>
    </a>
    <button class="navbar-toggler bg-primary" type="button" on:formchange={toggleMobileNav}>
      <span class="navbar-toggler-icon bg-primary"></span>
    </button>
    {#if showNavbarElements}
      {#if isMobile}
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto gap-2">
            <li class="nav-item">
              <form class="d-flex gap-1">
                <input class="form-control form-control-lg" type="text" placeholder="Busca un animal...">
                <button style="width: 48px;" class="btn btn-primary" type="submit">
                  <img src={search_img} alt="">
                </button>
              </form>
            </li>
            <li class="nav-item">
              <a href="/login">
                <button class="btn btn-lg btn-secondary">Acceder</button>
              </a>
            </li>
            <li class="nav-item">
              <a href="/signup">
                <button class="btn btn-lg btn-primary">Registrarse</button>
              </a>
            </li>
          </ul>
        </div>
      {/if}
    {/if}
  </div>
</nav>

<style lang="scss">
  .nav__title {
    font-family: 'Pangolin';
    margin-left: 8px;
  }
</style>
