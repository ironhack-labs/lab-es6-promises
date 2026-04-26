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
  }, (error) => console.log(error));*/



// Iteration 1 - using callbacks
obtainInstruction('mashedPotatoes', 0).then((step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  obtainInstruction('mashedPotatoes', 1).then((step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    obtainInstruction('mashedPotatoes', 2).then((step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      obtainInstruction('mashedPotatoes', 3).then((step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

        obtainInstruction('mashedPotatoes', 4).then((step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

          const li = document.createElement('li');
          li.textContent = "Mashed potatoes are ready!";
          document.getElementById('mashedPotatoes').appendChild(li);
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");

            });
          });
        });
      });
    });

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
    const li = document.createElement('li');
    li.textContent = "Steak is ready!";
    document.getElementById('steak').appendChild(li);
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((err) => console.error(err));

// Iteration 3 using async/await

function step(msg) {
  return new Promise((resolve) => {
    const li = document.createElement('li');
    li.textContent = msg;
    document.getElementById('broccoli').appendChild(li);
    resolve();
  });
}

async function makeBroccoli() {
  try{
  const msg1 = await obtainInstruction("broccoli", 0);
  await step(msg1);

  const msg2 = await obtainInstruction("broccoli", 1);
  await step(msg2);

  const msg3 = await obtainInstruction("broccoli", 2);
  await step(msg3);

  const msg4 = await obtainInstruction("broccoli", 3);
  await step(msg4);

  const msg5 = await obtainInstruction("broccoli", 4);
  await step(msg5);

  const msg6 = await obtainInstruction("broccoli", 5);
  await step(msg6);

  const msg7 = await obtainInstruction("broccoli", 6);
  await step(msg7);
    const li = document.createElement('li');
    li.textContent = "Boroccoli is ready!";
    document.getElementById('broccoli').appendChild(li);
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }catch(err){
    console.error("Error: ", err);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
Promise.all([
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7),
])
.then((steps) => {
  steps.forEach((step) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
  });

  const li = document.createElement('li');
  li.textContent = "Brussels sprouts are ready!";
  document.getElementById('brusselsSprouts').appendChild(li);
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");

}).catch((err) => console.error(err));