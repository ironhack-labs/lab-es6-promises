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

getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // ... Your code here
    // ...
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
      getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
    document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
  }, (error) => console.log(error));
  }, (error) => console.log(error));
  }, (error) => console.log(error));
  
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
// ...

obtainInstruction('steak', 0)
.then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    //  ... Your code here
}).then( (step0) => {
  obtainInstruction('steak', 1)
  .then((step1)=>{
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
  }).then((step1)=>{
    obtainInstruction('steak', 2)
    .then((step2)=>{
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    }).then((res)=>{
      obtainInstruction('steak', 3)
      .then((step3)=>{
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
      }).then((res)=>{
        obtainInstruction('steak', 4)
        .then((step4)=>{
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
        }).then((res)=>{
          obtainInstruction('steak', 5)
          .then((step5)=>{
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
          }).then((res)=>{
            obtainInstruction('steak', 6)
            .then((step6)=>{
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
            }).then((res)=>{
              document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
              document.querySelector("#steakImg").removeAttribute("hidden");
            })
          })
        })
      })
    })
  })
})


// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here
for (let i =0; i<8; i++){
if(i<7){
  let instruction = await obtainInstruction('broccoli', i)
  document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`
}else{
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
}
}
makeBroccoli()
// Bonus 2 - Promise all
// ...
let instruction1 = obtainInstruction('brusselsSprouts', 0)
let instruction2 = obtainInstruction('brusselsSprouts', 1)
let instruction3 = obtainInstruction('brusselsSprouts', 2)
let instruction4 = obtainInstruction('brusselsSprouts', 3)
let instruction5 = obtainInstruction('brusselsSprouts', 4)
let instruction6 = obtainInstruction('brusselsSprouts', 5)
let instruction7 = obtainInstruction('brusselsSprouts', 6)

Promise.all([instruction1, instruction2, instruction3, instruction4, instruction5, instruction6, instruction7]).then((res)=>{
  for (let i =0; i<7; i++){
    if(i<6){
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${res[i]}</li>`
    }else{
      document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    }
    }

})