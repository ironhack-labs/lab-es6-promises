// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction(
// 	'mashedPotatoes',
// 	0,
// 	(step1) => {
// 		document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;
// 	},
// 	(error) => console.log(error)
// );

// getInstruction(
// 	'mashedPotatoes',
// 	1,
// 	(step2) => {
// 		document.querySelector('#mashedPotatoes').innerHTML += `<li>${step2}</li>`;
// 	},
// 	(error) => console.log(error)
// );

// getInstruction(
// 	'mashedPotatoes',
// 	2,
// 	(step3) => {
// 		document.querySelector('#mashedPotatoes').innerHTML += `<li>${step3}</li>`;
// 	},
// 	(error) => console.log(error)
// );

// getInstruction(
// 	'mashedPotatoes',
// 	3,
// 	(step4) => {
// 		document.querySelector('#mashedPotatoes').innerHTML += `<li>${step4}</li>`;
// 	},
// 	(error) => console.log(error)
// );

// getInstruction(
// 	'mashedPotatoes',
// 	4,
// 	(step5) => {
// 		document.querySelector('#mashedPotatoes').innerHTML += `<li>${step5}</li>`;
// 		document.querySelector('#mashedPotatoesImg').removeAttribute('hidden');
// 	},
// 	(error) => console.log(error)
// );

// Iteration 1 - using callbacks

getInstruction(
	'mashedPotatoes',
	0,
	(elm) => {
		document.querySelector('#mashedPotatoes').innerHTML += `<li>${elm}</li>`;
		getInstruction(
			'mashedPotatoes',
			1,
			(elm2) => {
				document.querySelector(
					'#mashedPotatoes'
				).innerHTML += `<li>${elm2}</li>`;
				getInstruction(
					'mashedPotatoes',
					2,
					(elm3) => {
						document.querySelector(
							'#mashedPotatoes'
						).innerHTML += `<li>${elm3}</li>`;
						getInstruction(
							'mashedPotatoes',
							3,
							(elm4) => {
								document.querySelector(
									'#mashedPotatoes'
								).innerHTML += `<li>${elm4}</li>`;
								getInstruction(
									'mashedPotatoes',
									4,
									(elm5) => {
										document.querySelector(
											'#mashedPotatoes'
										).innerHTML += `<li>${elm5}</li>`;
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

// getInstruction();
// Iteration 2 - using promises
obtainInstruction('steak', 0)
	.then((step0) => {
		document.querySelector('#steak').innerHTML += `<li>${step0}</li>`;
		return obtainInstruction('steak', 1);
	})
	.then((step1) => {
		document.querySelector('#steak').innerHTML += `<li>${step1}</li>`;
		return obtainInstruction('steak', 2);
	})
	.then((step2) => {
		document.querySelector('#steak').innerHTML += `<li>${step2}</li>`;
		return obtainInstruction('steak', 3);
	})
	.then((step3) => {
		document.querySelector('#steak').innerHTML += `<li>${step3}</li>`;
		return obtainInstruction('steak', 4);
	})
	.then((step4) => {
		document.querySelector('#steak').innerHTML += `<li>${step4}</li>`;
		return obtainInstruction('steak', 5);
	})
	.then((step5) => {
		document.querySelector('#steak').innerHTML += `<li>${step5}</li>`;
		return obtainInstruction('steak', 6);
	})
	.then((step6) => {
		document.querySelector('#steak').innerHTML += `<li>${step6}</li>`;
		return obtainInstruction('steak', 7);
	})
	.then((step7) => {
		document.querySelector('#steak').innerHTML += `<li>${step7}</li>`;
	})
	.then(() => {
		document.querySelector('#steak').innerHTML += `<li>Stake is ready!</li>`;
	})
	.then(() => {
		document.querySelector('#steakImg').removeAttribute('hidden');
	});

// Iteration 3 using async/await
async function broccoliRecipe() {
	try {
		for (let i = 0; i <= 6; i++) {
			const broccoli1 = await obtainInstruction('broccoli', i);
			document.querySelector(
				'#broccoli'
			).innerHTML += `<li>${broccoli[i]}</li>`;
		}
		document.querySelector('#broccoliImg').removeAttribute('hidden');
	} catch (error) {
		console.log(error);
	}
}
broccoliRecipe();
// Bonus 2 - Promise all
// ...
let stepsArray = [];
for (let i = 0; i < brusselsSprouts.length; i++) {
	stepsArray.push(brusselsSprouts[i]);
}

Promise.all(stepsArray).then((elm) => {
	stepsArray.forEach((elm) => {
		document.querySelector('#brusselsSprouts').innerHTML += `<li>${elm}</li>`;
	});
	document.querySelector(
		'#brusselsSprouts'
	).innerHTML += `<li>Brussels sprouts are ready!</li>`;
	document.querySelector('#brusselsSproutsImg').removeAttribute('hidden');
});
