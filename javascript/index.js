// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 /*  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */



// Iteration 1 - using callbacks
// ...
getInstruction ('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction ('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction ('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction ('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction ('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          console.log ("Mash potatoes are ready!")
        }, (err) => console.log(err));
      }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));
});

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</i>`
    return obtainInstruction('steak', 1)
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</i>`
    return obtainInstruction('steak', 1)
  })
  .then((step2) => {
    document.querySelector('#steak').innerHTML += `<li>${step2}</i>`
    return obtainInstruction('steak', 2)
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</i>`
    return obtainInstruction('steak', 3)
  })
  .then((step4) => {
    document.querySelector('#steak').innerHTML += `<li>${step4}</i>`
    return obtainInstruction('steak', 4)
  })
  .then((step5) => {
    document.querySelector('#steak').innerHTML += `<li>${step5}</i>`
    return obtainInstruction('steak', 5)
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</i>`
    return obtainInstruction('steak', 6)
  })
  .then((step7) => {
    document.querySelector('#steak').innerHTML += `<li>${step7}</i>`
    return obtainInstruction('steak', 7)
  })
  .then((step8) => {
    document.querySelector('#steak').innerHTML += `<li>'Steak is ready!'</i>`
  })


// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    let step0 = await obtainInstruction('broccoli', 0);
    document.querySelector('#broccoli').innerHTML += `<li>${step0}</i>`
    let step1 = await obtainInstruction('broccoli', 1);
    document.querySelector('#broccoli').innerHTML += `<li>${step1}</i>`
    let step2 = await obtainInstruction('broccoli', 2);
    document.querySelector('#broccoli').innerHTML += `<li>${step2}</i>`
    let step3 = await obtainInstruction('broccoli', 3);
    document.querySelector('#broccoli').innerHTML += `<li>${step3}</i>`
    let step4 = await obtainInstruction('broccoli', 4);
    document.querySelector('#broccoli').innerHTML += `<li>${step4}</i>`
    let step5 = await obtainInstruction('broccoli', 5);
    document.querySelector('#broccoli').innerHTML += `<li>${step5}</i>`
    let step6 = await obtainInstruction('broccoli', 6);
    document.querySelector('#broccoli').innerHTML += `<li>${step6}</i>`
    document.querySelector('#broccoli').innerHTML += `<li>Broccoli is ready!</i>`
  }
    catch(err) {
     // console.log(err)
    }
}
makeBroccoli();
// Bonus 2 - Promise all
// ...
let bonus = [];
bonus.push(obtainInstruction("brusselsSprouts", 0));
bonus.push(obtainInstruction("brusselsSprouts", 1));
bonus.push(obtainInstruction("brusselsSprouts", 2));
bonus.push(obtainInstruction("brusselsSprouts", 3));
bonus.push(obtainInstruction("brusselsSprouts", 4));
bonus.push(obtainInstruction("brusselsSprouts", 5));
bonus.push(obtainInstruction("brusselsSprouts", 6));
bonus.push(obtainInstruction("brusselsSprouts", 7));
// console.log(bonus);
// console.log(bonus[0].then((values) => console.log(values)));
Promise.all(bonus).then((values) => document.querySelector('#brusselsSprouts').innerHTML += `<li>${values[0]}</li><li>${values[1]}</li><li>${values[2]}</li><li>${values[3]}</li><li>${values[4]}</li><li>${values[5]}</li><li>${values[6]}</li><li>${values[7]}</li><li>BrusselsSprouts are ready!</li>`,
  document.getElementById("brusselsSproutsImg").hidden = false
)