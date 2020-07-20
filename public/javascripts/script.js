// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < steak.length; i++) {
//   addFood(steak[i], '#steak');
// }

// Iteration 1 using callbacks
let p1 = new Promise((resolve) => {
  addFood(steak[0], '#steak', () => {
    addFood(steak[1], '#steak', () => {
      addFood(steak[2], '#steak', () => {
        addFood(steak[3], '#steak', () => {
          addFood(steak[4], '#steak', () => {
            addFood(steak[5], '#steak', () => {
              addFood(steak[6], '#steak', () => {
                addFood(steak[7], '#steak', () => {
                  let img = new Image()
                  img.src = "/public/images/steak.jpg"
                  img.onload = () => {
                    console.log("img")
                    document.querySelector("#table").appendChild(img)
                    resolve()
                  }
                })
              })
            })
          })
        })
      })
    })
  });
})

// Iteration 2 using `.then()`
let p2 = new Promise((resolve) => {
  addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
          addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
            let img = new Image()
            img.src = "/public/images/mashPotatoes.jpg"
            img.onload = () => {
              console.log("img")
              document.querySelector("#table").appendChild(img)
              resolve()
            }
          })
        })
      })
    })
  });
})

// Iteration 3 using async and await
let p3 = new Promise((resolve) => {
  async function makeFood() {
    for (let step of brusselSprouts)
      await addFood(step, "#brusselSprouts")
    let img = new Image()
    img.src = "/public/images/brusselSprouts.jpg"
    img.onload = () => {
      console.log("img")
      document.querySelector("#table").appendChild(img)
      resolve()
    }
  }
  makeFood()
})

Promise.all([p1,p2,p3]).then(()=> {
  console.log("Dinner is served")
})