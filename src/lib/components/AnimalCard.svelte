<script>
  import Animal from '$lib/mocks/animal.json'
</script>

<style lang="scss">
  .animal-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 6px 24px;
    height: 270px;
    width: 400px;
    border-radius: 6px;
    background: rgba(green, .5);
    // background: url(); <-- imagen del animal
  }

  .animal-card::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75px;
    background: linear-gradient(transparent, black);
    border-radius: 0 0 6px 6px;
    z-index: 1;
  }

  .animal-info {
    z-index: 2;
  }

  .animal-info > h4 {
    color: $gray-200;
  }

  .animal-info > p {
    color: $gray-400;
  }
</style>

<div class="animal-card">
  <div class="animal-info">
    <h4 class="fw-bold">{Animal.nameAnimal}</h4>
    <!-- <p>Lorem ipsum dolor sit amet consectetur</p> -->
  </div>
</div>