// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

// llamar a la funcion getInstruction 5 veces, con los parametros requeridos:
// siempre usamod mashedPotatoes ya que estamos en el primer apartado de nuestro HTML
// el step va aumentando para recorrer todo el contenido: 0,1,2...
// la funcion a realizar (callback) se define como arrow function
// el objetivo de la funcion es añadir al contenido html (recuperando el Id del nodo correspondiente)
// el contenido a añadir es el resultado de la funcion getInstruction
// como ultimo parametro definimos una funcion de error

  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));


// FUNCTIONS:

const addNewStep = (food, step) => {
  document.querySelector(`#${food}`).innerHTML += `<li>${step}</li>`;
}

const displayError = (error) => console.log(error)


const addFinalStepWithImg = (food, step) => {
  document.querySelector(`#${food}`).innerHTML += `<li>${step}</li>`;
  document.querySelector(`#${food}Img`).removeAttribute("hidden");
}

// Iteration 1 - using callbacks

getInstruction('mashedPotatoes', 0, (step) => {
  addNewStep('mashedPotatoes',step)
  getInstruction('mashedPotatoes',1,(step) => {
    addNewStep('mashedPotatoes',step)
    getInstruction('mashedPotatoes',2,(step) => {
      addNewStep('mashedPotatoes',step)
      getInstruction('mashedPotatoes',3,(step) => {
        addNewStep('mashedPotatoes',step)
        getInstruction('mashedPotatoes',4,(step) => {
          addFinalStepWithImg('mashedPotatoes',step)
          addNewStep('mashedPotatoes','Mashed potatoes are ready!')
        },displayError)
      },displayError)
    },displayError)
  },displayError)
},displayError);

// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step) => {
    addNewStep('steak',step)
    return obtainInstruction('steak',1)
  })
  .then( (step) => {
    addNewStep('steak',step)
    return obtainInstruction('steak',2)
  })
  .then( (step) => {
    addNewStep('steak',step)
    return obtainInstruction('steak',3)
  })
  .then( (step) => {
    addNewStep('steak',step)
    return obtainInstruction('steak',4)
  })
  .then( (step) => {
    addNewStep('steak',step)
    return obtainInstruction('steak',5)
  })
  .then( (step) => {
    addNewStep('steak',step)
    return obtainInstruction('steak',6)
  })
  .then( (step) => {
    addNewStep('steak',step)
    return obtainInstruction('steak',7)
  })
  .then( (step) => {
    addFinalStepWithImg('steak',step)
  })
  .catch(displayError())
  .finally(
    () => addNewStep('steak','Stake is ready!')
  )

// Iteration 3 using async/await

// MODE 1: without loop. Commenting it since mode 2 is more optimal

// async function makeBroccoli() {
//   try {
//     let step = await obtainInstruction('broccoli', 0)
//     addNewStep('broccoli',step)
//     let stepOne = await obtainInstruction('broccoli', 1)
//     addNewStep('broccoli',stepOne)
//     let stepTwo = await obtainInstruction('broccoli', 2)
//     addNewStep('broccoli',stepTwo)
//     let stepThree = await obtainInstruction('broccoli', 3)
//     addNewStep('broccoli',stepThree)
//     let stepFour = await obtainInstruction('broccoli', 4)
//     addNewStep('broccoli',stepFour)
//     let stepFive = await obtainInstruction('broccoli', 5)
//     addNewStep('broccoli',stepFive)
//     let stepSix = await obtainInstruction('broccoli', 6)
//     addFinalStepWithImg('broccoli',stepSix)
//     addNewStep('broccoli','Broccoli is ready!')
//   } catch(error) {displayError(error)}
// }

// makeBroccoli()

// MODE 2: with loop

async function makeBroccoliLooped() {
  try {
    for (let i = 0; i<(broccoli.length); i++) {
      let step = await obtainInstruction('broccoli', i)
      if (i == broccoli.length -1) {
        addFinalStepWithImg('broccoli',step)
      }
      else {
        addNewStep('broccoli',step) }
    }
    addNewStep('broccoli','Broccoli is ready!')
  }
  catch(error) {displayError(error)}
}

makeBroccoliLooped()

// Bonus 2 - Promise all

function makeBrussels () {
  arrPromises = []
  for (let i = 0; i < brusselsSprouts.length; i++) {
    let step = obtainInstruction('brusselsSprouts', i)
    arrPromises.push(step)
  }
  Promise.all(arrPromises)
    .then( (allSteps) => {
      allSteps.forEach((step,i) => {
        if (i == brusselsSprouts.length -1) {
          addFinalStepWithImg('brusselsSprouts',step)
        }
        else {
          addNewStep('brusselsSprouts',step) }
      })
    })
    .catch(displayError())
    .finally(
      () => addNewStep('brusselsSprouts','Brussels sprouts are ready!'))
}

makeBrussels()

