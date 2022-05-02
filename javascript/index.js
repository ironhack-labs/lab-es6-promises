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
                      4,
                      () => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>Mashed potates are ready!</li>`;
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

//tem de ser 4 pq nao ha 5 passo na receita,por isso dava erro

// Iteration 2 - using promises
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
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction("steak", 8);
  })
  .catch((err) => console.log(err));

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction("broccoli", 0);
    const step1 = await obtainInstruction("broccoli", 1);
    const step2 = await obtainInstruction("broccoli", 2);
    const step3 = await obtainInstruction("broccoli", 3);
    const step4 = await obtainInstruction("broccoli", 4);
    const step5 = await obtainInstruction("broccoli", 5);
    const step6 = await obtainInstruction("broccoli", 6);
    const step7 = await obtainInstruction("broccoli", 6);

    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>  Broccoli is ready!</li>`;
  } catch (err) {
    console.log(err);
  }
}
makeBroccoli();

//bonus 1

let imgPotatoes = document.getElementById("mashedPotatoesImg");
imgPotatoes.removeAttribute("hidden");

let imgSteak = document.getElementById("steakImg");
imgSteak.removeAttribute("hidden");

let imgBruss = document.getElementById("brusselsSproutsImg");
imgBruss.removeAttribute("hidden");

let imgBroccoli = document.getElementById("broccoliImg");
imgBroccoli.removeAttribute("hidden");

// Bonus 2 - Promise all


const p1 = obtainInstruction("brusselsSprouts", 0);
const p2 =  obtainInstruction("brusselsSprouts", 1);
const p3 =  obtainInstruction("brusselsSprouts", 2);
const p4 =  obtainInstruction("brusselsSprouts", 3);
const p5 =  obtainInstruction("brusselsSprouts", 4);
const p6 =  obtainInstruction("brusselsSprouts", 5);
const p7 =  obtainInstruction("brusselsSprouts", 6);



Promise.all([p1, p2, p3, p4, p5, p6, p7])
.then(value => {value.forEach(step => document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`)
document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;})
.catch((err) => console.log(err));