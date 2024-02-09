// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
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

*/

// Iteration 1 - using callbacks
// ...
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }),
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }),
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }),
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }),
  (error) => console.log(error)
);
// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return obtainInstruction("steak", 1);
  })
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
  })
  .catch((err) => {
    console.log(err);
  });
// Iteration 3 using async/await
// ...
let makeBroccoli = async () => {
  try {
    await getInstruction("broccoli", 0, (step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });
    await getInstruction("broccoli", 1, (step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });
    await getInstruction("broccoli", 2, (step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });
    await getInstruction("broccoli", 3, (step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });
    await getInstruction("broccoli", 4, (step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });
    await getInstruction("broccoli", 5, (step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });
    await getInstruction("broccoli", 6, (step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });
  } catch (err) {
    console.log(err);
  }
};
makeBroccoli();
// Bonus 2 - Promise all
// ...

let p1 = obtainInstruction("brusselsSprouts", 0);
let p2 = obtainInstruction("brusselsSprouts", 1);
let p3 = obtainInstruction("brusselsSprouts", 2);
let p4 = obtainInstruction("brusselsSprouts", 3);
let p5 = obtainInstruction("brusselsSprouts", 4);
let p6 = obtainInstruction("brusselsSprouts", 5);
let p7 = obtainInstruction("brusselsSprouts", 6);
let p8 = obtainInstruction("brusselsSprouts", 7);

let brusselsArr = [p1, p2, p3, p4, p5, p6, p7, p8];
Promise.all(brusselsArr)
  .then((res) => {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${res[0]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${res[1]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${res[2]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${res[3]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${res[4]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${res[5]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${res[6]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${res[7]}</li>`;
  })
  .catch((err) => {
    console.log(err);
  });
