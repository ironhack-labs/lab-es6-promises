// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  
  addFood(steak[1], '#steak', () => {
   
    addFood(steak[2], '#steak', () => {
      
      addFood(steak[3], '#steak', () => {
        
        addFood(steak[4], '#steak', () => {
          
          addFood(steak[5], '#steak', () => {
            
            addFood(steak[6], '#steak', () => {
              
              addFood(steak[7], '#steak', () => {

                document.getElementById('table').innerHTML += `<img src="public/images/steak.jpg"/>`
              });
            });
          });
        });
      });
    });
  });
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {

    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {

      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {

            document.getElementById('table').innerHTML += `<img src="public/images/mashPotatoes.jpg"/>`
        });
      });
    });
  });
});

// Iteration 3 using async and await

brusselSprouts.forEach(eachStep => {
  async function makeFood(step) {
    await addFood(step, '#brusselSprouts')
  }
   makeFood(eachStep);
})


Promise.all([
  makeFood(steak, '#steak'),
  makeFood(mashPotatoes, '#mashPotatoes'),
  makeFood(brusselSprouts, '#brusselSprouts')
]).then(() => {
  document.body.innerHTML += "<button>Dinner is served</button>"
}) 



