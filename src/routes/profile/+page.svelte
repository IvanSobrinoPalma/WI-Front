<script>
  let email = localStorage.getItem("email")
  let userData = []

  async function getUsers() {
    try {
      const response = await fetch("https://localhost:7192/wi/user/getUsers");
      const data = await response.json();
      let users = data.response;
      console.log(users);

      for(const user of users){
        if(user.email == email){
          userData = user
        }
      }
    } catch (error) {
      console.error("Error al cargar los Usuarios:", error);
    }
  }
  getUsers();

  
  async function getUser(){
    let token = localStorage.getItem("token")
		let tokenJson = JSON.parse(token)
		let authorizate = ""

		try {
			const response = await fetch(`https://localhost:7192/wi/user/getUser/${userData.idUser}`, {
			method: "GET",
      headers: {
				Authorization: `Bearer ${tokenJson.token}`,
        "Content-Type": "application/json; charset=utf-8",
				"Connection" : "keep-alive"
      }})

			const data = await response.json();
			authorizate = data.message;
   		} catch (error) {
      		console.error("Error en la comprobación:", error);
    	}
  }

  async function uploadImages() {
    const formData = new FormData();

    // Obtener los archivos seleccionados
    const input = document.getElementById('imageInput');
    const files = input.files;

    // Agregar los archivos al FormData
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }

    try {
      const response = await fetch(`https://localhost:7192/wi/picture/getPictures/${userData.idUser}`);
      const picture = response.message
      if (picture.ok) {
        console.log('Imágenes cargadas correctamente');
        // Realizar acciones adicionales después de cargar las imágenes
      } else {
        console.error('Error al cargar las imágenes');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
</script>

<section>
  <div class="fluid-container bg-dark">
    <div class="card">
      <div class="card-body">
        <ul class="list-group list-group-flush" style="width: 15rem;">
          <li class="list-group-item">
            <h3 class="card-title">{userData.nick}</h3>
          </li>
          <li class="list-group-item">
            <span class="badge bg-dark">Nombre</span>
            <span class="justify-content-end">{userData.nameUser}</span>
          </li>
          <li class="list-group-item">
            {#if userData.secondSurname != null}
              <span class="badge bg-dark">Apellidos</span>
              <span class="justify-content-end">{userData.firtsSurname + " "+ userData.secondSurname}</span>
            {:else}
              <span class="badge bg-dark">Apellido</span>
              {userData.firtSurname}
            {/if}
          </li>
          <li class="list-group-item">
            <span class="badge bg-dark">Email</span>
            <span class="justify-content-end">{userData.email}</span>
          </li>
          <li class="list-group-item">
            <input  type="file" id="imageInput" multiple accept="image/*" />
            <button class="btn btn-primary" on:click={uploadImages}>Añadir</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    height: 100vh;
    margin-top: 10rem;
  }
</style>