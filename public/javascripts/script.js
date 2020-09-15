// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}

// Iteration 1 using callbacks
const steakList = addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                return new Promise((resolve, reject) => {
                  resolve(document.getElementById('steak-img').style.display = "inline");

                })

              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
const mash = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          return new Promise((resolve, reject) => {
            resolve(document.getElementById('mash-img').style.display="inline");
          })

        })
      })
    })
  })
});

// Iteration 3 using async and await

  async function makeFood() {
    // ... your code here
    for(let i = 0; i < brusselSprouts.length; i++) {
      await addFood(brusselSprouts[i], '#brusselSprouts')
    }
    return new Promise((resolve, reject) => {
        resolve(document.getElementById('sprouts-img').style.display = "inline");
     
    })
  }
const cookSprouts = makeFood();


  Promise.all([mash, steakList, cookSprouts]).then(() => {
    const dinnerServed = document.createElement('button');
    dinnerServed.textContent = 'Dinner is served!';
    document.getElementById('steps').appendChild(dinnerServed);
    document.getElementById('dinnerAudio').play();
    
  })