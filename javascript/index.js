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
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    obtainInstruction('steak', 1)
      .then( (step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
        obtainInstruction('steak', 2)
          .then( (step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
            obtainInstruction('steak', 3)
              .then( (step3) => {
                document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
                obtainInstruction('steak', 4)
                  .then( (step4) => {
                    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
                    obtainInstruction('steak', 5)
                      .then( (step5) => {
                        document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
                        obtainInstruction('steak', 6)
                          .then( (step6) => {
                            document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
                            obtainInstruction('steak', 7)
                              .then( (step7) => {
                                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                              })
                          })
                      })
                  })
              })
          })
      })
  }).catch((err) => console.error(err));

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...
