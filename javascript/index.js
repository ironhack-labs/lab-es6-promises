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
          document
            .querySelector("#mashedPotatoesImg")
            .removeAttribute("hidden");
        });
      });
    });
  });
});
// ...

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
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// ...

// Iteration 3 using async/await
// async function makeBroccoli() {
//   const result = await obtainInstruction("broccoli", 0);
//   document.querySelector("#broccoli").innerHTML += `<li>${result}</li>`;
//   const result1 = await obtainInstruction("broccoli", 1);
//   document.querySelector("#broccoli").innerHTML += `<li>${result1}</li>`;
//   const result2 = await obtainInstruction("broccoli", 2);
//   document.querySelector("#broccoli").innerHTML += `<li>${result2}</li>`;
//   const result3 = await obtainInstruction("broccoli", 3);
//   document.querySelector("#broccoli").innerHTML += `<li>${result3}</li>`;
//   const result4 = await obtainInstruction("broccoli", 4);
//   document.querySelector("#broccoli").innerHTML += `<li>${result4}</li>`;
//   const result5 = await obtainInstruction("broccoli", 5);
//   document.querySelector("#broccoli").innerHTML += `<li>${result5}</li>`;
//   const result6 = await obtainInstruction("broccoli", 6);
//   document.querySelector("#broccoli").innerHTML += `<li>${result6}</li>`;
//   document.querySelector(
//     "#broccoli"
//   ).innerHTML += `<li>Broccoli is ready!</li>`;
//   document.querySelector("#broccoliImg").removeAttribute("hidden");
// }
// makeBroccoli();
async function makeBroccoli() {
  try {
    for (let i = 0; i < broccoli.length; i++) {
      const step = await obtainInstruction("broccoli", i);
      document.querySelector("#broccoli").innerHTML += `<li> ${step} </li>`;
      if (i === broccoli.length - 1) {
        document.querySelector(
          "#broccoli"
        ).innerHTML += `<li> broccoli is ready! </li>`;
        document.querySelector("#broccoliImg").removeAttribute("hidden");
      }
    }
  } catch (error) {
    console.error(error);
  }
}
makeBroccoli();
// ...

// Bonus 2 - Promise all
const arr = [];
for (let i = 0; i < brusselsSprouts.length; i++) {
  arr.push(obtainInstruction("brusselsSprouts", i));
}
Promise.all(arr).then((instructions) => {
  instructions.forEach((step, i) => {
    const li = document.createElement("li");
    li.innerHTML = step;
    document.getElementById("brusselsSprouts").appendChild(li);
  });
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
// Promise.all(
//   brusselsSprouts.map((_, i) => obtainInstruction("brusselsSprouts", i))
// ).then((instructions) => {
//   instructions.forEach((step, i) => {
//     const li = document.createElement("li");
//     li.innerHTML = step;
//     document.getElementById("brusselsSprouts").appendChild(li);
//   });
//   document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
// });
