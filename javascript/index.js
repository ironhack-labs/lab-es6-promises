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
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step1) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step1}</li>`;
      getInstruction("mashedPotatoes", 2, (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;
        getInstruction("mashedPotatoes", 3, (step1) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step1}</li>`;
          getInstruction("mashedPotatoes", 4, (step1) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step1}</li>`;
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>The Mash Is ready</li>`;
            document
              .getElementById("mashedPotatoesImg")
              .removeAttribute("hidden");
          });
        });
      });
    });
  },
  (error) => console.log(error)
);

//  disgusting

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  })
  .then(() =>
    obtainInstruction("steak", 1)
      .then((step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
      })
      .then(() =>
        obtainInstruction("steak", 2)
          .then((step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
          })
          .then(() =>
            obtainInstruction("steak", 3)
              .then((step3) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step3}</li>`;
              })
              .then(() =>
                obtainInstruction("steak", 4)
                  .then((step4) => {
                    document.querySelector(
                      "#steak"
                    ).innerHTML += `<li>${step4}</li>`;
                  })
                  .then(() =>
                    obtainInstruction("steak", 5)
                      .then((step5) => {
                        document.querySelector(
                          "#steak"
                        ).innerHTML += `<li>${step5}</li>`;
                      })
                      .then(() =>
                        obtainInstruction("steak", 6)
                          .then((step6) => {
                            document.querySelector(
                              "#steak"
                            ).innerHTML += `<li>${step6}</li>`;
                          })
                          .then(() =>
                            obtainInstruction("steak", 7).then((step7) => {
                              document
                                .getElementById("steakImg")
                                .removeAttribute("hidden");

                              document.querySelector(
                                "#steak"
                              ).innerHTML += `<li>${step7}</li>`;
                            })
                          )
                      )
                  )
              )
          )
      )
  );

// Iteration 3 using async/await
// ...
async function makeBrocoli() {
  const renderStep = (res) => {
    document.querySelector("#broccoli").innerHTML += `<li>${res}</li>`;
  };
  const step0 = await obtainInstruction("broccoli", 0).then((res) =>
    renderStep(res)
  );
  const step2 = await obtainInstruction("broccoli", 2).then((res) =>
    renderStep(res)
  );
  const step3 = await obtainInstruction("broccoli", 3).then((res) =>
    renderStep(res)
  );
  const step4 = await obtainInstruction("broccoli", 4).then((res) =>
    renderStep(res)
  );
  const step5 = await obtainInstruction("broccoli", 5).then((res) =>
    renderStep(res)
  );
  const step6 = await obtainInstruction("broccoli", 6).then((res) =>
    renderStep(res)
  );

  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;

  document.getElementById("broccoliImg").removeAttribute("hidden");
}
makeBrocoli();

// Bonus 2 - Promise all
// ...
async function Brussel() {
  const renderStep = (res) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${res}</li>`;
  };

  const step0 = await obtainInstruction("brusselsSprouts", 0);
  const step1 = await obtainInstruction("brusselsSprouts", 1);
  const step2 = await obtainInstruction("brusselsSprouts", 2);
  const step3 = await obtainInstruction("brusselsSprouts", 3);
  const step4 = await obtainInstruction("brusselsSprouts", 4);
  const step5 = await obtainInstruction("brusselsSprouts", 5);
  const step6 = await obtainInstruction("brusselsSprouts", 6);

  Promise.all([step0, step1, step2, step3, step3, step4, step5, step6]).then(
    (values) =>
      values.forEach((val) => {
        renderStep(val);
      })
  );
  document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
}
Brussel();
