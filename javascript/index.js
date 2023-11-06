// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction(
//   "mashedPotatoes",
//   0,
//   (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   1,
//   (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   2,
//   (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   3,
//   (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   4,
//   (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   },
//   (error) => console.log(error)
// );

// Iteration 1 - using callbacks
// ...
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
                    ).innerHTML += `<li>${"Mashed Patato is ready "}</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (err) => console.log(err)
                );
              },
              (err) => console.log(err)
            );
          },
          (err) => console.log(err)
        );
      },
      (err) => console.log(err)
    );
  },
  (err) => console.log(err)
);
// add the last sentence

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
    document.querySelector("#steakImg").removeAttribute("hidden");
    document.querySelector(
      "#steak"
    ).innerHTML += `<li>${"Stake is ready!"}</li>`;
    return obtainInstruction("steak", 8);
  });
// add 9.th step

// Iteration 3 using async/await
async function makeBroccoli() {
  // ... Your code here
  try {
    const response = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${response}</li>`;
    const response1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${response1}</li>`;
    const response2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${response2}</li>`;
    const response3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${response3}</li>`;
    const response4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${response4}</li>`;
    const response5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${response5}</li>`;
    const response6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${response6}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${"Broccoli is ready"}</li>`;

    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (err) {
    console.log("Something went wrong:", err);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
// ...

const instructionPromises = [];

for (let i = 0; i < brusselsSprouts.length; i++) {
  instructionPromises.push(obtainInstruction("brusselsSprouts", i));
}

Promise.all(instructionPromises)
  .then((instructions) => {
    instructions.forEach((instruction, index) => {
      const element = document.createElement("li");
      document.getElementById("brusselsSprouts").appendChild(element);
      element.innerHTML = `Step ${index + 1}: ${instruction}`;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    });
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${"Brussels sprouts are ready!"}</li>`;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
