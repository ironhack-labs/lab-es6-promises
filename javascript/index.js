// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...
getInstruction(
	'mashedPotatoes',
	0,
	(step1) => {
		document.querySelector(
			'#mashedPotatoes'
		).innerHTML += `<li>${step1}</li>`
		getInstruction(
			'mashedPotatoes',
			1,
			(step2) => {
				document.querySelector(
					'#mashedPotatoes'
				).innerHTML += `<li>${step2}</li>`
				getInstruction(
					'mashedPotatoes',
					1,
					(step3) => {
						document.querySelector(
							'#mashedPotatoes'
						).innerHTML += `<li>${step3}</li>`
						getInstruction(
							'mashedPotatoes',
							2,
							(step4) => {
								document.querySelector(
									'#mashedPotatoes'
								).innerHTML += `<li>${step4}</li>`
								getInstruction(
									'mashedPotatoes',
									3,
									(step5) => {
										document.querySelector(
											'#mashedPotatoes'
										).innerHTML += `<li>${step5}</li>`
										getInstruction(
											'mashedPotatoes',
											4,
											(step6) => {
												document.querySelector(
													'#mashedPotatoes'
												).innerHTML += `<li>${step6}</li>`
												document
													.querySelector(
														'#mashedPotatoesImg'
													)
													.removeAttribute('hidden')
											},
											(error) => console.log(error)
										)
									},
									(error) => console.log(error)
								)
							},
							(error) => console.log(error)
						)
					},
					(error) => console.log(error)
				)
			},
			(error) => console.log(error)
		)
	},

	(error) => console.log(error)
)

// Iteration 2 - using promises
// ...
// Iteration 2 - using promises
obtainInstruction('steak', 0)
	.then((step0) => {
		document.querySelector('#steak').innerHTML += `<li>${step0}</li>`
		return obtainInstruction('steak', 1) //  ... Your code here
	})
	.then((step1) => {
		document.querySelector('#steak').innerHTML += `<li>${step1}</li>`
		return obtainInstruction('steak', 2) //  ... Your code here
	})
	.then((step2) => {
		document.querySelector('#steak').innerHTML += `<li>${step2}</li>`
		return obtainInstruction('steak', 3) //  ... Your code here
	})
	.then((step3) => {
		document.querySelector('#steak').innerHTML += `<li>${step3}</li>`
		return obtainInstruction('steak', 4) //  ... Your code here
	})
	.then((step4) => {
		document.querySelector('#steak').innerHTML += `<li>${step4}</li>`
		return obtainInstruction('steak', 5) //  ... Your code here
	})
	.then((step5) => {
		document.querySelector('#steak').innerHTML += `<li>${step5}</li>`
		return obtainInstruction('steak', 6) //  ... Your code here
	})
	.then((step6) => {
		document.querySelector('#steak').innerHTML += `<li>${step6}</li>`
		return obtainInstruction('steak', 7) //  ... Your code here
	})
	.then((step7) => {
		document.querySelector('#steak').innerHTML += `<li>${step7}</li>`
		// return obtainInstruction('steak', 7) //  ... Your code here
	})
	.finally(() => {
		let img = document.getElementById('steakImg')
		img.style.display = 'block'
		document.querySelector(
			'#steak'
		).innerHTML += `<li>${`Steak is done!`}</li>`
		// return obtainInstruction('steak', 8) //  ... Your code here
	})
// .then((step8) => {
// 	document.querySelector('#steak').innerHTML += `<li>${step8}</li>`
// 	return obtainInstruction('steak', 9) //  ... Your code here
// })
// ... Your code here

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
	// ... Your code here
	try {
		const step0 = await obtainInstruction('broccoli', 0)
		document.querySelector('#broccoli').innerHTML += `<li>${step0}</li>`
		const step1 = await obtainInstruction('broccoli', 1)
		document.querySelector('#broccoli').innerHTML += `<li>${step1}</li>`
		const step2 = await obtainInstruction('broccoli', 2)
		document.querySelector('#broccoli').innerHTML += `<li>${step2}</li>`
		const step3 = await obtainInstruction('broccoli', 3)
		document.querySelector('#broccoli').innerHTML += `<li>${step3}</li>`
		const step4 = await obtainInstruction('broccoli', 4)
		document.querySelector('#broccoli').innerHTML += `<li>${step4}</li>`
		const step5 = await obtainInstruction('broccoli', 5)
		document.querySelector('#broccoli').innerHTML += `<li>${step5}</li>`
		const step6 = await obtainInstruction('broccoli', 6)
		document.querySelector('#broccoli').innerHTML += `<li>${step6}</li>`
	} catch (error) {
		console.log(error)
	} finally {
		document.querySelector(
			'#broccoli'
		).innerHTML += `<li>${`Broccoli is redy!`}</li>`
		document.getElementById('broccoliImg').style.display = 'block'
	}
}
makeBroccoli()
// Bonus 2 - Promise all
// ...
async function makeBrusselsSprouts() {
	try {
		const promArr = await Promise.all([
			obtainInstruction('brusselsSprouts', 0),
			obtainInstruction('brusselsSprouts', 1),
			obtainInstruction('brusselsSprouts', 2),
			obtainInstruction('brusselsSprouts', 3),
			obtainInstruction('brusselsSprouts', 4),
			obtainInstruction('brusselsSprouts', 5),
			obtainInstruction('brusselsSprouts', 6),
			obtainInstruction('brusselsSprouts', 7),
		])
		promArr.forEach((prom) => {
			document.querySelector(
				'#brusselsSprouts'
			).innerHTML += `<li>${prom}</li>`
		})
	} catch (error) {
		console.log(error)
	} finally {
		document.querySelector(
			'#brusselsSprouts'
		).innerHTML += `<li>${`Brussels Sprout is Done`}</li>`
		document.getElementById('brusselsSproutsImg').style.display = 'block'
	}
}
makeBrusselsSprouts()
