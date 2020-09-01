/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
const promise1 = addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                const img = document.createElement('img');
                img.src = './public/images/steak.jpg';
                document.getElementById('table').appendChild(img);
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
const promise2 = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          const img = document.createElement('img');
          img.src = './public/images/mashPotatoes.jpg';
          document.getElementById('table').appendChild(img);
        });
      });
    });
  });
});

// Iteration 3 using async and await
async function makeFood(step) {
  for (let i = 0; i < step.length; i++) {
    await addFood(step[i], '#brusselSprouts');
  }
  const img = document.createElement('img');
  img.src = './public/images/brusselSprouts.jpg';
  document.getElementById('table').appendChild(img);
}

const promise3 = makeFood(brusselSprouts);

Promise.all([promise1, promise2, promise3]).then(() => {
  const button = document.createElement('button');
  button.innerHTML = 'Dinner is served.';
  document.querySelector('body').appendChild(button);
});