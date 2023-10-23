// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

/*getInstruction(
    "mashedPotatoes",
    0,
    (step1) => {
        document.querySelector(
            "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;
    },
    (error) => console.log(error)
);

getInstruction(
    "mashedPotatoes",
    1,
    (step2) => {
        document.querySelector(
            "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
    },
    (error) => console.log(error)
);

getInstruction(
    "mashedPotatoes",
    2,
    (step3) => {
        document.querySelector(
            "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;
    },
    (error) => console.log(error)
);

getInstruction(
    "mashedPotatoes",
    3,
    (step4) => {
        document.querySelector(
            "#mashedPotatoes"
        ).innerHTML += `<li>${step4}</li>`;
    },
    (error) => console.log(error)
);

getInstruction(
    "mashedPotatoes",
    4,
    (step5) => {
        document.querySelector(
            "#mashedPotatoes"
        ).innerHTML += `<li>${step5}</li>`;
        document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
    },
    (error) => console.log(error)
);*/

// Iteration 1 - using callbacks

getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step2) => {
        document.querySelector(
            "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
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

// Iteration 2 - using promises

/*
obtainInstruction("steak", 0).then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    obtainInstruction("steak", 1).then((step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
        obtainInstruction("steak", 2).then((step3) => {
            document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
            obtainInstruction("steak", 3).then((step4) => {
                document.querySelector(
                    "#steak"
                ).innerHTML += `<li>${step4}</li>`;
                obtainInstruction("steak", 4).then((step5) => {
                    document.querySelector(
                        "#steak"
                    ).innerHTML += `<li>${step5}</li>`;
                    obtainInstruction("steak", 5).then((step6) => {
                        document.querySelector(
                            "#steak"
                        ).innerHTML += `<li>${step6}</li>`;
                        obtainInstruction("steak", 6).then((step7) => {
                            document.querySelector(
                                "#steak"
                            ).innerHTML += `<li>${step7}</li>`;
                            obtainInstruction("steak", 7).then((step8) => {
                                document.querySelector(
                                    "#steak"
                                ).innerHTML += `<li>${step8}</li>`;
                            });
                        });
                    });
                });
            });
        });
    });
});
*/

obtainInstruction("steak", 0)
    .then((step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
        return obtainInstruction("steak", 1);
    })
    .then((step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
        return obtainInstruction("steak", 2);
    })
    .then((step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
        return obtainInstruction("steak", 3);
    })
    .then((step4) => {
        document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
        return obtainInstruction("steak", 4);
    })
    .then((step5) => {
        document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
        return obtainInstruction("steak", 5);
    })
    .then((step6) => {
        document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
        return obtainInstruction("steak", 6);
    })
    .then((step7) => {
        document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
        return obtainInstruction("steak", 7);
    })
    .then((step8) => {
        document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
    })
    .then(() => {
        document.querySelector(
            "#steak"
        ).innerHTML += `<li>Stake is ready!</li>`;
    })
    .then(() => {
        document.querySelector("#steakImg").removeAttribute("hidden");
    });

// Iteration 3 using async/await

async function makeBroccoli() {
    try {
        for (let i = 0; i < broccoli.length; i++) {
            let step = await obtainInstruction("broccoli", i);
            document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
        }
        document.querySelector(
            "#broccoli"
        ).innerHTML += `<li>Broccoli is ready!</li>`;
        document.querySelector("#broccoliImg").removeAttribute("hidden");
    } catch (err) {
        console.log(err);
    }
}
makeBroccoli();

// Bonus 2 - Promise all


const promise1 = new Promise((resolve) => {
    resolve(brusselsSprouts[0]);
});

const promise2 = new Promise((resolve) => {
resolve(brusselsSprouts[1]);
});
const promise3 = new Promise((resolve) => {
resolve(brusselsSprouts[2]);
});
const promise4 = new Promise((resolve) => {
resolve(brusselsSprouts[3]);
});
const promise5 = new Promise((resolve) => {
resolve(brusselsSprouts[4]);
});
const promise6 = new Promise((resolve) => {
resolve(brusselsSprouts[5]);
});
const promise7 = new Promise((resolve) => {
    resolve(brusselsSprouts[6]);
});


  async function handlePromiseAll() {
    try {
        const values = await Promise.all( [promise1, promise2, promise3, promise4, promise5, promise6, promise7] );
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[0]}</li>`;
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[1]}</li>`;
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[2]}</li>`;
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[3]}</li>`;
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[4]}</li>`;
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[5]}</li>`;
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[6]}</li>`;
        document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
        document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    }
    catch (error) {
      console.log(error);
    }
  }

  handlePromiseAll()


