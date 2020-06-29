// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < steak.length; i++) {
//   addFood(steak[i], '#steak');
// }

const target = document.getElementById("table");

// Iteration 1 using callbacks
const steakPromise = addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                target.innerHTML +=
                  '<img src="../public/images/steak.jpg" alt="">';
                // ... your code here
              });
            });
          });
        });
      });
    });
  });
  // ... your code here
});

// Iteration 2 using `.then()`
const potatoePromise = addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          target.innerHTML += ` <img src="../public/images/mashPotatoes.jpg" alt=""> `;
        });
      });
    });
  });
});
// ... your code here

// Iteration 3 using async and await
async function makeFood() {
  try {
    for (let step = 0; step < brusselSprouts.length; step++) {
      const eachStep = brusselSprouts[step];
      await addFood(eachStep, `#brusselSprouts`);
    }
  } catch (error) {
    console.log(error);
  }
}

makeFood().then(() => {
  target.innerHTML += ` <img src="../public/images/brusselSprouts.jpg" alt=""> `;
});

Promise.all([steakPromise, potatoePromise, makeFood()]).then((res) => {
  document.getElementById(
    "steps"
  ).innerHTML += `<button>Dinner is served!</button>`;
});
