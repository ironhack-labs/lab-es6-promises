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
const broccoliList = document.getElementById("broccoli");
const brusselsList = document.getElementById("brusselsSprouts");
const mashedPotatoesImg = document.getElementById("mashedPotatoesImg");
const steakImg = document.getElementById("steakImg");
const broccoliImg = document.getElementById("broccoliImg");
const brusselsImg = document.getElementById("brusselsSproutsImg");
// Iteration 1 - using callbacks
const p1 = getInstruction(
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
                    mashedPotatoesList.innerHTML += `<li>Mashed Potatoes are ready!</li>`;

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

// const p2 = obtainInstruction("steak", 0)
//   .then((list) => {
//     steakList.innerHTML += `<li>${list}</li>`;
//     obtainInstruction("steak", 1).then((list) => {
//       steakList.innerHTML += `<li>${list}</li>`;
//       obtainInstruction("steak", 2).then((list) => {
//         steakList.innerHTML += `<li>${list}</li>`;
//         obtainInstruction("steak", 3).then((list) => {
//           steakList.innerHTML += `<li>${list}</li>`;
//           obtainInstruction("steak", 4).then((list) => {
//             steakList.innerHTML += `<li>${list}</li>`;
//             obtainInstruction("steak", 5).then((list) => {
//               steakList.innerHTML += `<li>${list}</li>`;
//               obtainInstruction("steak", 6).then((list) => {
//                 steakList.innerHTML += `<li>${list}</li>`;
//                 obtainInstruction("steak", 7).then((list) => {
//                   steakList.innerHTML += `<li>${list}</li>`;
//                   steakList.innerHTML += `<li>Steak is ready!</li>`;

//                   steakImg.removeAttribute("hidden");
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   })
//   .catch((error) => console.error(error));

obtainInstruction("steak", 0)
  .then((list) => {
    steakList.innerHTML += `<li>${list}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((list) => {
    steakList.innerHTML += `<li>${list}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((list) => {
    steakList.innerHTML += `<li>${list}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((list) => {
    steakList.innerHTML += `<li>${list}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((list) => {
    steakList.innerHTML += `<li>${list}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((list) => {
    steakList.innerHTML += `<li>${list}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((list) => {
    steakList.innerHTML += `<li>${list}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((list) => {
    steakList.innerHTML += `<li>${list}</li>`;
    steakList.innerHTML += `<li>Steak is ready!</li>`;
    steakImg.removeAttribute("hidden");
  })
  .catch((error) => console.error(error));
// Iteration 3 using async/await

async function getBroccoli() {
  await obtainInstruction("broccoli", 0).then(
    (instruction) => (broccoliList.innerHTML += `<li>${instruction}</li>`)
  );
  await obtainInstruction("broccoli", 1).then(
    (instruction) => (broccoliList.innerHTML += `<li>${instruction}</li>`)
  );
  await obtainInstruction("broccoli", 2).then(
    (instruction) => (broccoliList.innerHTML += `<li>${instruction}</li>`)
  );
  await obtainInstruction("broccoli", 3).then(
    (instruction) => (broccoliList.innerHTML += `<li>${instruction}</li>`)
  );
  await obtainInstruction("broccoli", 4).then(
    (instruction) => (broccoliList.innerHTML += `<li>${instruction}</li>`)
  );
  await obtainInstruction("broccoli", 5).then(
    (instruction) => (broccoliList.innerHTML += `<li>${instruction}</li>`)
  );
  await obtainInstruction("broccoli", 6).then(
    (instruction) => (broccoliList.innerHTML += `<li>${instruction}</li>`)
  );
  broccoliList.innerHTML += `<li>Broccoli are ready!</li>`;
  broccoliImg.removeAttribute("hidden");
}

const p3 = getBroccoli();

// Bonus 2 - Promise all

const brussel0 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(obtainInstruction("brusselsSprouts", 0));
  }, 500);
});

const brussel1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(obtainInstruction("brusselsSprouts", 1));
  }, 1000);
});
const brussel2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(obtainInstruction("brusselsSprouts", 2));
  }, 1500);
});
const brussel3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(obtainInstruction("brusselsSprouts", 3));
  }, 2000);
});
const brussel4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(obtainInstruction("brusselsSprouts", 4));
  }, 2500);
});
const brussel5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(obtainInstruction("brusselsSprouts", 5));
  }, 3000);
});
const brussel6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(obtainInstruction("brusselsSprouts", 6));
  }, 3500);
});
const brussel7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(obtainInstruction("brusselsSprouts", 7));
  }, 4000);
});

Promise.all([
  brussel0,
  brussel1,
  brussel2,
  brussel3,
  brussel4,
  brussel5,
  brussel6,
  brussel7,
]).then((instructions) => {
  instructions.forEach((instruction) => {
    let li = document.createElement("li");
    li.innerHTML = instruction;
    brusselsList.append(li);
  });
  brusselsList.innerHTML += `<li>Brussels Sprouts are ready!</li>`;
  brusselsImg.removeAttribute("hidden");
});
