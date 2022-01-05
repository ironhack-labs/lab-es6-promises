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

function returnRecipeSteps() {
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
            getInstruction("mashedPotatoes", 5, (step6) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
              getInstruction("mashedPotatoes", 6, (step7) => {
                document.querySelector("#mashedPotatoes").innerHTML += `<li>${step7}</li>`;
              }, (error) => console.log(error))
            }, (error) => console.log(error))
          }, (error) => console.log(error))
        }, (error) => console.log(error))
      }, (error) => console.log(error))
    }, (error) => console.log(error))
  }, (error) => console.log(error))
}

returnRecipeSteps()

// Iteration 2 - using promises
/*
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    obtainInstruction('steak', 1)
      .then( (step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
        obtainInstruction('steak', 2)
          .then( (step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
            obtainInstruction('steak', 3)
              .then( (step3) => {
                document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
                obtainInstruction('steak', 4)
                  .then( (step4) => {
                    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
                    obtainInstruction('steak', 5)
                    .then( (step5) => {
                      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
                      obtainInstruction('steak', 6)
                      .then( (step6) => {
                        document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
                        obtainInstruction('steak', 7)
                        .then( (step7) => {
                          document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
                        })})})})})})})})*/

// Iteration 3 using async/await

async function makeBroccoli() {

  const p0 = await obtainInstruction('broccoli', 0)
  document.querySelector("#broccoli").innerHTML += `<li>${p0}</li>`
  const p1 = await obtainInstruction('broccoli', 1)
  document.querySelector("#broccoli").innerHTML += `<li>${p1}</li>`
  const p2 = await obtainInstruction('broccoli', 2)
  document.querySelector("#broccoli").innerHTML += `<li>${p2}</li>`
  const p3 = await obtainInstruction('broccoli', 3)
  document.querySelector("#broccoli").innerHTML += `<li>${p3}</li>`
  const p4 = await obtainInstruction('broccoli', 4)
  document.querySelector("#broccoli").innerHTML += `<li>${p4}</li>`
  const p5 = await obtainInstruction('broccoli', 5)
  document.querySelector("#broccoli").innerHTML += `<li>${p5}</li>`
  const p6 = await obtainInstruction('broccoli', 6)
  document.querySelector("#broccoli").innerHTML += `<li>${p6}</li>`

}

makeBroccoli()


// Bonus 2 - Promise all
// ...