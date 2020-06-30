// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code


for (let i = 0; i < steak.length; i++) {
  addFood(steak[i], '#steak');
}


// Iteration 1 using callbacks

let getSteack = 
addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                putImg(imgSteak)
  // ... your code here
})
})
})
})
})
})
})
});




// Iteration 2 using `.then()`
let getMash = addFood(mashPotatoes [0], '#mashPotatoes').then(() => {
addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
    // ... your code here
    addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
      // ... your code here
      addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
        putImg(imgMash)          

})
})
})
})
});




// Iteration 3 using async and await

async function makeFood(){
  for (let i=0; i < brusselSprouts.length; i++){
    const step = brusselSprouts[i]
    await addFood(step, '#brusselSprouts');
    }
    putImg(imgSprout);
    
}
makeFood();

//bonus 1

let imgSteak = document.createElement("img");
imgSteak.src = "./public/images/steak.jpg";

let imgMash = document.createElement("img");
imgMash.src = "./public/images/mashPotatoes.jpg"

let imgSprout = document.createElement("img");
imgSprout.src = "./public/images/brusselSprouts.jpg"

function putImg(image) {
  document.getElementById("table").appendChild(image);
}

