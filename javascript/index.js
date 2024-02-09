// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

/*
  getInstruction("mashedPotatoes", 0, (step1) => {
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
  }, (error) => console.log(error));
*/

//Iteration 1 - using callbacks

// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  getInstruction('mashedPotatoes', 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

    getInstruction('mashedPotatoes', 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

      getInstruction('mashedPotatoes', 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

        getInstruction('mashedPotatoes', 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;

          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        });
      });
    });
  });
});



// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 1);
  })

  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 2);
  })

  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 3);
  })

  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 4);
  })

  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
    return obtainInstruction('steak', 5);
  })

  .catch((err) => {
    console.log(err);
  })

// ... Your code here

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    const step1 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    
    const step3 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>BroCCCOOOoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
 }
}

makeBroccoli ()
// Bonus 2 - Promise all
const p1 = obtainInstruction ('brusselsSprouts', 0);
const p2 = obtainInstruction ('brusselsSprouts', 1);
const p3 = obtainInstruction ('brusselsSprouts', 2);
const p4 = obtainInstruction ('brusselsSprouts', 3);
const p5 = obtainInstruction ('brusselsSprouts', 4);
const p6 = obtainInstruction ('brusselsSprouts', 5);
const p7 = obtainInstruction ('brusselsSprouts', 6);
const p8 = obtainInstruction ('brusselsSprouts', 7);

Promise.all([p1, p2, p3, p4, p5, p6, p7, p8])
  .then((responsesArr) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${responsesArr[0]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${responsesArr[1]}</li>`;   
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${responsesArr[2]}</li>`;   
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${responsesArr[3]}</li>`;   
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${responsesArr[4]}</li>`;   
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${responsesArr[5]}</li>`;   
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${responsesArr[6]}</li>`;   
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${responsesArr[7]}</li>`;   
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprout is ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((e) => {
    console.log(e);
  });