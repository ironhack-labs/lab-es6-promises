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
// ...

// getInstruction("mashedPotatoes",0,(step0) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
//   getInstruction("mashedPotatoes",1,(step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//     getInstruction("mashedPotatoes",2,(step2) => {
//       document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//       getInstruction("mashedPotatoes",3,(step3) => {
//         document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//         getInstruction("mashedPotatoes",4,(step4) => {
//           document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//           getInstruction("mashedPotatoes",4,(step4) => {
//             document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//           }, (error) => console.log(error));
//         }, (error) => console.log(error));
//       }, (error) => console.log(error));
//     }, (error) => console.log(error));
//   }, (error) => console.log(error));
      

//   }
// );

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  }
);




// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 1)
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 2)
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 3)
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 4)
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 5)
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 6)
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 7)
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    //  ... Your code here
    document.querySelector("#steak").innerHTML += `<li>steak is ready</li>`
  })

  // ... Your code here

// Iteration 3 using async/await
// ...



async function makeBroccoli() {
  
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",0)}</li>`
  
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",1)}</li>`
  
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",2)}</li>`
  
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",3)}</li>`
  
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",4)}</li>`

  
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",5)}</li>`
  
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",6)}</li>`
  
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",7)}</li>`

  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready</li>`  
}
makeBroccoli()

// Bonus 2 - Promise all
// ...