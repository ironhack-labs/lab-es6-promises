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
let mashedSteps = (step) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
};
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
    mashedSteps(step1);
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        mashedSteps(step2);
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            mashedSteps(step3);
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                mashedSteps(step4);
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    mashedSteps(step5);
                    mashedSteps("Mashed potatoes are ready!");
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
//
obtainInstruction("steak", 0)
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
  })
  .catch((err) => {
    console.error(err);
  });

// Iteration 3 using async/await
const myFunction = async () => {
  try {
    const firstResult = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${firstResult}</li>`;
    const secondResult = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${secondResult}</li>`;
    const thirdResult = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${thirdResult}</li>`;
    const fourthResult = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${fourthResult}</li>`;
    const fifthResult = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${fifthResult}</li>`;
    const sixthResult = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${sixthResult}</li>`;
    const seventhResult = await obtainInstruction("broccoli", 6);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${seventhResult}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
  } catch (err) {
    console.error(err);
  }
};

myFunction();
// ...

// Bonus 2 - Promise all
// ...
