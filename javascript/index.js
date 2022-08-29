// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /* getInstruction("mashedPotatoes", 0, (step1) => {
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
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
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
          
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
},(error) => console.log(error)); 

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steakImg").removeAttribute("hidden");
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  })
  .catch((error) => console.log(error));

  
obtainInstruction('steak', 1)  
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
  })
  .catch((error) => console.log(error));
obtainInstruction('steak', 2)
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  })
  .catch((error) => console.log(error));
obtainInstruction('steak', 3)
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
  })
  .catch((error) => console.log(error));
obtainInstruction('steak', 4)
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
  })
  .catch((error) => console.log(error));
obtainInstruction('steak', 5)
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
  })
  .catch((error) => console.log(error));
obtainInstruction('steak', 6)
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
  })
obtainInstruction('steak', 7)
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
  })
  .catch((error) => console.log(error));
 
 
// Iteration 3 using async/await
// ...
async function makeBroccoli(){
  try{
    document.querySelector("#broccoliImg").removeAttribute("hidden");
    let resultado0 =  await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${resultado0}</li>`;

    let resultado1 =  await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${resultado1}</li>`;

    let resultado2 =  await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${resultado2}</li>`;

    let resultado3 =  await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${resultado3}</li>`;

    let resultado4 =  await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${resultado4}</li>`;

    let resultado5 =  await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${resultado5}</li>`;

    let resultado6 =  await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${resultado6}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;

  }catch(error){
    console.log(error); 
  } 
}
makeBroccoli();

// Bonus 2 - Promise all
// ...

Promise.all(brusselsSprouts)
.then((element)=>{
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  brusselsSprouts.forEach((element) =>{
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`;
  })
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
})