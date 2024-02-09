// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code




getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`

  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`

    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`

      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`

        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`

          document.querySelector("#mashedPotatoes").innerHTML += `<li>Esto q es bro jsjshajsj</li>`

          getInstruction('mashedPotatoes', 5, (step5) => {

            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`

          }, () => console.error('NO HAY TANTOS PASOS CHACHO'))
        }, () => console.error('NO HAY TANTOS PASOS CHACHO'))
      }, () => console.error('NO HAY TANTOS PASOS CHACHO'))
    }, () => console.error('NO HAY TANTOS PASOS CHACHO'))
  }, () => console.error('NO HAY TANTOS PASOS CHACHO'))
}, () => console.error('NO HAY TANTOS PASOS CHACHO'))

// Iteration 2 - using promises


obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`

    return obtainInstruction('steak', 1)

  })

  .then((step1) => {

    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`

    return obtainInstruction('steak', 2)
  })


  .then((step2) => {

    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`

    return obtainInstruction('steak', 3)


  })

  .then((step3) => {

    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
  })

  .catch(err => {
    console.log('hay un odhfgdsbjf', err)

  })

  .finally(() => {

    document.querySelector("#steak").innerHTML += `<li>SUPERCALIFRAGILISTOOOOCJOKHDJFKJDBF</li>`
  })


// ... Your code here

// Iteration 3 using async/await
// async function makeBroccoli() {

//   try {

//     const step0 = await obtainInstruction('broccoli', 0)
//     document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`

//     const step1 = await obtainInstruction('broccoli', 1)
//     document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`


//     console.log("ya casi estamos")

//   } catch (error) {
//     console.error("bombaA ATOMICAA", error)
//   }

// }

async function makeBroccoli() {

  try {
    const step0 = await obtainInstruction('broccoli', 0)
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`

    const step1 = await obtainInstruction('broccoli', 1)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`

    const step2 = await obtainInstruction('broccoli', 2)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
  }
  catch (error) {
    console.error('HA PASADO ALGO D:', error)
  }

}

makeBroccoli()





// Bonus 2 - Promise all


const promisesArray = [
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3)
]

Promise
  .all(promisesArray)
  .then(responses => {
    responses.forEach(elm => {
      document.querySelector('#brusselsSprouts').innerHTML += `<li>${elm}</li>`
    })
  })
  .catch(err => console.log(err))