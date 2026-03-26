// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync // mashed potatoes async, this is Iteration 0
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
// //Sincronización a lo bruto.
// setTimeout(() => {return getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));},2000);

// Iteration 1 - using callbacks // Using mashed potatoes
// Pirámide de la perdición
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML +=
          `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector("#mashedPotatoes").innerHTML +=
              `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector("#mashedPotatoes").innerHTML +=
                  `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector("#mashedPotatoes").innerHTML +=
                      `<li>${step5}</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error),
                );
              },
              (error) => console.log(error),
            );
          },
          (error) => console.log(error),
        );
      },
      (error) => console.log(error),
    );
  },
  (error) => console.log(error),
);

// Iteration 2 - using promises // steak with promise.
// Me cuesta bastante entenderla
function steakInstruction(food,step) {
  return new Promise((resolve,reject) => {
    getInstruction(food,step,(instruction) => {
      resolve(instruction);
    },
    (error) =>{
      reject(error);
    }); 
  });
}
steakInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return steakInstruction("steak", 0);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return steakInstruction("steak", 1);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return steakInstruction("steak", 2);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return steakInstruction("steak", 3);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return steakInstruction("steak", 4);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return steakInstruction("steak", 5);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    
    return steakInstruction("steak", 6);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return steakInstruction("steak", 7);
  })
  .then((step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
    return steakInstruction("steak", 7);
    
  })
  .catch((error) => {
    console.log("The steak recipe had a problem: ", error);
  });


// Iteration 3 using async/await // using broccoli with async/await
// ...
async function broccoliInstruction() {
  try {
    for(i=0; i<7; i++)
    {
    const step = await obtainInstruction("broccoli", i);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    }
    
    
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log("The brussels sprouts recipe had a problem: ", error);
  }
}
broccoliInstruction();

async function brusselsSproutsInstruction() {
  try {
    const promisesArray = [];
    for(let j=0; j<8; j++) //async for uses the same variable
    {
    promisesArray.push(obtainInstruction("brusselsSprouts", j));
  }
  const allSteps = await Promise.all(promisesArray);

  allSteps.forEach((step)=> {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
  })
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  } catch (error) {
    console.log("The brussels sprouts recipe had a problem: ", error);
  }
}

 brusselsSproutsInstruction();
// Bonus 2 - Promise all 
// ...
