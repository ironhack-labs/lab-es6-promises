// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /*getInstruction("mashedPotatoes", 0, (step1) => {
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
  }, (error) => console.log(error));*/



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`

  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

          getInstruction("mashedPotatoes", 5, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");

          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
});


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    
    obtainInstruction('steak', 1)
      .then( (step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`

      obtainInstruction('steak', 2)
        .then( (step1) => {
          document.querySelector("#steak").innerHTML += `<li>${step1}</li>`

        obtainInstruction('steak', 3)
          .then( (step1) => {
            document.querySelector("#steak").innerHTML += `<li>${step1}</li>`

          obtainInstruction('steak', 4)
            .then( (step1) => {
              document.querySelector("#steak").innerHTML += `<li>${step1}</li>`

            obtainInstruction('steak', 5)
              .then( (step1) => {
                document.querySelector("#steak").innerHTML += `<li>${step1}</li>`

              obtainInstruction('steak', 6)
                .then( (step1) => {
                  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`

                 obtainInstruction('steak', 7)
                  .then( (step1) => {
                    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`

                  obtainInstruction('steak', 8)
                    .then( (step1) => {
                      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
                      document.querySelector("#steakImg").removeAttribute("hidden");
                  })
                })
              })
            })
          })
        })
      })
    })
  })
.catch( (error) => console.log(error));
  
// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction('broccoli', 0);
    const step1 = await obtainInstruction('broccoli', 1);
    const step2 = await obtainInstruction('broccoli', 2);
    const step3 = await obtainInstruction('broccoli', 3);
    const step4 = await obtainInstruction('broccoli', 4);
    const step5 = await obtainInstruction('broccoli', 5);
    const step6 = await obtainInstruction('broccoli', 6);
    const step7 = await obtainInstruction('broccoli', 7);

    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`
    document.querySelector("#broccoliImg").removeAttribute("hidden");


  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
const step0 = obtainInstruction('brusselsSprouts', 0);
const step1 = obtainInstruction('brusselsSprouts', 1);
const step2 = obtainInstruction('brusselsSprouts', 2);
const step3 = obtainInstruction('brusselsSprouts', 3);
const step4 = obtainInstruction('brusselsSprouts', 4);
const step5 = obtainInstruction('brusselsSprouts', 5);
const step6 = obtainInstruction('brusselsSprouts', 6);
const step7 = obtainInstruction('brusselsSprouts', 7);
const step8 = obtainInstruction('brusselsSprouts', 8);

Promise.all([step0, step1, step2, step3, step4, step5, step6, step7, step8])
  .then((values) => {
    console.log(values)
    values.forEach(i => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${i}</li>`;
    });
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((reason) => {
    console.log(reason);
  });