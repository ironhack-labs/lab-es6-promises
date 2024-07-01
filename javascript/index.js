// general purpose function to make any dish using async/await
// use name of dish as string && name of array of steps
const makeDish = async(dishNameStr, dishStepsArr) => {

  // change final step for each dish
  let finalStep;

  switch (dishNameStr) {
    case "mashedPotatoes":
      finalStep = "Mashed potatoes are ready!";
      break;
    case "steak":
      finalStep = "Steak is ready!";
      break;
    case "brusselsSprouts":
      finalStep = "Brussels sprouts are ready!";
      break;
    case "broccoli":
      finalStep = "Broccoli is ready!";
      break;
    default:
      finalStep = `${dishNameStr} is ready!`;
  }

  try {
    // using await Promise.all() to resolve array of all promises
    const steps = await Promise.all(dishStepsArr.map((_, index) => 
      obtainInstruction(dishNameStr, index)));

    // add the value for each promise as <li> to correct list
    steps.forEach(step => 
      (document.querySelector(`#${dishNameStr}`).innerHTML += `<li>${step}</li>`));


    // using async/await to resolve each promise one after the other
    /*
    // resolve promise for each step in array, add value as <li> to correct list
    for (let i = 0; i < dishStepsArr.length; i += 1) {
      const step = await obtainInstruction(`${dishNameStr}`, i);
      document.querySelector(`#${dishNameStr}`).innerHTML += `<li>${step}</li>`;
    }
    */

    // add final step, display image
    document.querySelector(`#${dishNameStr}`).innerHTML += `<li>${finalStep}</li>`;
    document.getElementById(`${dishNameStr}Img`).hidden = false;

  }
  catch (error) {
    console.log(error)
  }
}

makeDish("mashedPotatoes", mashedPotatoes);
makeDish("steak", steak);
makeDish("brusselsSprouts", brusselsSprouts);
makeDish("broccoli", broccoli);


// Iteration 1 - using callbacks
/*
getInstruction('mashedPotatoes', 0, (step0) => {
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
          document.getElementById("mashedPotatoesImg").hidden = false;

        }, (error) => console.log(error));

      }, (error) => console.log(error));

    }, (error) => console.log(error));

  }, (error) => console.log(error));
  
}, (error) => console.log(error));


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.getElementById("steakImg").hidden = false;
  })
  .catch((error) => console.log(error)) 


// Iteration 3 using async/await
const makeBroccoli = async() => {
  try {
    const step0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.getElementById("broccoliImg").hidden = false;
  }
  catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
const handlePromiseAll = async() => {

  const steps = brusselsSprouts.map((step, index) => obtainInstruction("brusselsSprouts", index));

  try {
    const values = await Promise.all(steps);
    values.forEach(value => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`;
    });
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.getElementById("brusselsSproutsImg").hidden = false;
  }
  catch(error) {
    console.log(error);
  }
}

handlePromiseAll();
*/
