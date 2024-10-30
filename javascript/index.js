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
  }, (error) => console.log(error)); */



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1,(step1) => {
     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2,(step2) => {
       document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3,(step3) => {
         document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
         getInstruction('mashedPotatoes', 4,(step4) => {
         document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
        getInstruction('mashedPotatoes', 0,(step5) => {
           document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
           getInstruction('mashedPotatoes', 0,() => {
            const mashedPotatoesImg = document.getElementById('mashedPotatoesImg');
            mashedPotatoesImg.removeAttribute('hidden');
          getInstruction(
            'mashedPotatoes',
             () => {
                 console.log("aqui esta callback");
             },
               (err) => {
                console.log(err);
               }
            );
           });
          });
        });
      });
       });
     });
  });



// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
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
                            obtainInstruction('steak', 7)
                              .then( () => {
                                document.querySelector("#steak").innerHTML += `<li>Stake is ready!.</li>`
                                obtainInstruction('steak', 0)
                                .then( () => {
                                  const steakImg = document.getElementById('steakImg');
                                  steakImg.removeAttribute('hidden');
                              });
                            });
                          });
                      }); 
                  });
              });
            });
          });
        });
      
    //  ... Your code here
 
// Iteration 3 using async/await
async function makeBroccoli() {
  try {
        await obtainInstruction('broccoli', 0)
          .then((step0) => document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`);
          await obtainInstruction('broccoli', 1)
          .then((step1) => document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`);
          await obtainInstruction('broccoli', 2)
          .then((step2) => document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`);
          await obtainInstruction('broccoli', 3)
          .then((step3) => document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`);
          await obtainInstruction('broccoli', 4)
          .then((step4) => document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`);
          await obtainInstruction('broccoli', 5)
          .then((step5) => document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`);
          await obtainInstruction('broccoli', 6)
          .then((step6) => document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`);
          await obtainInstruction('broccoli', 0)
          .then(() => document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!.</li>`);
          await obtainInstruction('broccoli', 0)
          .then(() => 
           document.getElementById('broccoliImg').removeAttribute('hidden'));

    
         console.log("You arrived at your destination!");
       } catch (err) {
         console.log(err);
       }
     }
     makeBroccoli();


// Bonus 2 - Promise all
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(broccoli[0]), 1000); });
const promise2 =new Promise((resolve, reject) => {
    setTimeout(() => resolve(broccoli[1]), 1000); });
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(broccoli[2]), 1000); });
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(broccoli[3]), 1000); });
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(broccoli[4]), 1000); });
const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(broccoli[5]), 1000); });
const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(broccoli[6]), 1000); });
const promise8 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("<li>Broccoli is ready!.</li>"), 1000); });

      



Promise.all([promise1, promise2, promise3,promise4,promise5,promise6,promise7,promise8,])
  .then(resultados => {
    resultados.forEach(resultado=>{
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${resultado}</li>`
      document.getElementById('brusselsImg').removeAttribute('hidden')
    })
  })
  .catch(error => {
    console.error('Una de las promesas falló:', error);
  });