// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /*getInstruction("mashedPotatoes", 0, (step1) => {
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
  }, (error) => console.log(error));*/



// Iteration 1 - using callbacks
// ...
for(let i = 0; i <mashedPotatoes.length; i++){
  getInstruction('mashedPotatoes', i, (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    if(i == mashedPotatoes.length-1) document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  });
}

// Iteration 2 - using promises
// ...
for(let j = 0; j <steak.length; j++){
  obtainInstruction('steak', j)
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    if(j == steak.length-1) document.querySelector("#steakImg").removeAttribute("hidden");
  }).catch(err => console.log(err));
}

// Iteration 3 using async/await
// ...
for(let k = 0; k <brusselsSprouts.length; k++){
  obtainInstruction('brusselsSprouts', k)
  .then( (step) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;

    if(k == brusselsSprouts.length-1) document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  }).catch(err => console.log(err));
}

async function makeBroccoli(l) {
  // ... Your code here
  try{
    const step = await obtainInstruction('broccoli', l);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    if(l == broccoli.length-1) document.querySelector("#broccoliImg").removeAttribute("hidden");

  }catch(err){
    console.log(err);
  }
}

for(let l = 0; l <broccoli.length; l++){makeBroccoli(l);}

// Bonus 2 - Promise all
// ...