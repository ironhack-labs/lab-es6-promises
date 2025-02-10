// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*   getInstruction("mashedPotatoes", 0, (step1)= > {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */

// Iteration 1 - using callbacks

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
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5)
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7)
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((e) => {
    console.log(e);
  });

// Iteration 3 using async/await

async function makeBroccoli() {
  try{
    const broccoli0 = await obtainInstruction('broccoli', 0)
    const broccoli1 = await obtainInstruction('broccoli', 1)
    const broccoli2 = await obtainInstruction('broccoli', 2)
    const broccoli3 = await obtainInstruction('broccoli', 3)
    const broccoli4 = await obtainInstruction('broccoli', 4)
    const broccoli5 = await obtainInstruction('broccoli', 5)

    document.querySelector("#broccoli").innerHTML += `<li>${broccoli0}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli1}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli2}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli3}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli4}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli5}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");

  }
  catch{(e) => {}}
}

makeBroccoli()

// Bonus 2 - Promise all

Promise.all([brusselsSprouts])
  .then((array) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${array[0][0]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${array[0][1]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${array[0][2]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${array[0][3]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${array[0][4]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${array[0][5]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${array[0][6]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${array[0][7]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    console.log(array[0])
  })
  .catch((error) => {
    console.log(error)
  });
