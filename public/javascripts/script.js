// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
function drawFood(id) {
  let dish = document.getElementById(id);
  dish.setAttribute('class', '');
}


// Iteration 1 using callbacks
let steakReady = addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                drawFood('dish-steak');
              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
let potatoesReady = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(drawFood('dish-potatoes'));
      })
    })
  })
});

// Iteration 3 using async and await

let sproutsReady =  makeFood(0);

  async function makeFood(step) {

    for (let i = step; i < brusselSprouts.length; i++) {
      await addFood(brusselSprouts[i], '#brusselSprouts');

      if (i+1 === brusselSprouts.length) {
        drawFood('dish-sprouts');
      }
    }
  }

 
  Promise.all([potatoesReady, steakReady, sproutsReady]).then(() => {
    console.log('foods ready');
    let audio = new Audio('/public/media/dinnerIsServed.mp3');
    audio.play();
    setTimeout(() => {
      window.alert('Dinner is served!')
      ;}, 1000);
    
  })


  
  
