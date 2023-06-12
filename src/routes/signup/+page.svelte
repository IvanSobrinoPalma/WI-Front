<script>
  import i_envelope from '$lib/assets/icons/envelope.png'
  import i_key from '$lib/assets/icons/key.png'
  import i_person from '$lib/assets/icons/person.png'
  import i_vcard from '$lib/assets/icons/v-card.png'

  let nickUser = ""
  let emailUser = ""
  let passwordUser = ""
  let passwordUser2 = ""
  let nameUser = "" 
  let firtsSurnameUser = ""
  let secondSurnameUser = ""

  async function addCliente(){
    let user = {
			nick: nickUser,
      email: emailUser,
      passwordd: passwordUser,
      nameUser: nameUser,
      firtsSurname: firtsSurnameUser,
      secondSurname: secondSurnameUser,
      roll: "client"
		}

    let userJson = JSON.stringify(user)
    try {
			const response = await fetch("https://localhost:7192/wi/user/addClient" ,{
			  method: "POST",
        body: userJson,
      	headers: {
        	"Content-Type": "application/json; charset=utf-8"
      }})

			const data = await response.json();
      const userData = data.response 
			location.href = "http://localhost:5173/"

   		} catch (error) {
      		console.error("Error en la comprobación:", error);
    	}
  }
</script>

<section class="d-flex justify-content-center align-items-center">
  <div class="modal__login">
    <form class="modal__login--form d-flex flex-column align-items-center gap-4 mb-5">

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_person} alt={i_person}>
        </span>
        <input type="text" class="form-control" placeholder="Nombre de usuario" bind:value={nickUser}>
      </div>
      
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_vcard} alt={i_vcard}>
        </span>
        <input type="text" class="form-control" placeholder="Nombre" bind:value={nameUser}>
      </div>

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_vcard} alt={i_vcard}>
        </span>
        <input type="text" class="form-control" placeholder="Primer apellido" bind:value={firtsSurnameUser}>
      </div>

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_vcard} alt={i_vcard}>
        </span>
        <input type="text" class="form-control" placeholder="Segundo apellido (opcional)" bind:value={secondSurnameUser}>
      </div>

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_envelope} alt={i_envelope}>
        </span>
        <input type="text" class="form-control" placeholder="Email" bind:value={emailUser}>
      </div>

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_key} alt={i_key}>
        </span>
        <input type="password" class="form-control" placeholder="Contraseña" bind:value={passwordUser}>
      </div>

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_key} alt={i_key}>
        </span>
        <input type="password" class="form-control" placeholder="Confirmar contraseña" bind:value={passwordUser2}>
      </div>

      <button class="btn btn-primary fw-bold" style="letter-spacing: 2px; color: white; width: 50%;" type="submit" on:click={addCliente}>LOGIN</button>

    </form>
    <div class="modal__login--links d-flex flex-column gap-2">
      <a href="/login">¿Ya estás registrado? Inicia sesión.</a>
    </div>
  </div>
</section>

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