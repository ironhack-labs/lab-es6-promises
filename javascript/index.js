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
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step2}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step3}</li>`;
                    getInstruction('mashedPotatoes', 4, (step4) => {
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
                }, (error) =>  {console.log(error)});
              },
              (error) => {
                console.log(error);
              }
            );
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
 );
// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
 .then( (step0) =>{
   document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
   const result = steak[0]
   return result
 } )
 .then( (step1) => {
   document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
   const result = steak[1]
   return result
 } )
 .then((step2) => {
   document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
   const result = steak[2]
   return result
 })
 .then((step3) => {
   document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
   const result = steak[3]
   return result
 })
 .then((step4) => {
   document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
   const result = steak[4]
   return result
 })
 .then((step5) => {
   document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
   const result = steak[5]
   return result
 })
 .then((step6) => {
   document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
   const result = steak[6]
   return result
 })
 .then((step7) => {
   document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
   const result = steak[7]
   return result
 })
 .catch(function(err) {
   return err})

// Iteration 3 using async/await
// ...
import axios from 'axios';
async function makeBroccoli() {
  try {
    let response = await axios.get('(https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-3-result.gif'
    );
    console.log('wash broccoli in cold water');
    console.log('trim and cut the stalk in half, then finely slice it');
    console.log('fill a pot with water, add a pinch of salt and bring to the boil',
    )
    console.log('once boiling, carefully lower the broccoli into the water',
    )
    console.log('cook for 3 to 4 minutes, or until tender',
    )
    console.log('drain, then leave to steam dry for a minute',
    )
    console.log('enjoy'
    )


  }

  catch (err) {
    console.log(err);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
// ...