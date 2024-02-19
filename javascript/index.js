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




getInstruction('mashedPotatoes', 0, mashedPotatoes => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes}</li>`
  console.log(mashedPotatoes)
   getInstruction('mashedPotatoes', 1, mashedPotatoes => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes}</li>`
    console.log(mashedPotatoes)
    getInstruction('mashedPotatoes', 2, mashedPotatoes => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes}</li>`
      console.log(mashedPotatoes)
      getInstruction('mashedPotatoes', 3, mashedPotatoes => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes}</li>`
        console.log(mashedPotatoes)
        getInstruction('mashedPotatoes', 4, mashedPotatoes => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes}</li>`
          console.log(mashedPotatoes)
          getInstruction('mashedPotatoes', 4, mashedPotatoes => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${"Mashed potatoes are ready!"}</li>`
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
            console.log(mashedPotatoes)
            
          }, (error) => {
            console.log(error)
          })
        }, (error) => {
          console.log(error)
        })
        
      }, (error) => {
        console.log(error)
      })
    }), (error) => {
      console.log(error)
    }
   }, (error) => {
    console.log(error)
  })
}, (error) => {
  console.log(error)
});

// Iteration 2 - using promises
// ...

obtainInstruction('steak', 0)
  .then( (steak) => {
    document.querySelector("#steak").innerHTML += `<li>${steak}</li>`
   
    return obtainInstruction('steak', 1)
  })
  .then( (steak) => {
    document.querySelector("#steak").innerHTML += `<li>${steak}</li>`
   
    return obtainInstruction('steak', 2)
  })
  .then( (steak) => {
    document.querySelector("#steak").innerHTML += `<li>${steak}</li>`
   
    return obtainInstruction('steak', 3)
  })
  .then( (steak) => {
    document.querySelector("#steak").innerHTML += `<li>${steak}</li>`
   
    return obtainInstruction('steak', 4)
  })
  .then( (steak) => {
    document.querySelector("#steak").innerHTML += `<li>${steak}</li>`
   
    return obtainInstruction('steak', 5)
  })
  .then( (steak) => {
    document.querySelector("#steak").innerHTML += `<li>${steak}</li>`
   
    return obtainInstruction('steak', 6)
  })
  .then( (steak) => {
    document.querySelector("#steak").innerHTML += `<li>${steak}</li>`
   
    return obtainInstruction('steak', 7)
  })
  .then( (steak) => {
    document.querySelector("#steak").innerHTML += `<li>${steak}</li>`
   
    return obtainInstruction('steak', 7)
  })
  .then( (steak) => {
    document.querySelector("#steak").innerHTML += `<li>${"Stake is ready!"}</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => {
    console.log(error)
  } ) 

// Iteration 3 using async/await
// ...


async function obtainInstructionBrocoli () {

  try {
    const paso0 = await obtainInstruction("broccoli", 0)
    document.querySelector("#broccoli").innerHTML += `<li>${paso0}</li>`
    console.log(paso0)
   
    const paso1 = await obtainInstruction("broccoli", 1)
    document.querySelector("#broccoli").innerHTML += `<li>${paso1}</li>`
   
    const paso2 = await obtainInstruction("broccoli", 2)
    document.querySelector("#broccoli").innerHTML += `<li>${paso2}</li>`
   
    const paso3 = await obtainInstruction("broccoli", 3)
    document.querySelector("#broccoli").innerHTML += `<li>${paso3}</li>`
   
    const paso4 = await obtainInstruction("broccoli", 4)
    document.querySelector("#broccoli").innerHTML += `<li>${paso4}</li>`
   
    const paso5 = await obtainInstruction("broccoli", 5)
    document.querySelector("#broccoli").innerHTML += `<li>${paso5}</li>`
   
    const paso6 = await obtainInstruction("broccoli", 6)
    document.querySelector("#broccoli").innerHTML += `<li>${paso6}</li>`

    const paso7 = await obtainInstruction("broccoli", 6)
    document.querySelector("#broccoli").innerHTML += `<li>${"Broccoli is ready!"}</li>`
    document.querySelector("#broccoliImg").removeAttribute("hidden");
   
 
  }
  catch(error) {
    console.log(error)
  }
}


obtainInstructionBrocoli()


Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
  obtainInstruction("brusselsSprouts", 7)
  
])
.then((response) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[0]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[1]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[2]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[3]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[4]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[5]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[6]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[7]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${"Brussels sprouts are ready!"}</li>`
  
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");

})
.catch((error) => {
  console.log(error)
})


// Bonus 2 - Promise all
// ...