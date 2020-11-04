// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/*for (let i = 0; i < mashPotatoes.length; i++) {
  addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}*/

// Iteration 1 using callbacks
function recursiveCallback(i) {
  addFood(steak[i], '#steak', () => {
    if (typeof steak[i+1] !== 'undefined') {
      recursiveCallback(i+1);
    }
  });
}
recursiveCallback(0);

function showImage() {
  const img = document.createElement('img');
  img.setAttribute("src", "public/images/steak.jpg");
  document.querySelector("#table").appendChild(img);
}


// Iteration 2 using `.then()`

function writeRecipe(i) {
  addFood(mashPotatoes[i], '#mashPotatoes')
  .then(() => {
    if (typeof mashPotatoes[i+1] !== 'undefined') {
      writeRecipe(i+1);
    }
  }); 
}
writeRecipe(0);



// Iteration 3 using async and await

async function makeFood(steps) {
  for (let i = 0; i < steps.length; i++) {
    await addFood(steps[i], '#brusselSprouts');
  }
}
makeFood(brusselSprouts);

