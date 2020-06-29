// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/* for (let i = 0; i < steak.length; i++) {
  addFood(steak[i], '#steak');
}  */

// Iteration 1 using callbacks

const promise1 = addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                addImage(imageSteak);
              })
            })
          })
        })
      })
    })
  })
});

// Iteration 2 using `.then()`

const promise2 = addFood(mashPotatoes[0], '#mashPotatoes').then(res => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(res => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(res => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(res => {
        addImage(imageMashPotatoes);
      })
    })
  })
});




// Iteration 3 using async and await

async function makeFood() {
  for (let i = 0; i < brusselSprouts.length; i++) {
    const step = brusselSprouts[i];
    /* const eachStep = */ await addFood(step, '#brusselSprouts');
  }
  addImage(imageSprouts);
}


//Bonus 1

var imageSteak = document.createElement("img");
imageSteak.src = "./public/images/steak.jpg";

var imageMashPotatoes = document.createElement("img");
imageMashPotatoes.src = "./public/images/mashPotatoes.jpg"

var imageSprouts = document.createElement("img");
imageSprouts.src = "./public/images/brusselSprouts.jpg"

function addImage(image) {
  document.getElementById("table").appendChild(image);
}

//Bonus 2
function dinnerIsServed() {
  Promise.all([promise1, promise2, makeFood()])
    .then((res) => {
      var text = document.createElement('button');
      text.innerHTML ='Dinner is served !';
      document.getElementById("table").appendChild(text);
      
    })
    .catch((err) => {
      console.error(err);
    });
}

dinnerIsServed();