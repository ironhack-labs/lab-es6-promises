// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
//  getInstruction("mashedPotatoes", 0, (step1) => {
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
// ...

// Iteration 1 - using callbacks

getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;


    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

          document.querySelector("#mashedPotatoes").innerHTML += `<li>" Mashed Potatoes are Ready"</li>`;

          let potato = document.getElementById("mashedPotatoesImg");
          potato.style.display = "block";


        });

      });

    });

  });

});






// Iteration 2 - using promises
// ...

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {

    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {

    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {

    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {

    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {

    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {

    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    document.querySelector("#steak").innerHTML += `<li>"Steak is Ready"</li>`
    let steak = document.getElementById("steakImg");
    steak.style.display = "block";

  })

// ... Your code here

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here


  let steps = [];

  for (let i = 0; i < 6; i++) {

    let step = await obtainInstruction("broccoli", i);

    steps.push(step);

    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;

  }

  document.querySelector("#broccoli").innerHTML += `<li>"Broccoli is Ready</li>`;
  let broccoli = document.getElementById("broccoliImg");
  broccoli.style.display = "block";

}

makeBroccoli();


// Bonus 2 - Promise all
// ...
let promises = [];

for (let i = 0; i <= 7; i++) {



  let eachPromise = new Promise((resolve, reject) => {


    obtainInstruction("brusselsSprouts", i)
      .then((step) => {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
        resolve(step);

      })
  });
  promises.push(eachPromise);

}



Promise.all(promises)

  .then(() => {

    let brussels = document.getElementById("brusselsSproutsImg");
    brussels.style.display = "block";
  })


