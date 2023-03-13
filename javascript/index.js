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
// ...

getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  // ... Your code here
  // ... Callback hell starts here!
  getInstruction("mashedPotatoes", 1, (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

    getInstruction("mashedPotatoes", 2, (step0) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step0}</li>`;

      getInstruction("mashedPotatoes", 3, (step0) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step0}</li>`;

        getInstruction("mashedPotatoes", 4, (step0) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step0}</li>`;

          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document
            .querySelector("#mashedPotatoesImg")
            .removeAttribute("hidden");
        });
      });
    });
  });

  /* just for fun a recursive for loop */
  //   for (let i = 1; i < 5; i++) {
  //     getInstruction("mashedPotatoes", i, (step0) => {
  //       document.querySelector(
  //         "#mashedPotatoes"
  //       ).innerHTML += `<li>${step0}</li>`;
  //     });
  //   }
});

// Iteration 2 - using promises
// ...

obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return obtainInstruction("steak", 1);
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");

    return true;
  });

// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  // ... Your code here

  for (let i = 0; i < 7; i++) {
    const step = await obtainInstruction("broccoli", i);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
  }

  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli();

// Bonus 2 - Promise all
// ...

const brusselStep0 = obtainInstruction("brusselsSprouts", 0);
const brusselStep1 = obtainInstruction("brusselsSprouts", 1);
const brusselStep2 = obtainInstruction("brusselsSprouts", 2);
const brusselStep3 = obtainInstruction("brusselsSprouts", 3);
const brusselStep4 = obtainInstruction("brusselsSprouts", 4);
const brusselStep5 = obtainInstruction("brusselsSprouts", 5);
const brusselStep6 = obtainInstruction("brusselsSprouts", 6);

Promise.all([
  brusselStep0,
  brusselStep1,
  brusselStep2,
  brusselStep3,
  brusselStep4,
  brusselStep5,
  brusselStep6,
]).then((response) => {
  for (res in response) {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response[res]}</li>`;
  }
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
