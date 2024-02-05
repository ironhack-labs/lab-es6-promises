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

// // Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (instruction0) => {
    document.querySelector(
      "#mashedPotatoes"
    ).innerHTML += `<li>${instruction0}</li>`;

    getInstruction(
      "mashedPotatoes",
      1,
      (instruction1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${instruction1}</li>`;

        getInstruction(
          "mashedPotatoes",
          2,
          (instruction2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${instruction2}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (instruction3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${instruction3}</li>`;

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (instruction4) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${instruction4}</li>`;
                    document.querySelector("#mashedPotatoes").innerHTML +=
                      "<li>Mashed potatoes are ready!</li>";
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

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((result1) => {
    document.querySelector("#steak").innerHTML += `<li>${result1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((result2) => {
    document.querySelector("#steak").innerHTML += `<li>${result2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((result3) => {
    document.querySelector("#steak").innerHTML += `<li>${result3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((result4) => {
    document.querySelector("#steak").innerHTML += `<li>${result4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((result5) => {
    document.querySelector("#steak").innerHTML += `<li>${result5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((result6) => {
    document.querySelector("#steak").innerHTML += `<li>${result6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((result7) => {
    document.querySelector("#steak").innerHTML += `<li>${result7}</li>`;
  })
  .then(() => {
    document.querySelector("#steak").innerHTML += "<li>Steak is ready!</li>";
  })
  .then(() => {
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
async function makeBroccoli() {
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
  document.querySelector("#broccoli").innerHTML +=
    "<li>Broccoli is ready!</li>";
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli();

// Bonus 2 - Promise all
