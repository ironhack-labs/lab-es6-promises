// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//h 30
/* for (let i = 0; i < mashPotatoes.length; i++) {
  addFood(mashPotatoes[i], '#mashPotatoes');
} */

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                addImage('public/images/steak.jpg')
              });
            });
          });  
        });
      });
    });
  });
});


// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(res => {
  addFood(mashPotatoes[1], '#mashPotatoes').then( res =>{
    addFood(mashPotatoes[2], '#mashPotatoes').then(res =>{
      addFood(mashPotatoes[3], '#mashPotatoes').then(res =>{
        addFood(mashPotatoes[4], '#mashPotatoes');
          addImage('public/images/mashPotatoes.jpg')
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(steps) { 
  for (let i = 0; i < steps.length; i++) {
    await addFood(steps[i], '#brusselSprouts');
  }
  addImage('public/images/brusselSprouts.jpg')
};
makeFood(brusselSprouts); 


function addImage(src) {
  const img = document.createElement('img');
  img.src = src;
  document.getElementById('table').appendChild(img);
}