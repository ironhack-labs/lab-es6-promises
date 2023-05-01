// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

/*  // Out of sync
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
  }, (error) => console.log(error));  */

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step2}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step3}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step4}</li>`;
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>O puré está pronto!</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
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

// Iteration 2 - using promises

/* Como fiz da primeira vez
obtainInstruction("steak", 0).then((step0) => {
  obtainInstruction("steak", 1).then((step1) => {
    obtainInstruction("steak", 2).then((step2) => {
      obtainInstruction("steak", 3).then((step3) => {
        obtainInstruction("steak", 4).then((step4) => {
          obtainInstruction("steak", 5).then((step5) => {
            obtainInstruction("steak", 6).then((step6) => {
              obtainInstruction("steak", 7).then((step7) => {
                obtainInstruction("steak", 8).then((step8) => {
                             
                  document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
                  document.querySelector("#steak").innerHTML += `<li> O Bitoque está pronto! </li>`;
                });
                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
              });
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
            });
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
          });
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
        });
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
      });
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    });
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
  });

  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
});
  */
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
    ).innerHTML += `<li> "O bitoque está pronto"</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
    return obtainInstruction("steak", 8);
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    let makeBroccoli1 = await obtainInstruction("broccoli", 0);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${makeBroccoli1}</li>`;

    let makeBroccoli2 = await obtainInstruction("broccoli", 1);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${makeBroccoli2}</li>`;

    let makeBroccoli3 = await obtainInstruction("broccoli", 2);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${makeBroccoli3}</li>`;

    let makeBroccoli4 = await obtainInstruction("broccoli", 3);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${makeBroccoli4}</li>`;

    let makeBroccoli5 = await obtainInstruction("broccoli", 4);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${makeBroccoli5}</li>`;

    let makeBroccoli6 = await obtainInstruction("broccoli", 5);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${makeBroccoli6}</li>`;

    let makeBroccoli7 = await obtainInstruction("broccoli", 6);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${makeBroccoli7}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Os bróculos também já estão prontos!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch {
    console.log("Error:", error);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
let couveBruxelas = [];

for (let i = 0; i < brusselsSprouts.length; i++) {
  couveBruxelas.push(obtainInstruction("brusselsSprouts", i));
}

Promise.all(couveBruxelas).then((array) => {
  array.forEach((element) => {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${element}</li>`;
  });
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
