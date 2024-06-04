// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
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
  .then((res1) => {
    document.querySelector("#steak").innerHTML += `<li>${res1}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((res2) => {
    document.querySelector("#steak").innerHTML += `<li>${res2}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((res3) => {
    document.querySelector("#steak").innerHTML += `<li>${res3}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((res4) => {
    document.querySelector("#steak").innerHTML += `<li>${res4}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((res5) => {
    document.querySelector("#steak").innerHTML += `<li>${res5}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((res6) => {
    document.querySelector("#steak").innerHTML += `<li>${res6}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((res7) => {
    document.querySelector("#steak").innerHTML += `<li>${res7}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((res8) => {
    document.querySelector("#steak").innerHTML += `<li>${res8}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is Ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((err) => console.log(err));

// Iteration 3 using async/await
const doBroccoli = async () => {
  try {
    const response1 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${response1}</li>`;
    const response2 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${response2}</li>`;
    const response3 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${response3}</li>`;
    const response4 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${response4}</li>`;
    const response5 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${response5}</li>`;
    const response6 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${response6}</li>`;
    const response7 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${response7}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is Ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (err) {
    console.log(err);
  }
};
doBroccoli();
// Bonus 2 - Promise all

const doBrussels = async () => {
  const promiseArr = [];
  for (let i = 0; i < brusselsSprouts.length; i++) {
    promiseArr.push(obtainInstruction("brusselsSprouts", i));
  }
  Promise.all(promiseArr)
    .then((promiseAllResponse) => {
      console.log(promiseAllResponse);
      promiseAllResponse.forEach((oneStep) => {
        document.querySelector(
          "#brusselsSprouts"
        ).innerHTML += `<li>${oneStep}</li>`;
      });
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    })
    .catch((err) => {
      console.log(err);
    });
};
doBrussels();
