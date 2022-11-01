// Iteration 1 - using callbacks
// callback1
 getInstruction("mashedPotatoes", 0, (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    //callback2
    getInstruction("mashedPotatoes", 1, (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
      //callback3
      getInstruction("mashedPotatoes", 2, (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
        //callback4
        getInstruction("mashedPotatoes", 3, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
          getInstruction("mashedPotatoes", 4, (step4) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
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
    return obtainInstruction("steak", 1);
  }).then((step1)=>{
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction("steak", 2);
  }).then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
      return obtainInstruction("steak", 3);
  }).then((step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
      return obtainInstruction("steak", 4);
  }).then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction("steak", 5);
  }).then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction("steak", 6);
  }).then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction("steak", 7);
  }).then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");
  }).catch((error) => {
    console.error(error);
  });
  

// Iteration 3 using async/await
const broccoliPrint = async () =>  { 
  try {
    const step0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    const step1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    const step2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    const step3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    const step4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    const step5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    const step6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

broccoliPrint();

// Bonus 2 - Promise all

const p1 =  obtainInstruction("brusselsSprouts", 0);
const p2 =  obtainInstruction("brusselsSprouts", 1);
const p3 =  obtainInstruction("brusselsSprouts", 2);
const p4 =  obtainInstruction("brusselsSprouts", 3);
const p5 =  obtainInstruction("brusselsSprouts", 4);
const p6 =  obtainInstruction("brusselsSprouts", 5);
const p7 =  obtainInstruction("brusselsSprouts", 6);
const p8 =  obtainInstruction("brusselsSprouts", 7);

Promise.all([p1,p2,p3,p4,p5,p6,p7,p8]).then((elements) => {
  console.log(elements);
   
  elements.forEach((element) => {
    console.log(element);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`;
  })
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});

