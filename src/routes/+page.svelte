<script>
  import logo128 from '$lib/assets/logo128.png'
  import search_img from '$lib/assets/search.png'
</script>

<div class="background"></div>
<nav class="d-flex my-4 justify-content-between align-items-center">
  <div class="d-flex gap-3 align-items-center">
    <img class="nav__logo" src={logo128} alt="WildInfo Logo">
    <h1 class="m-0">WildInfo</h1>
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
<main>
  <section>
    <a href="/test">test</a>
  </section>
  <section></section>
  <section></section>
</main>
<footer></footer>

<style lang="scss">
  .background {

  }

  .nav__logo {
    width: 96px;
  }
</style> 