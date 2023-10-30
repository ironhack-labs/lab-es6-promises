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
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          let readyText = "Mashed potatoes are ready!";
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${readyText}</li>`;
          let potatoImg = document.getElementById("mashedPotatoesImg");
          potatoImg.removeAttribute("hidden");;
          });
        });
      });
    });
  });








// ...


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  })
  .then(() => {
    let step8 = "Steak is ready!";
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
    let steakImg = document.getElementById("steakImg")
    steakImg.removeAttribute("hidden");
  });


// Iteration 3 using async/await
async function makeBroccoli() {
  try{
    let instruction;
    instruction = await obtainInstruction("broccoli",0);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli",1);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli",2);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli",3);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli",4);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli",5);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli",6);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = "Broccoli is ready!"
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    let brocImg = document.getElementById("broccoliImg");
    brocImg.removeAttribute("hidden");
  }
  catch(error){
    console.log(error);
}
}

makeBroccoli();


// Bonus 2 - Promise all
let prom0=brusselsSprouts[0];
let prom1=brusselsSprouts[1];
let prom2=brusselsSprouts[2];
let prom3=brusselsSprouts[3];
let prom4=brusselsSprouts[4];
let prom5=brusselsSprouts[5];
let prom6=brusselsSprouts[6];
let prom7=brusselsSprouts[7];


function doSprouts(){
let list = document.getElementById("brusselsSprouts")
Promise.all([prom0, prom1, prom2, prom3, prom4, prom5, prom6, prom7])
.then((data) =>  data.forEach((elemento)=>{list.innerHTML += (`<li>${elemento}</li>`)}))
.catch((error) => console.log(error))

}


async function waitForSprouts(){
  let sprouts = document.getElementById("brusselsSproutsImg")
  sprouts.removeAttribute("hidden");
}

doSprouts();
waitForSprouts();
