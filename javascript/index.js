// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 /*  getInstruction("mashedPotatoes", 0, (step1) => {
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
  }, (error) => console.log(error)); */



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          let li = document.createElement("li");
          document.querySelector("#mashedPotatoes").appendChild(li);
          li.innerHTML = `Mashed potatoes are ready!`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction('steak', 1);
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction('steak', 2);
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction('steak', 3);
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction('steak', 4);
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction('steak', 5);
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction('steak', 6);
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    let li = document.createElement("li");
    document.querySelector("#steak").appendChild(li);
    li.innerHTML = `Stake is ready!`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    let step1 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    let step2 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    let step3 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    let step4 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    let step5 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    let step6 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    let step7 = await obtainInstruction('broccoli', 6);    
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
    
    let li = document.createElement("li");
    document.querySelector("#broccoli").appendChild(li);
    li.innerHTML = `Broccoli is ready!`;

    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch(err) {
    
  }
}
makeBroccoli();

//Bonus 2

newArr = [];
for (i=0; i<8; i++) {
  newArr.push(obtainInstruction('brusselsSprouts', i));
}

Promise.all(newArr)
.then(result => {
  result.forEach(element => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`
  });
})
.then(result => {
  let li = document.createElement("li");
  document.querySelector("#brusselsSprouts").appendChild(li);
  li.innerHTML = `Brussels sprouts are ready!`;

  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
})