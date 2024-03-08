// // This will print in the wrong order.
// // We added it as an example and to test that the arrays from data.js are loaded

// // 🚨🚨🚨 Comment out the below code before you start working on the code

// // // Out of sync
// //   getInstruction("mashedPotatoes", 0, (step1) => {
// //     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// //   }, (error) => console.log(error));

// //   getInstruction("mashedPotatoes", 1, (step2) => {
// //     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// //   }, (error) => console.log(error));

// //   getInstruction("mashedPotatoes", 2, (step3) => {
// //     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// //   }, (error) => console.log(error));

// //   getInstruction("mashedPotatoes", 3, (step4) => {
// //     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// //   }, (error) => console.log(error));

// //   getInstruction("mashedPotatoes", 4, (step5) => {
// //     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
// //     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// //   }, (error) => console.log(error));

// // Iteration 1 - using callbacks
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   console.log("test 1");

//   getInstruction("mashedPotatoes", 1, (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//     console.log("test 2");

//     getInstruction("mashedPotatoes", 2, (step3) => {
//       document.querySelector(
//         "#mashedPotatoes"
//       ).innerHTML += `<li>${step3}</li>`;
//       console.log("test 3");
//       getInstruction("mashedPotatoes", 3, (step4) => {
//         document.querySelector(
//           "#mashedPotatoes"
//         ).innerHTML += `<li>${step4}</li>`;
//         console.log("test 4");

//         getInstruction("mashedPotatoes", 4, (step5) => {
//           document.querySelector(
//             "#mashedPotatoes"
//           ).innerHTML += `<li>${step5}</li>`;
//           console.log("test 5");
//           // ... Your code here
//           // ...
//         });
//         // ... Your code here
//         // ...
//       });
//       // ... Your code here
//       // ...
//     });
//     // ... Your code here
//     // ...
//   });
//   // ... Your code here
//   // ...
// });

// // Iteration 2 - using promises
// obtainInstruction("steak", 0)
//   .then((step1) => {
//     document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;

//     return obtainInstruction("steak", 1);
//   })
//   .then((step2) => {
//     document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;

//     return obtainInstruction("steak", 2);
//   })
//   .then((step3) => {
//     document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;

//     return obtainInstruction("steak", 3);
//   })
//   .then((step4) => {
//     document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;

//     return obtainInstruction("steak", 4);
//   })
//   .then((step5) => {
//     document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
//   })
//   .catch((error) => console.log(error));

// // Iteration 3 using async/await
// async function makeBroccoli() {
//   try {
//     const step0 = await obtainInstruction("broccoli", 0);
//     document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

//     const step1 = await obtainInstruction("broccoli", 1);
//     document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

//     const step2 = await obtainInstruction("broccoli", 2);
//     document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

//     const step3 = await obtainInstruction("broccoli", 3);
//     document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

//     const step4 = await obtainInstruction("broccoli", 4);
//     document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

//     document.querySelector(
//       "#broccoli"
//     ).innerHTML += `<li>Broccoli is ready!</li>`;
//   } catch (error) {
//     console.log(error);
//   }
// }

// Call the makeBroccoli function
async function makeBroccoli() {
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

    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;

    // Display the broccoli image
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

async function makeMashedPotatoes() {
  try {
    const step0 = await obtainInstruction("mashedPotatoes", 0);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction("mashedPotatoes", 1);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction("mashedPotatoes", 2);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction("mashedPotatoes", 3);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction("mashedPotatoes", 4);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

    document.querySelector(
      "#mashedPotatoes"
    ).innerHTML += `<li>Mashed Potatoes are ready!</li>`;

    // Display the broccoli image
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

async function makeSteak() {
  try {
    const step0 = await obtainInstruction("steak", 0);
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction("steak", 1);
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction("steak", 2);
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction("steak", 3);
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction("steak", 4);
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;

    document.querySelector(
      "#steak"
    ).innerHTML += `<li>The steak is ready!</li>`;

    // Display the broccoli image
    document.querySelector("#steakImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

async function makeBrusselsSprouts() {
  try {
    const step0 = await obtainInstruction("brusselsSprouts", 0);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction("brusselsSprouts", 1);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction("brusselsSprouts", 2);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction("brusselsSprouts", 3);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction("brusselsSprouts", 4);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;

    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>The brussels sprouts are ready!</li>`;

    // Display the broccoli image
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

// Call the functions
makeBroccoli();

makeMashedPotatoes();

makeSteak();

// Bonus 2 - Promise all
makeBrusselsSprouts();
