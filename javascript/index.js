// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

/* Out of sync
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
           getInstruction("mashedPotatoes", 4, () => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>" Mashed potatoes are ready!"</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));
;

// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("steak", 1)
  })

  .then((step1)=>{
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction("steak", 2)
  })

  .then((step2)=>{
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction("steak", 3)
  })

  .then((step3)=>{
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction("steak", 4)
  })

  .then((step4)=>{
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction("steak", 5)
  })

  .then((step5)=>{
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction("steak", 6)
  })
  .then((step6)=>{
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction("steak", 7)
  })
  .then(()=>{
    document.querySelector("#steak").innerHTML += `<li>"Stake is ready!"</li>`
    document.querySelector("#steakImg").removeAttribute("hidden")
      })



// Iteration 3 using async/await
async function makeBroccoli() {
  
 try {
  let broccoliStep0 = await obtainInstruction("broccoli", 0)
   document.querySelector("#broccoli").innerHTML += `<li>${broccoliStep0}</li>`
  let broccoliStep1 = await obtainInstruction("broccoli", 1)
   document.querySelector("#broccoli").innerHTML += `<li>${broccoliStep1}</li>`
  let broccoliStep2 = await obtainInstruction("broccoli", 2)
   document.querySelector("#broccoli").innerHTML += `<li>${broccoliStep2}</li>`
  let broccoliStep3 = await obtainInstruction("broccoli", 3)
   document.querySelector("#broccoli").innerHTML += `<li>${broccoliStep3}</li>`
  let broccoliStep4 = await obtainInstruction("broccoli", 4)
   document.querySelector("#broccoli").innerHTML += `<li>${broccoliStep4}</li>`
  let broccoliStep5 = await obtainInstruction("broccoli", 5)
   document.querySelector("#broccoli").innerHTML += `<li>${broccoliStep5}</li>`
  let broccoliStep6 = await obtainInstruction("broccoli", 6)
   document.querySelector("#broccoli").innerHTML += `<li>${broccoliStep6}</li>`
   document.querySelector("#broccoli").innerHTML += `<li>"Broccoli is ready!"</li>`
   document.querySelector("#broccoliImg").removeAttribute("hidden")
}
 catch(error) {
  
 }
}

makeBroccoli()

// Bonus 2 - Promise all


Promise.all([
  obtainInstruction("brusselsSprouts",0),
  obtainInstruction("brusselsSprouts",1),
  obtainInstruction("brusselsSprouts",2),
  obtainInstruction("brusselsSprouts",3),
  obtainInstruction("brusselsSprouts",4),
  obtainInstruction("brusselsSprouts",5),
  obtainInstruction("brusselsSprouts",6),
  obtainInstruction("brusselsSprouts",7)

])
.then((brussels) =>{
//esto es igual que = 
// document.querySelector("#brusselsSprouts").innerHTML += `<li>${brussels[0]}</li>`
//document.querySelector("#brusselsSprouts").innerHTML += `<li>${brussels[1]}</li>`
//...

// Con buncle for -----
//  for (let i = 0; i < brussels.length; i++) {
//  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brussels[i]}</li>`
//  console.log(brussels[i])
//}
// con forEach ----
  brussels.forEach((eachElement) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${eachElement}</li>`
}) 
  //console.log(brussels)
  document.querySelector("#brusselsSprouts").innerHTML += `<li>"Brussels sprouts are ready!"</li>`
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
})
.catch((error) => {
  return error
})