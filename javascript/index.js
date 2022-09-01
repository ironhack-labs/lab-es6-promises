// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises + image (Bonus 1)

obtainInstruction("steak", 0)
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((ready) => {
    ready = document.querySelector(
      "#steak"
    ).innerHTML += `<li>Steak is ready!</li>`;
    const steakImage = document.querySelector("#steakImg");
    steakImage.removeAttribute("hidden");
    return obtainInstruction("steak", 8);
  });

// Iteration 3 using async/await + image (Bonus 1)

async function makeBroccoli() {
  for (let i = 0; i <= broccoli.length - 1; i++) {
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[i]}</li>`;
    try {
      await obtainInstruction("broccoli", i);
    } catch (err) {
      console.log(err);
    }
  }
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  const broccoliImage = document.querySelector("#broccoliImg");
  broccoliImage.removeAttribute("hidden");
}
console.log(makeBroccoli());

// Bonus 2 - Promise all

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("foo"), 1000);
});

const allBrusselsSprouts = Promise.all([
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
  obtainInstruction("brusselsSprouts", 8),
]);

allBrusselsSprouts
  .then((result) => {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${brusselsSprouts}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Brussels Sprouts are ready!</li>`;
    const brusselsSproutsImage = document.querySelector("#brusselsSproutsImg");
    brusselsSproutsImage.removeAttribute("hidden");
    console.log("result", result);
  })
  .catch((err) => {
    console.log(err);
  });
