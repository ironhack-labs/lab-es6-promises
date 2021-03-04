// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}

// Iteration 1 using callbacks
const table = document.getElementById("table")

const addSteak = () => {addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                const imagem = document.createElement("img")
                imagem.src ="./public/images/steak.jpg"
                table.appendChild(imagem)
              })  
            })
          })
        })
      })
    })
  })
})
};



// Iteration 2 using `.then()`
const addMashPotatoes = () => {addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          const imagem = document.createElement("img")
          imagem.src ="./public/images/mashPotatoes.jpg"
          table.appendChild(imagem)
        })
      })
    })
  })
})
};


// Iteration 3 using async and await

  async function makeFood(step) {
    for (i = 0; i < step.length; i++) {
      await addFood(step[i], `#brusselSprouts`)
    }
    const imagem = document.createElement("img")
    imagem.src ="./public/images/brusselSprouts.jpg"
    table.appendChild(imagem)
  }
  

// bônus 2

Promise.all([addSteak(), addMashPotatoes(), makeFood(brusselSprouts)]).then(() => {
  const steps = document.getElementById("steps")
  const button = document.createElement("button")
  button.innerHTML = "Dinner is served"
  steps.appendChild(button)
})






