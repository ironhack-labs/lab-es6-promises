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

getInstruction('mashedPotatoes', 0, (step) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`
  
  getInstruction('mashedPotatoes', 1, (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`
    getInstruction('mashedPotatoes', 2, (step) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`
      getInstruction('mashedPotatoes', 3, (step) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`
        getInstruction('mashedPotatoes', 4, (step) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`
            getInstruction('mashedPotatoes', 4, () => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
                document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
            },(error) => console.log(error));
        },(error) => console.log(error));
      },(error) => console.log(error));
    },(error) => console.log(error));
  },(error) => console.log(error));
},(error) => console.log(error));



// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return steak[1]
  })

  .then( (step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
  return steak[2]
  })
  .then( (step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
  return steak[3]
  })
  .then( (step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return steak[4]
  })
  .then( (step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
  return steak[5]
  }) 
  .then( (step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
  return steak[6]
  }) 
  .then( (step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
  return steak[7]
  }) 
  .then( () => {
  document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
  document.querySelector("#steakImg").removeAttribute("hidden")
  })
  .catch( (error) => {
    return error
  });


// Iteration 3 using async/await
async function makeBroccoli() {
  try{
    for(let i = 0 ; i < broccoli.length ; i++){
      let broccoli = await obtainInstruction('broccoli', i)
      document.querySelector('#broccoli').innerHTML += `<li>${broccoli}</li>`
    }
    /*const broccoli1 = await obtainInstruction('broccoli', 0)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli1}</li>`

    const broccoli2 = await obtainInstruction('broccoli', 1)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli2}</li>`

    const broccoli3 = await obtainInstruction('broccoli', 2)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli3}</li>`

    const broccoli4 = await obtainInstruction('broccoli', 3)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli4}</li>`

    const broccoli5 = await obtainInstruction('broccoli', 4)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli5}</li>`

    const broccoli6 = await obtainInstruction('broccoli', 5)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli6}</li>`
    
    const broccoli7 = await obtainInstruction('broccoli', 6)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli7}</li>`*/
    
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready <3</li>`

    document.querySelector("#broccoliImg").removeAttribute("hidden")
  } 
  catch(error){
    return error
  }
}
makeBroccoli()


// Bonus 2 - Promise all

Promise.all( [brusselsSprouts[0], brusselsSprouts[1], brusselsSprouts[2], brusselsSprouts[3], brusselsSprouts[4], brusselsSprouts[5], brusselsSprouts[6], brusselsSprouts[7]] )
.then( (value) => {
  /*document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[0]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[1]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[2]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[3]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[4]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[5]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[6]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[7]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`*/
  
  for(let i = 0 ; i < brusselsSprouts.length ; i++){
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[i]}</li>`
  }
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
})
.catch( (error) => {
    return error
})