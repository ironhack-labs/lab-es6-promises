// ============================================================
// Iteration 0 - starter code (commented out)
// ============================================================

// getInstruction('mashedPotatoes', 0, (step0) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
// });
// getInstruction('mashedPotatoes', 1, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
// });


// ============================================================
// Iteration 1 - Mashed Potatoes with nested callbacks
// ============================================================

getInstruction('mashedPotatoes', 0, (step0) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`;

    getInstruction('mashedPotatoes', 1, (step1) => {
        document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;

        getInstruction('mashedPotatoes', 2, (step2) => {
            document.querySelector('#mashedPotatoes').innerHTML += `<li>${step2}</li>`;

            getInstruction('mashedPotatoes', 3, (step3) => {
                document.querySelector('#mashedPotatoes').innerHTML += `<li>${step3}</li>`;

                getInstruction('mashedPotatoes', 4, (step4) => {
                    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step4}</li>`;

                    // All steps done
                    document.querySelector('#mashedPotatoes').innerHTML += `<li>Mashed potatoes are ready!</li>`;

                    // Bonus - Iteration 4: show image
                    document.querySelector('#mashedPotatoes-img').removeAttribute('hidden');
                }, (error) => console.log(error));
            }, (error) => console.log(error));
        }, (error) => console.log(error));
    }, (error) => console.log(error));
}, (error) => console.log(error));


// ============================================================
// Iteration 2 - Steak with promises and .then()
// ============================================================

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

        // All steps done
        document.querySelector('#steak').innerHTML += `<li>Stake is ready!</li>`;

        // Bonus - Iteration 4: show image
        document.querySelector('#steak-img').removeAttribute('hidden');
    })
    .catch((error) => console.log(error));


// ============================================================
// Iteration 3 - Broccoli with async/await
// ============================================================

async function makeBroccoli() {
    try {
        const step0 = await obtainInstruction('broccoli', 0);
        document.querySelector('#broccoli').innerHTML += `<li>${step0}</li>`;

        const step1 = await obtainInstruction('broccoli', 1);
        document.querySelector('#broccoli').innerHTML += `<li>${step1}</li>`;

        const step2 = await obtainInstruction('broccoli', 2);
        document.querySelector('#broccoli').innerHTML += `<li>${step2}</li>`;

        const step3 = await obtainInstruction('broccoli', 3);
        document.querySelector('#broccoli').innerHTML += `<li>${step3}</li>`;

        const step4 = await obtainInstruction('broccoli', 4);
        document.querySelector('#broccoli').innerHTML += `<li>${step4}</li>`;

        // All steps done
        document.querySelector('#broccoli').innerHTML += `<li>Broccoli is ready!</li>`;

        // Bonus - Iteration 4: show image
        document.querySelector('#broccoli-img').removeAttribute('hidden');
    } catch (error) {
        console.log(error);
    }
}

makeBroccoli();


// ============================================================
// Bonus: Iteration 5 - Brussels Sprouts with Promise.all()
// ============================================================

// Fetch all steps at the same time, but display them in order
const brusselsPromises = [
    obtainInstruction('brusselsSprouts', 0),
    obtainInstruction('brusselsSprouts', 1),
    obtainInstruction('brusselsSprouts', 2),
    obtainInstruction('brusselsSprouts', 3),
    obtainInstruction('brusselsSprouts', 4),
];

Promise.all(brusselsPromises)
    .then((steps) => {
        // steps is an array of all resolved values in order
        steps.forEach((step) => {
            document.querySelector('#brusselsSprouts').innerHTML += `<li>${step}</li>`;
        });

        // All steps done
        document.querySelector('#brusselsSprouts').innerHTML += `<li>Brussels sprouts are ready!</li>`;

        // Bonus - Iteration 4: show image
        document.querySelector('#brusselsSprouts-img').removeAttribute('hidden');
    })
    .catch((error) => console.log(error));