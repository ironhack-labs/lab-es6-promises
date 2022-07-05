// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*   getInstruction("mashedPotatoes", 0, (step1) => {
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
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(`Step 4 :${error}`));
      }, (error) => console.log(`Step 3 :${error}`));
    }, (error) => console.log(`Step 2 :${error}`));
  }, (error) => console.log(`Step 1 :${error}`));
}, (error) => console.log(`Step 0 :${error}`));

// Iteration 2 - using promises

async function generateSteakInstruction() {

  for( let i = 0; i < 6; i++){
     await obtainInstruction('steak', i)
      .then( (step) => {
        document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
        return obtainInstruction('steak', i);
      }).catch((error)=>{
        console.log(`Error promise instruction:  ${error}`);
      })
  }
  obtainInstruction('steak', 7)
      .then( () => {
        document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
        return obtainInstruction('steak', 7);// step 7
      })
      .then( () => {
        document.querySelector("#steakImg").removeAttribute("hidden");
      })
      .catch((error)=>{
        console.log(`Error last promise instruction:  ${error}`);
      })
}

generateSteakInstruction()
// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  try{
    for(let i = 0; i < 6;i++){
      let result = await obtainInstruction('broccoli', i);
      document.querySelector("#broccoli").innerHTML += `<li> ${result}</li>`;
    }
    let result = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li> ${result} Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");

  }catch(err){
    console.log(`Error promise instruction:  ${err}`);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
function generatePromisesInstruction(){
  try{
    let arrPms = [];
    for(let i = 0; i < 8; i++){
      let res = obtainInstruction('brusselsSprouts', i)
      arrPms.push(res);
    }
    return arrPms;
  }catch(err){
    console.log(`Error generate promise instruction:  ${err}`);
  }
}

let arrStep = generatePromisesInstruction();

function brusselsInstruction(step){
  Promise.all([step[0],step[1],step[2],step[3],step[4],step[5],step[6],step[7]])
  .then(results => {
    for (const step of results.keys()) {
      if(step === 7){
        document.querySelector("#brusselsSprouts").innerHTML += `<li> Brussels sprouts are ready!</li>`;
        document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
      }else{
        document.querySelector("#brusselsSprouts").innerHTML += `<li> ${results[step]}</li>`;
      }
    }
  }).catch(reason => {
    console.log(`Error brussels instruction: ${reason}`)
  });
}

brusselsInstruction(arrStep);