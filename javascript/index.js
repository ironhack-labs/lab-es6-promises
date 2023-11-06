// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;
        getInstruction("mashedPotatoes", 2, (step2) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step2}</li>`;
          getInstruction(
            "mashedPotatoes",
            3,
            (step3) => {
              document.querySelector(
                "#mashedPotatoes"
              ).innerHTML += `<li>${step3}</li>`;
              getInstruction("mashedPotatoes", 4, (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  5,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                  },
                  (error) => console.log(error)
                );
                const parentElm = document.getElementById("mashedPotatoes");
                const childElm = document.createElement("li");
                parentElm.appendChild(childElm);
                childElm.innerHTML = "Mashed potatoes are ready!";
                document
                  .getElementById("mashedPotatoesImg")
                  .removeAttribute("hidden");
              });
            },
            (error) => console.log(error)
          );
        });
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
// ...
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
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    const parentElm = document.getElementById("steak");
    const childElm = document.createElement("li");
    parentElm.appendChild(childElm);
    childElm.innerHTML = "Stake is ready!";
    document.getElementById("steakImg").removeAttribute("hidden");
  })
  .catch((err) => {
    console.log("Something went wrong" + err);
  });

// ... Your code here

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    for (let i = 0; i < 7; i++) {
      const step = await obtainInstruction("broccoli", i);
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    }
    const parentElm = document.getElementById("broccoli");
    const childElm = document.createElement("li");
    parentElm.appendChild(childElm);
    childElm.innerHTML = "Broccoli is ready!";
    document.getElementById("broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus

const makeBrusselsSprouts = () => {
  const sproutsArr = [];

  for (i = 0; i < 8; i++) {
    sproutsArr.push(obtainInstruction("brusselsSprouts", i));
  }
  console.log(sproutsArr);
  Promise.all(sproutsArr)
    .then((response) => {
      response.forEach((e) => {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${e}</li>`;
      });
      const parentElm = document.getElementById("brusselsSprouts");
      const childElm = document.createElement("li");
      parentElm.appendChild(childElm);
      childElm.innerHTML = "Brussels sprouts are ready!";
      document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
    })
    .catch((error) => {
      console.log(error);
    });
};

makeBrusselsSprouts();
