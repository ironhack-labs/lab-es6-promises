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
  }, (error) => console.log(error));
 */

/*   getInstruction('mashedPotatoes', 2, (step2) => {
    getInstruction('mashedPotatoes', 3, (step3) => {
      getInstruction('mashedPotatoes', 4, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
        document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready</li>`
      })
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
    })
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
  }) */

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  getInstruction("mashedPotatoes", 1, (step1) => {
    getInstruction("mashedPotatoes", 2, (step2) => {
      getInstruction("mashedPotatoes", 3, (step3) => {
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed potatoes are ready</li>`;
        });
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;
      });
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;
    });

    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  });
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
});

// Iteration 2 - using promises


obtainInstruction("steak", 0).then((step0) => {
  document.querySelector("#steak", 0).innerHTML += `<li>${step0}</li>`;
  return obtainInstruction("steak", 1).then((step1) => {
    document.querySelector("#steak", 1).innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2).then((step2) => {
      document.querySelector("#steak", 2).innerHTML += `<li>${step2}</li>`;
      return obtainInstruction("steak", 3).then((step3) => {
        document.querySelector("#steak", 3).innerHTML += `<li>${step3}</li>`;
        return obtainInstruction("steak", 4).then((step4) => {
          document.querySelector("#steak", 4).innerHTML += `<li>${step4}</li>`;
          return obtainInstruction("steak", 5).then((step5) => {
            document.querySelector("#steak", 5).innerHTML += `<li>${step5}</li>`;
            return obtainInstruction("steak", 6).then((step6) => {
              document.querySelector("#steak", 6).innerHTML += `<li>${step6}</li>`;
              return obtainInstruction("steak", 7).then((step7) => {
                document.querySelector("#steak", 7).innerHTML += `<li>${step7}</li>`;
              });
            });
          });
        });
      });
      
    });
    
  });
});



// ... Your code here

async function makeBroccoli() {
  for (const step of broccoli) {
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    await new Promise((resolve) => setTimeout(resolve, 1000)); //
  }
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
makeBroccoli();

// Bonus 2 - Promise all
// ...
