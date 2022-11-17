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
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks
/**getDirections(0, ()=>{
    getDirections(1, ()=>{
        getDirections(2, ()=>{
            getDirections(3, ()=>{
                getDirections(4, ()=>{}, (error)=>{console.error(error)})
            })
        })
    })
}, (error)=>{console.error(error)})  */
getInstruction('mashedPotatoes', 0, (step1)=>{
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
  getInstruction('mashedPotatoes',1, (step2)=>{
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`  
    getInstruction('mashedPotatoes',2, (step3)=>{
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`    
      getInstruction('mashedPotatoes',3, (step4)=>{
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`    
        getInstruction('mashedPotatoes' , 4 ,(step5)=>{
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");  
            }, (error) => console.log(error))
          })
      })
  })
}, (error)=>{console.error(error)})


// Iteration 2 - using promises
obtainInstruction('steak', 0)
.then((step1)=>{
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
  return obtainInstruction('steak',1)
})
.then((step2) =>{
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
  return obtainInstruction('steak',2)
})
.catch((error) => console.log('el error', error))

// Iteration 3 using async/await
async function getDinner(){
  try{
    const step0 = await obtainInstruction('brusselsSprouts', 0)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`
    const step1 =await obtainInstruction('brusselsSprouts', 1)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`
    const step2 = await obtainInstruction('brusselsSprouts', 2)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`
  }catch{
    console.log('Error');
  }
}

getDinner()

// Bonus 2 - Promise all
// ...