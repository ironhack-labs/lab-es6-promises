// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks

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
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>foods ready</li>`;
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
    // Display the second step
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    // Get the next step
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    // Display the third step
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    // Get the next step
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    // Display the fourth step
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    // Get the next step
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    // Display the fifth step
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    // Get the next step
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    // Display the sixth step
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    // Get the next step
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    // Display the seventh step
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    // Add a final message
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
  })
  .catch((error) => {
    // Handle any errors
    console.log("There is an error:", error);
  })
  .finally(() => {
    // Make the steak image visible
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// ... Your code here

// Iteration 3 using async/await
// ...
async function brocList() {
  try {
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li> ${await obtainInstruction("broccoli", 0)}</li>`;

    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li> ${await obtainInstruction("broccoli", 1)}</li>`;

    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li> ${await obtainInstruction("broccoli", 2)}</li>`;

    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li> ${await obtainInstruction("broccoli", 3)}</li>`;

    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li> ${await obtainInstruction("broccoli", 4)}</li>`;

    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li> ${await obtainInstruction("broccoli", 5)}</li>`;

    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li> ${await obtainInstruction("broccoli", 6)}</li>`;
  } catch (error) {
    console.log("something wrong with broccoli");
  } finally {
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }
}
brocList();

// Bonus 2 - Promise all
async function allTheSprouts() {
  try {
    const allResponses = await Promise.all([
      obtainInstruction("brusselsSprouts", 0),
      obtainInstruction("brusselsSprouts", 1),
      obtainInstruction("brusselsSprouts", 2),
      obtainInstruction("brusselsSprouts", 3),
      obtainInstruction("brusselsSprouts", 4),
      obtainInstruction("brusselsSprouts", 5),
      obtainInstruction("brusselsSprouts", 6),
      obtainInstruction("brusselsSprouts", 7),
    ]);

    allResponses.forEach((response) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li> ${response} <li>`;
    });
  } catch (error) {
    console.log(error);
  } finally {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>sprouts are ready </li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  }
}

allTheSprouts();

/*TypeError: Cannot read properties of null (reading 'innerHTML')
    at index.js:220:16
    at Array.forEach (<anonymous>)
    at allTheSprouts (index.js:219:18)*/
