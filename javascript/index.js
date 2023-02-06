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
);*/

// Iteration 1 - using callbacks
mashedPotatoes.push("Mashed potatoes are ready!");

getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;
          getInstruction("mashedPotatoes", 5, (step5) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step5}</li>`;
            document
              .getElementById("mashedPotatoesImg")
              .removeAttribute("hidden");
          });
        });
      });
    });
  });
});

// Iteration 2 - using promises
steak.splice(7, 1, "Steak is ready!");

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
    document.getElementById("steakImg").removeAttribute("hidden");
    return obtainInstruction("steak", 8);
  });

/*
  .then( (step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
  });*/

// Iteration 3 using async/await
broccoli.push("Broccoli is ready!");
async function makeBroccoli() {
  try {
    let broccoli0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli0}</li>`;
    let broccoli1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli1}</li>`;
    let broccoli2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli2}</li>`;
    let broccoli3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli3}</li>`;
    let broccoli4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli4}</li>`;
    let broccoli5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli5}</li>`;
    let broccoli6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli6}</li>`;
    let broccoli7 = await obtainInstruction("broccoli", 7);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli7}</li>`;

    document.getElementById("broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2

Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
])

  .then((ingredients) => {
    ingredients.forEach((instructions) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>'${instructions}'</li>`;
      document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
    });
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
  })
  .catch((err) => console.log(err));
