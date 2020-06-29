// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < steak.length; i++) {
//   addFood(steak[i], "#steak");
// }

const table = document.getElementById("table");

// Iteration 1 using callbacks

function promiseSteak() {
  return addFood(steak[0], "#steak", () => {
    addFood(steak[1], "#steak", () => {
      addFood(steak[2], "#steak", () => {
        addFood(steak[3], "#steak", () => {
          addFood(steak[4], "#steak", () => {
            addFood(steak[5], "#steak", () => {
              addFood(steak[6], "#steak", () => {
                addFood(steak[7], "#steak", () => {
                  table.innerHTML += `<img src="/Labs/Week4/lab-es6-promises/public/images/steak.jpg">`;
                  // ?? Why is the following not working?
                  // table.innerHTML += `<img src="../images/steak.jpg">`
                });
              });
            });
          });
        });
      });
    });
  });
}

// Iteration 2 using `.then()`
function promiseMashPotatoes() {
  return addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
          addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
            table.innerHTML += `<img src ="/Labs/Week4/lab-es6-promises/public/images/mashPotatoes.jpg">`;
          });
        });
      });
    });
  });
}

// Iteration 3 using async and await

async function promiseBrusselSprouts() {
    for (let i = 0; i < brusselSprouts.length; i++) {
      await addFood(brusselSprouts[i], `#brusselSprouts`);
    }
    table.innerHTML += `<img src ="/Labs/Week4/lab-es6-promises/public/images/brusselSprouts.jpg">`;
};

// Why is the following not working??
// async function makeFood(step) {
//   await addFood(step, "#brusselSprouts");
// }

// for (let i = 0; i < brusselSprouts.length; i++) {
//   makeFood(brusselSprouts[i]);
// }

// brusselSprouts.forEach((eachStep) => {
//   async function makeFood(step) {
//     await addFood(step, '#brusselSprouts');
//   }
//   makeFood(eachStep);
// });

// BONUS 2

// function promiseCheck(ingredient) {
//   return new Promise((resolve, reject) => {
//     if(table.innerHTML.includes(`${ingredient}.jpg`)) resolve("it works");
//   });
// }

// const promise1 = promiseCheck(steak);
// const promise2 = promiseCheck(mashPotatoes);
// const promise3 = promiseCheck(brusselSprouts);

// const promise1 = promiseSteak();
// const promise2 = promiseMashPotatoes();
// const promise3 = promiseBrusselSprouts();

// function promiseAll() {
  
// }


Promise.all([promiseSteak(), promiseMashPotatoes(),promiseBrusselSprouts()]) // takes an array of promises
    .then((res) => {
      console.log("success !!!");
      alert("Dinner is served");
    })
    .catch((err) => {
      console.error(err);
    });

// promiseAll();
