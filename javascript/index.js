const potatoeImg = document.getElementById("mashedPotatoesImg");
const steakImg = document.getElementById("steakImg");
const broccoliImg = document.getElementById("broccoliImg");
const brusselImg = document.getElementById("brusselsSproutsImg");

const mashedPotatoesOl = document.getElementById("mashedPotatoes");
// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  mashedPotatoesOl.innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    mashedPotatoesOl.innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      mashedPotatoesOl.innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        mashedPotatoesOl.innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          mashedPotatoesOl.innerHTML += `<li>${step4}</li>`;
          setTimeout(() => {
            mashedPotatoesOl.innerHTML += `<li>Mashed potatoes are ready!</li>`;
            potatoeImg.removeAttribute("hidden");
            // potatoeImg.style.display = "block"; // display:something overwrites "hidden"
          }, 500);
        }); // ,(err) => console.log(err));
      }); // ,(err) => console.log(err));        // Tried to add the error callbacks
    }); // ,(err) => console.log(err));        // but prettier makes it unreadable.
  }); // ,(err) => console.log(err));        // I could figure out why and how to
}); // ,(err) => console.log(err));        // change that, but... I could also do it like this.

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
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    setTimeout(() => {
      steakImg.removeAttribute("hidden");
      document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    }, 500);
  })
  .then(bringTheEyesBack);

// Iteration 3 using async/await
async function makeBroccoli() {
  const line0 = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>0 ${line0}</li>`;

  const line1 = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li>1 ${line1}</li>`;

  const line2 = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li>2 ${line2}</li>`;

  const line3 = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li>3 ${line3}</li>`;

  const line4 = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li>4 ${line4}</li>`;

  const line5 = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li>5 ${line5}</li>`;

  const line6 = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li>6 ${line6}</li>`;

  setTimeout(() => {
    broccoliImg.removeAttribute("hidden");
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  }, 500);
}

makeBroccoli();

// Bonus 2 - Promise all
function makeBrusselsSprouts() {
  const pro0 = obtainInstruction("brusselsSprouts", 0);
  const pro1 = obtainInstruction("brusselsSprouts", 1);
  const pro2 = obtainInstruction("brusselsSprouts", 2);
  const pro3 = obtainInstruction("brusselsSprouts", 3);
  const pro4 = obtainInstruction("brusselsSprouts", 4);
  const pro5 = obtainInstruction("brusselsSprouts", 5);
  const pro6 = obtainInstruction("brusselsSprouts", 6);
  const pro7 = obtainInstruction("brusselsSprouts", 7);

  Promise.all([pro0, pro1, pro2, pro3, pro4, pro5, pro6, pro7]).then((values) => {
    values.forEach((value) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`;
    });
    setTimeout(() => {
      brusselImg.removeAttribute("hidden");
      document.querySelector("#brusselsSprouts").innerHTML += `<li>Broccoli is ready!</li>`;
    }, 500);
  });
}

makeBrusselsSprouts();

function bringTheEyesBack() {
  setTimeout(() => {
    steakImg.src = "images/steak.jpg";
    broccoliImg.src = "images/broccoli.jpg";
    brusselImg.src = "images/brussels-sprouts.jpg";
    potatoeImg.src = "images/mashed-potatoes.jpg";
  }, 3000);
}
