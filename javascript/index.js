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
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    // ... Your code here
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

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
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
  })

  .catch((error) => {
    console.error("Entering catch statement");
    console.error(error);
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  // ... Your code here
  try {
    const stepOne = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${stepOne}</li>`;

    const stepTwo = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${stepTwo}</li>`;

    const stepThree = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${stepThree}</li>`;

    const stepFour = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${stepFour}</li>`;

    const stepFive = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${stepFive}</li>`;

    const stepSix = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${stepSix}</li>`;

    const stepSeven = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${stepSeven}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log("Something went wrong: ", error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
const promise1 = obtainInstruction("brusselsSprouts", 0);
const promise2 = obtainInstruction("brusselsSprouts", 1);
const promise3 = obtainInstruction("brusselsSprouts", 2);
const promise4 = obtainInstruction("brusselsSprouts", 3);
const promise5 = obtainInstruction("brusselsSprouts", 4);
const promise6 = obtainInstruction("brusselsSprouts", 5);
const promise7 = obtainInstruction("brusselsSprouts", 6);
const promise8 = obtainInstruction("brusselsSprouts", 7);

Promise.all([
  promise1,
  promise2,
  promise3,
  promise4,
  promise5,
  promise6,
  promise7,
  promise8,
])
  .then((result) => {
    result.forEach((ele) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${ele}</li>`;
    });
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((err) => console.log("catch()", err));
