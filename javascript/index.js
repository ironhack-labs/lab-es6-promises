// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
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



// Iteration 1 - using callbacks

getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`

    getInstruction('mashedPotatoes', 1, (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
      
      getInstruction('mashedPotatoes', 2, (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
        
        getInstruction('mashedPotatoes', 3, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
          
          getInstruction('mashedPotatoes', 4, (step4) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
            
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          });
        });
      });
    });
  });

// Iteration 2 - using promises

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
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
  });

// Iteration 3 using async/await

async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction('Broccoli', 0);
    document.querySelector("#Broccoli").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction('Broccoli', 1);
    document.querySelector("#Broccoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction('Broccoli', 2);
    document.querySelector("#Broccoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction('Broccoli', 3);
    document.querySelector("#Broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction('Broccoli', 4);
    document.querySelector("#Broccoli").innerHTML += `<li>${step4}</li>`;

    document.querySelector("#Broccoli").innerHTML += `<li>Broccoli are ready!</li>`;
  } catch (err) {
    console.log(err);
  }
}
makeBroccoli();



// Bonus 1 

async function makeBrusselsSprouts() {
  try {
    const step0 = await obtainInstruction('brusselsSprouts', 0);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction('brusselsSprouts', 1);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction('brusselsSprouts', 2);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction('brusselsSprouts', 3);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction('brusselsSprouts', 4);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;

    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`;

    // Remove the hidden attribute from the food image
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

makeBrusselsSprouts();


// Bonus 2 - Promise all

async function makeBrusselsSprouts() {
  try {
    const promises = [
      obtainInstruction('brusselsSprouts', 0),
      obtainInstruction('brusselsSprouts', 1),
      obtainInstruction('brusselsSprouts', 2),
      obtainInstruction('brusselsSprouts', 3),
      obtainInstruction('brusselsSprouts', 4)
    ];

    const steps = await Promise.all(promises);

    const brusselsSproutsList = document.querySelector("#brusselsSprouts");
    steps.forEach((step) => {
      brusselsSproutsList.innerHTML += `<li>${step}</li>`;
    });

    brusselsSproutsList.innerHTML += `<li>Brussels sprouts are ready!</li>`;

    // Remove the hidden attribute from the food image
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

makeBrusselsSprouts();
