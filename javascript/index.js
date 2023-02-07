// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// // Out of sync
//   getInstruction("mashedPotatoes", 0, (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 1, (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 2, (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 3, (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 4, (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   }, (error) => console.log(error));



// Iteration 1 - using callbacks
//function getInstruction(food, step, callback, errorCallback)
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
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`   
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden")
      }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));
}, (err) => console.log(err));
});


// Iteration 2 - using promises
steak.push("Steak is ready!")
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("steak", 1)})
    .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction("steak", 2)})
    .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction("steak", 3)})
    .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction("steak", 4)})
    .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction("steak", 5)})
    .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction("steak", 6)})
    .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction("steak", 7)})
    .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return obtainInstruction("steak", 8)})
    .then((step8) => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
    document.querySelector("#steakImg").removeAttribute("hidden")
    return obtainInstruction("steak", 9)})
    .catch((error) => {
      console.log(error)})
    .catch((error) => {
      console.log(error)})
    .catch((error) => {
      console.log(error)})
    .catch((error) => {
      console.log(error)})
    .catch((error) => {
      console.log(error)})
    .catch((error) => {
      console.log(error)})
    .catch((error) => {
      console.log(error)})
    .catch((error) => {
      console.log(error)})
    .catch((error) => {
      console.log(error)})


// Iteration 3 - using async/await
  const broccoliEle = document.querySelector("#broccoli")
  async function makeBroccoli() {
    try {
      for (let i = 0; i < broccoli.length; i++) {
        let rawResponse = await obtainInstruction('broccoli', i)
        broccoliEle.innerHTML += `<li>${rawResponse}</li>`
      }
      document.querySelector("#broccoliImg").removeAttribute("hidden")
    } catch(error) {
      console.log(error)
    }
  }
  broccoli.push("Broccoli is ready!")
  makeBroccoli()

// Bonus 2 - Promise all
const allBrusselsSproutes = [
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7),
  obtainInstruction('brusselsSprouts', 8)
]

const brusselsSproutsEle = document.querySelector("#brusselsSprouts")
Promise.all(allBrusselsSproutes)
.then((result) => {
  for (let i = 0; i < allBrusselsSproutes.length; i++) {
    brusselsSproutsEle.innerHTML += `<li>${result[i]}</li>`
  }
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
})
brusselsSprouts.push("Brussels sprouts are ready!")

// Florian version
// const brusselList = document.getElementById('brusselsSprouts')

// const arrayOfPromises = [
// 	obtainInstruction('brusselsSprouts', 0),
// 	obtainInstruction('brusselsSprouts', 1),
// 	obtainInstruction('brusselsSprouts', 2),
// 	obtainInstruction('brusselsSprouts', 3),
// 	obtainInstruction('brusselsSprouts', 4),
// 	obtainInstruction('brusselsSprouts', 5),
// 	obtainInstruction('brusselsSprouts', 6),
// 	obtainInstruction('brusselsSprouts', 7),
// ]

// Promise.all(arrayOfPromises)
// .then((arrayOfMessages) => {
// 	console.log(arrayOfMessages)
// 	arrayOfMessages.forEach((message) => {
// 		const li = document.createElement('li')
// 		li.textContent = message
// 		brusselList.append(li)
// 	})
// })
// .catch((error) => {
// 	console.log(error)
// })

// Promise.all(
// 	brusselsSprouts.map((el, i) => {
// 		return obtainInstruction('brusselsSprouts', i)
// 	})
// )
// .then((arrayOfMessages) => {
// 	console.log(arrayOfMessages)
// 	arrayOfMessages.forEach((message) => {
// 		const li = document.createElement('li')
// 		li.textContent = message
// 		brusselList.append(li)
// 	})
// })
// .catch((error) => {
// 	console.log(error)
// })