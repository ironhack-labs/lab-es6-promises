// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*   getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */

/*  document.querySelector(
      "#mashedPotatoes"
    ).innerHTML += `<li>${mashedPotatoes[0]}</li>`;
    document.querySelector(
      "#mashedPotatoes"
    ).innerHTML += `<li>${mashedPotatoes[1]}</li>`;
    document.querySelector(
      "#mashedPotatoes"
    ).innerHTML += `<li>${mashedPotatoes[2]}</li>`;
    document.querySelector(
      "#mashedPotatoes"
    ).innerHTML += `<li>${mashedPotatoes[3]}</li>`;
    document.querySelector(
      "#mashedPotatoes"
    ).innerHTML += `<li>${mashedPotatoes[4]}</li>`;
    document.querySelector(
      "#mashedPotatoes"
    ).innerHTML += `<li>Mashed potatoes are ready!</li>`; */
// Iteration 1 - using callbacks
// ...

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
                    ).innerHTML += `<li>${step5}</li>
          <li>Mashed potatoes are ready!</li>`;
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
// ...

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
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
  })
  .then(() => {
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    let stepOne = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${stepOne}</li>`;
    let stepTwo = await obtainInstruction("brusselsSprouts", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${stepTwo}</li>`;
    let stepThree = await obtainInstruction("brusselsSprouts", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${stepThree}</li>`;
    let stepFour = await obtainInstruction("brusselsSprouts", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${stepFour}</li>`;
    let stepFive = await obtainInstruction("brusselsSprouts", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${stepFive}</li>`;
    let stepSix = await obtainInstruction("brusselsSprouts", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${stepSix}</li>`;
    let stepSeven = await obtainInstruction("brusselsSprouts", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${stepSeven}</li>`;
    let stepEight = "Broccoli is ready!";
    document.querySelector("#broccoli").innerHTML += `<li>${stepEight}</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (err) {
    console.log(err);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
// ...

Promise.all([
  obtainInstruction("#brusselsSprouts", 0),
  obtainInstruction("#brusselsSprouts", 1),
  obtainInstruction("#brusselsSprouts", 2),
  obtainInstruction("#brusselsSprouts", 3),
  obtainInstruction("#brusselsSprouts", 4),
  obtainInstruction("#brusselsSprouts", 5),
  obtainInstruction("#brusselsSprouts", 6),
  obtainInstruction("#brusselsSprouts", 7),
])
  .then(
    (values) =>
      (document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${values}</li>`)
  )
  .catch((err) => console.log(err));
