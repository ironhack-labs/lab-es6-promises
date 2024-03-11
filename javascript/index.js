// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  //getInstruction("mashedPotatoes", 0, (step1) => {
   // document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
 // }, (error) => console.log(error));
  
  //getInstruction("mashedPotatoes", 1, (step2) => {
   // document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
 // }, (error) => console.log(error));
  
 // getInstruction("mashedPotatoes", 2, (step3) => {
   // document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
 // }, (error) => console.log(error));
  
 // getInstruction("mashedPotatoes", 3, (step4) => {
   // document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
 // }, (error) => console.log(error));
  
 // getInstruction("mashedPotatoes", 4, (step5) => {
   // document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
   // document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
 // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
const mashedPotatoesList = document.querySelector("#mashedPotatoes");
const mashedPotatoesImage = document.querySelector("#mashedPotatoesImg");

getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          mashedPotatoesImage.removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));


// Iteration 2 - using promises
// ...
const steakList = document.querySelector("#steak");
const steakImage = document.querySelector("#steakImg");


const stepsIndices = Array.from({ length: steak.length }, (_, index) => index);


stepsIndices.reduce((promise, stepIndex) => {
  return promise.then(() => {
    return obtainInstruction('steak', stepIndex)
      .then((step) => {
        steakList.innerHTML += `<li>${step}</li>`;
      });
  });
}, Promise.resolve())
  .then(() => {
    steakList.innerHTML += `<li>Steak is ready!</li>`;
    steakImage.removeAttribute("hidden");
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Iteration 2 done"));
// Iteration 3 using async/await
// ...
const broccoliList = document.querySelector("#broccoli");
const broccoImage = document.querySelector("#broccoliImg");

(async () => {
  try {
   
    const broccoliInstructions = broccoli;

    
    for (let i = 0; i < broccoliInstructions.length; i++) {
      const step = await obtainInstruction('broccoli', i);
      broccoliList.innerHTML += `<li>${step}</li>`;
    }

    broccoliList.innerHTML += `<li>Broccoli is ready!</li>`;
    broccoImage.removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Iteration 3 done");
  }
})();
 

// Bonus 2 - Promise all
// ...
const brusselsSproutsList = document.querySelector("#brusselsSprouts");
const brusselsSproutsImage = document.querySelector("#brusselsSproutsImg");
const promises = [0, 1, 2, 3, 4, 5, 6, 7].map(step => {
  return new Promise((resolve, reject) => {
    getInstruction('brusselsSprouts', step, (instruction) => {
      brusselsSproutsList.innerHTML += `<li>${instruction}</li>`;
      resolve(instruction);
    }, (error) => {
      reject(error);
    });
  });
});

Promise.all(promises)
  .then(() => {
    brusselsSproutsList.innerHTML += `<li>Brussels sprouts are ready!</li>`;
    brusselsSproutsImage.removeAttribute("hidden");
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Bonus is done "));