//Iteration 1

getInstruction(
  "mashedPotatoes",
  0,
  (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step) => {
                    document.querySelector(
                      "#mashedPotatoes"
                      ).innerHTML += `<li>${step}</li>`;
                      getInstruction(
                        "mashedPotatoes",
                        5,
                       (step) => {
                          document.querySelector(
                            "#mashedPotatoes"
                          ).innerHTML += `<li>${step}</li>`;
                          document
                            .querySelector("#mashedPotatoesImg")
                            .removeAttribute("hidden");
                        },
                        (error) => console.log(error)
                      );
                    },
                    (error) => console.log(error)
                  );
                },
  
                (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
    
//Iteration 2

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction("steak", 8);
  })
  setTimeout(() => {
    document.querySelector(
      "#steak"
    ).innerHTML += `<li>Steak is ready</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  }, 1000);

// Iteration 3

const makeBroccoliTryCatch = async () => {
  try {
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 0)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 1)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 2)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 3)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 4)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 5)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 6)}</li>`;
    setTimeout(() => {
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>Broccoli is ready</li>`;
      document.querySelector("#broccoliImg").removeAttribute("hidden");
    }, 1000);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
makeBroccoliTryCatch();

// Bonus 

let step0 = obtainInstruction("brusselsSprouts", 0);
let step1 = obtainInstruction("brusselsSprouts", 1);
let step2 = obtainInstruction("brusselsSprouts", 2);
let step3 = obtainInstruction("brusselsSprouts", 3);
let step4 = obtainInstruction("brusselsSprouts", 4);
let step5 = obtainInstruction("brusselsSprouts", 5);
let step6 = obtainInstruction("brusselsSprouts", 6);
let step7 = obtainInstruction("brusselsSprouts", 7);

const brusselsSproutsPromiseAll = () => {
  Promise.all([step0, step1, step2, step3, step4, step5, step6, step7])
    .then((arrayOfSteps) => {
      arrayOfSteps.forEach((individualStep) => {
        console.log(individualStep);
        document.querySelector(
          "#brusselsSprouts"
        ).innerHTML += `<li>${individualStep}</li>`;
      });
      setTimeout(() => {
        document.querySelector(
          "#brusselsSprouts"
        ).innerHTML += `<li>Brussels Sprouts are ready!</li>`;
        document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
      }, 1000);
    });
};
brusselsSproutsPromiseAll();