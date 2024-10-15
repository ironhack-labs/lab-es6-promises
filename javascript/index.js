// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
}, (error) => console.log(error));

getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
}, (error) => console.log(error));
*/

// Iteration 1 - using callbacks
usingCallbacks('mashedPotatoes');
function usingCallbacks(food, step = 0) {
    getInstruction(food, step, (desc) => {
        document.querySelector(`#${food}`).innerHTML += `<li>${desc}</li>`;
        usingCallbacks(food, step + 1);
    }, () => {
        document.querySelector(`#${food}Img`).removeAttribute("hidden");
    });
}

// Iteration 2 - using promises
usingPromises('steak');
function usingPromises(food, step = 0) {
    obtainInstruction(food, step)
        .then((desc) => {
            document.querySelector(`#${food}`).innerHTML += `<li>${desc}</li>`;
            usingPromises(food, step + 1);
        })
        .catch(() => {
            document.querySelector(`#${food}Img`).removeAttribute("hidden");
        });
}

// Iteration 3 using async/await
usingAsyncAwait('brusselsSprouts');
async function usingAsyncAwait(food, step = 0) {
    try {
        const desc = await obtainInstruction(food, step);
        document.querySelector(`#${food}`).innerHTML += `<li>${desc}</li>`;
        await usingAsyncAwait(food, step + 1);
    } catch (error) {
        document.querySelector(`#${food}Img`).removeAttribute("hidden");
    }
}

// Bonus 2 - Promise all
// ...
usingPromiseAll('broccoli');
function usingPromiseAll(food, step = 0) {
    const array = [];
    const count = 7;
    for (let i = 0; i < count; i++) {
        array.push(obtainInstruction(food, step++));
    }
    Promise.all(array)
        .then((descs) => {
            descs.forEach((desc) => {
                document.querySelector(`#${food}`).innerHTML += `<li>${desc}</li>`;
            });
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            document.querySelector(`#${food}Img`).removeAttribute("hidden");
        });
}