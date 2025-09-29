// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 /* getInstruction("mashedPotatoes", 0, (step1) => {
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
  }, (error) => console.log(error));

*/

// Iteration 1 - using callbacks

function onError(err) {
  console.error(err);
}

const mashedPotatoesList = document.querySelector("#mashedPotatoes");

getInstruction("mashedPotatoes", 0, (step0) => {
  mashedPotatoesList.innerHTML += `<li>${step0}</li>`;

  getInstruction("mashedPotatoes", 1, (step1) => {
    mashedPotatoesList.innerHTML += `<li>${step1}</li>`;

    getInstruction("mashedPotatoes", 2, (step2) => {
      mashedPotatoesList.innerHTML += `<li>${step2}</li>`;

      getInstruction("mashedPotatoes", 3, (step3) => {
        mashedPotatoesList.innerHTML += `<li>${step3}</li>`;

        getInstruction("mashedPotatoes", 4, (step4) => {
          mashedPotatoesList.innerHTML += `<li>${step4}</li>`;
          mashedPotatoesList.innerHTML += `<li>Mashed potatoes are ready!</li>`;
          const img = document.querySelector("#mashedPotatoesImg");
          if (img) img.removeAttribute("hidden");
        }, onError);

      }, onError);

    }, onError);

  }, onError);

}, onError);


// Iteration 2 - using promises

const steakList = document.querySelector("#steak");

obtainInstruction("steak", 0)
  .then((step0) => {
    steakList.innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    steakList.innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    steakList.innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    steakList.innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    steakList.innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    steakList.innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    steakList.innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    steakList.innerHTML += `<li>${step7}</li>`;
    steakList.innerHTML += `<li>Steak is ready!</li>`;
    const img = document.querySelector("#steakImg");
    if (img) img.removeAttribute("hidden");
  })
  .catch((err) => console.error(err));


// Iteration 3 - using async/await

async function makeBroccoli() {
  try {
    const broccoliList = document.querySelector("#broccoli");

    const step0 = await obtainInstruction("broccoli", 0);
    broccoliList.innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction("broccoli", 1);
    broccoliList.innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction("broccoli", 2);
    broccoliList.innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction("broccoli", 3);
    broccoliList.innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction("broccoli", 4);
    broccoliList.innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction("broccoli", 5);
    broccoliList.innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction("broccoli", 6);
    broccoliList.innerHTML += `<li>${step6}</li>`;

    broccoliList.innerHTML += `<li>Broccoli is ready!</li>`;
    const img = document.querySelector("#broccoliImg");
    if (img) img.removeAttribute("hidden");
  } catch (err) {
    console.error(err);
  }
}

makeBroccoli();


// Bonus: Iteration 5 - Promise.all()

const brusselsList = document.querySelector("#brusselsSprouts");

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
  .then((steps) => {
    steps.forEach((step) => {
      brusselsList.innerHTML += `<li>${step}</li>`;
    });
    brusselsList.innerHTML += `<li>Brussels sprouts are ready!</li>`;
    const img = document.querySelector("#brusselsSproutsImg");
    if (img) img.removeAttribute("hidden");
  })
  .catch((err) => console.error(err));