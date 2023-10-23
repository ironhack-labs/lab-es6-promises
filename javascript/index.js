// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

// Iteration 1 - using callbacks

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
obtainInstruction("steak", 0).then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  return new Promise(function (resolve) {
    obtainInstruction("steak", 1).then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
      return new Promise(function (resolve) {
        obtainInstruction("steak", 2).then((step2) => {
          document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
          return new Promise(function (resolve) {
            obtainInstruction("steak", 3).then((step3) => {
              document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
              return new Promise(function (resolve) {
                obtainInstruction("steak", 4).then((step4) => {
                  document.querySelector(
                    "#steak"
                  ).innerHTML += `<li>${step4}</li>`;
                  return new Promise(function (resolve) {
                    obtainInstruction("steak", 5).then((step5) => {
                      document.querySelector(
                        "#steak"
                      ).innerHTML += `<li>${step5}</li>`;
                      return new Promise(function (resolve) {
                        obtainInstruction("steak", 6).then((step6) => {
                          document.querySelector(
                            "#steak"
                          ).innerHTML += `<li>${step6}</li>`;
                          return new Promise(function (resolve) {
                            obtainInstruction("steak", 7).then((step7) => {
                              document.querySelector(
                                "#steak"
                              ).innerHTML += `<li>${step7}</li>`;
                              document.querySelector(
                                "#steak"
                              ).innerHTML += `<li>Steak is ready!</li>`;
                              document
                                .querySelector("#steakImg")
                                .removeAttribute("hidden");
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 3 using async/await
async function makeBroccoli() {
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
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  });
}
makeBroccoli();

// Bonus 2 - Promise all

const step0 = obtainInstruction("brusselsSprouts", 0);
const step1 = obtainInstruction("brusselsSprouts", 1);
const step2 = obtainInstruction("brusselsSprouts", 2);
const step3 = obtainInstruction("brusselsSprouts", 3);
const step4 = obtainInstruction("brusselsSprouts", 4);
const step5 = obtainInstruction("brusselsSprouts", 5);
const step6 = obtainInstruction("brusselsSprouts", 6);
const step7 = obtainInstruction("brusselsSprouts", 7);

Promise.all([step0, step1, step2, step3, step4, step5, step6, step7]).then(
  (steps) => {
    steps.forEach(function (step) {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step}</li>`;
    });
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  }
);

/*
Promise.all([step0, step1, step2, step3, step4, step5, step6, step7]).then(
  (step) => {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[0]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[1]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[2]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[3]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[4]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[5]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[6]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[7]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  }
);
*/
