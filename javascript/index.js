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


/**********************************************/
/*** Iteration 1 ******************************/
/*** Make the mashed potatoes using callbacks */
/**********************************************/

getInstruction("mashedPotatoes", 0, (step1)=> {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`, (error) => console.log(error);
    getInstruction("mashedPotatoes", 1, (step2)=> {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`, (error) => console.log(error);
        getInstruction("mashedPotatoes", 2, (step3)=> {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`, (error) => console.log(error);
          getInstruction("mashedPotatoes", 3, (step4)=> {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`, (error) => console.log(error);
            getInstruction("mashedPotatoes", 4, (step5)=> {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`, (error) => console.log(error);
              document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
            });
          });
        });
    });
});


/*********************************/
/* Iteration 2 ******************/
/* Make the stake with promises */
/* ******************************/

obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then(function (step) {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
  })


/**************************************/
/* Iteration 3 using async ************/
/* Make the broccoli with async/await */
/**************************************/

async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
    const step1 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
    const step2 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
    const step3 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
    const step4 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
    const step5 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  }
  catch(error) {
    console.log(error)
  }
}
makeBroccoli();

/****************************/
/* Bonus 1                  */
/* Remove hidden attributes */
/****************************/

async function removeHiddenAttribute() {
  await document.getElementById('broccoliImg').removeAttribute('hidden'); 
  await document.getElementById('steakImg').removeAttribute('hidden');
  await document.getElementById('mashedPotatoesImg').removeAttribute('hidden');
  await document.getElementById('brusselsSproutsImg').removeAttribute('hidden');
}
removeHiddenAttribute();



/*************************/
/* Bonus 2 - Promise all */
/*************************/

async function makeBrusselsSprouts() {
  try {
    const step0 = await obtainInstruction('brusselsSprouts', 0);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`
    const step1 = await obtainInstruction('brusselsSprouts', 1);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`
    const step2 = await obtainInstruction('brusselsSprouts', 2);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`
    const step3 = await obtainInstruction('brusselsSprouts', 3);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`
    const step4 = await obtainInstruction('brusselsSprouts', 4);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`
    const step5 = await obtainInstruction('brusselsSprouts', 5);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`
    const step6 = await obtainInstruction('brusselsSprouts', 6);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`
    const step7 = await obtainInstruction('brusselsSprouts', 7);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`

    document.querySelector("#brusselsSprouts").innerHTML += `<li>Broccoli is ready!</li>`;
  }
  catch(error) {
    console.log(error)
  }
}
makeBrusselsSprouts();

/*

// Alternative solution 

const pr0 = obtainInstruction("brusselsSprouts", 0);
const pr1 = obtainInstruction("brusselsSprouts", 1);
const pr2 = obtainInstruction("brusselsSprouts", 2);
const pr3 = obtainInstruction("brusselsSprouts", 3);
const pr4 = obtainInstruction("brusselsSprouts", 4);
const pr5 = obtainInstruction("brusselsSprouts", 5);
const pr6 = obtainInstruction("brusselsSprouts", 6);

Promise.all([pr0, pr1, pr2, pr3, pr4, pr5, pr6])
  .then((values) => {
    values.forEach((instruction) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${instruction}</li>`;
    });

    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((err) => console.log(err));
*/