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
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1);
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })

// Iteration 3 using async/await
async function makeBroccoli() {
  for (let i = 0; i < broccoli.length; i++){
    await obtainInstruction("broccoli", i);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[i]}</li>`
  }
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

// The same code as above but without a for loop.

// let instruction1;
// let instruction2;
// let instruction3;
// let instruction4;
// let instruction5;
// let instruction6;
// let instruction7;

// async function makeBroccoli() {
//   instruction1 = await obtainInstruction("broccoli", 0);
//   document.querySelector("#broccoli").innerHTML += `<li>${instruction1}</li>`
//   instruction2 = await obtainInstruction("broccoli", 1);
//   document.querySelector("#broccoli").innerHTML += `<li>${instruction2}</li>`
//   instruction3 = await obtainInstruction("broccoli", 2);
//   document.querySelector("#broccoli").innerHTML += `<li>${instruction3}</li>`
//   instruction4 = await obtainInstruction("broccoli", 3);
//   document.querySelector("#broccoli").innerHTML += `<li>${instruction4}</li>`
//   instruction5 = await obtainInstruction("broccoli", 4);
//   document.querySelector("#broccoli").innerHTML += `<li>${instruction5}</li>`
//   instruction6 = await obtainInstruction("broccoli", 5);
//   document.querySelector("#broccoli").innerHTML += `<li>${instruction6}</li>`
//   instruction7 = await obtainInstruction("broccoli", 6);
//   document.querySelector("#broccoli").innerHTML += `<li>${instruction7}</li>`
//   document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
//   document.querySelector("#broccoliImg").removeAttribute("hidden");
// }

makeBroccoli();

// Bonus 2 - Promise all
const instruction1 = obtainInstruction('brusselsSprouts', 0);
const instruction2 = obtainInstruction('brusselsSprouts', 1);
const instruction3 = obtainInstruction('brusselsSprouts', 2);
const instruction4 = obtainInstruction('brusselsSprouts', 3);
const instruction5 = obtainInstruction('brusselsSprouts', 4);
const instruction6 = obtainInstruction('brusselsSprouts', 5);
const instruction7 = obtainInstruction('brusselsSprouts', 6);
const instruction8 = obtainInstruction('brusselsSprouts', 7);

const brusselsSproutsArray = [instruction1, instruction2, instruction3, instruction4, instruction5, instruction6, instruction7, instruction8];


Promise.all(brusselsSproutsArray)
  .then((brusselsSproutsArray) => {
    for (let i = 0; i < brusselsSproutsArray.length; i++){
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSproutsArray[i]}</li>`
    }
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })