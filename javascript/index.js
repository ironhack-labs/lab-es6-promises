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
mashedPotatoes.push('Mashed potatoes are ready!')
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
      getInstruction('mashedPotatoes', 2, (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
        getInstruction('mashedPotatoes', 3, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
          getInstruction('mashedPotatoes', 4, (step4) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
            getInstruction('mashedPotatoes', 5, (step5) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
              getInstruction('mashedPotatoes', 6, (step6) => {
                document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`
              });
              document.getElementById('mashedPotatoesImg').removeAttribute('hidden')
            });
          
          });
        
        });
      
      });
    
    });
    
});


// Iteration 2 - using promises
steak.push('Steak is ready!')
obtainInstruction('steak',0)
  .then((p0) => {
    document.querySelector("#steak").innerHTML += `<li>${p0}</li>`
    return obtainInstruction('steak', 1);
  })
  // ... Your code here
  .then ((p1) => {
    document.querySelector("#steak").innerHTML += `<li>${p1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then ((p2) => {
    document.querySelector("#steak").innerHTML += `<li>${p2}</li>`
    return obtainInstruction('steak', 3);
  })
  .then ((p3) => {
    document.querySelector("#steak").innerHTML += `<li>${p3}</li>`
    return obtainInstruction('steak', 4);
  })
  .then ((p4) => {
    document.querySelector("#steak").innerHTML += `<li>${p4}</li>`
    return obtainInstruction('steak', 5);
  })
  .then ((p5) => {
    document.querySelector("#steak").innerHTML += `<li>${p5}</li>`
    return obtainInstruction('steak', 6);
  })
  .then ((p6) => {
    document.querySelector("#steak").innerHTML += `<li>${p6}</li>`
    return obtainInstruction('steak', 7);
  })
  .then ((p7) => {
    document.querySelector("#steak").innerHTML += `<li>${p7}</li>`
    return obtainInstruction('steak', 8);
  })
  .then ((p8) => {
    document.querySelector("#steak").innerHTML += `<li>${p8}</li>`
    document.getElementById('steakImg').removeAttribute('hidden')
    return obtainInstruction('steak', 9);
  })
    
 

// Iteration 3 using async/await
// ...
broccoli.push("Brocoli is ready")
async function makeBroccoli() {
  // ... Your code here
  try {
    let stp0 = await obtainInstruction('broccoli', 0)
    document.getElementById('broccoli').innerHTML += `<li>${stp0}</li>`
    let stp1 = await obtainInstruction('broccoli', 1)
    document.getElementById('broccoli').innerHTML += `<li>${stp1}</li>`
    let stp2 = await obtainInstruction('broccoli', 2)
    document.getElementById('broccoli').innerHTML += `<li>${stp2}</li>`
    let stp3 = await obtainInstruction('broccoli', 3)
    document.getElementById('broccoli').innerHTML += `<li>${stp3}</li>`
    let stp4 = await obtainInstruction('broccoli', 4)
    document.getElementById('broccoli').innerHTML += `<li>${stp4}</li>`
    let stp5 = await obtainInstruction('broccoli', 5)
    document.getElementById('broccoli').innerHTML += `<li>${stp5}</li>`
    let stp6 = await obtainInstruction('broccoli', 6)
    document.getElementById('broccoli').innerHTML += `<li>${stp6}</li>`
    let stp7 = await obtainInstruction('broccoli', 7)
    document.getElementById('broccoli').innerHTML += `<li>${stp7}</li>`
    document.getElementById('broccoliImg').removeAttribute('hidden')
  } catch (error) {

  }
}

makeBroccoli()

// Bonus 2 - Promise all
// ...
brusselsSprouts.push("Brussels sprouts are ready!")
const promises = [
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
];

Promise.all(promises)
  .then((steps) => {
    document.getElementById('brusselsSproutsImg').removeAttribute('hidden');
    steps.forEach((step) => {
      document.getElementById("brusselsSprouts").innerHTML += `<li>${step}</li>`;
    })
  })
  .catch((error) => {
    console.error(error);
  });


