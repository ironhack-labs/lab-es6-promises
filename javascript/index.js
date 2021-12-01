// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Iteration 1 - using callbacks
async function makeMashed() {
  getInstruction(
    "mashedPotatoes",
    0,
    (step1) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step1}</li>`;

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
}

makeMashed();

// Iteration 2 - using promises
async function makeSteak() {
  obtainInstruction("steak", 0).then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    obtainInstruction("steak", 1).then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
      obtainInstruction("steak", 2).then((step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
        obtainInstruction("steak", 3).then((step3) => {
          document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
          obtainInstruction("steak", 4).then((step4) => {
            document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
            obtainInstruction("steak", 5).then((step5) => {
              document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
              obtainInstruction("steak", 6).then((step6) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step6}</li>`;
                obtainInstruction("steak", 7).then((step7) => {
                  document.querySelector(
                    "#steak"
                  ).innerHTML += `<li>${step7}</li>`;
                  document.querySelector("#steakImg").removeAttribute("hidden");
                });
              });
            });
          });
        });
      });
    });
  });
}

makeSteak();

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    await obtainInstruction("broccoli", 0).then((step0) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    });

    await obtainInstruction("broccoli", 1).then((step1) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    });

    await obtainInstruction("broccoli", 2).then((step2) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    });

    await obtainInstruction("broccoli", 3).then((step3) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    });

    await obtainInstruction("broccoli", 4).then((step4) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    });

    await obtainInstruction("broccoli", 5).then((step5) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    });

    await obtainInstruction("broccoli", 6).then((step6) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    });

    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (err) {
    console.log(err);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
function makeBrussels() {
  let steps = [];
  for (let i = 0; i < 8; i++)
    steps.push(
      obtainInstruction("brusselsSprouts", i).then((data) => {
        return data;
      })
    );

  Promise.all(steps).then((values) => {
    values.forEach((element) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${element}</li>`;
    });
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  });
}

makeBrussels();
