// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction(
// 	'mashedPotatoes',
// 	1,
// 	(step2) => {
// 		document.querySelector('#mashedPotatoes').innerHTML += `<li>${step2}</li>`;
// 	},
// 	(error) => console.log(error)
// );

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
getInstruction(
	'mashedPotatoes',
	0,
	(step1) => {
		document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;

		getInstruction(
			'mashedPotatoes',
			1,
			(step2) => {
				document.querySelector('#mashedPotatoes').innerHTML += `<li>${step2}</li>`;

				getInstruction(
					'mashedPotatoes',
					2,
					(step3) => {
						document.querySelector('#mashedPotatoes').innerHTML += `<li>${step3}</li>`;

						getInstruction(
							'mashedPotatoes',
							3,
							(step4) => {
								document.querySelector('#mashedPotatoes').innerHTML += `<li>${step4}</li>`;

								getInstruction(
									'mashedPotatoes',
									4,
									(step5) => {
										document.querySelector('#mashedPotatoes').innerHTML += `<li>${step5}</li>`;
										document.querySelector('#mashedPotatoes').innerHTML += `<li> "Mashed potatoes are ready!</li>`;
										document.getElementById('mashedPotatoesImg').removeAttribute('hidden');
									},
									(error) => console.log(error)
								);
							},
							(error) => console.log(error)
						);
					},
					(error) => console.log(error)
				);
			},
			(error) => console.log(error)
		);
	},
	(error) => console.log(error)
);

// Iteration 2 - using promises

obtainInstruction('steak', 0)
	.then((step0) => {
		document.querySelector('#steak').innerHTML += `<li>${step0}</li>`;
		return steak[1];
	})
	.then((step1) => {
		document.querySelector('#steak').innerHTML += `<li>${step1}</li>`;
		return steak[2];
	})
	.then((step2) => {
		document.querySelector('#steak').innerHTML += `<li>${step2}</li>`;
		return steak[3];
	})
	.then((step3) => {
		document.querySelector('#steak').innerHTML += `<li>${step3}</li>`;
		return steak[4];
	})
	.then((step4) => {
		document.querySelector('#steak').innerHTML += `<li>${step4}</li>`;
		return steak[5];
	})
	.then((step5) => {
		document.querySelector('#steak').innerHTML += `<li>${step5}</li>`;
		return steak[6];
	})
	.then((step6) => {
		document.querySelector('#steak').innerHTML += `<li>${step6}</li>`;
		document.querySelector('#steak').innerHTML += `<li>"Steak is ready!"</li>`;
		document.getElementById('steakImg').removeAttribute('hidden');
	})

	.catch((error) => console.log(error));

// Iteration 3 using async/await
async function makeBroccoli() {
	// await obtainInstruction('broccoli', 0);
	// document.querySelector('#broccoli').innerHTML += `<li>${broccoli[0]}</li>`;
	// await obtainInstruction('broccoli', 1);
	// document.querySelector('#broccoli').innerHTML += `<li>${broccoli[1]}</li>`;
	// await obtainInstruction('broccoli', 2);
	// document.querySelector('#broccoli').innerHTML += `<li>${broccoli[2]}</li>`;

	// await obtainInstruction('broccoli', 3);
	// document.querySelector('#broccoli').innerHTML += `<li>${broccoli[3]}</li>`;

	// await obtainInstruction('broccoli', 4);
	// document.querySelector('#broccoli').innerHTML += `<li>${broccoli[4]}</li>`;

	// await obtainInstruction('broccoli', 5);
	// document.querySelector('#broccoli').innerHTML += `<li>${broccoli[5]}</li>`;

	// await obtainInstruction('broccoli', 6);
	// document.querySelector('#broccoli').innerHTML += `<li>${broccoli[6]}</li>`;
	// document.querySelector('#broccoli').innerHTML += `<li>"Broccoli is ready!</li>`;
	// document.getElementById('broccoliImg').removeAttribute('hidden');

	for (let i = 0; i < broccoli.length; i++) {
		await obtainInstruction('broccoli', i);
		if (i < 6) {
			document.querySelector('#broccoli').innerHTML += `<li>${broccoli[i]}</li>`;
		} else {
			document.querySelector('#broccoli').innerHTML += `<li>${broccoli[6]}</li>`;
			document.querySelector('#broccoli').innerHTML += `<li>"Broccoli is ready!</li>`;
			document.getElementById('broccoliImg').removeAttribute('hidden');
		}
	}
}

makeBroccoli();

// Bonus 2 - Promise all

Promise.all([
	obtainInstruction('brusselsSprouts', 0),
	obtainInstruction('brusselsSprouts', 1),
	obtainInstruction('brusselsSprouts', 2),
	obtainInstruction('brusselsSprouts', 3),
	obtainInstruction('brusselsSprouts', 4),
	obtainInstruction('brusselsSprouts', 5),
	obtainInstruction('brusselsSprouts', 6),
	obtainInstruction('brusselsSprouts', 7),
])
	.then((values) => {
		values.forEach((value) => {
			document.querySelector('#brusselsSprouts').innerHTML += `<li>${value}</li>`;
		});
		document.querySelector('#brusselsSprouts').innerHTML += `<li>"Brussels Sprouts are Ready!</li>`;
		document.getElementById('brusselsSproutsImg').removeAttribute('hidden');
	})
	.catch((error) => console.log(error));
