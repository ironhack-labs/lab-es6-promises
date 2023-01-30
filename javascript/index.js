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
  }, (error) => console.log(error));

 */
  let mashedPotatoesReady = false;
  let steakReady = false
  let broccoliReady = false;


// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                    document.getElementById('mashedPotatoesImg').hidden = false;

                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction("steak", 7);
  })
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li id="ready">Stake is ready!</li>`;
    document.getElementById('steakImg').hidden = false;
  })
  .catch((err) => {
    console.log("catch()", err);
  });


// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    let result;
    for (let i = 0; i < broccoli.length; i++) {
      result = await obtainInstruction("broccoli", i);
      document.querySelector("#broccoli").innerHTML += `<li>${result}</li>`;
    }
    document.querySelector("#broccoli").innerHTML += `<li id="ready">Broccoli is ready!</li>`;
    document.getElementById('broccoliImg').hidden = false;
    
  } catch (err) {
    console.log("Something went wrong!", err);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
// Could probably make a for loop here
 async function makeBrusselsSprouts (){
  const p1 = await obtainInstruction("brusselsSprouts",0);
  const p2 = await obtainInstruction("brusselsSprouts",1);
  const p3 = await obtainInstruction("brusselsSprouts",2);
  const p4 = await obtainInstruction("brusselsSprouts",3);
  const p5 = await obtainInstruction("brusselsSprouts",4);
  const p6 = await obtainInstruction("brusselsSprouts",5);
  const p7 = await obtainInstruction("brusselsSprouts",6);

  const resultArr = [p1, p2, p3, p4, p5, p6, p7];

  Promise.all(resultArr)
  .then((result) => {
    result.forEach(instruction => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction}</li>`
  })
  console.log(result)
}) 
  .catch ((err) => {
    console.log("Something went wrong!", err);
  })
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts is ready!</li>`;
  document.getElementById('brusselsSproutsImg').hidden = false;
 }

makeBrusselsSprouts()