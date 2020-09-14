// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  //console.log(mashPotatoes[i])
//}

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {const newImg = document.createElement("img");
              newImg.innerHTML = `<img src="./public/images/steak.jpg" alt"food drawing">`;
              table.appendChild(newImg);
            })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          const newImg = document.createElement("img");
          newImg.innerHTML = `<img src="./public/images/mashPotatoes.jpg" alt"food drawing">`;
          table.appendChild(newImg);
        })
      })
    })
  })
})
; 

// Iteration 3 using async and await

  async function makeFood(step) {
    const stepOne = await addFood(step[0], '#brusselSprouts');
    stepOne;
    const stepTwo = await addFood(step[1], '#brusselSprouts');
    stepTwo;
    const stepThree = await addFood(step[2], '#brusselSprouts');
    stepThree;
    const stepFour = await addFood(step[3], '#brusselSprouts');
    stepFour;
    const stepFive = await addFood(step[4], '#brusselSprouts');
    stepFive;
    const stepSix = await addFood(step[5], '#brusselSprouts');
    stepSix;
    const stepSeven = await addFood(step[6], '#brusselSprouts');
    stepSeven;
    const stepEight = await addFood(step[7], '#brusselSprouts');
    stepEight;
    const stepNine = await addFood(step[8], '#brusselSprouts');
    stepNine;
    const newImg = document.createElement("img");
    newImg.innerHTML = `<img src="./public/images/brusselSprouts.jpg" alt"food drawing">`;
    table.appendChild(newImg);
  }

makeFood(brusselSprouts);

const table = document.getElementById("table")

  function addImageInTable(step) {
    const newImg = document.createElement("img");
    newImg.innerHTML = `<img src="./public/images/${step}.jpg" alt"food drawing">`;
    table.appendChild(newImg);
  }



