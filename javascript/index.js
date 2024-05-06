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
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        });
      });
    });
  });
});


// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7)
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
  })
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");
  })

// Iteration 3
async function makeBroccoli() {
  // ... Your code here 
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
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }
  catch (error) {
    console.log(error);
  }
}
makeBroccoli();
// Bonus 2 - Promise all
// const p1 =  obtainInstruction("brusselsSprouts", 0);
// const p2 =  obtainInstruction("brusselsSprouts", 1);
// const p3 =  obtainInstruction("brusselsSprouts", 2);
// const p4 =  obtainInstruction("brusselsSprouts", 3);
// const p5 =  obtainInstruction("brusselsSprouts", 4);
// const p6 =  obtainInstruction("brusselsSprouts", 5);
// const p7 =  obtainInstruction("brusselsSprouts", 6);
// const p8 =  obtainInstruction("brusselsSprouts", 7);

const emptyArr = [];

for (let i = 0; i < brusselsSprouts.length; i++) {
  emptyArr.push(obtainInstruction("brusselsSprouts", i));
}

Promise.all(emptyArr)
    .then((responseArr) => {
      console.log("it works");

      responseArr.forEach((element) => {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`;
      })

      // const p1Response = responseArr[0];
      // document.querySelector("#brusselsSprouts").innerHTML += `<li>${p1Response}</li>`;

      // const p1Response = responseArr[0];
      // document.querySelector("#brusselsSprouts").innerHTML += `<li>${p1Response}</li>`;
      // const p2Response = responseArr[1];
      // document.querySelector("#brusselsSprouts").innerHTML += `<li>${p2Response}</li>`;
      // const p3Response = responseArr[2];
      // document.querySelector("#brusselsSprouts").innerHTML += `<li>${p3Response}</li>`;
      // const p4Response = responseArr[3];
      // document.querySelector("#brusselsSprouts").innerHTML += `<li>${p4Response}</li>`;
      // const p5Response = responseArr[4];
      // document.querySelector("#brusselsSprouts").innerHTML += `<li>${p5Response}</li>`;
      // const p6Response = responseArr[5];
      // document.querySelector("#brusselsSprouts").innerHTML += `<li>${p6Response}</li>`;
      // const p7Response = responseArr[6];
      // document.querySelector("#brusselsSprouts").innerHTML += `<li>${p7Response}</li>`;
      // const p8Response = responseArr[7];
      // document.querySelector("#brusselsSprouts").innerHTML += `<li>${p8Response}</li>`;
      // document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`;
    })
    
