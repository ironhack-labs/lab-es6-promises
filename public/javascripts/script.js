// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//for (let i = 0; i < mashPotatoes.length; i++) {
//addFood(steak[i], '#steak');
// console.log(mashPotatoes[i]);
//}

// Iteration 1 using callbacks
const table = document.querySelector("#table");
const audio = new Audio("../public/media/dinnerIsServed.mp3");

let test1 = addFood(steak[0], "#steak", () => {
  // ... your code here
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                table.innerHTML += `<img src="../public/images/steak.jpg" alt=""></img>`;
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
let test2 = addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  // ... your code here
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          table.innerHTML += `<img src="../public/images/mashPotatoes.jpg" alt=""></img>`;
        });
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(step) {
  for (let i = 0; i < step.length; i++) {
    await addFood(step[i], "#brusselSprouts");
  }
  table.innerHTML += `<img src="../public/images/brusselSprouts.jpg" alt=""></img>`;
}
let test3 = makeFood(brusselSprouts);

Promise.all([test2, test1, test3]).then(() => {
  alert("Dinner is served");
  //audio.play();
});
