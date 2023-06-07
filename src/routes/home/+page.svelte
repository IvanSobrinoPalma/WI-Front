<script>
  import AnimalCard from '$lib/components/AnimalCard.svelte'
  import allAnimals from '$lib/mocks/allAnimals.json'
  // import ChevronDown from '$lib/assets/images/chevron-compact-down.png'
</script>

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
      {#each allAnimals as animal}
        {#if animal.image !== null}
          <AnimalCard {animal}/>
        {/if}
      {/each}
    </ul>
  </div>
</section>
