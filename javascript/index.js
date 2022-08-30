// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
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
            getInstruction("mashedPotatoes", 3, 
             (step4) => {
              document.querySelector(
                "#mashedPotatoes"
              ).innerHTML += `<li>${step4}</li>`;
              getInstruction("mashedPotatoes",
              4,
                (step5) =>{
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>${step5}</li>`;
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
                
                },
                (error) => console.log(error)
              )
             },
             (error) => console.log(error)
            )
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
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    //  ... Your code here
    obtainInstruction('steak', 1)
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    obtainInstruction('steak', 2)
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    obtainInstruction('steak', 3)
    .then( (step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
      obtainInstruction('steak', 4)
      .then( (step4) => {
        document.querySelector("#steak").innerHTML += `<li>${step4}</li>` 
        obtainInstruction('steak', 5)
      .then( (step5) => {
        document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
        obtainInstruction('steak', 6)
      .then( (step6) => {
        document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
        document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
        document.querySelector("#steakImg").removeAttribute("hidden");

      })
      .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))   
    })
    .catch((error) => console.log(error)) 
  })
  .catch((error) => console.log(error))

     })
     .catch((error) => console.log(error))

  })
  .catch((error) => console.log(error))

// ...

// Iteration 3 using async/await

async function makeBroccoli() {
  try{
    let step0 = await obtainInstruction("steak", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    let step1 = await obtainInstruction("steak", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    let step2 = await obtainInstruction("steak", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    let step3 = await obtainInstruction("steak", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    let step4 = await obtainInstruction("steak", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    let step5 = await obtainInstruction("steak", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    let step6 = await obtainInstruction("steak", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    let step7 = await obtainInstruction("steak", 7);
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>Brococoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");

  }
  catch{
    (error) => console.log(error)
  }
}
makeBroccoli()
// ...

// Bonus 2 - Promise all
// ...
const s0 = obtainInstruction("brusselsSprouts", 0);
const s1 = obtainInstruction("brusselsSprouts", 1);
const s2 = obtainInstruction("brusselsSprouts", 2);
const s3 = obtainInstruction("brusselsSprouts", 3);
const s4 = obtainInstruction("brusselsSprouts", 4);
const s5 = obtainInstruction("brusselsSprouts", 5);
const s6 = obtainInstruction("brusselsSprouts", 6);
const s7 = obtainInstruction("brusselsSprouts", 7);


Promise.all([s1, s2, s3, s4, s5, s6, s7])
  .then((steps) => {
    steps.forEach((step) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step}</li>`;
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>Brusseles Sprouts are ready!</li>`;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    });
  })
  .catch(console.log);