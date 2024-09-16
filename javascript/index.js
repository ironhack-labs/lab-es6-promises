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
// ...
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          getInstruction('mashedPotatoes', 5, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
          });
        });
      });
    });
  });
});


// Iteration 2 - using promises
// ...

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
        
         
        })
      
       
      })



    })
    
     
    })
  
   
  })
   
  })
})
// Iteration 3 using async/await
// ...
function obtainDirections(step) {
  return new Promise ( (resolve, reject) => {
    
      console.log( directions[step] );
 
      if (!directions[step]) reject("Instructions not found.")
      else resolve();
   
    
  })
}

async function makeBroccoli() {
  await obtainDirections(0);
  await obtainDirections(1);
  await obtainDirections(2);
  await obtainDirections(3);
 
}
 
makeBroccoli();

// Bonus 2 - Promise all
// ...




/*function obtainInstruction(food, step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

async function makeBroccoli() {
  try {
    await obtainDirections(broccoli, 0);
    await obtainDirections(broccoli, 1);
    await obtainDirections(broccoli, 2);
    await obtainDirections(broccoli, 3);
   
  
  }
  catch (error) {
    console.log("error")
  }
}
    })
  });
}
makeBroccoli()*/