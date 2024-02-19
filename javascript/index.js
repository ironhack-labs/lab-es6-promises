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
          
          getInstruction("mashedPotatoes", 5, (step6) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
           
          }, (error) => console.log(error));
        
        }, (error) => console.log(error));
              
      }, (error) => console.log(error));
    
    }, (error) => console.log(error));
  
  }, (error) => console.log(error));

}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction("steak", 0)
.then ((response) => {
 
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;
  return obtainInstruction("steak", 1)
})
.then ((response) => {
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;
  return obtainInstruction("steak", 2)
})
.then ((response) => {
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;
  return obtainInstruction("steak", 3)
})
.then ((response) => {
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;
  return obtainInstruction("steak", 4)
})
.then ((response) => {
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;
  return obtainInstruction("steak", 5)
})
.then ((response) => {
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;
  return obtainInstruction("steak", 6)
})
.then ((response) => {
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;
  return obtainInstruction("steak", 7)
})
.then ((response) => {
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;
  return obtainInstruction("steak", 8)
})
.then ((response) => {
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;
  document.querySelector("#steakImg").removeAttribute("hidden");
  return obtainInstruction("steak", 9);
})
.catch ((error) => {
  return error
})

// Iteration 3 using async/await
async function getData (){
  try {
    
    const response1 = await obtainInstruction("broccoli", 0)
    document.querySelector("#broccoli").innerHTML += `<li>${response1}</li>`;

    const response2 = await obtainInstruction("broccoli", 1)
    document.querySelector("#broccoli").innerHTML += `<li>${response2}</li>`;

    const response3 = await obtainInstruction("broccoli", 2)
    document.querySelector("#broccoli").innerHTML += `<li>${response3}</li>`;

    const response4 = await obtainInstruction("broccoli", 3)
    document.querySelector("#broccoli").innerHTML += `<li>${response4}</li>`;

    const response5 = await obtainInstruction("broccoli", 4)
    document.querySelector("#broccoli").innerHTML += `<li>${response5}</li>`;

    const response6 = await obtainInstruction("broccoli", 5)
    document.querySelector("#broccoli").innerHTML += `<li>${response6}</li>`;

    const response7 = await obtainInstruction("broccoli", 6)
    document.querySelector("#broccoli").innerHTML += `<li>${response7}</li>`;

    const response8 = await obtainInstruction("broccoli", 7)
    document.querySelector("#broccoli").innerHTML += `<li>${response8}</li>`;

    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }
  catch (error){
    return error
  }
}
getData()

// Bonus 2 - Promise all
Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
  obtainInstruction("brusselsSprouts", 8)
])
.then ((response) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[0]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[1]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[2]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[3]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[4]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[5]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[6]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[7]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[8]}</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
})
.catch ((error) => {
  return error
})