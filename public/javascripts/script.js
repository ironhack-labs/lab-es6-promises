// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

const table = document.querySelector('#table')

// Iteration 1 using callbacks
const makeSteak = addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                table.innerHTML += '<img src="./public/images/steak.jpg" />';
              })        
            })
          })
        })    
      })
    })
  })
});

// Iteration 2 using `.then()`
const makeMashPotatoes = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          table.innerHTML += '<img src="./public/images/mashPotatoes.jpg" />';
        })
      })    
    })
  })
});

// Iteration 3 using async/await

  async function makeFood(steps, id) {
    for (let step = 0; step < steps.length; step += 1){
      await addFood(steps[step], `#${id}`)
    }
    table.innerHTML += `<img src="./public/images/${id}.jpg" />`;
  }

  const makeBrusselSprouts = makeFood(brusselSprouts, 'brusselSprouts');

Promise.all([makeSteak, makeMashPotatoes, makeBrusselSprouts]).then(() => {
  const button = document.createElement('button');
  button.innerText = 'Dinner is served.';
  document.body.appendChild(button);
})