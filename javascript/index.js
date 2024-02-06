// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Iteration 1 - using callbacks

const foodType = "mashedPotatoes";

const newInstructionLi = function (food, step) {
  document.querySelector(`#${food}`).innerHTML += `<li>${step}</li>`;
}

getInstruction(foodType, 0, (step1) => {
  newInstructionLi(foodType, step1);
  getInstruction(foodType, 1, (step2) => {
    newInstructionLi(foodType, step2);
    getInstruction(foodType, 2, (step3) => {
      newInstructionLi(foodType, step3);
      getInstruction(foodType, 3, (step4) => {
        newInstructionLi(foodType, step4);
        getInstruction(foodType, 4, (step5) => {
          newInstructionLi(foodType, step5);
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises

  const foodTypeII = "steak";

  obtainInstruction(foodTypeII, 0)
  .then((step0) => {newInstructionLi(foodTypeII, step0)
    return(obtainInstruction(foodTypeII, 1));
  }).then((step1) => {newInstructionLi(foodTypeII, step1)
    return(obtainInstruction(foodTypeII, 2));
  }).then((step2) => {newInstructionLi(foodTypeII, step2)
    return(obtainInstruction(foodTypeII, 3));
  }).then((step3) => {newInstructionLi(foodTypeII, step3)
    return(obtainInstruction(foodTypeII, 4));
  }).then((step4) => {newInstructionLi(foodTypeII, step4)
    return(obtainInstruction(foodTypeII, 5));
  }).then((step5) => {newInstructionLi(foodTypeII, step5)
    return(obtainInstruction(foodTypeII, 6));
  }).then((step6) => {newInstructionLi(foodTypeII, step6)
    return(obtainInstruction(foodTypeII, 7));
  }).then((step7) => {newInstructionLi(foodTypeII, step7)
    /* document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`; */
  }).catch(err => console.log(err)).finally( () => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
  });



// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...
