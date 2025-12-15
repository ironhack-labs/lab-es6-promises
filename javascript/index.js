// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

// Iteration 1 - using callbacks
// ...
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
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
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
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => {
    console.error(error);
  });

// Iteration 3 using async/await
// ...

async function makebroccoli() {
  try {
    let broccoli0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli0}</li>`;
    let broccoli1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli1}</li>`;
    let broccoli2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli2}</li>`;
    let broccoli3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli3}</li>`;
    let broccoli4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli4}</li>`;
    let broccoli5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli5}</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.error(error);
  }
}

makebroccoli();

// Bonus 2 - Promise all
// ...
