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


 //Iteration 1 - using callbacks





 getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          const finalStep = "Mashed potatoes are ready!"
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${finalStep}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          
        }, 
     
        (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));




// Iteration 2 - using promises
const steakList = document.querySelector("#steak");

 obtainInstruction("steak",0)
  .then((step) => { const stepItem = document.createElement("li");
  stepItem.textContent = step;
  steakList.appendChild(stepItem);
  return obtainInstruction ("steak",1);})
  .then((step1) => {
    const stepItem = document.createElement("li");
    stepItem.textContent = step1
    steakList.appendChild(stepItem)
    return obtainInstruction ("steak",2);
  })
  .then((step2) => {
    const stepItem = document.createElement("li");
    stepItem.textContent = step2
    steakList.appendChild(stepItem)
    return obtainInstruction ("steak",3);
  })
  .then((step3) => {
    const stepItem = document.createElement("li");
    stepItem.textContent = step3
    steakList.appendChild(stepItem)
    return obtainInstruction ("steak",4);
  })
  .then((step4) => {
    const stepItem = document.createElement("li");
    stepItem.textContent = step4
    steakList.appendChild(stepItem)
    return obtainInstruction ("steak",5);
  })
  .then((step5) => {
    const stepItem = document.createElement("li");
    stepItem.textContent = step5
    steakList.appendChild(stepItem)
    return obtainInstruction ("steak",6);
  })
  .then((step6) => {
    const stepItem = document.createElement("li");
    stepItem.textContent = step6
    steakList.appendChild(stepItem)
    return obtainInstruction ("steak",7);
  })
  .then((step7) => {
    const stepItem = document.createElement("li");
    stepItem.textContent = step7
    steakList.appendChild(stepItem);
    document.querySelector("#steakImg").removeAttribute("hidden")
  })
  .catch((err) => console.log(err));

// Iteration 3 using async/await


async function getBroccoli(){
  const broccoliList = document.querySelector("#broccoli")
  try{
    let step = await obtainInstruction("broccoli",0);
    const stepItem1 = document.createElement("li");
    stepItem1.textContent = step;
    broccoliList.appendChild(stepItem1);
    
    step1 = await obtainInstruction("broccoli",1);
    const stepItem2 = document.createElement("li");
    stepItem2.textContent = step1;
    broccoliList.appendChild(stepItem2);

     step2 = await obtainInstruction("broccoli",2);
    const stepItem3 = document.createElement("li");
    stepItem3.textContent = step2;
    broccoliList.appendChild(stepItem3);
     
    step3 = await obtainInstruction("broccoli",3);
    const stepItem4 = document.createElement("li");
    stepItem4.textContent = step3;
    broccoliList.appendChild(stepItem4);
     step4 = await obtainInstruction("broccoli",4);
    const stepItem5 = document.createElement("li");
    stepItem5.textContent = step4;
    broccoliList.appendChild(stepItem5);
     step5 = await obtainInstruction("broccoli",5);
    const stepItem6 = document.createElement("li");
    stepItem6.textContent = step5;
    broccoliList.appendChild(stepItem6);
     step6 = await obtainInstruction("broccoli",6);
    const stepItem7 = document.createElement("li");
    stepItem7.textContent = step6;
    broccoliList.appendChild(stepItem7);
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  
  }
  catch (error){
    "something went wrong"
  }
}

getBroccoli();





// Bonus 2 - Promise all
// ...