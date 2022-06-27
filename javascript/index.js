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
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`
  getInstruction("mashedPotatoes", 1, (step0) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`
    getInstruction("mashedPotatoes", 2, (step0) => {
      document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`
      getInstruction("mashedPotatoes", 3, (step0) => {
        document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`
        getInstruction("mashedPotatoes", 4, (step0) => {
          document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`
          document.querySelector('#mashedPotatoes').innerHTML += `<li>Mashed potatoes are ready!</li>`
          document.querySelector('#mashedPotatoesImg').removeAttribute('hidden');
        });
      });
    });
  });
});

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 2)
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 3)
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 4)
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 5)
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 6)
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 7)
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return 'Stake is ready!'
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    document.querySelector('#steakImg').removeAttribute('hidden');
  })
// Iteration 3 using async/await
async function makeBroccoli(){
  let step0 = await obtainInstruction('broccoli', 0);
  let step1 = await obtainInstruction('broccoli', 1);
  let step2 = await obtainInstruction('broccoli', 2);
  let step3 = await obtainInstruction('broccoli', 3);
  let step4 = await obtainInstruction('broccoli', 4);
  let step5 = await obtainInstruction('broccoli', 5);
  let step6 = await obtainInstruction('broccoli', 6);
  document.querySelector('#broccoli').innerHTML += `<li>${step0}</li><li>${step1}</li><li>${step2}</li><li>${step3}</li><li>${step4}</li><li>${step5}</li><li>${step6}</li><li>Broccoli is ready!</li>`;
  document.querySelector('#broccoliImg').removeAttribute('hidden');
}
makeBroccoli()
// Bonus 2 - Promise all
const p0 = new Promise((resolve, reject) => {resolve(obtainInstruction('brusselsSprouts', 0))});
const p1 = new Promise((resolve, reject) => {resolve(obtainInstruction('brusselsSprouts', 1))});
const p2 = new Promise((resolve, reject) => {resolve(obtainInstruction('brusselsSprouts', 2))});
const p3 = new Promise((resolve, reject) => {resolve(obtainInstruction('brusselsSprouts', 3))});
const p4 = new Promise((resolve, reject) => {resolve(obtainInstruction('brusselsSprouts', 4))});
const p5 = new Promise((resolve, reject) => {resolve(obtainInstruction('brusselsSprouts', 5))});
const p6 = new Promise((resolve, reject) => {resolve(obtainInstruction('brusselsSprouts', 6))});
const p7 = new Promise((resolve, reject) => {resolve(obtainInstruction('brusselsSprouts', 7))});
Promise.all([p0, p1, p2, p3, p4, p5, p6, p7])
  .then((v) => document.querySelector('#brusselsSprouts').innerHTML += `<li>${v[0]}</li><li>${v[1]}</li><li>${v[2]}</li><li>${v[3]}</li><li>${v[4]}</li><li>${v[5]}</li><li>${v[6]}</li><li>${v[7]}</li><li>BrusselsSprouts are ready!</li>`)
  .then(setTimeout(() => {document.querySelector('#brusselsSproutsImg').removeAttribute('hidden')}, 1000));