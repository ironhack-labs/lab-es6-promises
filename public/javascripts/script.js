// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}
// Iteration 1 using callbacks
let steakFood = addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                document.querySelector('#table').innerHTML += '<img src="public/images/steak.jpg" alt=""/>';
              });
            });
          });
        });
      });
    });
  });
});


// Iteration 2 using `.then()`
let mashPotatoesFood = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          document.querySelector('#table').innerHTML += '<img src="public/images/mashPotatoes.jpg" alt=""/>';
        });
      });
    });
  });
});

// Iteration 3 using async/await

 async function makeFood(step) {   
  
    for(let i = 0; i < step.length; i++) {
      await addFood(step[i], '#brusselSprouts');
    }    
 }

// ... your code here

makeFood(brusselSprouts);
document.querySelector('#table').innerHTML += '<img src="public/images/brusselSprouts.jpg" alt=""/>';

const brousselFood = makeFood(brusselSprouts, '#brusselSprouts');

Promise.all([
  steakFood,
  mashPotatoesFood,
  brousselFood,
])
  .then(() => {
    alert('Dinner is served!')
  })