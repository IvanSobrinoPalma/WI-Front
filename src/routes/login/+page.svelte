<script>
  import i_envelope from '$lib/assets/icons/envelope.png'
  import i_key from '$lib/assets/icons/key.png'

  function removeToken() {
    if(localStorage.getItem("token")) {
      localStorage.removeItem("token")
      window.location.href = "http://localhost:5173/"
    }
  }
  removeToken()
  
  let users = []
  async function getUsers() {
    try {
      const response = await fetch("https://localhost:7192/wi/user/getUsers");
      const data = await response.json()
      users = data.response
    } catch (error) {
      console.error("Error al cargar los usuarios:", error)
    }
  }

  let userData = []
  let email = ""
  let password = ""
  
  async function loginUser() {
    await getUsers()
    for(const user of users){
      if(user.email == email && user.passwordd == password){
        userData = user
      } 

      let userJson = {
        passwordd: password,
        email: user.email
      }

      userJson = JSON.stringify(userJson) 

    
        const response = await fetch("https://localhost:7192/wi/user/login", {
          method: "POST",
          body: userJson,
          headers: {"Content-Type" : "application/json; charset=UTF-8"},
        })
        const data = await response.json()
        
        if(data.message == "ok"){
          console.log(data.response)
          let token = { token: data.response};
          token = JSON.stringify(token);
          localStorage.setItem('token', token);
          window.location.href = "http://localhost:5173/"
        }
    }
  }

  
</script>

<section class="d-flex justify-content-center align-items-center">
  <div class="modal__login">
    <form class="modal__login--form d-flex flex-column align-items-center gap-4 mb-4">

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_envelope} alt={i_envelope}>
        </span>
        <input type="text" class="form-control" placeholder="Email" aria-label="Email" bind:value={email}>
      </div>

      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <img src={i_key} alt={i_key}>
        </span>
        <input type="password" class="form-control" placeholder="Contraseña" aria-label="Password" bind:value={password}>
      </div>

      <button class="btn btn-primary fw-bold" style="letter-spacing: 2px; color: white; width: 50%;" type="submit" on:click={loginUser}>LOGIN</button>
      
    </form>
    <div class="modal__login--links d-flex flex-column gap-2">
      <a href="">¿Has olvidado tu contraseña?</a>
      <a href="/signup">¿No tienes cuenta? Hazte una.</a>
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