// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code
/* 
// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => //console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => //console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => //console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => //console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => //console.log(error));

 */

// Iteration 1 - using callbacks
//

getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        })
      })
    })
  });
});

// Iteration 2 - using promises


obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    //console.log("me imprimo primero")
    return obtainInstruction('steak', 1)
  }).then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    //console.log("me imprimo segundo")
    return obtainInstruction('steak', 2)
  }).then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    //console.log("me imprimo tercero")
    return obtainInstruction('steak', 4)
  }).then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    //console.log("me imprimo cuarto")
    return obtainInstruction('steak', 5)
  }).then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    //console.log("me imprimo quinto")
    return obtainInstruction('steak', 6)
  }).then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    //console.log("me imprimo sexto")
    return obtainInstruction('steak', 7)
  }).then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");
  }
    )


    //

//a la promesa es a la que le puedes meter el then. Por eso mismo cuando terminas un then, le metes el return para llamar a la siguiente promesa.
//el .then de por si no bota un promise per se. 
  
// Iteration 3 using async/await

async function makeBroccoli() {
  let value0 = await obtainInstruction('broccoli', 0);
  document.querySelector("#broccoli").innerHTML += `<li>${value0}</li>`
  let value1 = await obtainInstruction('broccoli', 1);
  document.querySelector("#broccoli").innerHTML += `<li>${value1}</li>`
  let value2 = await obtainInstruction('broccoli', 2);
  document.querySelector("#broccoli").innerHTML += `<li>${value2}</li>`
  let value3 = await obtainInstruction('broccoli', 3);
  document.querySelector("#broccoli").innerHTML += `<li>${value3}</li>`
  let value4 = await obtainInstruction('broccoli', 4);
  document.querySelector("#broccoli").innerHTML += `<li>${value4}</li>`
  let value5 = await obtainInstruction('broccoli', 5);
  document.querySelector("#broccoli").innerHTML += `<li>${value5}</li>`
  let value6 = await obtainInstruction('broccoli', 6);
  document.querySelector("#broccoli").innerHTML += `<li>${value6}</li>`;
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli()


// Bonus 2 - Promise all





/* 
Using Promise.all display the cooking steps to make Brussels Sprouts in the correct order.

After the last step, you should display an additional <li> with the text: Brussels sprouts are ready!.

The final result should look like this - with all the cooking steps displaying in the correct order:
 */





//a promise is something that something resolved. Either it gives you the result or prints an error.
//when we resolve something, we continue to the then section.
