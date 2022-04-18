// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync


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



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error))
    }, (error) => console.log(error))
  }, (error) => console.log(error))
}, (error) => console.log(error))


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((response) => {
    document.querySelector("#steak").innerHTML += `<li>${response}</li>`
    return obtainInstruction('steak', 1)
  })
  .then((response) => {
    document.querySelector("#steak").innerHTML += `<li>${response}</li>`
    return obtainInstruction('steak', 2)
  })
  .then((response) => {
    document.querySelector("#steak").innerHTML += `<li>${response}</li>`
    return obtainInstruction('steak', 3)
  })
  .then((response) => {
    document.querySelector("#steak").innerHTML += `<li>${response}</li>`
    return obtainInstruction('steak', 4)
  })
  .then((response) => {
    document.querySelector("#steak").innerHTML += `<li>${response}</li>`
    return obtainInstruction('steak', 5)
  })
  .then((response) => {
    document.querySelector("#steak").innerHTML += `<li>${response}</li>`
    return obtainInstruction('steak', 6)
  })
  .then((response) => {
    document.querySelector("#steak").innerHTML += `<li>${response}</li>`
    return obtainInstruction('steak', 7)
  })
  .then((response) => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`
    document.getElementById("steakImg").parentNode.innerHTML = `<img src="images/steak.jpg" id="steakImg"/>`
  })
  .catch(() => {
    console.log(error)
  })

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    for (let i = 0; i < broccoli.length - 1; i++) {
      await obtainInstruction('broccoli', i)
      document.querySelector("#broccoli").innerHTML += `<li>${broccoli[i]}</li>`
    }
    document.querySelector("#broccoli").innerHTML += `<li>broccoli is ready</li>`
    document.getElementById("broccoliImg").parentNode.innerHTML = `<img src="images/broccoli.jpg" id="broccoliImg"/>`
  } catch (error) {
    console.log(error)
  }
}

makeBroccoli()
// Bonus 2 - Promise all
const sproutsArray = []

for (let i = 0; i < brusselsSprouts.length; i++) {
  sproutsArray.push(obtainInstruction('brusselsSprouts', i))
}

Promise.all(sproutsArray)
  .then((array) => {
    array.map((element) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`

    })
    document.querySelector("#brusselsSprouts").innerHTML += `<li>brussel sprouts are ready</li>`
    document.getElementById("brusselsSproutsImg").parentNode.innerHTML = `<img src="images/brussels-sprouts.jpg" id="brusselsSproutsImg"/>`
  })
  .catch((error) => {
    console.log(error)
  })