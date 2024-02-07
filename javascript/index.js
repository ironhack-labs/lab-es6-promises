// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Iteration 1 - using callbacks

const foodType = "mashedPotatoes";

const newInstructionLi = function (food, step) {
  document.querySelector(`#${food}`).innerHTML += `<li>${step}</li>`;
};

const showImage = function (food, attr) {
  document.querySelector(`#${food}Img
`).removeAttribute(attr);
}

getInstruction(foodType, 0, (step1) => {
    newInstructionLi(foodType, step1);
    getInstruction(foodType, 1,(step2) => {
        newInstructionLi(foodType, step2);
        getInstruction(foodType, 2, (step3) => {
            newInstructionLi(foodType, step3);
            getInstruction(foodType, 3, (step4) => {
                newInstructionLi(foodType, step4);
                getInstruction(foodType, 4, (step5) => {
                    newInstructionLi(foodType, step5);
                    newInstructionLi(foodType, "Mashed potatoes are ready!");
                    showImage(foodType, "hidden");
                  }, (error) => console.log(error));
              },(error) => console.log(error));
          },(error) => console.log(error));
      },(error) => console.log(error));
  },(error) => console.log(error));

// Iteration 2 - using promises

const foodTypeII = "steak";

obtainInstruction(foodTypeII, 0)
  .then((step0) => {
    newInstructionLi(foodTypeII, step0);
    return obtainInstruction(foodTypeII, 1);
  })
  .then((step1) => {
    newInstructionLi(foodTypeII, step1);
    return obtainInstruction(foodTypeII, 2);
  })
  .then((step2) => {
    newInstructionLi(foodTypeII, step2);
    return obtainInstruction(foodTypeII, 3);
  })
  .then((step3) => {
    newInstructionLi(foodTypeII, step3);
    return obtainInstruction(foodTypeII, 4);
  })
  .then((step4) => {
    newInstructionLi(foodTypeII, step4);
    return obtainInstruction(foodTypeII, 5);
  })
  .then((step5) => {
    newInstructionLi(foodTypeII, step5);
    return obtainInstruction(foodTypeII, 6);
  })
  .then((step6) => {
    newInstructionLi(foodTypeII, step6);
    return obtainInstruction(foodTypeII, 7);
  })
  .then((step7) => {
    newInstructionLi(foodTypeII, step7);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    newInstructionLi(foodTypeII, "Stake is ready!");
    showImage(foodTypeII, "hidden");
  });

// Iteration 3 using async/await

const foodTypeIII = "broccoli";

async function getInstructionBS() {
  try {
    for (let i = 0; i < broccoli.length; i++) {
      const resp = await obtainInstruction(foodTypeIII, i);
      newInstructionLi(foodTypeIII, resp);
    }
  } catch (err) {
    console.error(err);
  } finally {
    newInstructionLi(foodTypeIII, "Broccoli is ready!");
    showImage(foodTypeIII, "hidden");
  }
}

getInstructionBS();

// Bonus 2 - Promise all
const foodTypeIV = "brusselsSprouts";

let promiseArray = [];
for (let i = 0; i < brusselsSprouts.length; i++) {
  const resp = obtainInstruction(foodTypeIV, i);
  promiseArray.push(resp);
}

let instructionsArray = [];
Promise.all(promiseArray).then((results) => {
  results.forEach(result => {
    newInstructionLi(foodTypeIV, result);
  });
  newInstructionLi(foodTypeIV, "Brussels sprouts are ready!");
  showImage(foodTypeIV, "hidden");
});

