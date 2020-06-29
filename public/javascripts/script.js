// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < steak.length; i++) {
//   addFood(steak[i], '#steak');
// }

const table = document.getElementById("table");

// Iteration 1 using callbacks
function addSteak() {
  addFood(steak[0], '#steak', () => {
    addFood(steak[1], '#steak', () => {
      addFood(steak[2], '#steak', () => {
        addFood(steak[3], '#steak', () => {
          addFood(steak[4], '#steak', () => {
            addFood(steak[5], '#steak', () => {
              addFood(steak[6], '#steak', () => {
                addFood(steak[7], '#steak', () => {
                  table.innerHTML += `<img src="../public/images/steak.jpg" alt="steak">`;
  })})})})})})})})
};
//addSteak();

// Iteration 2 using `.then()`
function addPotatoes() {
  addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
          addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
            table.innerHTML += `<img src="../public/images/mashPotatoes.jpg" alt="mashed potatoes">`;
          })
        })
      })
    })
  })
};
//addPotatoes();


// Iteration 3 using async and await
// brusselSprouts.forEach(eachStep => {
//   async function makeFood(step) {
//     const result = await addFood(step, '#brusselSprouts');
//   }
//   makeFood(eachStep);
// });

async function bsLoop() {
  for (let index = 0; index < brusselSprouts.length; index++) {
    const step = brusselSprouts[index];
    const print = await addFood(step, '#brusselSprouts');
  }
  table.innerHTML += `<img src="../public/images/brusselSprouts.png" alt="brussel sprout">`;
};
//bsLoop();

Promise.all([addSteak(), addPotatoes(), bsLoop()]).then(() => {
  document.getElementById("steps").innerHTML += `<button>Dinner is served!</button>`;
});