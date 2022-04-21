// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/* 
  getInstruction("mashedPotatoes", 0, (step1) => {
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
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.getElementById('mashedPotatoesImg').removeAttribute('hidden');
        })
      })
    })
  })
})

// Iteration 2 - using promises

function getSteakProm(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${steak[step]}</li>`;
      resolve();
    }, Math.floor(Math.random() * 1000));
  })
}

getSteakProm(0)
.then(()=>{
  return getSteakProm(1);
})
.then(()=>{
  return getSteakProm(2);
})
.then(()=>{
  return getSteakProm(3);
})
.then(()=>{
  return getSteakProm(4);
})
.then(()=>{
  return getSteakProm(5);
})
.then(()=>{
  return getSteakProm(6);
})
.then(()=>{
  return getSteakProm(7);
})
.then(()=>{
  document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
})
.then(()=>{
  document.getElementById('steakImg').removeAttribute('hidden');
})
.catch(()=>console.error('err'));

// Iteration 3 using async/await

function getBroccoliProm(step){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let ready = step==7 ? document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`:
      step>=8 ? document.getElementById('broccoliImg').removeAttribute('hidden') :
      document.querySelector("#broccoli").innerHTML += `<li>${broccoli[step]}</li>`; 
/*       let ready = step>=7 ? document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`:
      document.querySelector("#broccoli").innerHTML += `<li>${broccoli[step]}</li>`; */
/*       let ready = step>=7 ? document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`: 
      step>=8 ? document.getElementById('broccoliImg').removeAttribute('hidden');
      document.querySelector("#broccoli").innerHTML += `<li>${broccoli[step]}</li>`; */
      resolve();
    }, Math.floor(Math.random() * 1000));
  })
}


const getBroccoli = async () => {
  try{
    await getBroccoliProm(0);
    await getBroccoliProm(1);
    await getBroccoliProm(2);
    await getBroccoliProm(3);
    await getBroccoliProm(4);
    await getBroccoliProm(5);
    await getBroccoliProm(6);
    await getBroccoliProm(7);
    await getBroccoliProm(8);
  }catch(error){
    console.log(error);
  }
}

getBroccoli();

// Bonus 2 - Promise all
// ...