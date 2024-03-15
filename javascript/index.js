
// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // ... Your code here
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
  });
  getInstruction('mashedPotatoes', 2, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
  });
  getInstruction('mashedPotatoes', 3, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
  });
  getInstruction('mashedPotatoes', 4, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
  });
  getInstruction('mashedPotatoes', 5, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
  });
  getInstruction('mashedPotatoes', 6, (step6) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`
  });
  getInstruction('mashedPotatoes', 7, (step7) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step7}</li>`
   
  },readyCallb);
  
});
function readyCallb(){
  return  document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed popatoes are ready!</li>`
}

// Iteration 2 - using promises
 obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
  });
  
// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    let index = 0;
    let steps = [];
    for (const b of broccoli) {
      const step = await obtainInstruction("broccoli", index);
      steps.push(step);
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>${steps[index]}</li>`;
      index++;
    }
  } catch (err) {
    console.log(err);
  }
}
makeBroccoli();
//Bonus 1
const images = document.querySelectorAll('img')
images.forEach(image=>{
  image.removeAttribute('hidden')
})


// Bonus 2 - Promise all
// ...
// Promise.all([pr0, pr1, pr2])
//   .then((values) => {
//     // All promises resolved, proceed with displaying instructions and the final 'Brussels sprouts are ready!' message

//   });