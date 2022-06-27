// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// const { PerformanceNodeTiming } = require("perf_hooks");

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


getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        }, (error) => console.log(error));
      }, (error) => console.log(error));
      
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises


obtainInstruction('steak', 0)
 
.then((stepResult) => {
    document.querySelector("#steak").innerHTML += `<li>${stepResult}</li>`;
    return obtainInstruction('steak', 1)})
  
    .then((stepResult) => {
    document.querySelector("#steak").innerHTML += `<li>${stepResult}</li>`;
   return obtainInstruction('steak', 2)} )
  
   .then((stepResult) => {
    document.querySelector("#steak").innerHTML += `<li>${stepResult}</li>`;
    return obtainInstruction('steak', 3)} )
    
    .then((stepResult) => {
      document.querySelector('#steak').innerHTML +=`<li>${stepResult}</li>`;
      return obtainInstruction('steak', 4)})

      .then ((stepResult) => {
        document.querySelector('#steak').innerHTML += `<li>${stepResult}</li>`;
        return obtainInstruction('steak', 5)})
      
        .then ((stepResult) => {
          document.querySelector('#steak').innerHTML += `<li>${stepResult}</li>`;
          return obtainInstruction('steak', 6)})
        
        .then ((stepResult) => {
          document.querySelector('#steak').innerHTML += `<li>${stepResult}</li>`;
          document.querySelector("#steakImg").removeAttribute("hidden");
          document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
          return obtainInstruction('steak', 7) })

 .catch((err) => console.log(err))



// Iteration 3 using async/await

async function makeBroccoli() {
try{
  let step0 = await obtainInstruction('broccoli', 0);
  document.querySelector('#broccoli').innerHTML += `<li>${step0}</li>`;
 let step1 = await obtainInstruction('broccoli', 1);
 document.querySelector('#broccoli').innerHTML += `<li>${step1}</li>`;
  let step2 = await obtainInstruction('broccoli', 2);
  document.querySelector('#broccoli').innerHTML += `<li>${step2}</li>`;
let step3 = await obtainInstruction('broccoli', 3);
document.querySelector('#broccoli').innerHTML += `<li>${step3}</li>`;
let step4 = await obtainInstruction('broccoli', 4);
document.querySelector('#broccoli').innerHTML += `<li>${step4}</li>`;
let step5 = await obtainInstruction('broccoli', 5);
document.querySelector('#broccoli').innerHTML += `<li>${step5}</li>`;
let step6 = await obtainInstruction('broccoli', 6);
document.querySelector('#broccoli').innerHTML += `<li>${step6}</li>`;
document.querySelector('#broccoli').innerHTML += `<li>Broccoli is ready!</li>`;

} catch(err) {
  console.log(err);
}
document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli();

 

// Bonus 2 - Promise all
let s0 = obtainInstruction('brusselsSprouts', 0);

let s1 = obtainInstruction('brusselsSprouts', 1);

let s2 = obtainInstruction('brusselsSprouts', 2);

let s3 = obtainInstruction('brusselsSprouts', 3);

let s4 = obtainInstruction('brusselsSprouts', 4);

let s5 = obtainInstruction('brusselsSprouts', 5);

let s6 = obtainInstruction('brusselsSprouts', 6);

let s7 = obtainInstruction('brusselsSprouts', 7);

let arr = [s0, s1, s2, s3, s4, s5, s6, s7];

Promise.all(arr)
.then(() => {
  brusselsSprouts.forEach((stepResult) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepResult}</li>`
  }) 
    }  )
.catch((err) => console.log('catch()', err))
.finally(()=>document.querySelector('#brusselsSprouts').innerHTML += `<li>Brussels sprouts are done!</li>`)
document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")