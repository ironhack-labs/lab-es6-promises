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
	"mashedPotatoes",
	0,
	(step1) => {
		document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
		getInstruction(
			"mashedPotatoes",
			1,
			(step2) => {
				document.querySelector("#mashedPotatoes").innerHTML +=
					`<li>${step2}</li>`;
				getInstruction(
					"mashedPotatoes",
					2,
					(step3) => {
						document.querySelector("#mashedPotatoes").innerHTML +=
							`<li>${step3}</li>`;
						getInstruction(
							"mashedPotatoes",
							3,
							(step4) => {
								document.querySelector("#mashedPotatoes").innerHTML +=
									`<li>${step4}</li>`;
								getInstruction(
									"mashedPotatoes",
									4,
									(step5) => {
										document.querySelector("#mashedPotatoes").innerHTML +=
											`<li>${step5}</li>`;
										document
											.querySelector("#mashedPotatoesImg")
											.removeAttribute("hidden");
										document.querySelector("#mashedPotatoes").innerHTML +=
											`<li>Mashed potatoes are ready!</li>`;
									},
									(error) => console.log(error),
								);
							},
							(error) => console.log(error),
						);
					},
					(error) => console.log(error),
				);
			},
			(error) => console.log(error),
		);
	},
	(error) => console.log(error),
);

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
		document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
		document.querySelector("#steakImg").removeAttribute("hidden");
	});

// Iteration 3 using async/await
async function makeBroccoli(step) {
	try {
		await obtainInstruction("broccoli", step).then((result) => {
			document.querySelector("#broccoli").innerHTML += `<li>${result}</li>`;
		});

		if (step < broccoli.length - 1) {
			makeBroccoli(step + 1);
		} else {
			document.querySelector("#broccoli").innerHTML +=
				`<li>Brocoli is ready!</li>`;
			document.querySelector("#broccoliImg").removeAttribute("hidden");
		}
	} catch (error) {
		console.log(error);
	}
}

makeBroccoli(0);

// Bonus 2 - Promise all
const steps = [
	obtainInstruction("brusselsSprouts", 0),
	obtainInstruction("brusselsSprouts", 1),
	obtainInstruction("brusselsSprouts", 2),
	obtainInstruction("brusselsSprouts", 3),
	obtainInstruction("brusselsSprouts", 4),
	obtainInstruction("brusselsSprouts", 5),
	obtainInstruction("brusselsSprouts", 6),
	obtainInstruction("brusselsSprouts", 7),
];

Promise.all(steps)
	.then((value) => {
		const list = document.querySelector("#brusselsSprouts");

		value.forEach((instruction) => {
			list.innerHTML += `<li>${instruction}</li>`;
		});

		list.innerHTML += `<li>brussels Sprouts are ready!</li>`;
		document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
	})
	.catch((error) => console.error("un paso falto", error));
