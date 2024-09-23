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



// Iteration 1 - using callbacks -> function getInstruction(food, step, callback, errorCallback)
// ...
getInstruction("mashedPotatoes", 0, (response)=>{
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${response}</li>`;

  getInstruction("mashedPotatoes", 1, (response)=>{
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${response}</li>`;

    getInstruction("mashedPotatoes", 2, (response)=>{
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${response}</li>`;

      getInstruction("mashedPotatoes", 3, (response)=>{
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${response}</li>`;

        getInstruction("mashedPotatoes", 4, (response)=>{
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${response}</li>`;
  
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${"Mashed potatoes are ready!"}</li>`;

          document.querySelector("#mashedPotatoesImg").hidden = false;
        }
        , (error)=> console.log(error))
      }
      , (error)=> console.log(error))
    }
    , (error)=>console.log(error))
  }
  , (error)=>console.log(error))
}
, (error)=> console.log(error))



// Iteration 2 - using promises -> obtainInstruction(food, step) 
// ...
obtainInstruction("steak", 0)
.then((response)=>{
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;

  return obtainInstruction("steak", 1);
})
.then((response)=>{
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;

  return obtainInstruction("steak", 2);
})
.then((response)=>{
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;

  return obtainInstruction("steak", 3);
})
.then((response)=>{
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;

  return obtainInstruction("steak", 4);
})
.then((response)=>{
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;

  return obtainInstruction("steak", 5);
})
.then((response)=>{
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;

  return obtainInstruction("steak", 6);
})
.then((response)=>{
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;

  return obtainInstruction("steak", 7);
})
.then((response)=>{
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;

  document.querySelector("#steak").innerHTML += `<li>${"Stake is ready!"}</li>`;

  document.querySelector("#steakImg").hidden = false;
})
.catch((error)=>console.log(error));

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here
  try{
    const step0 = await obtainInstruction("broccoli", 0)
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    const step1 = await obtainInstruction("broccoli", 1)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    const step2 = await obtainInstruction("broccoli", 2)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    const step3 = await obtainInstruction("broccoli", 3)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    const step4 = await obtainInstruction("broccoli", 4)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    const step5 = await obtainInstruction("broccoli", 5)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    const step6 = await obtainInstruction("broccoli", 6)
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

    document.querySelector("#broccoli").innerHTML += `<li>${"Stake is ready!"}</li>`;

    document.querySelector("#broccoliImg").hidden = false;
  }
  catch(error){
    console.log(error)
  }

}

makeBroccoli();

// Bonus 2 - Promise all
// ...
Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7)
])
.then((data)=>{
  data.forEach((response)=>document.querySelector("#brusselsSprouts").innerHTML += `<li>${response}</li>`);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${"Brussels sprouts are ready!"}</li>`;

  document.querySelector("#brusselsSproutsImg").hidden = false;
})
.catch((error)=>console.log(error));