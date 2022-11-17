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


/* ------------------------------------------------------------------------------------------- */
/* ------------------------------------Iteration 1-------------------------------------------- */
/* ------------------------------------------------------------------------------------------- */
// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));
/* ------------------------------------------------------------------------------------------- */
/* ------------------------------------Iteration 2-------------------------------------------- */
/* ------------------------------------------------------------------------------------------- */
// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
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
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
  })
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
  })
  .then(() => {
    document.querySelector('#steakImg').removeAttribute('hidden');
  })
  .catch((err) => {
    console.error("Catch(): ", err.message);
  })

// Iteration 3 using async/await

async function makeBroccoli() {
  try {
    //console.log(await obtainInstruction("broccoli", 0));
    let line0 = await obtainInstruction('broccoli', 0);
    let line1 = await obtainInstruction('broccoli', 0);
    let line2 = await obtainInstruction('broccoli', 0);
    let line3 = await obtainInstruction('broccoli', 0);
    let line4 = await obtainInstruction('broccoli', 0);
    let line5 = await obtainInstruction('broccoli', 0);
    let line6 = await obtainInstruction('broccoli', 0);
    let line7 = await obtainInstruction('broccoli', 0);
    // document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 0)}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${line0}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${line1}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${line2}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${line3}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${line4}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${line5}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${line6}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${line7}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
    document.querySelector("#broccoliImg").removeAttribute('hidden');
  } catch (err) {
    console.log(err);
  }
}
makeBroccoli()


// Bonus 2 - Promise all
// ...