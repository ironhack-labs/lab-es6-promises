// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  'mashedPotatoes',
  0,
  (step1) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`
  },
  (error) => console.log(error)
)

getInstruction(
  'mashedPotatoes',
  1,
  (step2) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step2}</li>`
  },
  (error) => console.log(error)
)

getInstruction(
  'mashedPotatoes',
  2,
  (step3) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step3}</li>`
  },
  (error) => console.log(error)
)

getInstruction(
  'mashedPotatoes',
  3,
  (step4) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step4}</li>`
  },
  (error) => console.log(error)
)

getInstruction(
  'mashedPotatoes',
  4,
  (step5) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step5}</li>`
    document.querySelector('#mashedPotatoesImg').removeAttribute('hidden')
  },
  (error) => console.log(error)
)

// Iteration 1 - using callbacks
// ...
mashedPotatoes.push('Mashed potatoes are ready!')
getInstruction('mashedPotatoes', 0, (pasoCero) => {
  document.querySelector('#mashedPotatoes').innerHTML += `<li>${pasoCero}</li>`
  getInstruction('mashedPotatoes', 1, (pasoUno) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${pasoUno}</li>`
    getInstruction('mashedPotatoes', 2, (pasoDos) => {
      document.querySelector(
        '#mashedPotatoes'
      ).innerHTML += `<li>${pasoDos}</li>`
      getInstruction('mashedPotatoes', 3, (pasoTres) => {
        document.querySelector(
          '#mashedPotatoes'
        ).innerHTML += `<li>${pasoTres}</li>`
        getInstruction('mashedPotatoes', 4, (pasoCuatro) => {
          document.querySelector(
            '#mashedPotatoes'
          ).innerHTML += `<li>${pasoCuatro}</li>`
          getInstruction('mashedPotatoes', 5, (pasoCinco) => {
            document.querySelector(
              '#mashedPotatoes'
            ).innerHTML += `<li>${pasoCinco}</li>`
            getInstruction('mashedPotatoes', 6, (pasoSeis) => {
              document.querySelector(
                '#mashedPotatoes'
              ).innerHTML += `<li>${pasoSeis}</li>`
            })
            document
              .getElementById('mashedPotatoesImg')
              .removeAttribute('hidden')
          })
        })
      })
    })
  })
})
// Iteration 2 - using promises
// ...
steak.push('Steak is ready!')
obtainInstruction('steak', 0)
  .then((pasoCero) => {
    document.querySelector('#steak').innerHTML += `<li>${pasoCero}</li>`
    return obtainInstruction('steak', 1)
  })
  // ... Your code here
  .then((pasoUno) => {
    document.querySelector('#steak').innerHTML += `<li>${pasoUno}</li>`
    return obtainInstruction('steak', 2)
  })
  .then((pasoDos) => {
    document.querySelector('#steak').innerHTML += `<li>${pasoDos}</li>`
    return obtainInstruction('steak', 3)
  })
  .then((pasoTres) => {
    document.querySelector('#steak').innerHTML += `<li>${pasoTres}</li>`
    return obtainInstruction('steak', 4)
  })
  .then((pasoCuatro) => {
    document.querySelector('#steak').innerHTML += `<li>${pasoCuatro}</li>`
    return obtainInstruction('steak', 5)
  })
  .then((pasoCinco) => {
    document.querySelector('#steak').innerHTML += `<li>${pasoCinco}</li>`
    return obtainInstruction('steak', 6)
  })
  .then((pasoSeis) => {
    document.querySelector('#steak').innerHTML += `<li>${pasoSeis}</li>`
    return obtainInstruction('steak', 7)
  })
  .then((pasoSiete) => {
    document.querySelector('#steak').innerHTML += `<li>${pasoSiete}</li>`
    return obtainInstruction('steak', 8)
  })
  .then((pasoOcho) => {
    document.querySelector('#steak').innerHTML += `<li>${pasoOcho}</li>`
    document.getElementById('steakImg').removeAttribute('hidden')
    return obtainInstruction('steak', 9)
  })

// Iteration 3 using async/await
// ...
broccoli.push('Brocoli is ready')
async function makeBroccoli() {
  // ... Your code here
  try {
    let pasoCero = await obtainInstruction('broccoli', 0)
    document.getElementById('broccoli').innerHTML += `<li>${pasoCero}</li>`
    let pasoUno = await obtainInstruction('broccoli', 1)
    document.getElementById('broccoli').innerHTML += `<li>${pasoUno}</li>`
    let pasoDos = await obtainInstruction('broccoli', 2)
    document.getElementById('broccoli').innerHTML += `<li>${pasoDos}</li>`
    let pasoTres = await obtainInstruction('broccoli', 3)
    document.getElementById('broccoli').innerHTML += `<li>${pasoTres}</li>`
    let pasoCuatro = await obtainInstruction('broccoli', 4)
    document.getElementById('broccoli').innerHTML += `<li>${pasoCuatro}</li>`
    let pasoCinco = await obtainInstruction('broccoli', 5)
    document.getElementById('broccoli').innerHTML += `<li>${pasoCinco}</li>`
    let pasoSeis = await obtainInstruction('broccoli', 6)
    document.getElementById('broccoli').innerHTML += `<li>${pasoSeis}</li>`
    let pasoSiete = await obtainInstruction('broccoli', 7)
    document.getElementById('broccoli').innerHTML += `<li>${pasoSiete}</li>`
    document.getElementById('broccoliImg').removeAttribute('hidden')
  } catch (err) {}
}

makeBroccoli()

// Bonus 2 - Promise all
// ...
