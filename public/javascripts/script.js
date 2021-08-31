// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/*
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}
*/

// Iteration 1 using callbacks
async function responseHandlerSteak() {
addFood(steak[0], '#steak', () => {
    // ... your code here
    addFood(steak[1], '#steak', () => {
      addFood(steak[2], '#steak', () => {
        addFood(steak[3], '#steak', () => {
          addFood(steak[4], '#steak', () => {
            addFood(steak[5], '#steak', () => {
              addFood(steak[6], '#steak', () => {
                addFood(steak[7], '#steak', steakImg)
              })
            })
          })
        })
      })
    })
  });
}

  //const serverResponseSteak = responseHandlerSteak();


// Iteration 2 using `.then()`
async function responseHandlerMashPotatoes() {
  addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
    // ... your code here
    addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
          addFood(mashPotatoes[4], '#mashPotatoes').then(mashPotatoesImg)
        })
      })
    })
  })
}  

//const serverResponseMashPotatoes = responseHandlerMashPotatoes();

// Iteration 3 using async/await
async function makeFood(step) {
  // ... your code here
  //console.log(step)
  for (element of step) {
      await addFood(element, '#brusselSprouts')
  }
  await brusselSproutImg();
}
// const serverResponseBrusselSprout = makeFood(brusselSprouts);

function mashPotatoesImg() {
  let newImg = document.createElement('img')
  newImg.src = 'public/images/mashPotatoes.jpg'
  newImg.alt = 'mashed potatoes'
  let table = document.getElementById('table')
  table.appendChild(newImg)
}

function brusselSproutImg() {
  let newImg = document.createElement('img')
  newImg.src = 'public/images/brusselSprouts.jpg'
  newImg.alt = 'brussel sprouts'
  let table = document.getElementById('table')
  table.appendChild(newImg)
}

function steakImg() {
  let newImg = document.createElement('img')
  newImg.src = 'public/images/steak.jpg'
  newImg.alt = 'Steak'
  let table = document.getElementById('table')
  table.appendChild(newImg)
}


  Promise.all([responseHandlerSteak(), responseHandlerMashPotatoes(), makeFood(brusselSprouts)]).then(() => {
    alert("Dinner is served!")
  })


