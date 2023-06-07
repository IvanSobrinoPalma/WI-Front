<script>
  import Modal from "./Modal.svelte"

  export let animal
  
  const animalUrl = `src/lib/assets/images/animals/${animal.image}`
  let showModal = false
</script>

<style lang="scss">
  h1 {
    color: black;
  }
  
  .animal-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 6px 24px;
    height: 270px;
    width: 400px;
    border-radius: 6px;
    transition: .2s ease-in-out;
  }

  .animal-card:hover {
    transform: scale(1.02);
    z-index: 4;
    cursor: pointer;
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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div 
    class="animal-card"
    on:click={() => (showModal = true)}
    style="
      background: url({animalUrl});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
">
  <div class="animal-info">
    <h4 class="fw-bold">{animal.nameAnimal}</h4>
  </div>
</div>

<Modal {animal} bind:showModal>
  <div slot="header">
    <h1>{animal.nameAnimal}</h1>
    <h4>
      <small>
        <em>{animal.scientificName}</em>
      </small>
    </h4>
  </div>
  <div class="modal-content">
    <!-- Imagen -->
    <!-- Familia -->
    <!-- Peligrosidad -->
    <!-- Peligro de Extinción -->
  </div>
</Modal>
