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
obtainInstruction("steak", 0)
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
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
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
    return obtainInstruction("steak", 7);
  })
  .catch((err) => console.log(err));

// Iteration 3 using async/await
async function doTheBroccoli() {
  try {
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
    // const step6 = await obtainInstruction("broccoli", 6);
    // document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}
doTheBroccoli();

// Bonus 2 - Promise all

// const promise1 = new Promise((resolve, _) => {
//   resolve(obtainInstruction("brusselsSprouts", 0));
// });
// const promise2 = new Promise((resolve, _) => {
//   resolve(obtainInstruction("brusselsSprouts", 1));
// });
// const promise3 = new Promise((resolve, _) => {
//   resolve(obtainInstruction("brusselsSprouts", 2));
// });
// const promise4 = new Promise((resolve, _) => {
//   resolve(obtainInstruction("brusselsSprouts", 3));
// });
// const promise5 = new Promise((resolve, _) => {
//   resolve(obtainInstruction("brusselsSprouts", 4));
// });
// const promise6 = new Promise((resolve, _) => {
//   resolve(obtainInstruction("brusselsSprouts", 5));
// });
// const promise7 = new Promise((resolve, _) => {
//   resolve(obtainInstruction("brusselsSprouts", 6));
// });
// // const promise8 = new Promise((resolve, _) => {
// //   resolve(obtainInstruction("brusselsSprouts", 7));
// // })

// // ask chatGPT to improve the above code above

// Promise.all([
//   promise1,
//   promise2,
//   promise3,
//   promise4,
//   promise5,
//   promise6,
//   promise7,
// ])
//   .then((values) => {
//     console.log(values);
//     values.forEach((val) => {
//       document.querySelector("#brusselsSprouts").innerHTML += `<li>${val}</li>`;
//     });
//     document.querySelector(
//       "#brusselsSprouts"
//     ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
//     document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Josh way:

const doBrussels = async () => {
  const promiseArr = [];
  for (let i = 0; i < brusselsSprouts.length; i++) {
    promiseArr.push(obtainInstruction("brusselsSprouts", i));
  }
  Promise.all(promiseArr)
    .then((promiseAllResponse) => {
      console.log(promiseAllResponse);
      promiseAllResponse.forEach((oneStep) => {
        document.querySelector(
          "#brusselsSprouts"
        ).innerHTML += `<li>${oneStep}</li>`;
      });
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    })
    .catch((err) => {
      console.group(error);
    });
};
doBrussels()
