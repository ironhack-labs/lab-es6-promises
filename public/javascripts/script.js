// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
const table = document.getElementById("table");
let imgSprout = document.createElement("img");
let imgSteak = document.createElement("img");
let imgPotato = document.createElement("img");

let audioDin = new Audio("./public/media/dinnerIsServed.mp3");

window.onload = function () {
  imgSprout.src = "./public/images/brusselSprouts.jpg";
  imgSteak.src = "./public/images/steak.jpg";
  imgPotato.src = "./public/images/mashPotatoes.jpg";
};

console.log(imgSprout);

for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i]);
}


// Iteration 1 using callbacks
function steakAdd() {
  addFood(steak[0], '#steak', () => {
    // ... your code here
    addFood(steak[1], '#steak', () => {
      addFood(steak[2], '#steak', () => {
        addFood(steak[3], '#steak', () => {
          addFood(steak[4], '#steak', () => {
            addFood(steak[5], '#steak', () => {
              addFood(steak[6], '#steak', () => {
                addFood(steak[7], '#steak', () => {
                  table.appendChild(imgSteak);
                })
              })
            })
          })
        })
      })
    })
  })
}



// Iteration 2 using `.then()`
function potatoAdd() {
  addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
    // ... your code here
    addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
          addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
            table.appendChild(imgPotato);
          })
        })
      })
    })
  })
}

// Iteration 3 using async and await

async function makeFood(steps) {
  await addFood(steps[0], '#brusselSprouts');
  await addFood(steps[1], '#brusselSprouts');
  await addFood(steps[2], '#brusselSprouts');
  await addFood(steps[3], '#brusselSprouts');
  await addFood(steps[4], '#brusselSprouts');
  await addFood(steps[5], '#brusselSprouts');
  await addFood(steps[6], '#brusselSprouts');
  await addFood(steps[7], '#brusselSprouts');
  await addFood(steps[8], '#brusselSprouts');
  await table.appendChild(imgSprout);
}

Promise.all([steakAdd(), potatoAdd(),makeFood(brusselSprouts)]).then(() => setTimeout(() => {
  audioDin.play();
  alert("Dinner is served!");
}, 200));