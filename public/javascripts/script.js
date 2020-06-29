// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//for (let i = 0; i < steak.length; i++) {
//addFood(steak[i], '#steak');
//}
var img = document.getElementById("table");
// Iteration 1 using callbacks
addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[6], "#steak", () => {
            addFood(steak[7], "#steak", () => {
              img.innerHTML += `<img src="public/images/steak.jpg">`;
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
  addFood(mashPotatoes[0], "#mashPotatoes")
  // ... your code here
  .then(() => addFood(mashPotatoes[1], `#mashPotatoes`))
  .then(() => addFood(mashPotatoes[2], `#mashPotatoes`))
  .then(() => addFood(mashPotatoes[3], `#mashPotatoes`))
  .then(() => addFood(mashPotatoes[4], `#mashPotatoes`))
  img.innerHTML += `<img src="public/images/mashPotatoes.jpg">`;

// Iteration 3 using async and await

// brusselSprouts.forEach((eachStep) => {
//   async function makeFood(step) {
//     let food = await addFood(step, `#brusselSprouts`);
//     return food;
//   }
//   makeFood(eachStep);
  
// });
// img.innerHTML += `<img src="public/images/brusselSprouts.jpg">`;

async function makeFood() {
  for (let index = 0; index < brusselSprouts.length; index++) {
    const step = brusselSprouts[index];
    const print = await addFood(step, '#brusselSprouts');
  }
  img.innerHTML += `<img src="public/images/brusselSprouts.jpg" >`;
  
};

Promise.all([makeFood()]).then(() => {
  console.log("promiseall");
  alert("Dinner is served!");
}); 

Promise.all([ makeFood]).then(() => {
  document.getElementById("steps").innerHTML += `<button>Dinner is served!</button>`;
}); 

