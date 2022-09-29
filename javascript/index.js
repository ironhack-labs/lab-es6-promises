// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
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
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
  getInstruction('mashedPotatoes', 1, (step2)=>{
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
    getInstruction('mashedPotatoes', 2, (step3)=>{
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
      getInstruction('mashedPotatoes', 3, (step4)=>{
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
        getInstruction('mashedPotatoes', 4, (step5)=>{
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        })
      })
    })
  })
});

// Iteration 2 - using promises
obtainInstruction('steak', 0)
.then( (step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  obtainInstruction('steak', 1).then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    obtainInstruction('steak', 2).then( (step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
      obtainInstruction('steak', 3).then( (step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
        obtainInstruction('steak', 4).then( (step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
          obtainInstruction('steak', 5).then( (step5) =>{
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
            obtainInstruction('steak', 6).then( (step6) => {
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
              obtainInstruction('steak', 7).then( (step7) => {
                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                document.querySelector("#steak").innerHTML += `<li>Steak are ready!</li>`
                document.querySelector("#steakImg").removeAttribute("hidden");
              })
            })
          })
        })
      })
    })
  })
})

// Iteration 3 using async/await
async function makeBroccoli() {
  const tarea0 = await obtainInstruction('broccoli', 0);
  document.querySelector("#broccoli").innerHTML += `<li>${tarea0}</li>`
  const tarea1 = await obtainInstruction('broccoli', 1);
  document.querySelector("#broccoli").innerHTML += `<li>${tarea1}</li>`
  const tarea2 = await obtainInstruction('broccoli', 2);
  document.querySelector("#broccoli").innerHTML += `<li>${tarea2}</li>`
  const tarea3 = await obtainInstruction('broccoli', 3);
  document.querySelector("#broccoli").innerHTML += `<li>${tarea3}</li>`
  const tarea4 = await obtainInstruction('broccoli', 4);
  document.querySelector("#broccoli").innerHTML += `<li>${tarea4}</li>`
  const tarea5 = await obtainInstruction('broccoli', 5);
  document.querySelector("#broccoli").innerHTML += `<li>${tarea5}</li>`
  const tarea6 = await obtainInstruction('broccoli', 6);
  document.querySelector("#broccoli").innerHTML += `<li>${tarea6}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli are ready!</li>`
  document.querySelector("#broccoliImg").removeAttribute("hidden");
  
}
makeBroccoli();

// Bonus 2 - Promise all
async function makeBrussels() {
  const tarea0 = obtainInstruction('brusselsSprouts', 0);
  const tarea1 = obtainInstruction('brusselsSprouts', 1);
  const tarea2 = obtainInstruction('brusselsSprouts', 2);
  const tarea3 = obtainInstruction('brusselsSprouts', 3);
  const tarea4 = obtainInstruction('brusselsSprouts', 4);
  const tarea5 = obtainInstruction('brusselsSprouts', 5);
  const tarea6 = obtainInstruction('brusselsSprouts', 6);
  const tarea7 = obtainInstruction('brusselsSprouts', 7);
  const [paso0, paso1, paso2, paso3, paso4, paso5, paso6, paso7] = await Promise.all([tarea0, tarea1, tarea2, tarea3, tarea4, tarea5, tarea6, tarea7]);
  
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso0}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso1}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso2}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso3}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso4}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso5}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso6}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso7}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
}

makeBrussels();