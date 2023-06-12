<script>
  import i_envelope from '$lib/assets/icons/envelope.png'
  import i_key from '$lib/assets/icons/key.png'
  import i_person from '$lib/assets/icons/person.png'
  import i_vcard from '$lib/assets/icons/v-card.png'

  async function addCliente(){
    let token = localStorage.getItem("token")
		let tokenJson = JSON.parse(token)
		let authorizate = ""

    try {
			const response = await fetch(`https://localhost:7192/wi/user/addUser,` ,{
			  method: "POST",
      	headers: {
				  Authorization: `Bearer ${tokenJson.token}`,
        	"Content-Type": "application/json; charset=utf-8",
				  "Connection" : "keep-alive"
      }})

			const data = await response.json();
			authorizate = data.message;
			console.log(authorizate);
			location.reload()
   		} catch (error) {
      		console.error("Error en la comprobación:", error);
    	}
  }
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
    <form class="modal__login--form d-flex flex-column align-items-center gap-4 mb-5">

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_person} alt={i_person}>
        </span>
        <input type="text" class="form-control" placeholder="Nombre de usuario">
      </div>
      
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_vcard} alt={i_vcard}>
        </span>
        <input type="text" class="form-control" placeholder="Nombre">
      </div>

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_vcard} alt={i_vcard}>
        </span>
        <input type="text" class="form-control" placeholder="Apellido">
      </div>

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_envelope} alt={i_envelope}>
        </span>
        <input type="text" class="form-control" placeholder="Email">
      </div>

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_key} alt={i_key}>
        </span>
        <input type="password" class="form-control" placeholder="Contraseña">
      </div>

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_key} alt={i_key}>
        </span>
        <input type="password" class="form-control" placeholder="Confirmar contraseña">
      </div>

      <button class="btn btn-primary fw-bold" style="letter-spacing: 2px; color: white; width: 50%;" type="submit">LOGIN</button>

    </form>
    <div class="modal__login--links d-flex flex-column gap-2">
      <a href="/login">¿Ya estás registrado? Inicia sesión.</a>
    </div>
  </div>
</section>