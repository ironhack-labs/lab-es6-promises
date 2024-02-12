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
    // ADD NEXT STEP HERE
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
                    // Bonus 1
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
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

/* 
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    
  })
*/

function obtainInstruction (step) {
  return new Promise(function (resolve, reject) {
    setTimeout(()=> {
    document.querySelector("#steak").innerHTML += `<li>${steak[step]}</li>`;

      if(!steak[step]) reject ("Instruction not found")
      else resolve();
    }, 1000);
  })

};

obtainInstruction(0)
.then( () => obtainInstruction (1))
.then( () => obtainInstruction (2))
.then( () => obtainInstruction (3))
.then( () => obtainInstruction (4))
.then( () => obtainInstruction (5))
.then( () => obtainInstruction (6))
.then( () => obtainInstruction (7))
.then( () => obtainInstruction (8))
.finally( () =>{
  console.log("Steak is ready!");
})

.finally( () =>{
  document.querySelector("#steakImg").removeAttribute("hidden");

})


// Iteration 3 using async/await
// ...

function obtainInstruction2 (step) {
  return new Promise(function (resolve, reject) {
    setTimeout(()=> {
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[step]}</li>`;

      if(!steak[step]) reject ("Instruction not found")
      else resolve();
    }, 1000);
  })
};

async function makeBroccoli() {
  await obtainInstruction2(0);
  await obtainInstruction2(1);
  await obtainInstruction2(2);
  await obtainInstruction2(3);
  await obtainInstruction2(4);
  await obtainInstruction2(5);
  await obtainInstruction2(6);
  await obtainInstruction2(7);

  console.log("Broccoli is ready!");
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli();

// Bonus 2 - Promise all
// ...

