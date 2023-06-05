<script>
  import logo128 from '$lib/assets/images/logo128.png'
  import search_img from '$lib/assets/images/search.png'
</script>

<nav class="navbar navbar-expand-md bg-body-tertiary">
  <div class="container-fluid gap-3 align-items-center">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">WildInfo</a>
    <!-- <div class="navbar-collapse">
      <img class="nav__logo" src={logo128} alt="WildInfo Logo">
      <h1 class="nav__title m-0">WildInfo</h1>
    </div> -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex gap-1" role="search">
        <input class="form-control form-control-lg me-2" type="text" placeholder="Busca un animal...">
        <button class="btn btn-primary" type="submit">
          <img src={search_img} alt="">
        </button>
      </form>
    </div>
    <div class="d-flex gap-3">
      <button class="btn btn-lg btn-secondary">Acceder</button>
      <button class="btn btn-lg btn-primary">Registrarse</button>
    </div>
  </div>
</nav>

<!-- <nav class="position-fixed col-12 start -0 d-flex my-4 justify-content-between align-items-center navbar navbar-expand-md">
  <div class="containerfluid d-flex gap-3 align-items-center">
    <img class="nav__logo" src={logo128} alt="WildInfo Logo">
    <h1 class="nav__title m-0">WildInfo</h1>
  </div>
  <form class="d-flex gap-1">
    <input class="form-control form-control-lg" type="text" placeholder="Busca un animal...">
    <button style="width: 48px; " class="btn btn-primary" type="submit">
      <img src={search_img} alt="">
    </button>
  </form>
  <div class="d-flex gap-3">
    <button class="btn btn-lg btn-secondary">Acceder</button>
    <button class="btn btn-lg btn-primary">Registrarse</button>
  </div>
</nav> -->

<style lang="scss">
  nav {
    max-width: 1320px;
  }

	.nav__logo {
    width: 96px;
  }

  .nav__title {
    font-family: 'Pangolin';
  }
</style>