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
  }, (error) => console.log(error));*/

// Iteration 1 - using callbacks
function callbackHell(step, callback, errorCallback) {
  if (!mashedPotatoes[step]) errorCallback("there was an error");
  else {
    document.querySelector(
      "#mashedPotatoes"
    ).innerHTML += `<li>${mashedPotatoes[step]}</li>`;
    callback();
  }
}
callbackHell(0, () => {
  callbackHell(1, () => {
    callbackHell(2, () => {
      callbackHell(3, () => {
        callbackHell(4, () => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document
            .querySelector("#mashedPotatoesImg")
            .removeAttribute("hidden");
        });
      });
    });
  });
});

// Iteration 2 - using promises
function render(food, step) {
  document.querySelector("#steak").innerHTML += `<li>${steak[step]}</li>`;
  return obtainInstruction(food, step);
}

render("steak", 0)
  .then(() => {
    return render("steak", 1);
  })
  .then(() => {
    return render("steak", 2);
  })
  .then(() => {
    return render("steak", 3);
  })
  .then(() => {
    return render("steak", 4);
  })
  .then(() => {
    return render("steak", 5);
  })
  .then(() => {
    return render("steak", 6);
  })
  .then(() => {
    return render("steak", 7);
  })
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((err) => console.log("catch() -> ", err));

// Iteration 3 using async/await

async function makeBroccoli() {
  try {
    for (let step = 0; step < broccoli.length; step++) {
      const instruction = await obtainInstruction("broccoli", step);
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>${instruction}</li>`;
    }
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>"Broccoli is ready!"</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (err) {
    console.error(err);
  }
}

makeBroccoli();

// Bonus 2 - Promise all

const step1 = new Promise((resolve) => {
  setTimeout(() => resolve(brusselsSprouts[0]), 1000);
});

const step2 = new Promise((resolve) => {
  setTimeout(() => resolve(brusselsSprouts[1]), 1000);
});

const step3 = new Promise((resolve) => {
  setTimeout(() => resolve(brusselsSprouts[2]), 1000);
});

const step4 = new Promise((resolve) => {
  setTimeout(() => resolve(brusselsSprouts[3]), 1000);
});

const step5 = new Promise((resolve) => {
  setTimeout(() => resolve(brusselsSprouts[4]), 1000);
});

const step6 = new Promise((resolve) => {
  setTimeout(() => resolve(brusselsSprouts[5]), 1000);
});

const step7 = new Promise((resolve) => {
  setTimeout(() => resolve(brusselsSprouts[6]), 1000);
});

const step8 = new Promise((resolve) => {
  setTimeout(() => resolve(brusselsSprouts[7]), 1000);
});

Promise.all([step1, step2, step3, step4, step5, step6, step7, step8])
  .then((steps) => {
    steps.forEach((steps) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${steps}</li>`;
    });
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
