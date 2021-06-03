// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/*for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}*/

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {

    addFood(steak[2], '#steak', () => {

      addFood(steak[3], '#steak', () => {

        addFood(steak[4], '#steak', () => {

          addFood(steak[5], '#steak', () => {

            addFood(steak[6], '#steak', () => {

              addFood(steak[7], '#steak', () => {
                var steakImg = document.createElement('img');
                steakImg.src = "./public/images/steak.jpg";
                var src = document.getElementById("table")
                src.appendChild(steakImg)

              });

            });

          });

        });

      });

    });

  })
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {

    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {  

      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {

          var mashImg = document.createElement('img');
          mashImg.src = "./public/images/mashPotatoes.jpg";
          var src = document.getElementById("table")
          src.appendChild(mashImg)

        });

      });

    });

  });

}).catch((error) => console.log("Error"));

// Iteration 3 using async and await

  async function makeFood(step) {
    // ... your code here
    await addFood(step[0], '#brusselSprouts');
    await addFood(step[1], '#brusselSprouts');
    await addFood(step[2], '#brusselSprouts');
    await addFood(step[3], '#brusselSprouts');
    await addFood(step[4], '#brusselSprouts');
    await addFood(step[5], '#brusselSprouts');
    await addFood(step[6], '#brusselSprouts');
    await addFood(step[7], '#brusselSprouts');
    await addFood(step[8], '#brusselSprouts');

    var sproutsImg = document.createElement('img');
    sproutsImg.src = "./public/images/brusselSprouts.jpg";
    var src = document.getElementById("table")
    src.appendChild(sproutsImg)
    
  }
  makeFood(brusselSprouts);
