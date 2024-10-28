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
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks
// ...

function step1(callback){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[0]}</li>`;
  callback();
}
function step2(callback){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[1]}</li>`;
  callback();
}
function step3(callback){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[2]}</li>`;
  callback();
}
function step4(callback){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[3]}</li>`;
  callback()
}
function step5(){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[4]}</li>`;
  document.querySelector("#mashedPotatoes").innerHTML += `<li>mashed Potatoes Are Ready</li>`;
 document.querySelector("#mashedPotatoesImg").removeAttribute("hidden")
}

step1(function(){
  step2(()=>{
    step3(()=>{
      step4(step5)
    })
  })
})
// Iteration 2 - using promises
// ...







obtainInstruction("steak", 0)
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 1)})
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 2)})
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 3)})
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 4)})
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 5)})
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 6)})
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 7)})
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 8)
    document.querySelector("#steakImg").removeAttribute("hidden")
  
  })
  .catch((e) => {
    console.log(e);
  });

// Iteration 3 using async/await
// ...

async function makeBroccoli(){
  try{
    const step1 = await obtainInstruction("broccoli" ,0 )
    const step2 = await obtainInstruction("broccoli" ,1 )
    const step3 = await obtainInstruction("broccoli" ,2 )
    const step4 = await obtainInstruction("broccoli" ,3 )
    const step5 = await obtainInstruction("broccoli" ,4 )
    const step6 = await obtainInstruction("broccoli" ,5 )
    const step7 = await obtainInstruction("broccoli" ,6 )
    
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;

  }catch (e) {
    console.log('oops, something went wrong...');
    console.log(e);
  }
}
makeBroccoli()
// Bonus 2 - Promise all
// ...