// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
              },
              (error) => console.log(error)
            );
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
          },
          (error) => console.log(error)
        );
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
      },
      (error) => console.log(error)
    );
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
function addStep(step, dish) {
  if (dish === "steak")
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  else if (dish === "brusselsSprouts")
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
}
obtainInstruction("steak", 0)
  .then((step) => {
    addStep(step, "steak");
    return obtainInstruction("steak", 1);
  })
  .then((step) => {
    addStep(step, "steak");
    return obtainInstruction("steak", 2);
  })
  .then((step) => {
    addStep(step, "steak");
    return obtainInstruction("steak", 3);
  })
  .then((step) => {
    addStep(step, "steak");
    return obtainInstruction("steak", 4);
  })
  .then((step) => {
    addStep(step, "steak");
    return obtainInstruction("steak", 5);
  })
  .then((step) => {
    addStep(step, "steak");
    return obtainInstruction("steak", 6);
  })
  .then((step) => {
    addStep(step, "steak");
    return obtainInstruction("steak", 7);
  })
  .then(() => addStep("Steak is ready!"))
  .then(() => document.getElementById("steakImg").removeAttribute("hidden"))
  .catch((e) => console.log(e));

//Iteration 3 using async/await
async function makeBroccoli() {
  for (let i = 0; i <= 6; i++) {
    try {
      step = await obtainInstruction("broccoli", i);
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    } catch (error) {
      console.log(error);
    }
  }
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  document.getElementById("broccoliImg").removeAttribute("hidden");
}
makeBroccoli();

// Bonus 2 - Promise all
const promisesArr = [];
for (let i = 0; i <= 7; i++) {
  promisesArr.push(obtainInstruction("brusselsSprouts", i));
}
Promise.all(promisesArr).then((result) => {
  result.forEach((e) => addStep(e, "brusselsSprouts"));
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>brusselsSprouts are ready!</li>`;
  document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
});
