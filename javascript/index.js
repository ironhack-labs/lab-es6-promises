// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
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



// Iteration 1 - using callbacks
// ...

function obtainInstruction(step) {
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      if(steak[step]) resolve(document.getElementById('steak').innerHTML += `<li>${steak[step]}</li>`)
    else reject('La cagaste')
    },100)
  })
}



// Iteration 2 - using promises
// ...

// Iteration 3 using async/await
// ...

function broccoliInstruction(step) {
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      if(broccoli[step]) resolve(document.getElementById('broccoli').innerHTML += `<li>${broccoli[step]}</li>`)
      else reject('La cagaste')
    },100)
  })
}

async function makeBroccoli () {
  await broccoliInstruction(0);
  await broccoliInstruction(1);
  await broccoliInstruction(2);
  await broccoliInstruction(3);
  await broccoliInstruction(4);
  await broccoliInstruction(5);
  await console.log(document.getElementById('broccoli').innerHTML += `<li>Broccoli is ready!</li>`);
  await broccoliInstruction(6);
}

//Images


function images () {
  
let imgSteak = document.getElementById('steakImg');
let imgBroccoli = document.getElementById('broccoliImg');
let imgBrussels = document.getElementById('brusselsSproutsImg');

setInterval(()=>imgSteak.removeAttribute('hidden'),500)
setInterval(()=>imgBroccoli.removeAttribute('hidden'),700)
setInterval(()=>imgBrussels.removeAttribute('hidden'),100)

}

// Bonus 2 - Promise all
// ...

const bruss1 = new Promise ((resolve,reject)=>{
  setTimeout(()=>resolve(document.getElementById('brusselsSprouts').innerHTML += `<li>${brusselsSprouts[0]}</li>`,100));
  reject();
});

const bruss2 = new Promise ((resolve,reject)=>{
  setTimeout(()=>resolve(document.getElementById('brusselsSprouts').innerHTML += `<li>${brusselsSprouts[1]}</li>`,110));
});

const bruss3 = new Promise ((resolve,reject)=>{
  setTimeout(()=>resolve(document.getElementById('brusselsSprouts').innerHTML += `<li>${brusselsSprouts[2]}</li>`),120);
});

const bruss4 = new Promise ((resolve,reject)=>{
  setTimeout(()=>resolve(document.getElementById('brusselsSprouts').innerHTML += `<li>${brusselsSprouts[3]}</li>`),130);
});

const bruss5 = new Promise ((resolve,reject)=>{
  setTimeout(()=>resolve(document.getElementById('brusselsSprouts').innerHTML += `<li>${brusselsSprouts[4]}</li>`),140);
});

const bruss6 = new Promise ((resolve,reject)=>{
  setTimeout(()=>resolve(document.getElementById('brusselsSprouts').innerHTML += `<li>${brusselsSprouts[5]}</li>`),150);
});

const bruss7 = new Promise ((resolve,reject)=>{
  setTimeout(()=>resolve(document.getElementById('brusselsSprouts').innerHTML += `<li>${brusselsSprouts[6]}</li>`),160);
});

const bruss8 = new Promise ((resolve,reject)=>{
  setTimeout(()=>resolve(document.getElementById('brusselsSprouts').innerHTML += `<li>${brusselsSprouts[7]}</li>`),170);
});


//Broccoli
makeBroccoli();
//Brussels
Promise.all ([bruss1,bruss2,bruss3,bruss4,bruss5,bruss6,bruss7,bruss8])
//steak
obtainInstruction(0)
.then(()=>obtainInstruction(1))
.then(()=>obtainInstruction(2))
.then(()=>obtainInstruction(3))
.then(()=>obtainInstruction(4))
.then(()=>obtainInstruction(5))
.then(()=>obtainInstruction(6))
.then(()=>console.log(document.getElementById('steak').innerHTML += `<li>Stake is ready!</li>`))
.then(()=>obtainInstruction(7))
.then(images)
