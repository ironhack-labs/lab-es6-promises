// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/// for (let i = 0; i < mashPotatoes.length; i++) {
// addFood(steak[i], '#steak');
// console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
const promiseSteak = addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak');
              const imgSteak = document.createElement("img");
              imgSteak.src = "./public/images/steak.jpg";
              document.getElementById('table').appendChild(imgSteak);
            });
          });
        });
      });
    });
  });
});



// Iteration 2 using `.then()`
const promiseMashPotatoes = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes')
        const imgMashPotatoes = document.createElement("img");
        imgMashPotatoes.src = "./public/images/mashPotatoes.jpg";
        document.getElementById('table').appendChild(imgMashPotatoes);
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(array, id) {
  for (let step of array) {
    await addFood(step, id)
  }
  const imgBrusselSprouts = document.createElement("img");
  imgBrusselSprouts.src = "./public/images/brusselSprouts.jpg";
  document.getElementById('table').appendChild(imgBrusselSprouts);
}

const promiseBrusselSprouts = makeFood(brusselSprouts, '#brusselSprouts');

Promise.all([promiseSteak, promiseMashPotatoes, promiseBrusselSprouts]).then(() => {
  const dinner = document.createElement("button");
  dinner.innerHTML = "Dinner is served."
  document.getElementById("steps").appendChild(dinner);
})