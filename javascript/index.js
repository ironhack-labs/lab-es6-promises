// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Iteration 1 - using callbacks

getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
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

getInstruction(
  "mashedPotatoes",
  5,
  (step6) =>
    (document.querySelector(
      "mashedPotatoes"
    ).innerHTML += `<li>Mashed Potatoes are ready!</li>`)
);

// Iteration 2 - using promises

obtainInstruction("steak", 0)
  .then((step0) => {
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
    document.querySelector("#steak").innerHTML += "<li>Steak is ready!</li>";
    document.getElementById("steakImg").removeAttribute("hidden");
  })
  .catch((error) => console.error(error));

// Iteration 3 using async/await

async function makeBroccoli() {
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

    document.querySelector("#broccoli").innerHTML +=
      "<li>Broccoli is ready!</li>";
    document.getElementById("broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.error(error);
  }
}

makeBroccoli();

// Bonus 1

const makeBrusselsSprouts = async () => {
  try {
    const steps = await Promise.all([
      obtainInstruction("brusselsSprouts", 0),
      obtainInstruction("brusselsSprouts", 1),
      obtainInstruction("brusselsSprouts", 2),
      obtainInstruction("brusselsSprouts", 3),
      obtainInstruction("brusselsSprouts", 4),
    ]);

    const brusselsList = document.querySelector("#brusselsSprouts");
    steps.forEach((step) => {
      brusselsList.innerHTML += `<li>${step}</li>`;
    });

    brusselsList.innerHTML += "<li>Brussels sprouts are ready!</li>";
    document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
  } catch (error) {
    console.error(error);
  }
};

makeBrusselsSprouts();

// Bonus 2 - Promise all

const addImages = async () => {
  try {
    const images = await Promise.all([
      getIsntruction,
      obtainInstruction,
      makeBroccoli,
    ]);
    document.getElementsByTagName("img").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
};
