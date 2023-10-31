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
// ...


function getInstruction(step, callback) {

  const instruction = mashedPotatoes[step]; // Get the instruction from the array
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${instruction}</li>`;
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  callback();
}



getInstruction(0, function () {
  getInstruction(1, function () {
    getInstruction(2, function () {
      getInstruction(3, function () {
        getInstruction(4, function () {
          getInstruction(5, function () {

          });
        });
      });
    });
  });
});



// Iteration 2 - using promises
// ...

/* function obtainInstruction (step){
  return new Promise((resolve, reject)=>{


    getInstruction("steak", (step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    }, (error) => console.log(error));
      
      })
  } */
  
/* A
  const step = 0; // Define or obtain the value of 'step'

  obtainInstruction('steak', step)
    .then((result) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
   */
///A
 // const step = 0; // Define or obtain the value of 'step'
/* 
  obtainInstruction('steak', step)
    .then((result) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    }); */
  
    obtainInstruction('steak', 0)
    .then((step0) => {
      document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
      return obtainInstruction('steak', 1); // Continue with the next step
    })
    .then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
      return obtainInstruction('steak', 2); // Continue with the next step
    })
    .then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      return obtainInstruction('steak', 3); // Continue with the next step
    })
    .then((step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
      return obtainInstruction('steak', 4);
    })
    .then((step4) => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
      return obtainInstruction('steak', 5)
    })
    .then((step5) => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
      return obtainInstruction('steak', 6)
    })
    .then((step6) => {
      document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    })

    .then(() => {
      // Add the additional <li> element
      document.querySelector("#steak").innerHTML += `<li> Steak is ready!</li>`;
    })

    .catch((error) => {
      console.error("Error:", error);
    });




// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  try {
    step0 = await obtainInstruction ("broccoli", 0)
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    step1 = await obtainInstruction ("broccoli", 1)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    step2 = await obtainInstruction ("broccoli", 2)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    step3 = await obtainInstruction ("broccoli", 3)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    step4 = await obtainInstruction ("broccoli", 4)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    step5 = await obtainInstruction ("broccoli", 5)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    step6 = await obtainInstruction ("broccoli", 6)
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    step6 = await obtainInstruction ("broccoli", 6)
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  }
  catch{
  }
}
makeBroccoli();


  
 







// Bonus 2 - Promise all
// ...