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
 getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // ... Your code here
   getInstruction("mashedPotatoes", 1, (step1) => {
     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
     // ... Your code here
      getInstruction("mashedPotatoes", 2, (step2) => {
        document.querySelector(
          "#mashedPotatoes",
        ).innerHTML += `<li>${step2}</li>`;
        // ... Your code here
         getInstruction("mashedPotatoes", 3, (step3) => {
           document.querySelector(
             "#mashedPotatoes",
           ).innerHTML += `<li>${step3}</li>`;
           // ... Your code here
            getInstruction("mashedPotatoes", 4, (step4) => {
              document.querySelector(
                "#mashedPotatoes",
              ).innerHTML += `<li>${step4}</li>`;
              // ... Your code here
               getInstruction("mashedPotatoes",5 , (step5) => {
                 document.querySelector(
                   "#mashedPotatoes",
                 ).innerHTML += `<li>${step5}</li>`;
                 document
                   .getElementById("mashedPotatoesImg")
                   .removeAttribute("hidden");
                 // ... Your code here
               });
            });
         });5
      });
     // ...
   });
    // ...
});

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("steak", 1)
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
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  }).then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  }).then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  }).then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  }).finally((showImg) =>{
    document.getElementById('steakImg').removeAttribute('hidden');

  });

  obtainInstruction("brusselsSprouts", 0)
    .then((step0) => {
      document.querySelector(
        "#brusselsSprouts",
      ).innerHTML += `<li>${step0}</li>`;
      return obtainInstruction("brusselsSprouts", 1);
    })
    .then((step1) => {
      document.querySelector(
        "#brusselsSprouts",
      ).innerHTML += `<li>${step1}</li>`;
      return obtainInstruction("brusselsSprouts", 2);
    })
    .then((step2) => {
      document.querySelector(
        "#brusselsSprouts",
      ).innerHTML += `<li>${step2}</li>`;
      return obtainInstruction("brusselsSprouts", 3);
    })
    .then((step3) => {
      document.querySelector(
        "#brusselsSprouts",
      ).innerHTML += `<li>${step3}</li>`;
      return obtainInstruction("brusselsSprouts", 4);
    })
    .then((step4) => {
      document.querySelector(
        "#brusselsSprouts",
      ).innerHTML += `<li>${step4}</li>`;
      return obtainInstruction("brusselsSprouts", 5);
    })
    .then((step5) => {
      document.querySelector(
        "#brusselsSprouts",
      ).innerHTML += `<li>${step5}</li>`;
      return obtainInstruction("brusselsSprouts", 6);
    })
    .then((step6) => {
      document.querySelector(
        "#brusselsSprouts",
      ).innerHTML += `<li>${step6}</li>`;
      return obtainInstruction("brusselsSprouts", 7);
    })
    .finally((showImg) => {
      document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
    });



// Iteration 3 using async/await
 async function displayMyBroccoli(){
  try{
   const passage0 = await obtainInstruction("broccoli", 0);
   document.querySelector("#broccoli").innerHTML += `<li>${passage0}</li>`;

   const passage1 = await obtainInstruction("broccoli", 1);
   document.querySelector("#broccoli").innerHTML += `<li>${passage1}</li>`;

   const passage2 = await obtainInstruction("broccoli", 2);
   document.querySelector("#broccoli").innerHTML += `<li>${passage2}</li>`;

   const passage3 = await obtainInstruction("broccoli", 3);
   document.querySelector("#broccoli").innerHTML += `<li>${passage3}</li>`;

   const passage4 = await obtainInstruction("broccoli", 4);
   document.querySelector("#broccoli").innerHTML += `<li>${passage4}</li>`;

   const passage5 = await obtainInstruction("broccoli", 5);
   document.querySelector("#broccoli").innerHTML += `<li>${passage5}</li>`;

   const passage6 = await obtainInstruction("broccoli", 6);
   document.querySelector("#broccoli").innerHTML += `<li>${passage6}</li>`;

   const passage7 = await obtainInstruction("broccoli", 7);
   document.querySelector("#broccoli").innerHTML += `<li>${passage7}</li>`;

document.getElementById("broccoliImg").removeAttribute("hidden");
  console.log(t)
}catch(err){
    console.log(err)
  }
 }

 displayMyBroccoli();

// Bonus 2 - Promise all
// ...