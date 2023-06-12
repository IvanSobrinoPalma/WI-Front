<script>
	export let showModal; // boolean
	export let animal;

	let display = false
	async function checkToken(){
		let token = localStorage.getItem("token")
		let tokenJson = JSON.parse(token)
		let authorizate = ""
		try {
			const response = await fetch("https://localhost:7192/wi/user/getAdmin", {
      		headers: {
				Authorization: `Bearer ${tokenJson.token}`,
        		"Content-Type": "application/json; charset=utf-8",
				"Connection" : "keep-alive"
      		}})

			const data = await response.json();
			authorizate = data.message;
			console.log(authorizate);
   		} catch (error) {
      		console.error("Error en la comprobación:", error);
    	}

		if(authorizate !== "ok") {
			display = false
		} else {
			display = true
		}
  	}
  	checkToken()

	async function removeAnimal() {
		let token = localStorage.getItem("token")
		let tokenJson = JSON.parse(token)
		let authorizate = ""
		try {
			const response = await fetch(`https://localhost:7192/wi/animal/deleteAnimal/${animal.idAnimal}`, {
			method: "DELETE",
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

	const dangerLevel = {
		low: "dangerLow.png",
		medium: "dangerMedium.png",
		high: "dangerHigh.png"
	}

	const dangerOfExtinction = {
		yes: "dangerTrue.png",
		no: "dangerFalse.png"
	}

	let dialog; // HTMLDialogElement
	let dangerEImg;
	let dangerImg;
	let dangerousnessLevel;
	
	const imageDir = "src/lib/assets/images";

	let advanced = []
	let typeAnimal
	async function advancedData(){
		try {
			const response = await fetch(`https://localhost:7192/wi/animal/getAnimal/${animal.idAnimal}`)
			const data = await response.json()
			advanced = data.response
			typeAnimal = advanced.typeAnimalNavigation.nameType
			console.log(data)
		} catch(error) {
			console.error("Error al cargar los animales:", error);
  		}	
	}
	advancedData()
	
	switch(animal.dangerousness) {
		case 0:
		case 1:
		case 2:
			dangerousnessLevel = dangerLevel.low;
			break;
		case 3:
			dangerousnessLevel = dangerLevel.medium;
			break;
		default:
			dangerousnessLevel = dangerLevel.high;
			break;
	}

	dangerImg = `${imageDir}/${dangerousnessLevel}`;

	(animal.dangerOfExtinction) 
		? dangerEImg = `${imageDir}/${dangerOfExtinction.yes}`
		: dangerEImg = `${imageDir}/${dangerOfExtinction.no}`;
	
	$: if (dialog && showModal) dialog.showModal();
  </script>
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
  >
	  <div on:click|stopPropagation class="modal-content bg-dark">
		<div class="card border-dark">
		  <img src="src\lib\assets\images\animals\{animal.image}" class="card-img-top" alt="Zorro Rojo">
		  <ul class="list-group list-group-flush ">
			{#if display}
				<li class="list-group-item list-group-item-primary">
					<h6 class="card-text">
						<span class="badge bg-dark">Id</span>
						{animal.idAnimal}
					</h6>
				</li>
				<li class="list-group-item list-group-item-primary">
					<h6 class="card-text">
						<span class="badge bg-dark">Numero</span>
						{animal.numId}
					</h6>
				</li>
			{/if}
			<li class="list-group-item list-group-item-primary">
				<h6 class="card-text">
					<span class="badge bg-dark">Nombre</span>
					{animal.nameAnimal}
				</h6>
			</li>
			<li class="list-group-item list-group-item-primary">
				<h6 class="card-text">
					<span class="badge bg-dark">Scientific Name</span>
					{animal.scientificName}
				</h6>
			</li>
			<li class="list-group-item list-group-item-primary">
				<h6 class="card-text">
					<span class="badge bg-dark">Peligro</span>
					<img src="{dangerImg}" alt="Peligro Imagen" class="icon">
				</h6>
			</li>
			<li class="list-group-item list-group-item-primary">
				<h6 class="card-text">
					<span class="badge bg-dark">Peligro de extinción</span>
					<img src="{dangerEImg}" class="icon" alt="Peligro de Extincion Imagen">
				</h6>
			</li>
			<li class="list-group-item list-group-item-primary">
				<h6 class="card-text">
					<span class="badge bg-dark">Tipo</span>
					{typeAnimal}
				</h6>
			</li>
			<li class="list-group-item list-group-item-primary">
				<!-- svelte-ignore a11y-autofocus -->
				<button style="margin-left: 1rem;" autofocus on:click={() => dialog.close()} class="btn btn-primary">
					Cerrar
				</button>
				{#if display}
					<button class="btn btn-primary" type="button" on:click={removeAnimal}>
						Eliminar
					</button>
				{/if}
			</li>
		  </ul>
		</div>
	  </div>
  </dialog>

  <style>
	dialog {
		max-width: 35em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		overflow-y: scroll;
		scrollbar-width: none;
	}
	dialog::-webkit-scrollbar {
		display: none;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 0px;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
		float: right;
	}

	.icon {
		width: 6%;
	}
</style>
