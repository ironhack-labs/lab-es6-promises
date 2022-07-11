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
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  // ... Your code here
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;
          getInstruction("mashedPotatoes", 5, (step5) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step5}</li>`;
            document
              .querySelector("#mashedPotatoesImg")
              .removeAttribute("hidden");
            // ...
          });
        });
      });
    });
  });
});

// Iteration 2 - using promises
// ...

// Iteration 2 - using promises
// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return steak[1];
  })
  .then((step1) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    }, 2000);
    // setTimeout(
    //   (document.querySelector("#steak").innerHTML += `<li>${step1}</li>`),
    //   2000
    // );
    // document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;

    return steak[2];
  })
  .then((step2) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    }, 2000);
    return steak[3];
  })
  .then((step3) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    }, 2000);
    return steak[4];
  })
  .then((step4) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    }, 2000);
    return steak[5];
  })
  .then((step5) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    }, 2000);
    return steak[6];
  })
  .then((step6) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    }, 2000);
  })
  .then(() => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`;
    }, 2000);
    // return steak[8];
  })
  .then(() => {
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// ... Your code here

// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  // ... Your code here
  // console.log(broccoli);
  for (let index = 0; index < broccoli.length; index++) {
    await obtainInstruction("broccoli", index);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${broccoli[index]}</li>`;
  }
}
document.querySelector("#broccoliImg").removeAttribute("hidden");
makeBroccoli();
// Bonus 2 - Promise all
// ...

Promise.all(brusselsSprouts)
  .then((values) => {
    for (let index = 0; index < brusselsSprouts.length; index++) {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${brusselsSprouts[index]}</li>`;
    }
  })
  .then(() => {
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  });
