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

function errorCallback(error) {
  console.log("error " + error);
}

function callBack1(result) {
  return result;
}

getInstruction("mashedPotatoes", 0, callBack1((result) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${result}</li>`
  getInstruction("mashedPotatoes", 1, callBack1((result) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${result}</li>`
    getInstruction("mashedPotatoes", 2, callBack1((result) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${result}</li>`
      getInstruction("mashedPotatoes", 3, callBack1((result) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${result}</li>`
        getInstruction("mashedPotatoes", 4, callBack1((result) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${result}</li>`
        }));
      }));
    }));
  }));

}), errorCallback((error) => {
  console.log(error);
}));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((response) => {
    document.querySelector("#steak").innerHTML += `<li>${response}</li>`
    obtainInstruction('steak', 1)
      .then((response) => {
        document.querySelector("#steak").innerHTML += `<li>${response}</li>`
        obtainInstruction('steak', 2)
          .then((response) => {
            document.querySelector("#steak").innerHTML += `<li>${response}</li>`
            obtainInstruction('steak', 3)
            .then((response) => {
              document.querySelector("#steak").innerHTML += `<li>${response}</li>`
              obtainInstruction('steak', 4)
              .then((response) => {
                document.querySelector("#steak").innerHTML += `<li>${response}</li>`
                obtainInstruction('steak', 5)
                .then((response) => {
                  document.querySelector("#steak").innerHTML += `<li>${response}</li>`
                  obtainInstruction('steak', 6)
                  .then((response) => {
                    document.querySelector("#steak").innerHTML += `<li>${response}</li>`
                    obtainInstruction('steak', 7)
                    .then((response) => {
                      document.querySelector("#steak").innerHTML += `<li>${response}</li>`
                      document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
                      obtainInstruction('steak', 8)
                    })
                  })
                })
              })
            })
          })
      })
  })

  .catch((error) => {
    console.log(error);
  });

// Iteration 3 using async/await
async function getPlan() {
  try {
    const result1 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${result1}</li>`
    const result2 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${result2}</li>`
    const result3 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${result3}</li>`
    const result4 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${result4}</li>`
    const result5 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${result5}</li>`
    const result6 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${result6}</li>`
    const result7 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${result7}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  } catch (e) {
    console.log(e);
  }
}
getPlan();

// Bonus 2 - Promise all
// ...