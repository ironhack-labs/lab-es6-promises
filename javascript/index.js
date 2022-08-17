// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// // Out of sync
//   getInstruction("mashedPotatoes", 0, (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   }, (error) => console.log(error));

//   getInstruction("mashedPotatoes", 1, (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   }, (error) => console.log(error));

//   getInstruction("mashedPotatoes", 2, (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   }, (error) => console.log(error));

//   getInstruction("mashedPotatoes", 3, (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   }, (error) => console.log(error));

//   getInstruction("mashedPotatoes", 4, (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   }, (error) => console.log(error));

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed Potatoes are Ready!</li>`;
          let img = document.getElementById("mashedPotatoesImg");
          img.removeAttribute("hidden");
        });
      });
    });
  });
});
// Iteration 2 - using promises
// obtainInstruction("steak", 0).then((step0) => {
//   document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
// });
// obtainInstruction("steak", 1).then((step1) => {
//   document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
// });
// obtainInstruction("steak", 2).then((step2) => {
//   document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
// });
// obtainInstruction("steak", 3).then((step3) => {
//   document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
// });
// obtainInstruction("steak", 4).then((step4) => {
//   document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
// });

// Iteration 2 - using promises
// obtainInstruction("steak", 0)
//   .then((step0) => {
//     document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
//     return mashedPotatoes[1];
//   })

//   .then((step2) => {
//     document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
//     return mashedPotatoes[2];
//   })
//   .then((step3) => {
//     document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
//     return mashedPotatoes[3];
//   })
//   .then((step4) => {
//     document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
//     return mashedPotatoes[4];
//   })
//   .then((step5) => {
//     document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
//     return mashedPotatoes[5];
//   });

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
              obtainInstruction("steak", 7)
                .then((step7) => {
                  document.querySelector(
                    "#steak"
                  ).innerHTML += `<li>${step7}</li>`;
                })
                .then(() => {
                  document.querySelector(
                    "#steak"
                  ).innerHTML += `<li>Steak is ready!!!</li>`;
                })
                .then(() => {
                  let img = document.getElementById("steakImg");
                  img.removeAttribute("hidden");
                });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 - using promises
// obtainInstruction("steak", 0).then((step0) => {
//   document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
// });
// obtainInstruction("steak", 1).then((step1) => {
//   document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
// });
// obtainInstruction("steak", 2).then((step2) => {
//   document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
// });
// obtainInstruction("steak", 3).then((step3) => {
//   document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
// });
// ... Your code here

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here,
  let count = -1;
  for await (const i of broccoli) {
    count += 1;
    let result = await obtainInstruction("broccoli", count);
    document.querySelector("#broccoli").innerHTML += `<li>${result}</li>`;
  }

  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is Ready!</li>`;

  let img = document.getElementById("broccoliImg");
  img.removeAttribute("hidden");

  // let result = await obtainInstruction("broccoli", 0);
  // document.querySelector("#broccoli").innerHTML += `<li>${result}</li>`;

  // result = await obtainInstruction("broccoli", 1);
  // document.querySelector("#broccoli").innerHTML += `<li>${result}</li>`;
}

makeBroccoli();

//Bonus 1

// Bonus 2 - Promise all
// ...
// async function makeBrusselsSprouts() {
//   // ... Your code here,

//   let result = await obtainInstruction("brusselsSprouts", 0);
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${result}</li>`;

//   let result2 = await obtainInstruction("brusselsSprouts", 1);
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${result2}</li>`;
// }

// makeBrusselsSprouts();

const p1 = obtainInstruction("brusselsSprouts", 0);
const p2 = obtainInstruction("brusselsSprouts", 1);
const p3 = obtainInstruction("brusselsSprouts", 2);
const p4 = obtainInstruction("brusselsSprouts", 3);
const p5 = obtainInstruction("brusselsSprouts", 4);
const p6 = obtainInstruction("brusselsSprouts", 5);
const p7 = obtainInstruction("brusselsSprouts", 6);

Promise.all([p1, p2, p3, p4, p5, p6]).then((values) => {
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${values[0]}</li>`;
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${values[1]}</li>`;
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${values[2]}</li>`;
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${values[3]}</li>`;
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${values[4]}</li>`;
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${values[5]}</li>`;
  let img = document.getElementById("brusselsSproutsImg");
  img.removeAttribute("hidden");
});
