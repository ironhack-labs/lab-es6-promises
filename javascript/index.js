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
           document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
           let newLi = document.createElement("li")
           newLi.innerText= "Mashed potatoes are ready!"
           document.getElementById("mashedPotatoes").appendChild(newLi)
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));


// Iteration 2 using async/await

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1) })
    
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
return obtainInstruction('steak', 2) }
      )

  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>` 
    return obtainInstruction('steak', 3)}
    )

  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>` 
  return obtainInstruction('steak', 4)}
      )

  .then( (step4) => {
     document.querySelector("#steak").innerHTML += `<li>${step4}</li>` 
      return obtainInstruction('steak', 5)}
      )

   .then( (step5) => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>` 
        return obtainInstruction('steak', 6)}
     )

  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
})
 .then( () => {
    let newSteakLi = document.createElement("li")
    newSteakLi.innerText= "Stake is ready!"
    document.getElementById("steak").appendChild(newSteakLi)
    document.querySelector("#steakImg").removeAttribute("hidden");
    }
    )

    
// Iteration 3 using async/await

async function makeBroccoli() {
   await obtainInstruction('broccoli', 0)
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[0]}</li>`

  await obtainInstruction('broccoli', 1)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[1]}</li>`

  await obtainInstruction('broccoli', 2)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[2]}</li>`
  await obtainInstruction('broccoli', 3)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[3]}</li>`
  await obtainInstruction('broccoli', 4)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[4]}</li>`
  await obtainInstruction('broccoli', 5)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[5]}</li>`
  await obtainInstruction('broccoli', 6)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[6]}</li>`
    let newBroccoliLi = document.createElement("li")
    newBroccoliLi.innerText= "Broccoli is ready!"
    document.getElementById("broccoli").appendChild(newBroccoliLi)
    document.querySelector("#broccoliImg").removeAttribute("hidden");
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
  obtainInstruction("brusselsSprouts",7),
 
])

  
.then((brusselsSprouts) =>{
  
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[0]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[1]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[2]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[3]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[4]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[5]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[6]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[7]}</li>`
  
  let newSproutLi = document.createElement("li")
  newSproutLi.innerText= "Brussels sprouts are ready!"
  document.getElementById("brusselsSprouts").appendChild(newSproutLi);
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");

})
