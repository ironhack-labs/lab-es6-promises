// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

//usa promesas para obtener los datos de las recetas


obtainInstruction("mashedPotatoes", 0)
    .then((step1) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
        return obtainInstruction("mashedPotatoes", 1);
    })
    .then((step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
        return obtainInstruction("mashedPotatoes", 2);
    })
    .then((step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        return obtainInstruction("mashedPotatoes", 3);
    })
    .then((step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        return obtainInstruction("mashedPotatoes", 4);
    })
    .then((step5) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
        document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
    })
    .catch((error) => console.log(error));



// Iteration 2 - using promises

// Iteration 2 - using promises
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
        document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    })
    .catch((error) => console.log(error));



// Iteration 3 using async/await

async function makeBrusselsSprouts() {
    try {
        for (let i = 0; i < 5; i++) {
            const step = await obtainInstruction('brusselsSprouts', i);
            document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
        }
        document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    } catch (error) {
        console.log(error);
    }
}

makeBrusselsSprouts();


// Bonus 2 - Promise all
// ...