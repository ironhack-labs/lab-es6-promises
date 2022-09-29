// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
getInstruction(
	"mashedPotatoes",
	0,
	(step1) => {
		document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
	},
	(error) => console.log(error)
);

getInstruction(
	"mashedPotatoes",
	1,
	(step2) => {
		document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
	},
	(error) => console.log(error)
);

getInstruction(
	"mashedPotatoes",
	2,
	(step3) => {
		document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
	},
	(error) => console.log(error)
);

getInstruction(
	"mashedPotatoes",
	3,
	(step4) => {
		document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
	},
	(error) => console.log(error)
);

getInstruction(
	"mashedPotatoes",
	4,
	(step5) => {
		document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
		document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
	},
	(error) => console.log(error)
);

// Iteration 1 - using callbacks
// ...
*/

getInstruction("mashedPotatoes", 0, (step1) => {
	document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
	getInstruction("mashedPotatoes", 1, (step2) => {
		document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
		getInstruction("mashedPotatoes", 2, (step3) => {
			document.querySelector(
				"#mashedPotatoes"
			).innerHTML += `<li>${step3}</li>`;
			getInstruction("mashedPotatoes", 3, (step4) => {
				document.querySelector(
					"#mashedPotatoes"
				).innerHTML += `<li>${step4}</li>`;
				getInstruction("mashedPotatoes", 4, (step5) => {
					document.querySelector(
						"#mashedPotatoes"
					).innerHTML += `<li>${step5}</li>`;
					document
						.querySelector("#mashedPotatoesImg")
						.removeAttribute("hidden");
					document.querySelector(
						"#mashedPotatoes"
					).innerHTML += `<li>Mashed potatoes are ready!</li>`;
				});
			});
		});
	});
});
//Iteration 1 - using callbacks
// Iteration 2 - using promises
obtainInstruction("steak", 0)
	.then((step0) => {
		document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
		return obtainInstruction("steak", 1);
	})
	.then((step1) => {
		document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
		return obtainInstruction("steak", 2);
	})
	.then((step2) => {
		document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
		return obtainInstruction("steak", 3);
	})
	.then((step3) => {
		document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
		return obtainInstruction("steak", 4);
	})
	.then((step4) => {
		document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
		return obtainInstruction("steak", 5);
	})
	.then((step5) => {
		document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
		return obtainInstruction("steak", 6);
	})
	.then((step6) => {
		document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
		return obtainInstruction("steak", 7);
	})
	.then((step7) => {
		document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
		document.querySelector(
			"#steak"
		).innerHTML += `<li>Mashed potatoes are ready!</li>`;
		document.querySelector("#steakImg").removeAttribute("hidden");
	});
// ... Your code here
// Iteration 3 using async/await
/*
Using promises with the async and await syntax print the directions to make Brussels Sprouts in the correct order. You will need the function obtainInstruction which returns a pending Promise.
async function makeBroccoli() {
  // ... Your code here
}
*/
async function makeBroccoli() {
	let paso0 = await obtainInstruction("broccoli", 0);
	document.querySelector("#broccoli").innerHTML += `<li>${paso0}</li>`;
	let paso1 = await obtainInstruction("broccoli", 1);
	document.querySelector("#broccoli").innerHTML += `<li>${paso1}</li>`;
	let paso2 = await obtainInstruction("broccoli", 2);
	document.querySelector("#broccoli").innerHTML += `<li>${paso2}</li>`;
	let paso3 = await obtainInstruction("broccoli", 3);
	document.querySelector("#broccoli").innerHTML += `<li>${paso3}</li>`;
	let paso4 = await obtainInstruction("broccoli", 4);
	document.querySelector("#broccoli").innerHTML += `<li>${paso4}</li>`;
	let paso5 = await obtainInstruction("broccoli", 5);
	document.querySelector("#broccoli").innerHTML += `<li>${paso5}</li>`;
	let paso6 = await obtainInstruction("broccoli", 6);
	document.querySelector("#broccoli").innerHTML += `<li>${paso6}</li>`;
	document.querySelector("#broccoliImg").removeAttribute("hidden");
	document.querySelector(
		"#broccoli"
	).innerHTML += `<li>Broccoli is ready!</li>`;
}
makeBroccoli();
/* Bonus 2 - Promise all
Using Promise.all display the cooking steps to make Brussels Sprouts in the correct order.
After the last step, you should display an additional <li> with the text: Brussels sprouts are ready!.
*/
async function makeBrusselsSprouts() {
	const s0 = obtainInstruction("brusselsSprouts", 0);
	const s1 = obtainInstruction("brusselsSprouts", 1);
	const s2 = obtainInstruction("brusselsSprouts", 2);
	const s3 = obtainInstruction("brusselsSprouts", 3);
	const s4 = obtainInstruction("brusselsSprouts", 4);
	const s5 = obtainInstruction("brusselsSprouts", 5);
	const s6 = obtainInstruction("brusselsSprouts", 6);
	const s7 = obtainInstruction("brusselsSprouts", 7);
	const s8 = `Brussels sprouts are ready!`;
	const [paso0, paso1, paso2, paso3, paso4, paso5, paso6, paso7, paso8] =
		await Promise.all([s0, s1, s2, s3, s4, s5, s6, s7, s8]);
	const newArr = [
		paso0,
		paso1,
		paso2,
		paso3,
		paso4,
		paso5,
		paso6,
		paso7,
		paso8,
	];
	newArr.map((elem) => {
		return (document.querySelector(
			"#brusselsSprouts"
		).innerHTML += `<li>${elem}</li>`);
	});
	document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
}
console.log(makeBrusselsSprouts());
