// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
//   getInstruction("mashedPotatoes", 0, (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 1, (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 2, (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 3, (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 4, (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   }, (error) => console.log(error));




// Iteration 1 - Using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoesImg").style.display = "block";
        });
      });
    });
  });
});


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
    document.querySelector("#steakImg").style.display = "block";
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });



// Iteration 3 using async/await

async function makeBroccoli() {
  try {

    const broccoliList = document.querySelector("#broccoli");

    // create promises for steps 0–6
    const promises = [];

    for (let i = 0; i < 7; i++) {
      promises.push(obtainInstruction("broccoli", i));
    }

    // wait for ALL instructions at once
    const steps = await Promise.all(promises);

    // display them in order
    steps.forEach(step => {
      broccoliList.innerHTML += `<li>${step}</li>`;
    });

    document.querySelector("#broccoliImg").style.display = "block";

  } catch (error) {
    console.error("Error preparing broccoli:", error);
  }
}

makeBroccoli();


// Bonus 2 - Promise all for Brussels Sprouts

async function makeBrusselsSprouts() {
  try {

    const brusselsList = document.querySelector("#brusselsSprouts");

    // create promises for steps 0–7
    const promises = [];

    for (let i = 0; i < 8; i++) {
      promises.push(obtainInstruction("brusselsSprouts", i));
    }

    // wait for ALL instructions at once
    const steps = await Promise.all(promises);

    // display them in order
    steps.forEach(step => {
      brusselsList.innerHTML += `<li>${step}</li>`;
    });

    document.querySelector("#brusselsSproutsImg").style.display = "block";

  } catch (error) {
    console.error("Error preparing Brussels sprouts:", error);
  }
}

makeBrusselsSprouts();
