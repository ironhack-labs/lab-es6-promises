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
// ...

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
                    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
                }, (error) => console.log(error));
            }, (error) => console.log(error));

        }, (error) => console.log(error));
    }, (error) => console.log(error));
}, (error) => console.log(error));



// Iteration 2 - using promises
// ...

obtainInstruction('steak', 0)
    .then((step0) => {
        document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
        obtainInstruction('steak', 1)
            .then((step1) => {
                document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
                obtainInstruction('steak', 2)
                    .then((step2) => {
                        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
                        obtainInstruction('steak', 3)
                            .then((step3) => {
                                document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
                                obtainInstruction('steak', 4)
                                    .then((step4) => {
                                        document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
                                        obtainInstruction('steak', 5)
                                            .then((step5) => {
                                                document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
                                                obtainInstruction('steak', 6)
                                                    .then((step6) => {
                                                        document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
                                                        obtainInstruction('steak', 7)
                                                            .then((step7) => {
                                                                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
                                                                document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
                                                                document.querySelector("#steakImg").removeAttribute("hidden");
                                                            }).catch((error) => {
                                                                console.log(error);
                                                            });
                                                    });
                                            });
                                    });
                            });
                    });
            });
    })


// Iteration 3 using async/await
// ...

async function makeBroccoli() {
    // ... Your code here
    try {
        const broccoli0 = await obtainInstruction('broccoli', 0)
        document.querySelector("#broccoli").innerHTML += `<li>${broccoli0}</li>`;
        const broccoli1 = await obtainInstruction('broccoli', 1)
        document.querySelector("#broccoli").innerHTML += `<li>${broccoli1}</li>`;
        const broccoli2 = await obtainInstruction('broccoli', 2)
        document.querySelector("#broccoli").innerHTML += `<li>${broccoli2}</li>`;
        const broccoli3 = await obtainInstruction('broccoli', 3)
        document.querySelector("#broccoli").innerHTML += `<li>${broccoli3}</li>`;
        const broccoli4 = await obtainInstruction('broccoli', 4)
        document.querySelector("#broccoli").innerHTML += `<li>${broccoli4}</li>`;
        const broccoli5 = await obtainInstruction('broccoli', 5)
        document.querySelector("#broccoli").innerHTML += `<li>${broccoli5}</li>`;
        const broccoli6 = await obtainInstruction('broccoli', 6)
        document.querySelector("#broccoli").innerHTML += `<li>${broccoli6}</li>`;
        document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
        document.querySelector("#broccoliImg").removeAttribute("hidden");
    } catch (e) {
        console.error("error peticiones broccoli", e)
    }


}
makeBroccoli();

const brusselsSprouts0 = obtainInstruction('brusselsSprouts', 0)
const brusselsSprouts1 = obtainInstruction('brusselsSprouts', 1)
const brusselsSprouts2 = obtainInstruction('brusselsSprouts', 2)
const brusselsSprouts3 = obtainInstruction('brusselsSprouts', 3)
const brusselsSprouts4 = obtainInstruction('brusselsSprouts', 4)
const brusselsSprouts5 = obtainInstruction('brusselsSprouts', 5)
const brusselsSprouts6 = obtainInstruction('brusselsSprouts', 6)
const brusselsSprouts7 = obtainInstruction('brusselsSprouts', 7)


Promise.all([brusselsSprouts0, brusselsSprouts1, brusselsSprouts2, brusselsSprouts3, brusselsSprouts4, brusselsSprouts5, brusselsSprouts6, brusselsSprouts7]).then((result) => {
        console.log("result", result)
        for (let i = 0; i < result.length; i++) {
            document.querySelector("#brusselsSprouts").innerHTML += `<li>${result[i]}</li>`;
        }
        document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
        document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");


    })
    // Bonus 2 - Promise all
    // ...