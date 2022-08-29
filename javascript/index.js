// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 2, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 3, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          getInstruction("mashedPotatoes", 4, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
  


obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    obtainInstruction('steak', 1)
    .then( (step1)  => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
      obtainInstruction('steak', 3)
      .then( (step2)  => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
        obtainInstruction('steak', 4)
        .then( (step3)  => {
          document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
          obtainInstruction('steak', 5)  
          .then( (step4)  => {
            document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
            obtainInstruction('steak', 6)
            .then( (step5)  => {
              document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
              obtainInstruction('steak', 7)  
              .then( (step6)  => {
                document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
                document.querySelector("#steakImg").removeAttribute("hidden")
              });
            });
          });
        });
      });
    });
  });

  obtainInstruction('brusselsSprouts',0)
  .then( (step0) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`
  obtainInstruction('brusselsSprouts',1)
  .then( (step1) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`
    obtainInstruction('brusselsSprouts',2)
    .then( (step2) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`
      obtainInstruction('brusselsSprouts',3)
    .then( (step3) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`
      obtainInstruction('brusselsSprouts',4)
      .then( (step4) => {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`
        obtainInstruction('brusselsSprouts',5)
        .then( (step5) => {
          document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`
          obtainInstruction('brusselsSprouts',6)
          .then( (step6) => {
            document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`
            obtainInstruction('brusselsSprouts',7)
            .then( (step7) => {
              document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`
              document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
          });
        });
      });
     });
    });
    });
    });
  });

  async function makeBroccoli() {
    // ... Your code here
    
    try{
      for(let i =0;i<7;i++)
      {
        await obtainInstruction("broccoli", i).then((step0) => {
          document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
        });
      }
      
      document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
      document.querySelector("#broccoliImg").removeAttribute("hidden")
    }
    
    catch(error){
      console.log(error)
    }
    
  }
  makeBroccoli()

Promise.all([getInstruction,obtainInstruction])