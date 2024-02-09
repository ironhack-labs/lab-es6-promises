// // This will print in the wrong order.
// // We added it as an example and to test that the arrays from data.js are loaded

// // 🚨🚨🚨 Comment out the below code before you start working on the code

// // Out of sync
//   getInstruction("mashedPotatoes", 0, (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 1, (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 2, (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 3, (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 4, (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   }, (error) => console.log(error));



// // Iteration 1 - using callbacks
// // ...

function mashedPotatoes(callback){

  obtainInstruction("mashedPotatoes",1)
  .then((step1)=>{
    callback(step1);
    

    //second part
    obtainInstruction("mashedPotatoes",2)
    .then((step2)=> {
      callback(step2);

      obtainInstruction("mashedPotatoes",3)
      .then((step3)=>{
        callback(step3);

      })
      .catch((error)=>{
        console.log("Error fetching step3");
      })
      console.log("Error fetching step 2");
    })
    console.log("Error fetchins step 1");
  });
}

// // Iteration 2 - using promises
// // ...

function mashedPotatoesPromises(){
  return new Promise((resolve,reject)=>{
let instruction =[];

obtainInstruction('mashedPotatoes',1)
.then((step1)=>{
  instruction.push(step1);
  
  return obtainInstruction("mashedPotatoes",2);
})
.then((step2)=>{
  return obtainInstruction("mashedPotatoes",3);
})
.then((step3)=>{
  instruction.push(step3);

  resolve(instruction);
})
.catch((error)=>{
  reject(error);
});

  });
}

// // Iteration 3 using async/await
// // ...
async function writeMashedPotatoes(){
  let instruction = [];

  try{
    const step1 = await obtainInstruction("mashedPotatoes",1);
    instruction.push(step1);

    const step2 = await obtainInstruction("mashedPotatoes",2);
    instruction.push(step2);

    const step3 = await obtainInstruction("mashedPotatoes",3);
    instruction.push(step3);

    return instruction;
  }
  catch (error){
    console.log("Error fetching the instructions for mashed potatoes",error);
    throw error;
  }
}
// // Bonus 2 - Promise all
// // ...