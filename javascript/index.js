// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code
/*
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
*/


// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        });

      });

    });

  });

});



 
// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);

    .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
  });
  // ... Your code here
// ...

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here

async function makeBroccoli () {
const step0 = await obtainInstruction ("brocoli", 0);
document.querySelector("#brocoli").innerHTLM +=  `<li>${step0}</li>0)`;

const step0 = await obtainInstruction ("brocoli", 1);
document.querySelector("#brocoli").innerHTLM +=  `<li>${step0}</li>0)`;

const step0 = await obtainInstruction ("brocoli", 2);
document.querySelector("#brocoli").innerHTLM +=  `<li>${step0}</li>0)`;

const step0 = await obtainInstruction ("brocoli", 3);
document.querySelector("#brocoli").innerHTLM +=  `<li>${step0}</li>0)`;

const step0 = await obtainInstruction ("brocoli", 4);
document.querySelector("#brocoli").innerHTLM +=  `<li>Brocoli is ready !</li>0)`;
makeBroccoli();
 
}

}



}


// Bonus 2 - Promise all
// ...async function makeBroccoli() {
 
try {
  const allresponses = await Promise.all([request(step0), request(step1), request(step2), request(step3), request(step4)])
console.log(allresponses)
} 
catch(error) {
  console.log(error)

}
})