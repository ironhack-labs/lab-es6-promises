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
                    document;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");

                    document.querySelector("#mashedPotatoes").innerHTML +=
                      "<li>Mashed Potatoes are ready!</li>";
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
// ...
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
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
    return obtainInstruction("steak", 7);
  });

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  for (const step of broccoli) {
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    await new Promise((resolve) => setTimeout(resolve, 1000)); //
  }
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
makeBroccoli();

// Bonus 2 - Promise all
// ...
console.log(brusselsSprouts);
Promise.all(brusselsSprouts).then(() => {
  setTimeout(() => {
    for (let i = 0; i < brusselsSprouts.length; i++) {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${brusselsSprouts[i]}</li>`;
    }
  }, 1000);
  setTimeout(() => {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
  }, 1500);
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
