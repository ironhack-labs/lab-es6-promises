// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

function makeVisible(id) {
  document.querySelector(id).hidden = false;
}

// Iteration 1 - using callbacks
// ...

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
          makeVisible("#mashedPotatoesImg")

        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));



// Iteration 2 - using promises
// ...

obtainInstruction('steak', 0)
  .then((data) => {
    document.querySelector("#steak").innerHTML += `<li>${data}</li>`;
    return obtainInstruction('steak', 1)
  })
  .then((data) => {
    document.querySelector("#steak").innerHTML += `<li>${data}</li>`
    return obtainInstruction('steak', 2);
  }) 
  .then((data) => {
    document.querySelector("#steak").innerHTML += `<li>${data}</li>`
    return obtainInstruction('steak', 3);
  })
  .then((data) => {
    document.querySelector("#steak").innerHTML += `<li>${data}</li>`
    return obtainInstruction('steak', 4);
  }) 
  .then((data) => {
    document.querySelector("#steak").innerHTML += `<li>${data}</li>`
    return obtainInstruction('steak', 5);
  }) 
  .then((data) => {
    document.querySelector("#steak").innerHTML += `<li>${data}</li>`
    return obtainInstruction('steak', 6);
  })
  .then((data) => {
    document.querySelector("#steak").innerHTML += `<li>${data}</li>`
    return obtainInstruction('steak', 7);
  })
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`

  })
  .then(() => {
    makeVisible("#steakImg")
  })
  .catch((err) => console.log(err));

// Iteration 3 using async/await
// ...
  async function makeBroccoli() {
    let data;
    try {
      data = await obtainInstruction('broccoli', 0);
      document.querySelector("#broccoli").innerHTML += `<li>${data}</li>`;

      data = await obtainInstruction('broccoli', 1);
      document.querySelector("#broccoli").innerHTML += `<li>${data}</li>`;

      data = await obtainInstruction('broccoli', 2);
      document.querySelector("#broccoli").innerHTML += `<li>${data}</li>`;

      data = await obtainInstruction('broccoli', 3);
      document.querySelector("#broccoli").innerHTML += `<li>${data}</li>`;

      data = await obtainInstruction('broccoli', 4);
      document.querySelector("#broccoli").innerHTML += `<li>${data}</li>`;

      data = await obtainInstruction('broccoli', 5);
      document.querySelector("#broccoli").innerHTML += `<li>${data}</li>`;

      data = await obtainInstruction('broccoli', 6);
      document.querySelector("#broccoli").innerHTML += `<li>${data}</li>`;
      
      document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready</li>`;
      makeVisible("#broccoliImg")

    } catch (error) {
      console.log(error);
    }
  }

  makeBroccoli();


// Bonus 2 - Promise all

// Following function returns an array of promises for brussels sprouts
function createPromiseVariables() {
  let arr = [];
  for(let i = 0; i < brusselsSprouts.length - 1; i++) {
    arr[i] = obtainInstruction("brusselsSprouts", i)
  }
  return arr;
}

const promise = Promise.all(createPromiseVariables()).then((values) => {
  values.forEach(v => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${v}</li>`;
  })
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
  makeVisible("#brusselsSproutsImg");
}).catch(err => {
  console.log(err);
});
// ...