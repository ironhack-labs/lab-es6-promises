// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;

        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
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

// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// ...

obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    obtainInstruction("steak", 1)
      .then((step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
        obtainInstruction("steak", 2)
          .then((step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
            obtainInstruction("steak", 3)
              .then((step3) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step3}</li>`;
                obtainInstruction("steak", 4)
                  .then((step4) => {
                    document.querySelector(
                      "#steak"
                    ).innerHTML += `<li>${step4}</li>`;
                    obtainInstruction("steak", 5)
                      .then((step5) => {
                        document.querySelector(
                          "#steak"
                        ).innerHTML += `<li>${step5}</li>`;
                        obtainInstruction("steak", 6)
                          .then((step6) => {
                            document.querySelector(
                              "#steak"
                            ).innerHTML += `<li>${step6}</li>`;
                            obtainInstruction("steak", 7)
                              .then((step7) => {
                                document.querySelector(
                                  "#steak"
                                ).innerHTML += `<li>${step7}</li>`;
                                document.querySelector(
                                  "#steak"
                                ).innerHTML += `<li>Steak is Ready</li>`;
                              })
                              .catch((err) => console.log("catch()", err));
                          })
                          .catch((err) => console.log("catch()", err));
                      })
                      .catch((err) => console.log("catch()", err));
                  })
                  .catch((err) => console.log("catch()", err));
              })
              .catch((err) => console.log("catch()", err));
          })
          .catch((err) => console.log("catch()", err));
      })
      .catch((err) => console.log("catch()", err));
  })
  .catch((err) => console.log("catch()", err));
  document.querySelector("#steakImg").removeAttribute ("hidden");
// ... Your code here

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    for (let i = 0; i < broccoli.length; i++) {
      let stepi = await obtainInstruction("broccoli", i);
      document.querySelector("#broccoli").innerHTML += `<li>${stepi}</li>`;
    }
  } catch (err) {
    console.error(err);
  }
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is Ready</li>`;
  document.querySelector("#broccoliImg").removeAttribute ("hidden");
}
// Bonus 2 - Promise all
// ...
makeBroccoli();
async function makeBrussels()
{
  
  try {
    const arrayPromises=[];
  
    for (let i = 0; i < brusselsSprouts.length; i++) {
     arrayPromises.push(await obtainInstruction("brusselsSprouts", i));
    }
      Promise.all(arrayPromises).then((instructions) => {
      instructions.forEach(function(step){
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;})
      document.querySelector("#brusselsSprouts").innerHTML += `<li>brusselsSprouts is Ready</li>`;
    });
   
    
  } catch (err) {
    console.error(err);
  }
  
  document.querySelector("#brusselsSproutsImg").removeAttribute ("hidden");
}

makeBrussels()