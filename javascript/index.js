// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code
//
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
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                    document.getElementById("mashedPotatoesImg").hidden = false;
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
  .then((two) => {
    document.querySelector("#steak").innerHTML += `<li>${two}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((three) => {
    document.querySelector("#steak").innerHTML += `<li>${three}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((four) => {
    document.querySelector("#steak").innerHTML += `<li>${four}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((five) => {
    document.querySelector("#steak").innerHTML += `<li>${five}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((six) => {
    document.querySelector("#steak").innerHTML += `<li>${six}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((seven) => {
    document.querySelector("#steak").innerHTML += `<li>${seven}</li>`;
    return obtainInstruction("steak", 7);
  })
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>steak is ready!</li>`;
    document.getElementById("steakImg").hidden = false;
  });
// Iteration 3 using async/await
async function makeBroccoli() {
  let x = [];
  let number = 0;
  function repetative() {
    document.querySelector("#broccoli").innerHTML += `<li>${x[number]}</li>`;
    number++;
  }
  try {
    x.push(await obtainInstruction("broccoli", 0));
    repetative();
    x.push(await obtainInstruction("broccoli", 1));
    repetative();
    x.push(await obtainInstruction("broccoli", 2));
    repetative();
    x.push(await obtainInstruction("broccoli", 3));
    repetative();
    x.push(await obtainInstruction("broccoli", 4));
    repetative();
    x.push(await obtainInstruction("broccoli", 5));
    repetative();
    x.push(await obtainInstruction("broccoli", 6));
    repetative();
    x.push("Broccoli is ready!");
    repetative();
    document.getElementById("broccoliImg").hidden = false;
  } catch (err) {
    console.log("There was an error loading directions");
  }
}
makeBroccoli();

// Bonus 2 - Promise all
// ...

let bonus = [];
bonus.push(obtainInstruction("brusselsSprouts", 0));
bonus.push(obtainInstruction("brusselsSprouts", 1));
bonus.push(obtainInstruction("brusselsSprouts", 2));
bonus.push(obtainInstruction("brusselsSprouts", 3));
bonus.push(obtainInstruction("brusselsSprouts", 4));
bonus.push(obtainInstruction("brusselsSprouts", 5));
bonus.push(obtainInstruction("brusselsSprouts", 6));
bonus.push(obtainInstruction("brusselsSprouts", 7));
// console.log(bonus);
// console.log(bonus[0].then((values) => console.log(values)));
Promise.all(bonus).then((values) => document.querySelector('#brusselsSprouts').innerHTML += `<li>${values[0]}</li><li>${values[1]}</li><li>${values[2]}</li><li>${values[3]}</li><li>${values[4]}</li><li>${values[5]}</li><li>${values[6]}</li><li>${values[7]}</li><li>BrusselsSprouts are ready!</li>`,
  document.getElementById("brusselsSproutsImg").hidden = false
)
