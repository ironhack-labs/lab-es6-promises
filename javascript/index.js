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
getInstruction("mashedPotatoes", 0, (step1) => {
     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  getInstruction("mashedPotatoes", 1,(step2) => {
    setTimeout(() => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 2,(step3) => {
        setTimeout(() => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
          getInstruction("mashedPotatoes", 3, (step4) => {
            setTimeout(() => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
              getInstruction("mashedPotatoes", 4, (step5) => {
                setTimeout(() => {
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes are ready!</li>`;
                }, 300);
              }, (error) => console.log(error));
            }, 500);
          }, (error) => console.log(error));
        }, 2000);
      }, (error) => console.log(error));
     },1000)}, (error) => console.log(error));  
  }, (error) => console.log(error)); 
    
  
// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");
    return obtainInstruction('steak', 1);
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2);
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3);
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4);
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5);
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6);
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7);
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
  })
  .catch((e) => {
    console.log(e);
  }) 
// Iteration 3 using async/await
// ...
async function makeBroccoli(){
  try{
    const firstElemt = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${firstElemt}</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
    const secElemt = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${secElemt}</li>`;
    const thrElemt = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${thrElemt}</li>`;
    const fourElemt = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${fourElemt}</li>`;
    const fifthElemt = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${fifthElemt}</li>`;
    const sixElemt = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${sixElemt}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  } catch(e){
    console.log(e);
  }
}

makeBroccoli();
// Bonus 2 - Promise all
// ...
const p1 = obtainInstruction('brusselsSprouts', 0);
const p2 = obtainInstruction('brusselsSprouts', 1);
const p3 = obtainInstruction('brusselsSprouts', 2);
const p4 = obtainInstruction('brusselsSprouts', 3);
const p5 = obtainInstruction('brusselsSprouts', 4);
const p6 = obtainInstruction('brusselsSprouts', 5);
const p7 = obtainInstruction('brusselsSprouts', 4);
const p8 = obtainInstruction('brusselsSprouts', 5);

Promise.all([p1,p2,p3,p4,p5,p6,p7,p8])
.then((instructionsArray) => {
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  let timeArr = 1000;
  instructionsArray.forEach((elem) => {
    setTimeout(() => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${elem}</li>`
    }, timeArr);
    timeArr += 500;
  })
  setTimeout(() => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussel Sprouts are ready!</li>`
  }, 5000);
})
.catch((e) => {
  console.log(e)
})

