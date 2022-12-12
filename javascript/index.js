// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

/* Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
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
  }, (error) => console.log(error));

*/

// Iteration 1 - using callbacks
// ...

getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${"Mashed potatoes are ready!"}</li>`;
                    document.querySelector('#mashedPotatoesImg').removeAttribute('hidden');
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
.then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  return obtainInstruction("steak", 1)
})
.then((step1) =>{
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
  return obtainInstruction("steak", 2)
})
.then((step2) =>{
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  return obtainInstruction("steak", 3)
})
.then((step3) =>{
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
  return obtainInstruction("steak", 4)
})
.then((step4) =>{
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
  return obtainInstruction("steak", 5)
})
.then((step5) =>{
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
  return obtainInstruction("steak", 6)
})
.then((step6) =>{
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
  return obtainInstruction("steak", 7)
})
.then((step7) =>{
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
  document.querySelector('#steakImg').removeAttribute('hidden');
})

.catch(error =>{
  console.log(error);
})

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here
try{
for(let i = 0; i <= 6 ; i++){

  const step = await obtainInstruction("broccoli", i);
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
}

document.querySelector("#broccoli").innerHTML += `<li> Broccoli is ready!</li>`;
document.querySelector('#broccoliImg').removeAttribute('hidden');


}
catch (error){
  console.log(error);
}
}
makeBroccoli();
// Bonus 2 - Promise all
const p1 = obtainInstruction("brusselsSprouts", 0);
const p2 = obtainInstruction("brusselsSprouts", 1);
const p3 = obtainInstruction("brusselsSprouts", 2);
const p4 = obtainInstruction("brusselsSprouts", 3);
const p5 = obtainInstruction("brusselsSprouts", 4);
const p6 = obtainInstruction("brusselsSprouts", 5);
const p7 = obtainInstruction("brusselsSprouts", 6);
const p8 = obtainInstruction("brusselsSprouts", 7);
const promiseArr = [p1,p2,p3,p4,p5,p6,p7,p8];

Promise.all(promiseArr)
.then((promises) =>{
  console.log(promises);
  for(let i = 0; i<=7; i++){
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${promises[i]}</li>`;
  }
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.querySelector('#brusselsSproutsImg').removeAttribute('hidden');
})
 
