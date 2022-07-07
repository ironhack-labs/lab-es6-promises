// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// Iteration 1 - using callbacks
  const p1 = getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

        getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

          getInstruction("mashedPotatoes", 4, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          }, (error) => console.log(error));

        }, (error) => console.log(error));

      }, (error) => console.log(error));

    }, (error) => console.log(error));

  }, (error) => console.log(error));
  

// Iteration 2 - using promises
const p2 = obtainInstruction('steak', 0)
  .then(instruction0 => {
   document.querySelector("#steak").innerHTML += `<li>${instruction0}</li>`
   return obtainInstruction('steak', 1)
  })
  .then(instruction1 => {
    document.querySelector("#steak").innerHTML += `<li>${instruction1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then(instruction2 => {
    document.querySelector("#steak").innerHTML += `<li>${instruction2}</li>`
    return obtainInstruction('steak', 3)
  })
  .then(instruction3 => {
    document.querySelector("#steak").innerHTML += `<li>${instruction3}</li>`
    return obtainInstruction('steak', 4)
  })
  .then(instruction4 => {
   document.querySelector("#steak").innerHTML += `<li>${instruction4}</li>`
   return obtainInstruction('steak', 5)
  })
  .then(instruction5 => {
    document.querySelector("#steak").innerHTML += `<li>${instruction5}</li>`
    return obtainInstruction('steak', 6)
  })
  .then(instruction6 => {
    document.querySelector("#steak").innerHTML += `<li>${instruction6}</li>`
    return obtainInstruction('steak', 7)
  })
  .then(instruction7 => {
    document.querySelector("#steak").innerHTML += `<li>${instruction7}</li>`
    document.querySelector("#steak").innerHTML += `<li>Steake is ready!</li>`
    document.querySelector('#steakImg').removeAttribute("hidden")
  })
  .catch(err => console.log(err))

// Iteration 3 using async/await

const p3 = async function makeBroccoli() {
  try {
    const instruction0 = await obtainInstruction('broccoli', 0)
    document.querySelector("#broccoli").innerHTML += `<li>${instruction0}</li>`

    const instruction1 = await obtainInstruction('broccoli', 1)
    document.querySelector("#broccoli").innerHTML += `<li>${instruction1}</li>`

    const instruction2 = await obtainInstruction('broccoli', 2)
    document.querySelector("#broccoli").innerHTML += `<li>${instruction2}</li>`

    const instruction3 = await obtainInstruction('broccoli', 3)
    document.querySelector("#broccoli").innerHTML += `<li>${instruction3}</li>`

    const instruction4 = await obtainInstruction('broccoli', 4)
    document.querySelector("#broccoli").innerHTML += `<li>${instruction4}</li>`

    const instruction5 = await obtainInstruction('broccoli', 5)
    document.querySelector("#broccoli").innerHTML += `<li>${instruction5}</li>`

    const instruction6 = await obtainInstruction('broccoli', 6)
    document.querySelector("#broccoli").innerHTML += `<li>${instruction6}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
    document.querySelector('#broccoliImg').removeAttribute("hidden")
  } catch(err) {
    console.error(err)
  }
}

// Bonus 2 - Promise all

const promises = [p1, p2, p3()]

const p4 = async function makeBrusselSprouts() {
  try {
    const instruction0 = await obtainInstruction('brusselsSprouts', 0)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction0}</li>`

    const instruction1 = await obtainInstruction('brusselsSprouts', 1)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction1}</li>`

    const instruction2 = await obtainInstruction('brusselsSprouts', 2)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction2}</li>`

    const instruction3 = await obtainInstruction('brusselsSprouts', 3)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction3}</li>`

    const instruction4 = await obtainInstruction('brusselsSprouts', 4)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction4}</li>`

    const instruction5 = await obtainInstruction('brusselsSprouts', 5)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction5}</li>`

    const instruction6 = await obtainInstruction('brusselsSprouts', 6)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction6}</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
    document.querySelector('#brusselsSproutsImg').removeAttribute("hidden")
  } catch(err) {
    console.error(err)
  }
}

Promise.all([promises])
 .then(p4())
 .catch(err => console.log(err))


 /*  
  Promise.all([promises])
  obtainInstruction('brusselsSprouts', 0) // COMO HARÍA PARA PONER ESTO DENTRO DEL THEN
  .then(instruction0 => {
   document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction0}</li>`
   return obtainInstruction('brusselsSprouts', 1)
  })
  .then(instruction1 => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction1}</li>`
    return obtainInstruction('brusselsSprouts', 2)
  })
  .then(instruction2 => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction2}</li>`
    return obtainInstruction('brusselsSprouts', 3)
  })
  .then(instruction3 => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction3}</li>`
    return obtainInstruction('brusselsSprouts', 4)
  })
  .then(instruction4 => {
   document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction4}</li>`
   return obtainInstruction('brusselsSprouts', 5)
  })
  .then(instruction5 => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction5}</li>`
    return obtainInstruction('brusselsSprouts', 6)
  })
  .then(instruction6 => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction6}</li>`
    return obtainInstruction('brusselsSprouts', 7)
  })
  .then(instruction7 => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction7}</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`    
    document.querySelector('#brusselsSproutsImg').removeAttribute("hidden")
  })
  .catch(err => console.log(err)) */