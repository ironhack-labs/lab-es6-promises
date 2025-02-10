// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
	// getInstruction("mashedPotatoes", 0, (step1) => {
	// 	document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
	// }, (error) => console.log(error));
	
	// getInstruction("mashedPotatoes", 1, (step2) => {
	// 	document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
	// }, (error) => console.log(error));
	
	// getInstruction("mashedPotatoes", 2, (step3) => {
	// 	document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
	// }, (error) => console.log(error));
	
	// getInstruction("mashedPotatoes", 3, (step4) => {
	// 	document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
	// }, (error) => console.log(error));
	
	// getInstruction("mashedPotatoes", 4, (step5) => {
	// 	document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
	// 	document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
	// }, (error) => console.log(error));



// Iteration 1 - using callbacks
// Iteración 1 | Hacer puré de papas con devoluciones de llamadas
getInstruction('mashedPotatoes', 0, (step0) => {
	document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
	
	getInstruction('mashedPotatoes', 1, (step1) => {
		document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
		
		getInstruction('mashedPotatoes', 2, (step2) => {
			document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
			
			getInstruction('mashedPotatoes', 3, (step3) => {
				document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
				
				getInstruction('mashedPotatoes', 4, (step4) => {
					document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
					
				//  Paso final
					document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!.</li>`;
					document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
				});
			});
		});
	});
});

// Iteration 2 - using promises
// Iteración 2 | Haz la apuesta con promesas
obtainInstruction('steak', 0)
	.then((step0) => {
		document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
		return obtainInstruction('steak', 1);
	})
	.then((step1) => {
		document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
		return obtainInstruction('steak', 2);
	})
	.then((step2) => {
		document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
		return obtainInstruction('steak', 3);
	})
	.then((step3) => {
		document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
		return obtainInstruction('steak', 4);
	})
	.then((step4) => {
		document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
		return obtainInstruction('steak', 5);
	})
	.then((step5) => {
		document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
		return obtainInstruction('steak', 6);
	})
	.then((step6) => {
		document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
		// Paso final
		document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
		document.querySelector("#steakImg").removeAttribute("hidden");
	})
	.catch((error) => {
		console.error("Error al obtener las instrucciones:", error);
	});
	// ... Your code here
// Iteration 3 using async/await
// Iteración 3 | Hacer el brócoli con async/await
async function makeBroccoli() {
	try {
		const step0 = await obtainInstruction('broccoli', 0);
		document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
		
		const step1 = await obtainInstruction('broccoli', 1);
		document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
		
		const step2 = await obtainInstruction('broccoli', 2);
		document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
		
		const step3 = await obtainInstruction('broccoli', 3);
		document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
		
		const step4 = await obtainInstruction('broccoli', 4);
		document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
		
		const step5 = await obtainInstruction('broccoli', 5);
		document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
		
		// Paso final
		document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
		document.querySelector("#broccoliImg").removeAttribute("hidden");
	} catch (error) {
		console.error("Error al obtener las instrucciones:", error);
	}
}

// Llamar a la función para ejecutar el proceso
// makeBroccoli();

// Bonus 2 - Promise all
// Iteración 5 | Promise.all()
async function makeBrusselsSprouts() {
	try {
		const steps = await Promise.all([
			obtainInstruction('brusselsSprouts', 0),
			obtainInstruction('brusselsSprouts', 1),
			obtainInstruction('brusselsSprouts', 2),
			obtainInstruction('brusselsSprouts', 3),
			obtainInstruction('brusselsSprouts', 4),
			obtainInstruction('brusselsSprouts', 5),
			obtainInstruction('brusselsSprouts', 6),
		]);

		steps.forEach(step => {
			document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
		});

		// Paso final
		document.querySelector("#brusselsSprouts").innerHTML += `<li>¡Las coles de Bruselas están listas!</li>`;
		
		// Mostrar la imagen (si es necesario)
		document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
	} catch (error) {
		console.error("Error al obtener las instrucciones:", error);
	}
}

// Llamar a la función para ejecutar el proceso
makeBrusselsSprouts();
// Llamar a la función para ejecutar el proceso
makeBroccoli();