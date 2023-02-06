// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  // ... Your code here
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;

          document.getElementById("mashedPotatoesImg").removeAttribute("hidden");
        });
      });
    });
  });
});

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return obtainInstruction("steak", 1).then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;

      return obtainInstruction("steak", 2).then((step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;

        return obtainInstruction("steak", 3).then((step3) => {
          document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;

          return obtainInstruction("steak", 4).then((step4) => {
            document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;

            return obtainInstruction("steak", 5).then((step5) => {
              document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;

              document.getElementById("steakImg").removeAttribute("hidden");
            });
          });
        });
      });
    });
  })
  .catch((err) => console.log(err));

// Iteration 3 using async/await
async function makeBroccoli() {
  // ... Your code here
  try {
    let zeroStep = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${zeroStep}</li>`;

    let oneStep = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${oneStep}</li>`;

    let twoStep = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${twoStep}</li>`;

    let threeStep = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${threeStep}</li>`;

    let fourStep = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${fourStep}</li>`;

    let fiveStep = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;

    document.getElementById("broccoliImg").removeAttribute("hidden");
  } 
  catch (err) {
    console.log(err);
  }
}
makeBroccoli();

// Bonus 2 - Promise all

const st1 = obtainInstruction("brusselsSprouts", 0);
const st2 = obtainInstruction("brusselsSprouts", 1);
const st3 = obtainInstruction("brusselsSprouts", 2);
const st4 = obtainInstruction("brusselsSprouts", 3);
const st5 = obtainInstruction("brusselsSprouts", 4);
const brusselsArr = [st1, st2, st3, st4, st5];

Promise.all(brusselsArr)
  .then((step) => {
    step.forEach(
      (step) =>
        (document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`)
    );
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    
    document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((err) => console.log(err));
