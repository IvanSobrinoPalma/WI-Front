<script>
  import logo128 from '$lib/assets/images/logo128.png'
  import search_img from '$lib/assets/images/search.png'
</script>

<nav class="position-fixed col-12 start -0 d-flex my-4 justify-content-between align-items-center">
  <div class="d-flex gap-3 align-items-center">
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
</nav>

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