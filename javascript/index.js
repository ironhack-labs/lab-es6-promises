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
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
    getInstruction("mashedPotatoes", 4, (step5) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
      getInstruction("mashedPotatoes", 5, (step6) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1);
  })
  .then( () => {
    return obtainInstruction('steak', 2)
    .then( (step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
      return obtainInstruction('steak', 1);})
    })
    .then( () => {
      return obtainInstruction('steak',3)
      .then( (step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
        return obtainInstruction('steak', 1);})
      })
      .then( () => {
        return obtainInstruction('steak', 4)
        .then( (step1) => {
          document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
          return obtainInstruction('steak', 1);})
        })
        .then( () => {
          return obtainInstruction('steak', 5)
          .then( (step1) => {
            document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
            return obtainInstruction('steak', 1);})
          })
          .then( () => {
            return obtainInstruction('steak', 6)
            .then( (step1) => {
              document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
              return obtainInstruction('steak', 1);})
            })
            .then( () => {
              return obtainInstruction('steak', 7)
              .then( (step1) => {
                document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
                return obtainInstruction('steak', 1);})
              }).then( () => {
                return obtainInstruction('steak', 7)
                .then( () => {
                  document.querySelector("#steak").innerHTML += `<li>ready</li>`
                  return obtainInstruction('steak', 1);})
                })
                .catch((error)=>console.log(error))
                .finally(() => document.querySelector("#steak").innerHTML += `<li>ready</li>`)

                
// Iteration 3 using async/await
async function makeBroccoli() {
  try{
  const firstStep= await obtainInstruction('broccoli', 0);
  console.log(firstStep)
  document.querySelector("#broccoli").innerHTML += `<li>${firstStep}</li>`
   
   const secStep= await obtainInstruction('broccoli', 1);
   document.querySelector("#broccoli").innerHTML += `<li>${secStep}</li>`
   const thirStep= await obtainInstruction('broccoli', 2);
   document.querySelector("#broccoli").innerHTML += `<li>${thirStep}</li>`
   const fStep= await obtainInstruction('broccoli', 3);
   document.querySelector("#broccoli").innerHTML += `<li>${fStep}</li>`
   const fiStep= await obtainInstruction('broccoli', 4);
   document.querySelector("#broccoli").innerHTML += `<li>${fiStep}</li>`
   document.getElementById("mashedPotatoesImg").removeAttribute("hidden");
   document.getElementById("steakImg").removeAttribute("hidden");
   document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
   document.getElementById("broccoliImg").removeAttribute("hidden");
  }
  catch(error){
    console.log(error)
  }
}
makeBroccoli()

// Bonus 2 - Promise all
// ...