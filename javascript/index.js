// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 /* getInstruction("mashedPotatoes", 0, (step1) => {
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
getInstruction('mashedPotatoes', 0, (step0) =>{
  document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) =>{
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;  
    getInstruction('mashedPotatoes', 2, (step2) =>{
      document.querySelector('#mashedPotatoes').innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) =>{
        document.querySelector('#mashedPotatoes').innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) =>{
          document.querySelector('#mashedPotatoes').innerHTML += `<li>${step4}</li>`; 
          document.querySelector('#mashedPatatoes').innerHTML += `<li>Mashed Potatoes are ready! </li>`;
          document.querySelector('#mashedPotatoesImg').removeAttribute("hidden"); 
            },(error) => console.log(error))
         }, (error) => console.log(error))
      }, (error) => console.log(error))
   }, (error) => console.log(error))
}, (error) => console.log(error))





// Itmas9eration 2 - using promises

obtainInstruction('steak', 0)
.then ((step0) =>{
  document.querySelector('#steak').innerHTML += `<li>${step0}</li>`;
  obtainInstruction('steak', 1)
  .then ((step1) =>{
    document.querySelector('#steak').innerHTML += `<li>${step1}</li>`;  
    obtainInstruction('steak', 2)
    .then((step2) =>{
      document.querySelector('#steak').innerHTML += `<li>${step2}</li>`;
      obtainInstruction('steak', 3)
      .then((step3) =>{
        document.querySelector('#steak').innerHTML += `<li>${step3}</li>`;
        obtainInstruction('mashedPotatoes', 4)
        .then((step4) => {
          document.querySelector('#steak').innerHTML += `<li>${step4}</li>`;
          obtainInstruction('steak', 5)
          .then((step5) =>{
            document.querySelector('#steak').innerHTML += `<li>${step5}</li>`;
            obtainInstruction('steak', 6)
            .then((step6) =>{
              document.querySelector('#steak').innerHTML += `<li>${step6}</li>`;
              obtainInstruction('steak', 7)
              .then((step7) =>{
                document.querySelector('#steak').innerHTML += `<li>${step7}</li>`; 
                document.querySelector('#steak').innerHTML += `<li>Stakeis ready! </li>`;
                document.querySelector('#steakImg').removeAttribute("hidden"); 
              })
            })
          })
        })
      })
    })
  })
})



// Iteration 3 using async/await
let makeBrocoli = async () => {
  try{
    await obtainInstruction('broccoli', 0).then((step0) => document.getElementById('broccoli').innerHTML += `<li>${step0}</li>`)
    await obtainInstruction('broccoli', 1).then((step1) => document.getElementById('broccoli').innerHTML += `<li>${step1}</li>`)
    await obtainInstruction('broccoli', 2).then((step2) => document.getElementById('broccoli').innerHTML += `<li>${step2}</li>`)
    await obtainInstruction('broccoli', 3).then((step3) => document.getElementById('broccoli').innerHTML += `<li>${step3}</li>`)
    await obtainInstruction('broccoli', 4).then((step4) => document.getElementById('broccoli').innerHTML += `<li>${step4}</li>`)
    await obtainInstruction('broccoli', 5).then((step5) => document.getElementById('broccoli').innerHTML += `<li>${step5}</li>`)
    await obtainInstruction('broccoli', 6).then((step6) => document.getElementById('broccoli').innerHTML += `<li>${step6}</li>`)
  } catch(error){
    console.log(error);
  
  } finally{
    let final = document.createElement("li");
    document.getElementById('broccoli').appendChild(final).innerHTML += 'Broccoli is ready!!'
    document.getElementById('broccoliImg').removeAttribute('hidden')
}
  }
  makeBrocoli()



  Promise.all(
    [obtainInstruction("brusselsSprouts", 0),
    obtainInstruction("brusselsSprouts", 1),
    obtainInstruction("brusselsSprouts", 2),
    obtainInstruction("brusselsSprouts", 3),
    obtainInstruction("brusselsSprouts", 4),
    obtainInstruction("brusselsSprouts", 5),
    obtainInstruction("brusselsSprouts", 6),
    obtainInstruction("brusselsSprouts", 7),
    ])
    .then(allValues => {
      allValues.forEach (el => document.getElementById('brusselsSprouts').innerHTML += `<li>${el}</li>`)
    })
    .catch((error) => console.log(error))
    .finally(() => {
      document.getElementById("brusselsSprouts").innerHTML += `<li>Brussels are ready!</li>`;
      document.getElementById("brusselsSproutsImg").removeAttribute("hidden")
    })


