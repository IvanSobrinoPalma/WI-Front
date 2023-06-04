<script>
  import ChevronDown from '$lib/assets/images/chevron-compact-down.png'
</script>

<style lang="scss">
  .scrollable {
    scroll-snap-align: start;
  }

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
</style>

<!-- <svelte:document on:scroll={} /> -->
<div class="scrollable">
  <section class="d-flex align-items-center">
    <div>
      <h1 class="col-4 display-2 fw-semibold">Explore the biodiversity in WildInfo</h1>
      <p class="col-6 fs-3">Discover detailed information and admire stunning photographs of wildlife. Immerse yourself in a world of natural wonders.</p>
    </div>
    <div class="scroll-tip">
      <div>
        <p class="fw-semibold">Haz scroll hacia abajo</p>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={ChevronDown} alt="scroll image">
      </div>
    </div>
  </section>
</div>
<div class="scrollable">
  <section class="d-flex justify-content-center align-items-center">
    <p style="font-size:6rem;">👌</p>
  </section>
</div>
