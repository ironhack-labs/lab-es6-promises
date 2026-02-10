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
  }, (error) => console.log(error));*/

// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML +=
        `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        })
      })  
    });
  });
}, (err)=>{
  console.log(err)
});

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
 .then(response=>{
  console.log(response)
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;
  return( obtainInstruction("steak", 1))
 })
 .then((response)=>{
  console.log(response)
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`;
  return (obtainInstruction("steak", 2))
 })
 .then((step3)=>{
  console.log(step3)
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
  return (obtainInstruction("steak", 3))
 })
 .then((step4)=>{
  console.log(step4)
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
  return (obtainInstruction("steak", 4))
 })
 .then((step5=>{
   console.log(step5)
   document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
   return (obtainInstruction("steak", 5))
 }))
 .then((step6=>{
   console.log(step6)
   document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
   return (obtainInstruction("steak", 6))
 }))
 .then((step7=>{
   console.log(step7)
   document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
   return (obtainInstruction("steak", 7))
 }))
 .then((step8=>{
   console.log(step8)
   document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
 }))
 .catch((err)=>{
  console.log(err)
 })

// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  try {
    for( const rule of broccoli){
    const res= await rule
    document.querySelector("#broccoli").innerHTML += `<li>${res}</li>`;
   }
    
  } catch (error) {
    console.log(error)
  }

}
makeBroccoli()

// Bonus 2 - Promise all
// ...
async function makeBrussels(){
 try {
   const res= await Promise.all(brusselsSprouts)
   document.querySelector("#brusselsSprouts").innerHTML += `<li>${res[0]}</li>`;
   document.querySelector("#brusselsSprouts").innerHTML += `<li>${res[1]}</li>`;
   document.querySelector("#brusselsSprouts").innerHTML += `<li>${res[2]}</li>`;
   document.querySelector("#brusselsSprouts").innerHTML += `<li>${res[3]}</li>`;
   document.querySelector("#brusselsSprouts").innerHTML += `<li>${res[4]}</li>`;
   document.querySelector("#brusselsSprouts").innerHTML += `<li>${res[5]}</li>`;
   document.querySelector("#brusselsSprouts").innerHTML += `<li>${res[6]}</li>`;
   document.querySelector("#brusselsSprouts").innerHTML += `<li>${res[7]}</li>`;
 } catch (error) {
   console.log(error)
 }
}
makeBrussels()