// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

// Iteration 1 - using callbacks
// ...
getInstruction(
	'mashedPotatoes',
	0,
	(step1) => {
		document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;
		getInstruction(
			'mashedPotatoes',
			1,
			(step2) => {
				document.querySelector(
					'#mashedPotatoes'
				).innerHTML += `<li>${step2}</li>`;
				getInstruction(
					'mashedPotatoes',
					2,
					(step3) => {
						document.querySelector(
							'#mashedPotatoes'
						).innerHTML += `<li>${step3}</li>`;
						getInstruction(
							'mashedPotatoes',
							3,
							(step4) => {
								document.querySelector(
									'#mashedPotatoes'
								).innerHTML += `<li>${step4}</li>`;
								getInstruction(
									'mashedPotatoes',
									4,
									(step5) => {
										document.querySelector(
											'#mashedPotatoes'
										).innerHTML += `<li>${step5}</li>`;
										document.querySelector(
											'#mashedPotatoes'
										).innerHTML += `<li>Mashed potatoes are ready!</li>`;
										document
											.querySelector('#mashedPotatoesImg')
											.removeAttribute('hidden');
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
// ...
obtainInstruction('steak', 0)
	.then((step) => {
		document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
		return obtainInstruction('steak', 1);
	})
	.then((step) => {
		document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
		return obtainInstruction('steak', 2);
	})
	.then((step) => {
		document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
		return obtainInstruction('steak', 3);
	})
	.then((step) => {
		document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
		return obtainInstruction('steak', 4);
	})
	.then((step) => {
		document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
		return obtainInstruction('steak', 5);
	})
	.then((step) => {
		document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
		return obtainInstruction('steak', 6);
	})
	.then((step) => {
		document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
		document.querySelector('#steak').innerHTML += `<li>Stake is ready!</li>`;
		document.querySelector('#steakImg').removeAttribute('hidden');
	})
	.catch((err) => console.log(err));

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
	// ... Your code here
	try {
		let step0 = await obtainInstruction('broccoli', 0);
		document.querySelector('#broccoli').innerHTML += `<li>${step0}</li>`;

		let step1 = await obtainInstruction('broccoli', 1);
		document.querySelector('#broccoli').innerHTML += `<li>${step1}</li>`;

		let step2 = await obtainInstruction('broccoli', 2);
		document.querySelector('#broccoli').innerHTML += `<li>${step2}</li>`;

		let step3 = await obtainInstruction('broccoli', 3);
		document.querySelector('#broccoli').innerHTML += `<li>${step3}</li>`;

		let step4 = await obtainInstruction('broccoli', 4);
		document.querySelector('#broccoli').innerHTML += `<li>${step4}</li>`;

		let step5 = await obtainInstruction('broccoli', 5);
		document.querySelector('#broccoli').innerHTML += `<li>${step5}</li>`;

		let step6 = await obtainInstruction('broccoli', 6);
		document.querySelector('#broccoli').innerHTML += `<li>${step6}</li>`;
		document.querySelector(
			'#broccoli'
		).innerHTML += `<li>Broccoli is ready!</li>`;
		document.querySelector('#broccoliImg').removeAttribute('hidden');
	} catch (err) {
		console.log(err);
	}
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
Promise.all(
	[obtainInstruction('brusselsSprouts', 0),
	obtainInstruction('brusselsSprouts', 1),
	obtainInstruction('brusselsSprouts', 2),
	obtainInstruction('brusselsSprouts', 3),
	obtainInstruction('brusselsSprouts', 4),
	obtainInstruction('brusselsSprouts', 5),
	obtainInstruction('brusselsSprouts', 6),
	obtainInstruction('brusselsSprouts', 7)]
).then((step) => {
  document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[0]}</li>`;
  document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[1]}</li>`;
  document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[2]}</li>`;
  document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[3]}</li>`;
  document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[4]}</li>`;
  document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[5]}</li>`;
  document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[6]}</li>`;
  document.querySelector('#brusselsSprouts').innerHTML += `<li>${step[7]}</li>`;
  document.querySelector('#brusselsSprouts').innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.querySelector('#brusselsSproutsImg').removeAttribute('hidden');
})
