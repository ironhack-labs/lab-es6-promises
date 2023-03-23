// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Iteration 1 - using callbacks

getInstruction(
  "mashedPotatoes",
  0,
  (instruction) => {
    document.querySelector(
      "#mashedPotatoes"
    ).innerHTML += `<li>${instruction}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (instruction) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${instruction}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (instruction) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${instruction}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (instruction) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${instruction}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (instruction) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${instruction}</li>`;
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
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

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
  })
  .catch((err) => {
    console.log(err);
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    const instruction0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction0}</li>`;

    const instruction1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction1}</li>`;

    const instruction2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction2}</li>`;

    const instruction3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction3}</li>`;

    const instruction4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction4}</li>`;

    const instruction5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction5}</li>`;

    const instruction6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction6}</li>`;

    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
  } catch (err) {
    console.log(err);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
async function makeBrusselsSprouts() {
  let instructions;
  try {
    instructions = await Promise.all([
      obtainInstruction("brusselsSprouts", 0),
      obtainInstruction("brusselsSprouts", 1),
      obtainInstruction("brusselsSprouts", 2),
      obtainInstruction("brusselsSprouts", 3),
      obtainInstruction("brusselsSprouts", 4),
      obtainInstruction("brusselsSprouts", 5),
      obtainInstruction("brusselsSprouts", 6),
      obtainInstruction("brusselsSprouts", 7),
    ]);
  } catch (err) {
    console.log(err);
  }
  for (const instruction of instructions) {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${instruction}</li>`;
  }
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>brussels sprouts are ready!</li>`;
}
makeBrusselsSprouts();
