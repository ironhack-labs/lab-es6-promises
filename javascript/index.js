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

getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

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
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden")
        });
      });
    });
  });
});
// ...

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
.then(function (step) {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction ('steak', 1)
})
.then(function (step) {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction('steak', 2)
})
.then(function (step) {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction('steak', 3)
})
.then(function (step) {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction('steak', 4)
})
.then(function (step) {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction('steak', 5)
})
.then(function (step) {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction('steak', 6)
})
.then(function (step) {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction('steak', 7)
})
.then(function (step) {
  document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
  document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
})


// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  const step0 = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li> ${step0}</li>`;
  const step1 = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li> ${step1}</li>`;
  const step2 = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li> ${step2}</li>`;
  const step3 = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li> ${step3}</li>`;
  const step4 = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li> ${step4}</li>`;
  const step5 = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li> ${step5}</li>`;
  const step6 = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li> ${step6}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden")
}
makeBroccoli();

// Bonus 2 - Promise all

const p1 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 0));
});
const p2 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 1));
});
const p3 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 2));
});
const p4 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 3));
});
const p5 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 4));
});
const p6 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 5));
});
const p7 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 6));
});
const p8 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 7));
});

let brussels = Promise.all([p1, p2, p3, p4, p5, p6, p7, p8]);
console.log(brussels);

brussels.then((values) => { for (let i = 0; i < values.length; i ++){
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[i]}</li>`;
}
document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`;
document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")});
// ...