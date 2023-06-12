<script>
  import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
  import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";
  import logo128 from '$lib/assets/images/logo128.png';
  import search_img from '$lib/assets/images/search.png';
  import AnimalCard from '$lib/components/AnimalCard.svelte'
  import Footer from '../../lib/components/Footer.svelte';
  
  let textInput = ""
  let animals = [];

  async function loadAnimals() {
    try {
      const response = await fetch("https://localhost:7192/wi/animal/getAnimals");
      const data = await response.json();
      animals = data.response;
      console.log(animals);
    } catch (error) {
      console.error("Error al cargar los animales:", error);
    }
  }
  loadAnimals();

  let foundAnimals = []
  function searchAnimals() {
    foundAnimals = []
    for (const animal of animals) {
      console.log(textInput);
      let animalLowerCase = animal.nameAnimal.toLowerCase()
      if (animalLowerCase.startsWith(textInput)) {
          foundAnimals.push(animal);
          console.log(animal.nameAnimal);
      }
    }
  }

  let buttonLogin = ""
  let buttonSignIn = ""
  let hrefSignIn = ""

  function checkToken(){
    let token = localStorage.getItem("token")
    if(token != null) {
      buttonLogin = "Cerrar Sesión"
      buttonSignIn = "Perfil"
      hrefSignIn = "/profile"
    } else {
      buttonLogin = "Acceder"
      buttonSignIn = "Registrarse"
      hrefSignIn = "/signup"
    }
  }
  checkToken()

</script>

<nav class="navbar navbar-expand-md fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">
      <img src={logo128} alt="WildInfo Logo">
      <span class="nav__title" style="color: white;">WildInfo</span>
    </a>
    <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-primary"></span>
    </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto gap-2">
            <li class="nav-item">
              <form class="d-flex gap-1">
                <input class="form-control form-control-lg" type="text" placeholder="Busca un animal..." bind:value={textInput} on:keypress={searchAnimals}>
                <button style="width: 48px;" class="btn btn-primary" type="submit">
                  <img src={search_img} alt="Foto del Animal">
                </button>
              </form>
            </li>
            <li class="nav-item">
              <a href="/login">
                <button class="btn btn-lg btn-secondary">{buttonLogin}</button>
              </a>
            </li>
            <li class="nav-item">
              <a href="{hrefSignIn}">
                <button class="btn btn-lg btn-primary">{buttonSignIn}</button>
              </a>
            </li>
          </ul>
        </div>
  </div>
</nav>
<section class="d-flex align-items-center">
  <div>
    <h1 class="col-4 display-2 fw-semibold">Explora la biodiversidad en WildInfo</h1>
    <p class="col-6 fs-3">Descubre información detallada y admira fotografías impresionantes de la vida salvaje. Sumérgete en un mundo de maravillas naturales.</p>
  </div>
  <div class="scroll-tip">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <!-- <div>
      <p class="fw-semibold">Haz scroll hacia abajo</p>
      <img src={ChevronDown} alt="scroll image">
    </div> -->
  </div>
</section>
<section class="d-flex align-items-center">
  <div class="card-list col-12">
    <ul class="d-flex flex-wrap gap-3">
      {#if textInput.length < 3}
        {#each animals as animal}
          {#if animal.image !== null}
            <AnimalCard {animal}/>
          {/if}
        {/each}
      {:else}
        {#each foundAnimals as animal}
          {#if animal.image !== null}
            <AnimalCard {animal}/>
          {/if}
        {/each}
      {/if}
    </ul>
  </div>
</section>
<Footer></Footer>

<style lang="scss">
  section {
    height: 100vh;
  }

  .scroll-tip {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    background: linear-gradient(transparent, rgba(black, .75) 95%);
    z-index: 2;
  }

  .scroll-tip > div {
    height: 9.125rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .scroll-tip > div > p {
    font-size: 1.5rem;
    color: rgba($gray-600, .8);
  }
  
  .scroll-tip > div > img {
    width: 64px;
    margin-top: -32px;
    color: rgba($gray-600, .8);
  }

  .card-list {
    background: $background;
    margin: 4.5rem 0 0 0;
    padding: 1.5rem 0;
    height: calc(100vh - 18rem);
    border-radius: 12px;
    overflow-y: scroll;
    scrollbar-width: none;
  }

  .card-list::-webkit-scrollbar {
    display: none;
  }
</style>