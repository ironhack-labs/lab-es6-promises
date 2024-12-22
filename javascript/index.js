/*
// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
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
          
          // Final step: Add the "ready" message and reveal the image
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
        
      }, (error) => console.log(error));
      
    }, (error) => console.log(error));
    
  }, (error) => console.log(error));
  
}, (error) => console.log(error));

/*
Explanation:
1.Nested Calls:
Each call to getInstruction is nested within the previous one to ensure the instructions are executed in sequence.

2.Final Message:
After step 4, an additional <li> is added with the message "Mashed potatoes are ready!".

3.Image Visibility:
The mashed potatoes image is revealed using removeAttribute("hidden") once all the steps are completed.

Steps Display:
The browser will now display the steps in the correct order, followed by the "ready" message and the image.
*/


// Iteration 2 - using promises
// ...

obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1); // Return the next step promise
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2); // Return the next step promise
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3); // Return the next step promise
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4); // Return the next step promise
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5); // Return the next step promise
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6); // Return the next step promise
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    // Final step: Add the "ready" message and reveal the image
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error)); // Handle any errors in the promise chain

/*
Explanation:
1.Sequential .then() Calls:
Each .then() call ensures that the steps are executed in sequence, waiting for the previous step to resolve before proceeding to the next.

2.Final Message:
After the last step, an additional <li> is added with the text "Steak is ready!".

3.Image Visibility:
The steak image is revealed using removeAttribute("hidden") once all steps are completed.

4.Error Handling:
The .catch() at the end ensures that any errors in the chain are caught and logged.

Output:
When you open the browser, the instructions for making steak will appear in the correct order, followed by the "ready" message and the image of the steak.
*/


// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    
    const step1 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    
    const step2 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    
    const step3 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    
    const step4 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    
    const step5 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    
    const step6 = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    
    // Final step: Add the "ready" message and reveal the image
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error); // Handle any errors in the await calls
  }
}

/*
Explanation:
1.async/await for Sequential Execution:
The await keyword pauses the execution of the makeBroccoli function until the obtainInstruction promise resolves, ensuring the steps are completed in order.

2.Error Handling with try...catch:
Any errors during the execution of the await calls are caught and logged in the catch block.

3.Final Message:
After step 6, an additional <li> is appended with the text "Broccoli is ready!".

4.Image Visibility:
The broccoli image is revealed using removeAttribute("hidden") after all steps are completed.

Output:
When you run the code and open the browser, the broccoli cooking instructions will display in the correct order, followed by the "ready" message and the image.
*/


// Call the function to execute
makeBroccoli();

// Bonus 2 - Promise all
// ...

const brusselsSproutsSteps = [
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7)
];

Promise.all(brusselsSproutsSteps)
  .then((steps) => {
    steps.forEach((step) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    });
    // Add the final "ready" message
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    // Reveal the image
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));

/*
Explanation:
1.Array of Promises:
An array of promises (brusselsSproutsSteps) is created, where each promise corresponds to one step of the Brussels Sprouts cooking process.

2.Promise.all:
Promise.all ensures that all the promises are resolved before proceeding. If any promise is rejected, the catch block will handle the error.

3..then() with forEach:
Once all promises resolve, the .then() block iterates over the resolved values (cooking steps) and appends them in order to the #brusselsSprouts list.

4.Final Message:
After appending all steps, an additional <li> with the text "Brussels sprouts are ready!" is added.

5.Reveal Image:
The image for Brussels Sprouts is revealed by removing the hidden attribute from the corresponding <img> element.

Output:
The browser will display all the steps for cooking Brussels Sprouts in the correct order, followed by the "Brussels sprouts are ready!" message, and the image of Brussels Sprouts will appear.
*/