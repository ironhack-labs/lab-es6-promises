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
// ...
getInstruction('mashedPotatoes', 0, (value1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${value1}</li>`;
  getInstruction('mashedPotatoes', 1, (value2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${value2}</li>`;
    getInstruction('mashedPotatoes', 2, (value3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${value3}</li>`;
      getInstruction('mashedPotatoes', 3, (value4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${value4}</li>`;
        getInstruction('mashedPotatoes', 4, (value5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${value5}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (err) => console.log(err))
      }, (err) => console.log(err))
    }, (err) => console.log(err))
  }, (err) => console.log(err))
}, (err) => console.log(err))

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
.then((value1) => {
  return obtainInstruction('steak', 1);
})
.then((value2) => {
  document.getElementById('steak').innerHTML += `<li>${value2}</li>`
  return obtainInstruction('steak', 2);
})
.then((value3) => {
  document.getElementById('steak').innerHTML += `<li>${value3}</li>`
  return obtainInstruction('steak', 3);
})
.then((value4) => {
  document.getElementById('steak').innerHTML += `<li>${value4}</li>`
  return obtainInstruction('steak', 4);
})
.then((value5) => {
  document.getElementById('steak').innerHTML += `<li>${value5}</li>`
  return obtainInstruction('steak', 5);
})
.then((value6) => {
  document.getElementById('steak').innerHTML += `<li>${value6}</li>`
  return obtainInstruction('steak', 6);
})
.then((value7) => {
  document.getElementById('steak').innerHTML += `<li>${value7}</li>`
  return obtainInstruction('steak', 7);
})
.then((value8) => {
  document.getElementById('steak').innerHTML += `<li>${value8}</li>`
  document.getElementById('steak').innerHTML += `<li>Stake is ready!</li>`
  document.querySelector("#steakImg").removeAttribute("hidden");
})
.catch((err) => document.getElementById('steak').innerHTML += `<li>${err}</li>`)

// Iteration 3 using async/await
// ...
const appendInstructions = async () => {
  try {
    document.getElementById('broccoli').innerHTML += `<li>${await obtainInstruction('broccoli', 0)}</li>`;
    document.getElementById('broccoli').innerHTML += `<li>${await obtainInstruction('broccoli', 1)}</li>`;
    document.getElementById('broccoli').innerHTML += `<li>${await obtainInstruction('broccoli', 2)}</li>`;
    document.getElementById('broccoli').innerHTML += `<li>${await obtainInstruction('broccoli', 3)}</li>`;
    document.getElementById('broccoli').innerHTML += `<li>${await obtainInstruction('broccoli', 4)}</li>`;
    document.getElementById('broccoli').innerHTML += `<li>${await obtainInstruction('broccoli', 5)}</li>`;
    document.getElementById('broccoli').innerHTML += `<li>${await obtainInstruction('broccoli', 6)}</li>`;
    document.getElementById('broccoli').innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch(err) {
    document.getElementById('broccoli').innerHTML += `<li>${err}</li>`;
  }
}

appendInstructions();

// Bonus 2 - Promise all
// ...
const p1 = obtainInstruction('brusselsSprouts', 0)
const p2 = obtainInstruction('brusselsSprouts', 1);
const p3 = obtainInstruction('brusselsSprouts', 2);
const p4 = obtainInstruction('brusselsSprouts', 3);
const p5 = obtainInstruction('brusselsSprouts', 4);
const p6 = obtainInstruction('brusselsSprouts', 5);
const p7 = obtainInstruction('brusselsSprouts', 6);
const p8 = obtainInstruction('brusselsSprouts', 7);

Promise.all([p1, p2, p3, p4, p5, p6, p7, p8])
.then((values) => {
  values.forEach(value => {
    document.getElementById('brusselsSprouts').innerHTML += `<li>${value}</li>`
  });
  document.getElementById('brusselsSprouts').innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
})
.catch((err) => document.getElementById('brusselsSprouts').innerHTML += `<li>${err}</li>`)