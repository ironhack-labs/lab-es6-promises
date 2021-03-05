// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// console.log(mashPotatoes)
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

const imageSection = document.querySelector('#table');

const steakCook = new Promise((resolve, reject) => {
  // // Iteration 1 using callbacks
  addFood(steak[0], '#steak', () => {
    // ... your code here
    addFood(steak[1], '#steak', () => {

      addFood(steak[2], '#steak', () => {

        addFood(steak[3], '#steak', () => {

          addFood(steak[4], '#steak', () => {

            addFood(steak[5], '#steak', () => {

              addFood(steak[6], '#steak', () => {

                addFood(steak[7], '#steak', () => {
                  imageSection.innerHTML += `<img src="./public/images/steak.jpg" alt="">`;
                  resolve();
                  //inseririr o bife e resolver promisse
                });
              });
            });
          });
        });
      });
    });
  });
})

// Iteration 2 using `.then()`
const mashPotatoesCook = new Promise((resolve, reject) => {
  addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
    // ... your code here
    addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
          addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
            imageSection.innerHTML += `<img src="./public/images/mashPotatoes.jpg" alt="">`
            resolve();
          })
        })
      })
    })
  });
});

// Iteration 3 using async and await

const brusselSproutsCook = async (step) => {
  // ... your code here
  try {
    if (step < brusselSprouts.length) {
      await addFood(brusselSprouts[step], '#brusselSprouts')
      step++
      await brusselSproutsCook(step)
    } else {
      imageSection.innerHTML += `<img src="./public/images/brusselSprouts.jpg" alt="">`
    }
  } catch {
    console.log('erroooow!')
  }
}

const resolveAll = async () => {
  try {
    await Promise.all([
      mashPotatoesCook,
      steakCook,
      brusselSproutsCook(0)
    ])

    return alert('Dinner is served!')
  } catch {
    console.log('tá loko')
  }
}

resolveAll()


