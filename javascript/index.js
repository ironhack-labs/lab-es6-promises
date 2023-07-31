// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 /* getInstruction("mashedPotatoes", 0, (step1) => {
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
          
          mashedPotatoes.push("Mashed potatoes are ready!")
          getInstruction('mashedPotatoes', 5, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
            document.querySelector("#mashedPotatoesImg").style.display = "block";
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
   
  })
  .then(()=>obtainInstruction('steak', 1))
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    
  })
  .then(()=>obtainInstruction('steak', 2))
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    
  })
  .then(()=>obtainInstruction('steak', 3))
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    
  })
  .then(()=>obtainInstruction('steak', 4))
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    
  })
  .then(()=>obtainInstruction('steak', 5))
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    
  })
  .then(()=>obtainInstruction('steak', 6))
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    
  })
  .then(()=>obtainInstruction('steak', 7))
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    
  })
  .then(() => document.querySelector("#steak").innerHTML += `<li> Steak is ready! </li>` )
  .then(()=> document.querySelector("#steakImg").style.display = "block")

// Iteration 3 using async/await
async function makeBroccoli() {
  let broccoliArr = document.querySelector("#broccoli")
  try{
    for (let i = 0; i < broccoli.length; i++){
      const step = await obtainInstruction('broccoli', i)
      broccoliArr.innerHTML += `<li>${step}</li>`
    }
    broccoliArr.innerHTML += `<li>Broccoli is ready!</li>`
    document.querySelector("#broccoliImg").style.display = "block";

  }

  catch(err){
    console.log(err)
  }
}
makeBroccoli();

// Bonus 2 - Promise all
Promise.all([obtainInstruction('brusselsSprouts', 0),
            obtainInstruction('brusselsSprouts', 1),
            obtainInstruction('brusselsSprouts', 2),
            obtainInstruction('brusselsSprouts', 3),
            obtainInstruction('brusselsSprouts', 4),
            obtainInstruction('brusselsSprouts', 5),
            obtainInstruction('brusselsSprouts', 6),
            obtainInstruction('brusselsSprouts', 7),
            ]).then((values)=>{ 
                values.forEach(element => {
                  document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`
                });
            document.querySelector('#brusselsSprouts').innerHTML += `<li>Brussels sprouts are ready!</li>`
            document.querySelector("#brusselsSproutsImg").style.display = "block";
            })
