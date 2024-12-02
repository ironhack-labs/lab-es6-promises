// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync: The provided code doesn't use nested callbacks to enforce a sequence of execution(getInstruction function execution time is randomized), which is why the steps will not be displayed in the correct order.
 /*
  getInstruction("mashedPotatoes", 0, (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
  */



// Iteration 1 - using nested callbacks to print the cooking steps to make Mashed Potatoes in the correct order
getInstruction("mashedPotatoes", 0, (step0) => {
   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`; // step0 refers to callback(instruction);  instruction = mashedPotatoes[0];

   getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

          document.querySelector('#mashedPotatoes').innerHTML += `<li> Mashed potatoes are ready!</li>`;
          document.querySelector('#mashedPotatoesImg').hidden = false;
          
        
        }, (error) => console.log(error));

      }, (error) => console.log(error));

    }, (error) => console.log(error));

  },(error) => console.log(error));

},(error) => console.log(error));

/* Iteration 2 - using promises and the then() statement print the directions to display the cooking instruction for the Stake in the correct order
Access promise data through then() which is a call back function, it can return a promise for example in this case, so we can chain on promise further */
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`; // step here refers to instruction, returend by resolve(instruction);  instruction = steak[0]; "season steak generously with salt, pepper and garlic powder"
    return obtainInstruction('steak', 1);
  }).then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`; 
    return obtainInstruction('steak', 2);
  }).then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3); 
  }).then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`; 
    return obtainInstruction('steak', 4); 
  }).then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`; 
    return obtainInstruction('steak', 5);
  }).then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`; 
    return obtainInstruction('steak', 6); 
  }).then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>` ;
    return obtainInstruction('steak', 7); 
  }).then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li> Stake is ready! </li>` ;
    document.querySelector('#steakImg').hidden = false;   // When the specific food is ready to be served (all steps are listed), remove the hidden attribute from the <img /> element that represents the food
  }).catch(error => console.log(error));
  

// Iteration 3 using promises with the async/await syntax, print the directions to make Broccoli in the correct order. OR async function makeBroccoli() {// code here}
const makeBroccoli = async () => {
  try{
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
    document.querySelector("#broccoli").innerHTML += `<li> Broccoli is ready! </li>`;
    document.querySelector("#broccoliImg").hidden = false;
  }
  catch (error) {
    console.log(error);
  }
  finally{
    console.log('End of makeBroccoli function call')
  }

}

makeBroccoli();



/* Bonus 2 - using Promise all, display the cooking steps to make Brussels Sprouts in the correct order.
Promise.all returns a new promise on which then() callback function can be called to access resulting data */
const makeBrusselsSprouts =() => {

  /*
  const arrOfPromises = [ obtainInstruction('brusselsSprouts', 0), 
      obtainInstruction('brusselsSprouts', 1),
      obtainInstruction('brusselsSprouts', 2),
      obtainInstruction('brusselsSprouts', 3),
      obtainInstruction('brusselsSprouts', 4),
      obtainInstruction('brusselsSprouts', 5),
      obtainInstruction('brusselsSprouts', 6),
      obtainInstruction('brusselsSprouts', 7)] */
	  
  //refactoring
  const arrOfPromises = brusselsSprouts.map((_, sproutsIndex) => 
						obtainInstruction('brusselsSprouts', sproutsIndex)
						);

  Promise.all(arrOfPromises)
  .then( arrOfSteps => {
  arrOfSteps.forEach((step) =>{
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
  })
  document.querySelector("#brusselsSprouts").innerHTML += `<li> Brussels sprouts are ready! </li>`;
  document.querySelector("#brusselsSproutsImg").hidden = false;
  })
  .catch(error=> console.log(error)); 

}

makeBrusselsSprouts();
