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


async function makeMashedPotatoes(){
  // ${ } sirve para coger el valor dentro de la variable
  for(let i=0; i<mashedPotatoes.length; i++){
    let step = await obtainInstruction("mashedPotatoes",i)
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`
  }
}

makeMashedPotatoes();




async function makeSteak(){

  for(let i=0; i<steak.length; i++){
    let step = await obtainInstruction("steak",i)
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
  }
}

makeSteak();




async function makeBroccoli(){

  for(let i=0; i<broccoli.length; i++){
    let step = await obtainInstruction("broccoli",i)
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
  }
}

makeBroccoli();




async function makeBrusselsSprouts(){

  for(let i=0; i<brusselsSprouts.length; i++){
    let step = await obtainInstruction("brusselsSprouts",i)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
  }
}

makeBrusselsSprouts();
