// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`; 
getInstruction("mashedPotatoes", 1, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
getInstruction("mashedPotatoes", 2, (step2) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
getInstruction("mashedPotatoes", 3, (step3) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
getInstruction("mashedPotatoes", 4, (step4) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
       }, (error) => console.log(error)); 
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));
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
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
    return steak[7]
  })
// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...