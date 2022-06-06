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

                    getInstruction(
                      "mashedPotatoes",
                      5,
                      (step6) => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>${step6}</li>`;
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
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
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
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
              obtainInstruction("steak", 7).then((step7) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step7}</li>`;
                obtainInstruction("steak", 8).then((step8) => {
                  document.querySelector(
                    "#steak"
                  ).innerHTML += `<li>${step8}</li>`;
                  document.querySelector("#steakImg").removeAttribute("hidden");
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
  const firstInstruction = await obtainInstruction("broccoli", 0);
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${firstInstruction}</li>`;

  const secondInstruction = await obtainInstruction("broccoli", 1);
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${secondInstruction}</li>`;

  const thirdInstruction = await obtainInstruction("broccoli", 2);
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${thirdInstruction}</li>`;

  const fourthInstruction = await obtainInstruction("broccoli", 3);
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${fourthInstruction}</li>`;

  const fifthInstruction = await obtainInstruction("broccoli", 4);
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${fifthInstruction}</li>`;

  const sixthInstruction = await obtainInstruction("broccoli", 5);
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${sixthInstruction}</li>`;

  const seventhInstruction = await obtainInstruction("broccoli", 6);
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${seventhInstruction}</li>`;

  const eigthInstruction = await obtainInstruction("broccoli", 7);
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${eigthInstruction}</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli();

// Bonus 2 - Promise all

// const brusselsSproutsZero = obtainInstruction("brusselsSprouts", 0)
// const brusselsSproutsOne = obtainInstruction("brusselsSprouts", 1)
// const brusselsSproutsTwo = obtainInstruction("brusselsSprouts", 2)
// const brusselsSproutsThree = obtainInstruction("brusselsSprouts", 3)
// const brusselsSproutsFour = obtainInstruction("brusselsSprouts", 4)
// const brusselsSproutsFive = obtainInstruction("brusselsSprouts", 5)
// const brusselsSproutsSix = obtainInstruction("brusselsSprouts", 6)

// Promise.all([brusselsSproutsZero, brusselsSproutsOne, brusselsSproutsOne, brusselsSproutsThree, brusselsSproutsFour, brusselsSproutsFive, brusselsSproutsSix]).then((values) => {
// values.forEach...
// })

// We need to to this loop to get promises and store them in an array. That's how Promise.all work.
let arrayOfPromises = [];
for (let i = 0; i < 7; i++) {
  arrayOfPromises.push(obtainInstruction("brusselsSprouts", i));
}

Promise.all;
