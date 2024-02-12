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
  }, (error) => console.log(error));

 */

// Iteration 1 - using callbacks
// ...
// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    // Bonus 1
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);


// Iteration 2 - using promises
// ...

function obtainInstruction(step) {
  return new Promise((resolve, reject) => {
    const instructionList = document.querySelector("#steak");
    const instruction=steak[step]
    if (!instruction) {
      reject("Instructions not found.");
    } else {
      instructionList.innerHTML += `<li>${instruction}</li>`;
      document
      .querySelector("#steakImg")
      .removeAttribute("hidden");
      resolve();
    }
  });
}

 
obtainInstruction(0)
  .then(() => obtainInstruction(1))
  .then(() => obtainInstruction(2))
  .then(() => obtainInstruction(3))
  .then(() => obtainInstruction(4))
  .then(() => obtainInstruction(5))
  .then(() => obtainInstruction(6))
  .then(() => obtainInstruction(7))
  .catch((error) => console.log(error))
  .finally(()=> {
    const instructionList = document.querySelector("#steak");
    instructionList.innerHTML += `<li>Steak is ready</li>`})


  /*
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  })
  obtainInstruction('steak',1)
    .then( (step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
  })
  obtainInstruction('steak',2)
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
  })
  obtainInstruction('steak',3)
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
  })
  obtainInstruction('steak',4)
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
  })
  obtainInstruction('steak',5)
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
  })
  obtainInstruction('steak',6)
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
  })
  obtainInstruction('steak',7)
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
  })
  obtainInstruction('steak',8)
  .then( (step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
    document
    .querySelector("#steakImg")
    .removeAttribute("hidden");
  })
  .catch((error)=>console.log(error))

  */

// Iteration 3 using async/await
// .

function getBroccoli(step) {
  return new Promise((resolve, reject) => {
    const instructionList1 = document.querySelector("#broccoli");
    const instruction1=broccoli[step]
    if (!instruction1) {
      reject("Instructions not found.");
    } else {
      instructionList1.innerHTML += `<li>${instruction1}</li>`;
      document
      .querySelector("#broccoliImg")
      .removeAttribute("hidden");
      resolve();
    }
  });
}

async function makeBroccoli(){
  await getBroccoli(0)
  await getBroccoli(1)
  await getBroccoli(2)
  await getBroccoli(3)
  await getBroccoli(4)
  await getBroccoli(5)
  await getBroccoli(6)
  .finally(()=> {
    const instructionList = document.querySelector("#broccoli");
    instructionList.innerHTML += `<li>Broccoli is ready</li>`})
}

makeBroccoli()



function getBrusselsSprouts(step) {
  return new Promise((resolve, reject) => {
    const instructionList2 = document.querySelector("#brusselsSprouts");
    const instruction2=brusselsSprouts[step]
    if (!instruction2) {
      reject("Instructions not found.");
    } else {
      instructionList2.innerHTML += `<li>${instruction2}</li>`;
      document
      .querySelector("#brusselsSproutsImg")
      .removeAttribute("hidden");
      resolve();
    }
  });
}

async function makeBrusselSprouts(){
  await getBrusselsSprouts(0)
  await getBrusselsSprouts(1)
  await getBrusselsSprouts(2)
  await getBrusselsSprouts(3)
  await getBrusselsSprouts(4)
  await getBrusselsSprouts(5)
  await getBrusselsSprouts(6)
  await getBrusselsSprouts(7)
  .finally(()=> {
    const instructionList = document.querySelector("#brusselsSprouts");
    instructionList.innerHTML += `<li>Brussel Sprouts is ready</li>`})
}

makeBrusselSprouts()
// Bonus 2 - Promise all
// ... 

