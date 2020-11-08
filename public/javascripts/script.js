// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/*for (let i = 0; i < mashPotatoes.length; i++) {
  addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}*/

// Iteration 1 using callbacks

function recursivelyAddSteak(i, cb) {
  return new Promise ((resolve, reject) => {
    addFood(steak[i], '#steak', () => {
      if (typeof steak[i+1] !== 'undefined') {
        recursivelyAddSteak(i+1, cb).then(() => resolve("steak ready"));
      } else {
        cb();
        resolve("steak ready"); 
      }
    });
  });
}

function showImage(dish) {
  document.querySelector("#table").innerHTML += `<img src = "public/images/${dish}.jpg"></img>`;
}

const steakReady = recursivelyAddSteak(0, () => showImage("steak"));
//steakReady.then(() => console.log('seqck rdy'));

// Iteration 2 using `.then()`

function recursiveThen(i, cb) {
  return new Promise ((resolve, reject) => {
    addFood(mashPotatoes[i], '#mashPotatoes')
    .then(() => {
      if (typeof mashPotatoes[i+1] !== 'undefined') {
        recursiveThen(i+1, cb).then(() => resolve("mash potatoes ready"));
      } else {
        cb();
        resolve("mash potatoes ready");
      }
    }); 
  });
}

const mashPotatoesReady = recursiveThen(0, () => showImage("mashPotatoes"));
//mashPotatoesReady.then(() => console.log('potato rdy'));

// Iteration 3 using async and await

async function makeFood(steps) {
  for (let i = 0; i < steps.length; i++) {
    await addFood(steps[i], '#brusselSprouts');
  }
  showImage("brusselSprouts");
  Promise.resolve('brussel sprouts ready');
}

const brusselSproutsReady = makeFood(brusselSprouts);
//brusselSproutsReady.then(() => console.log("sprouts ready"));

function serveDinner() {
  document.querySelector("#button").innerHTML += `<button>Dinner is served.</button>`;
}

Promise.all([steakReady, mashPotatoesReady, brusselSproutsReady])
.then(() => {
  serveDinner();
});

