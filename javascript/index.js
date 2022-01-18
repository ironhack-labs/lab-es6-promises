// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

/* Out of sync
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
}, (error) => console.log(error));*/



// Iteration 1 - using callbacks

getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
        getInstruction("mashedPotatoes", 2, (step3) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
            getInstruction("mashedPotatoes", 3, (step4) => {
                document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
                getInstruction("mashedPotatoes", 4, (step5) => {
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
                    document.querySelector("#mashedPotatoes").removeAttribute("hidden");
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>Potatoes are Ready!</li>`
                }, (error) => console.log(error));
            }, (error) => console.log(error));
        }, (error) => console.log(error));
    }, (error) => console.log(error));


    // Iteration 2 - using promises
    obtainInstruction('steak', 0)
        .then((step0) => {
            document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
            return obtainInstruction('steak', 1)
        }).then((step1) => {
            document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
            return obtainInstruction('steak', 2)
        }).then((step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
            return obtainInstruction('steak', 3)
        }).then((step3) => {
            document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
            return obtainInstruction('steak', 4)
        }).then((step4) => {
            document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
            return obtainInstruction('steak', 5)
        }).then((step5) => {
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
            return obtainInstruction('steak', 6)
        }).then((step6) => {
            document.querySelector("#steak", 7).innerHTML += `<li>${step6}</li>`;
            return obtainInstruction('steak', 7)
        }).then((step7) => {
            document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
            document.querySelector("#steak").innerHTML += `<li>Steak is Ready</li>`;
            document.querySelector("#steak").removeAttribute('hidden');
        })

    // Iteration 3 using async/await
    async function makeBrocoli() {
        const step0 = await obtainInstruction("brocoli", 0)
        document.querySelector('#brocoli').innerHTML += `<li>${step0}</li>`

        const step1 = await obtainInstruction("brocoli", 1)
        document.querySelector('#brocoli').innerHTML += `<li>${step1}</li>`

        const step2 = await obtainInstruction("brocoli", 2)
        document.querySelector('#brocoli').innerHTML += `<li>${step2}</li>`

        const step3 = await obtainInstruction("brocoli", 3)
        document.querySelector('#brocoli').innerHTML += `<li>${step3}</li>`

        const step4 = await obtainInstruction("brocoli", 4)
        document.querySelector('#brocoli').innerHTML += `<li>${step4}</li>`

        const step5 = await obtainInstruction("brocoli", 5)
        document.querySelector('#brocoli').innerHTML += `<li>${step5}</li>`

        const step6 = await obtainInstruction("brocoli", 6)
        document.querySelector('#brocoli').innerHTML += `<li>${step6}</li>`
        document.querySelector('#brocoli').innerHTML += +`<li>The brocoli is Ready!</li>`
        document.querySelector('brocoli').removeAttribute('hidden')
    }
    makeBrocoli();

    // Bonus 2 - Promise all

    const p0 = obtainInstruction('brusselsSprouts', 0)
    const p1 = obtainInstruction('brusselsSprouts', 1)
    const p2 = obtainInstruction('brusselsSprouts', 2)
    const p3 = obtainInstruction('brusselsSprouts', 3)
    const p4 = obtainInstruction('brusselsSprouts', 4)
    const p5 = obtainInstruction('brusselsSprouts', 5)
    const p6 = obtainInstruction('brusselsSprouts', 6)
    const p7 = obtainInstruction('brusselsSprouts', 7)

    Promise.all([p0, p1, p2, p3, p4, p5, p6, p7])
        .then((steps) => {
            steps.forEach(step => {
                document.querySelector('#brusselsSprouts').innerHTML += `<li>${step}</li>`
            })
            document.querySelector('#brusselsSprouts').innerHTML += `<li>The brussels sprouts are Ready!</li>`
            document.querySelector('#brusselsSproutsImg').removeAttribute('hidden')
        })
})