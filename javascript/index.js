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
// ...

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
	// setTimeout(() => {
	// steak.map((step) => {
	// 	console.log(step);
	// 	setTimeout(() => {
	// 		document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
	// 	}, Math.floor(Math.random() * 8000));
	// });
	// for (let i = 0; i < steak.length; i++) {
	//   console.log(steak[i]);
	// }
	// }, 200);
	.then((step1) => {
		console.log(step1);
		document.querySelector('#steak').innerHTML += `<li>${step1}</li>`;
		return obtainInstruction('steak', 1);
	})
	.then((step2) => {
		console.log(step2);
		document.querySelector('#steak').innerHTML += `<li>${step2}</li>`;
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
	});
// .then((step2)=>{

// })
//  ... Your code here

// ... Your code here

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
	try {
		document.querySelector(
			'#broccoli'
		).innerHTML += `<li>${await obtainInstruction('broccoli', 0)}</li>`;
		document.querySelector(
			'#broccoli'
		).innerHTML += `<li>${await obtainInstruction('broccoli', 1)}</li>`;
		document.querySelector(
			'#broccoli'
		).innerHTML += `<li>${await obtainInstruction('broccoli', 2)}</li>`;
		document.querySelector(
			'#broccoli'
		).innerHTML += `<li>${await obtainInstruction('broccoli', 3)}</li>`;
		document.querySelector(
			'#broccoli'
		).innerHTML += `<li>${await obtainInstruction('broccoli', 4)}</li>`;
		document.querySelector(
			'#broccoli'
		).innerHTML += `<li>${await obtainInstruction('broccoli', 5)}</li>`;
		document.querySelector(
			'#broccoli'
		).innerHTML += `<li>${await obtainInstruction('broccoli', 6)}</li>`;
	} catch (error) {
		console.log(err);
	}
}
makeBroccoli();
// Bonus 2 - Promise all
// ...
