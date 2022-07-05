// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
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



// Iteration 1 - using callbacks
getInstruction(
  "steak",
  0,
  (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    // ADD NEXT STEP HERE
    getInstruction(
      "steak",
      1,
      (step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "steak",
          2,
          (step3) => {
            document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "steak",
              3,
              (step4) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "steak",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#steak"
                    ).innerHTML += `<li>${step5}</li>`;
                    // Bonus 1
                    document
                      .querySelector("#steakImg")
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

function addInnerHTML(elementId, html){
  document.querySelector(elementId).innerHTML += html;
}

obtainInstruction("brusselsSprouts", 0)
  .then((step1) => {
    addInnerHTML("#brusselsSprouts", `<li>${step1}</li>`);
    return obtainInstruction("brusselsSprouts", 1);
  })
  .then((step2) => {
    addInnerHTML("#brusselsSprouts", `<li>${step2}</li>`);
    return obtainInstruction("brusselsSprouts", 2);
  })
  .then((step3) => {
    addInnerHTML("#brusselsSprouts", `<li>${step3}</li>`);
    return obtainInstruction("brusselsSprouts", 3);
  })
  .then((step4) => {
    addInnerHTML("#brusselsSprouts", `<li>${step4}</li>`);
    return obtainInstruction("brusselsSprouts", 4);
  })
  .then((step5) => {
    addInnerHTML("#brusselsSprouts", `<li>${step5}</li>`);
    return obtainInstruction("brusselsSprouts", 5);
  })
  .then((step6) => {
    addInnerHTML("#brusselsSprouts", `<li>${step6}</li>`);
    return obtainInstruction("brusselsSprouts", 6);
  })
  .then((step7) => {
    addInnerHTML("#brusselsSprouts", `<li>${step7}</li>`);
    return obtainInstruction("brusselsSprouts", 7);
  })
  .then((step8) => {
    addInnerHTML("#brusselsSprouts", `<li>${step8}</li>`);
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await
async function getBroccoli() {
  try {
    addInnerHTML("#broccoli", `<li>${await obtainInstruction("broccoli", 0)}</li>`);
    addInnerHTML("#broccoli", `<li>${await obtainInstruction("broccoli", 1)}</li>`);
    addInnerHTML("#broccoli", `<li>${await obtainInstruction("broccoli", 2)}</li>`);
    addInnerHTML("#broccoli", `<li>${await obtainInstruction("broccoli", 3)}</li>`);
    addInnerHTML("#broccoli", `<li>${await obtainInstruction("broccoli", 4)}</li>`);
    addInnerHTML("#broccoli", `<li>${await obtainInstruction("broccoli", 5)}</li>`);
    addInnerHTML("#broccoli", `<li>${await obtainInstruction("broccoli", 6)}</li>`);
    addInnerHTML("#broccoli", `<li>${await obtainInstruction("broccoli", 7)}</li>`);
  } catch (err) {
    console.log(err);
  }
}

getBroccoli();

// Bonus 2 - Promise all
// ...