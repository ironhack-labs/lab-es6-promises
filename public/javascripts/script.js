// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }
const tzero = Date.now();


// Iteration 1 using callbacks
function loadSteak() {
  addFood(steak[0], '#steak', () => {
    // ... your code here
    addFood(steak[1], '#steak', () => {

      addFood(steak[2], '#steak', () => {

        addFood(steak[3], '#steak', () => {

          addFood(steak[4], '#steak', () => {

            addFood(steak[5], '#steak', () => {

              addFood(steak[6], '#steak', () => {

                addFood(steak[7], '#steak', () => {

                  document.getElementById("table").innerHTML += `<img src='./public/images/steak.jpg'>`
                })
              })
            })
          })
        })
      })
    })
  })
}

// async function loadPicSteak() {
//   await loadListSteak();
//   await document.getElementById("table").innerHTML += `<img src='./public/images/steak.jpg'>`;
// }

// loadPicSteak();

// Iteration 2 using `.then()`
function loadPotatoes() {
  addFood(mashPotatoes[0], '#mashPotatoes')
    .then(() => addFood(mashPotatoes[1], '#mashPotatoes'))
    .then(() => addFood(mashPotatoes[2], '#mashPotatoes'))
    .then(() => addFood(mashPotatoes[3], '#mashPotatoes'))
    .then(() => addFood(mashPotatoes[4], '#mashPotatoes'))
    .then(() => {
      document.getElementById("table").innerHTML += `<img src='./public/images/mashPotatoes.jpg'>`;
    });
}

// Iteration 3 using async and await

async function makeFood(toto) {
  // ... your code here
  try {
    for (let i = 0; i < toto.length; i++) {
      await addFood(toto[i], '#brusselSprouts')
      // console.log('iteration3)')
      // console.log(Date.now() - tzero);
    }
  } catch (err) {
    throw new Error("error")
  }
}


function loadSprouts() {
  makeFood(brusselSprouts).then(() => {
    // console.log('then');
    // console.log(Date.now() - tzero);
    const place = document.getElementById("table")
    place.innerHTML += `<img src='./public/images/brusselSprouts.jpg'>`;
  })
}