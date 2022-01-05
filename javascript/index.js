// jshint esversion:8

// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

  /* getInstruction("mashedPotatoes", 0, (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
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
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction('mashedPotatoes', 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

        getInstruction('mashedPotatoes', 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;

          setTimeout( () => {
        
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${'Mashed potatoes are ready!'}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
    
          }, Math.floor(Math.random() * 1000));
          
        });

      });
      
    });
    
  });
  
});

// Iteration 2 - using promises
obtainInstruction('steak', 0)

  .then( (step0) => {

    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;  

    return new Promise(function(resolve, reject) {
    
      setTimeout( () => {
        
        resolve(steak[1]);

      }, Math.floor(Math.random() * 1000));
    });
  })
  .then( (step1) => {

    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;  

    return new Promise(function(resolve, reject) {

      setTimeout( () => {
        
        resolve(steak[2]);

      }, Math.floor(Math.random() * 1000));
    });

  })
  .then( (step2) => {

    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;  

    return new Promise(function(resolve, reject) {

      setTimeout( () => {

        resolve(steak[3]);

      }, Math.floor(Math.random() * 1000));
    });
  })
  .then( (step3) => {

    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`; 

    return new Promise(function(resolve, reject) {

      setTimeout( () => {
         
        resolve(steak[4]);

      }, Math.floor(Math.random() * 1000));
    });
  })
  .then( (step4) => {

    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`; 
    
    return new Promise(function(resolve, reject) {

      setTimeout( () => { 

        resolve(steak[5]);

      }, Math.floor(Math.random() * 1000));
    });
  })
  .then( (step5) => {
    
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;  

    return new Promise(function(resolve, reject) {

      setTimeout( () => {

        resolve(steak[6]);

      }, Math.floor(Math.random() * 1000));
    });
  })
  .then( (step6) => {
    
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;  

    return new Promise(function(resolve, reject) {

      setTimeout( () => {
        
        resolve(steak[7]);

      }, Math.floor(Math.random() * 1000));
    });
  })
  .then( (step7) => {

    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;  

    setTimeout( () => {

      document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
      document.querySelector("#steakImg").removeAttribute("hidden");

    }, Math.floor(Math.random() * 1000));
    
  })
  .catch( err => console.log(err));
  
// Iteration 3 using async/await
async function makeBroccoli() {
  
  try {
    
    document.querySelector("#broccoli").innerHTML += `<li> ${await obtainInstruction('broccoli', 0)} </li>`;
    document.querySelector("#broccoli").innerHTML += `<li> ${await obtainInstruction('broccoli', 1)} </li>`;
    document.querySelector("#broccoli").innerHTML += `<li> ${await obtainInstruction('broccoli', 2)} </li>`;
    document.querySelector("#broccoli").innerHTML += `<li> ${await obtainInstruction('broccoli', 3)} </li>`;
    document.querySelector("#broccoli").innerHTML += `<li> ${await obtainInstruction('broccoli', 4)} </li>`;
    document.querySelector("#broccoli").innerHTML += `<li> ${await obtainInstruction('broccoli', 5)} </li>`;
    document.querySelector("#broccoli").innerHTML += `<li> ${await obtainInstruction('broccoli', 6)} </li>`;
    setTimeout( () => {
        
      document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
      document.querySelector("#broccoliImg").removeAttribute("hidden");

    }, Math.floor(Math.random() * 1000));
    
    
  } catch (error) {
    
    console.log(error);
  }
}
makeBroccoli();


// Bonus 2 - Promise all

const brussels0 = Promise.resolve(brusselsSprouts[0]);

const brussels1 = Promise.resolve(brusselsSprouts[1]);

const brussels2 = Promise.resolve(brusselsSprouts[2]);

const brussels3 = Promise.resolve(brusselsSprouts[3]);

const brussels4 = Promise.resolve(brusselsSprouts[4]);

const brussels5 = Promise.resolve(brusselsSprouts[5]);

const brussels6 = Promise.resolve(brusselsSprouts[6]);

const brussels7 = Promise.resolve(brusselsSprouts[7]);

const brussels8 = Promise.resolve('Brussels sprouts are ready!');



Promise.all( [brussels0, brussels1, brussels2, brussels3, brussels4, brussels5, brussels6, brussels7, brussels8] )
  .then((values) => {

    values.forEach(element => {
      
      setTimeout(() => document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`, Math.floor(Math.random() * 2000));
    });
  });
  