<script>
  import i_envelope from '$lib/assets/icons/envelope.png'
  import i_key from '$lib/assets/icons/key.png'
</script>

<style lang="scss">
  section {
    height: calc(100vh - 56px);
  }

  .modal__login {
    background-color: $background;
    padding: 4rem 3rem;
    border-radius: 12px;
  }

  // .modal__login--form {}

  .modal__login--links > a {
    color: $gray-600;
  }
</style>

<section class="d-flex justify-content-center align-items-center">
  <div class="modal__login">
    <form class="modal__login--form d-flex flex-column align-items-center gap-4 mb-4">

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_envelope} alt={i_envelope}>
        </span>
        <input type="text" class="form-control" placeholder="Email" aria-label="Email">
      </div>

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_key} alt={i_key}>
        </span>
        <input type="password" class="form-control" placeholder="Contraseña" aria-label="Password">
      </div>

      <button class="btn btn-primary fw-bold" style="letter-spacing: 2px; color: white; width: 50%;" type="submit">LOGIN</button>
      
    </form>
    <div class="modal__login--links d-flex flex-column gap-2">
      <a href="">¿Has olvidado tu contraseña?</a>
      <a href="/signup">¿No tienes cuenta? Hazte una.</a>
    </div>
  </div>
</section>