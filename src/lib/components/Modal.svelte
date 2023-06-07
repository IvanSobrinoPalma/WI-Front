<script>
	export let showModal; // boolean
	export let animal;
	let dialog; // HTMLDialogElement
	
	// let animal = {
	//   idAnimal: "db654c12-a769-4eb3-9b0e-0b51cddcd367",
	//   numId: 41,
	//   nameAnimal: "Zorro Rojo",
	//   scientificName: "Vulpes vulpes",
	//   dangerousness: 3,
	//   typeAnimal: "99f95add-faea-4d19-8500-021cbf1a52a0",
	//   dangerOfExtinction: true,
	//   image: "zorro_rojo.jpg",
	//   typeAnimalNavigation: null
	// };

	let dangerEImg;
	let dangerImg;


	if(animal.dangerousness >= 0 && animal.dangerousness <= 2)
	{
		dangerImg = "src/lib/assets/images/dangerLittle.png"
	} else {
		dangerImg = "src/lib/assets/images/dangerStrong.png"
	}

	if(animal.dangerousness == 3)
	{
		dangerImg = "src/lib/assets/images/dangerMedium.png"
	} 
	

	if(animal.dangerOfExtinction) {
		dangerEImg = "src/lib/assets/images/dangerTrue.png"
	} else {
		dangerEImg = "src/lib/assets/images/dangerFalse.png"
	}
	
	
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
				<button autofocus on:click={() => dialog.close()} class="btn btn-primary">
					Cerrar
				</button>
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
