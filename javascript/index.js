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
  
 
  

  
 // Iteration 2 - using promises
obtainInstruction('steak', 0)
.then( (step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  //  ... Your code here
})
// ... Your code here
  
 

  getInstruction("steak", 0, (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    getInstruction("steak", 1, (step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      getInstruction("steak", 2, (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    getInstruction("steak", 3, (step4) => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
      getInstruction("steak", 4, (step5) => {
        document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
        document.querySelector("#steak").removeAttribute("hidden");
    
      getInstruction("steak", 5, (step6) => {
        document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
        document.querySelector("#steakImg").removeAttribute("hidden");
      }, (error) => console.log(error));
    },(error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
  

  
  
  
  

  getInstruction("brusselsSprouts", 0, (step1) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;
    getInstruction("brusselsSprouts", 1, (step2) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;
      getInstruction("brusselsSprouts", 2, (step3) => {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;
        
  getInstruction("brusselsSprouts", 3, (step4) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;
    getInstruction("brusselsSprouts", 4, (step5) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
          }, (error) => console.log(error));
        }, (error) => console.log(error));
  
      }, (error) => console.log(error));
      
    }, (error) => console.log(error));
  }, (error) => console.log(error));
  

  
  

// async function run() {
//     // try catch
//     try {
        
//     } catch (error) {
//         console.log(error)
//     } finally {
//         console.log('this always executes')
//     }
// }
// // run()

  async function makeBroccoli() {
    // ... Your code here
    
   try{
    for(let i = 0; i<7;i++){
      await obtainInstruction("broccoli", i).then((step0) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    });
  }
    
    
    document.querySelector("#broccoliImg").removeAttribute("hidden");
   }

  catch(error){
    console.log(error)
  }
}
  makeBroccoli()
  
  
  
  
  




