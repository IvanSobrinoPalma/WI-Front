<script>
  import AnimalCard from '../lib/components/AnimalCard.svelte'
  import ChevronDown from '$lib/assets/images/chevron-compact-down.png'
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
    gap: 12px;
    padding-top: 24px;
    height: calc(100vh - 18rem);
    border-radius: 12px;
    overflow-y: scroll;
  }
</style>

<section class="d-flex align-items-center">
  <div>
    <h1 class="col-4 display-2 fw-semibold">Explore the biodiversity in WildInfo</h1>
    <p class="col-6 fs-3">Discover detailed information and admire stunning photographs of wildlife. Immerse yourself in a world of natural wonders.</p>
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
  <div class="card-list col-12 d-flex flex-wrap justify-content-center">
    <AnimalCard />
    <AnimalCard />
    <AnimalCard />
    <AnimalCard />
    <AnimalCard />
    <AnimalCard />
    <AnimalCard />
    <AnimalCard />
    <AnimalCard />
  </div>
</section>
