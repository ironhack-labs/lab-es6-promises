// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
      getInstruction("mashedPotatoes", 2, (step2) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
          getInstruction("mashedPotatoes", 3, (step3) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
              getInstruction("mashedPotatoes", 4, (step4) => {
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
                      document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
                      document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
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
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })

  .catch((error) => console.log(error))


// Iteration 3 using async/await
async function makeBroccoli() {
    await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[0]}</li>`;
    await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[1]}</li>`
    await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[2]}</li>`
    await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[3]}</li>`;
    await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[4]}</li>`
    await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[5]}</li>`
    await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[6]}</li>`

    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
    document.querySelector("#broccoliImg").removeAttribute("hidden");
}
makeBroccoli();


// Bonus 2 - Promise all

// OPTION 1

// const p1 = new Promise((resolve, reject) => {
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[0]}</li>`;
//   resolve();
// });

// const p2 = new Promise((resolve, reject) => {
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[1]}</li>`;
//   resolve();
// });

// const p3 = new Promise((resolve, reject) => {
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[2]}</li>`;
//   resolve();
// });

// const p4 = new Promise((resolve, reject) => {
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[3]}</li>`;
//   resolve();
// });
// const p5 = new Promise((resolve, reject) => {
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[4]}</li>`;
//   resolve();
// });

// const p6 = new Promise((resolve, reject) => {
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[5]}</li>`;
//   resolve();
// });

// const p7 = new Promise((resolve, reject) => {
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[6]}</li>`;
//   resolve();
// });

// const p8 = new Promise((resolve, reject) => {
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[7]}</li>`;
//   resolve();
// });


// Promise.all([p1, p2, p3, p4, p5, p6, p7, p8]).then(() => {
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`
//   document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
// })
// .catch(error => console.log(error));

// OPTION 2

Promise.all([
  obtainInstruction('brusselsSprouts', 0), 
]).then(() => {
  for (let i = 0; i < brusselsSprouts.length; i++){
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[i]}</li>`;
  }
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
}) 
