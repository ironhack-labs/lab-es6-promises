
// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
  getInstruction('mashedPotatoes', 1, (step2) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
    getInstruction('mashedPotatoes', 2, (step3) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
      getInstruction('mashedPotatoes', 3, (step4) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
        getInstruction('mashedPotatoes', 4, (step5) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
          getInstruction('mashedPotatoes', 5, (step6) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`

          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden")
          }, (err) => console.log(err))
        }, (err) => console.log(err))
      }, (err) => console.log(err))
    }, (err) => console.log(err))
  }, (err) => console.log(err))
}, (err) => console.log(err))

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
      return obtainInstruction('steak', 0)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
      return obtainInstruction('steak', 1)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
      return obtainInstruction('steak', 2)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
      return obtainInstruction('steak', 3)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
      return obtainInstruction('steak', 5)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
      return obtainInstruction('steak', 6)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
      return obtainInstruction('steak', 7)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
      return obtainInstruction('steak', 8)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
      return obtainInstruction('steak', 9)
  })
  .catch((err) => console.log("catch() -> ", err))
  .then(()=>{
    document.querySelector("#steakImg").removeAttribute("hidden")
  })

  
async function makeBroccoli() {
  try{
    let part1 = await obtainInstruction("broccoli", 0)
  document.querySelector("#broccoli").innerHTML += `<li>${part1}</li>`
  let part2 = await obtainInstruction("broccoli", 1)
  document.querySelector("#broccoli").innerHTML += `<li>${part2}</li>`
  let part3 = await obtainInstruction("broccoli", 2)
  document.querySelector("#broccoli").innerHTML += `<li>${part3}</li>`
  let part4 = await obtainInstruction("broccoli", 3)
  document.querySelector("#broccoli").innerHTML += `<li>${part4}</li>`
  let part5 = await obtainInstruction("broccoli", 4)
  document.querySelector("#broccoli").innerHTML += `<li>${part5}</li>`
  let part6 = await obtainInstruction("broccoli", 5)
  document.querySelector("#broccoli").innerHTML += `<li>${part6}</li>`
  let part7 = await obtainInstruction("broccoli", 6)
  document.querySelector("#broccoli").innerHTML += `<li>${part7}</li>`
  let part8 = await obtainInstruction("broccoli", 7)
  document.querySelector("#broccoli").innerHTML += `<li>${part8}</li>`
  document.querySelector("#broccoliImg").removeAttribute("hidden")
    }
    catch(err){
      console.log(err)
    }
  }
makeBroccoli()

let p1 = obtainInstruction("brusselsSprouts", 0)
let p2 = obtainInstruction("brusselsSprouts", 1)
let p3 = obtainInstruction("brusselsSprouts", 2)
let p4 = obtainInstruction("brusselsSprouts", 3)
let p5 = obtainInstruction("brusselsSprouts", 4)
let p6 = obtainInstruction("brusselsSprouts", 5)
let p7 = obtainInstruction("brusselsSprouts", 6)
let p8 = obtainInstruction("brusselsSprouts", 7)

Promise.all( [p1, p2, p3,p4,p5,p6,p7] )
  .then((values) => {
    // document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[0]}</li>`
    // document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[1]}</li>`
    // document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[2]}</li>`
    // document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[3]}</li>`
    // document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[4]}</li>`
    // document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[5]}</li>`
    // document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[6]}</li>`
    values.forEach((steps) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${steps}</li>`
    })
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
  })
  .catch((err) => {
    console.log(err)
  })