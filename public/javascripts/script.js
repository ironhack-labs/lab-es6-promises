// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

let table = document.getElementById('table')
let steakImage = document.createElement('img')
steakImage.src = './public/images/steak.jpg';
let mashedImage = document.createElement('img');
mashedImage.src = './public/images/mashPotatoes.jpg'

// Iteration 1 using callbacks
addFood(steak[0], "#steak", () => {
  // ... your code here
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                table.appendChild(steakImage)
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], "#mashPotatoes")
  .then(() => addFood(mashPotatoes[1], "#mashPotatoes"))
  .then(() => addFood(mashPotatoes[2], "#mashPotatoes"))
  .then(() => addFood(mashPotatoes[3], "#mashPotatoes"))
  .then(() => addFood(mashPotatoes[4], "#mashPotatoes"))
  .then(() => table.appendChild(mashedImage));

// Iteration 3 using async/await

async function makeFood(step, id) {
  let brusselImage = document.createElement('img')
  brusselImage.src = '/public/images/brusselSprouts.jpg'
  for (let i = 0; i < brusselSprouts.length; i++) {
    await addFood(brusselSprouts[i], '#brusselSprouts')
  }
  await table.appendChild(brusselImage)
}

makeFood();




