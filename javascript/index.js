// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    // ADD NEXT STEP HERE
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
                    // Bonus 1
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
    // Bonus 1
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  const step0 = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

  const step1 = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

  const step2 = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

  const step3 = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

  const step4 = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

  const step5 = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

  const step6 = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  // Bonus 1
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli();

// Bonus 2
// Using Promise.all() with then/catch syntax:
const pr0 = obtainInstruction("broccoli", 0);
const pr1 = obtainInstruction("broccoli", 1);
const pr2 = obtainInstruction("broccoli", 2);
const pr3 = obtainInstruction("broccoli", 3);
const pr4 = obtainInstruction("broccoli", 4);
const pr5 = obtainInstruction("broccoli", 5);
const pr6 = obtainInstruction("broccoli", 6);

Promise.all([pr0, pr1, pr2, pr3, pr4, pr5, pr6])
  .then((values) => {
    values.forEach((instruction) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${instruction}</li>`;
    });

    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((err) => console.log(err));
