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
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
          displayImg("mashedPotatoesImg")          
        });
      });
    });
  });
});




// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  }) 
  .then(() => obtainInstruction('steak', 1))
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
  })
  .then(() => obtainInstruction('steak', 2))
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
  })
  .then(() => obtainInstruction('steak', 3))
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
  })
  .then(() => obtainInstruction('steak', 4))
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
  })
  .then(() => obtainInstruction('steak', 5))
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
  })
  .then(() => obtainInstruction('steak', 6))
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
  })
  .then(() => obtainInstruction('steak', 7))
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
  })
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li> Stake is ready!</li>`
    displayImg("steakImg")
  })




// Iteration 3 using async/await

async function makeBroccoli() {

  for(let i = 0; i < 7; i++) {
    try {
      let step = await obtainInstruction('broccoli', i)
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
    }
    catch (error){
        window.alert("Something went wrong")
       }
  }
  displayImg("broccoliImg")
}
makeBroccoli()


//Bonus 1 - Display img

function displayImg(id) {
  document.getElementById(id).removeAttribute("hidden")
}



// Bonus 2 - Promise all
let brussel = []
for(let i = 0; i < 7; i++) {
  brussel.push(obtainInstruction('brusselsSprouts', i))
}

Promise.all(brussel)
 .then((steps) => steps.forEach(step => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
 }))
 .then(() => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
  displayImg("brusselsSproutsImg")
 })

