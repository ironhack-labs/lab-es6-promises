// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i]);
// }

// Iteration 1 using callbacks
const promiseSteack = addFood(steak[0], "#steak", () => {
  // ... your code here
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak");
              const imgSteak = document.createElement("img");
              imgSteak.src = "./public/images/steak.jpg";
              document.getElementById("table").appendChild(imgSteak);
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
const promisePotatoes = addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  // ... your code here
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes");
        const imgPotatoes = document.createElement("img");
        imgPotatoes.src = "./public/images/mashPotatoes.jpg";
        document.getElementById("table").appendChild(imgPotatoes);
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(step) {
  // ... your code here
  console.log("ii");
  for (let i = 0; i < brusselSprouts.length; i++) {
    await addFood(brusselSprouts[i], "#brusselSprouts");
    if (i === 8) {
      const imgBrusselSprout = document.createElement("img");
      imgBrusselSprout.src = "./public/images/brusselSprouts.jpg";
      document.getElementById("table").appendChild(imgBrusselSprout);
    }
  }
}

Promise.all([promiseSteack, promisePotatoes, makeFood()]).then(() => {
  const dinner = document.createElement("button");
  dinner.innerHTML = "Dinner is served.";
  document.getElementById("steps").appendChild(dinner);
});
