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
const mashedPotatoesList = document.getElementById("mashedPotatoes");
const steakList = document.getElementById("steak");
const brusselsList = document.getElementById("brusselsSprouts");
const mashedPotatoesImg = document.getElementById("mashedPotatoesImg");
const steakImg = document.getElementById("steakImg");
const brusselsImg = document.getElementById("brusselsSproutsImg");
// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (instruction) => {
    let li = document.createElement("li");
    li.innerHTML = instruction;
    mashedPotatoesList.append(li);
    getInstruction(
      "mashedPotatoes",
      1,
      (instruction) => {
        mashedPotatoesList.innerHTML += `<li>${instruction}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (instruction) => {
            mashedPotatoesList.innerHTML += `<li>${instruction}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (instruction) => {
                mashedPotatoesList.innerHTML += `<li>${instruction}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (instruction) => {
                    mashedPotatoesList.innerHTML += `<li>${instruction}</li>`;
                    mashedPotatoesImg.removeAttribute("hidden");
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

obtainInstruction("steak", 0).then((list) => {
  steakList.innerHTML += `<li>${list}</li>`;
  obtainInstruction("steak", 1).then((list) => {
    steakList.innerHTML += `<li>${list}</li>`;
    obtainInstruction("steak", 2).then((list) => {
      steakList.innerHTML += `<li>${list}</li>`;
      obtainInstruction("steak", 3).then((list) => {
        steakList.innerHTML += `<li>${list}</li>`;
        obtainInstruction("steak", 4).then((list) => {
          steakList.innerHTML += `<li>${list}</li>`;
          obtainInstruction("steak", 5).then((list) => {
            steakList.innerHTML += `<li>${list}</li>`;
            obtainInstruction("steak", 6).then((list) => {
              steakList.innerHTML += `<li>${list}</li>`;
              obtainInstruction("steak", 7).then((list) => {
                steakList.innerHTML += `<li>${list}</li>`;
                steakImg.removeAttribute("hidden");
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 3 using async/await

async function getBrusselSprouts() {
  await obtainInstruction("brusselsSprouts", 0).then(
    (instruction) => (brusselsList.innerHTML += `<li>${instruction}</li>`)
  );
  await obtainInstruction("brusselsSprouts", 1).then(
    (instruction) => (brusselsList.innerHTML += `<li>${instruction}</li>`)
  );
  await obtainInstruction("brusselsSprouts", 2).then(
    (instruction) => (brusselsList.innerHTML += `<li>${instruction}</li>`)
  );
  await obtainInstruction("brusselsSprouts", 3).then(
    (instruction) => (brusselsList.innerHTML += `<li>${instruction}</li>`)
  );
  await obtainInstruction("brusselsSprouts", 4).then(
    (instruction) => (brusselsList.innerHTML += `<li>${instruction}</li>`)
  );
  await obtainInstruction("brusselsSprouts", 5).then(
    (instruction) => (brusselsList.innerHTML += `<li>${instruction}</li>`)
  );
  await obtainInstruction("brusselsSprouts", 6).then(
    (instruction) => (brusselsList.innerHTML += `<li>${instruction}</li>`)
  );
  await obtainInstruction("brusselsSprouts", 7).then(
    (instruction) => (brusselsList.innerHTML += `<li>${instruction}</li>`)
  );
  brusselsImg.removeAttribute("hidden");
}

getBrusselSprouts();

// Bonus 2 - Promise all
// ...
