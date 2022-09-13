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
// ...


/*
function getInstruction(step, callback, errorCallback) {
  console.log(mashedPotatoes[step])
  document.querySelector("#mashedPotatoes").innerHTML = mashedPotatoes[step];
  if (!mashedPotatoes[step]) {
    errorCallback("Instructions not found.");
  }  else callback();
};
*/







getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // ... Your code here
  
  getInstruction('mashedPotatoes', 1, (step1)=> {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    
    getInstruction('mashedPotatoes', 2, (step2)=> {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      
      getInstruction('mashedPotatoes', 3, (step3)=> {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        
        getInstruction('mashedPotatoes', 4, (step4)=> {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          

          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`

          

          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
    // ...
});


/*
getInstruction(0, ()=> {
  getInstruction(1, ()=> {
    getInstruction(2, ()=> {
      getInstruction(3, ()=> {
        getInstruction(4, ()=> {

          console.log("Mashed potatoes are ready!")

          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));

*/

// Iteration 2 - using promises
// ...


obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    //  ... Your code here
     return obtainInstruction('steak', 1)
  })
  // ... Your code here
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 2)
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    //  ... Your code here
     return obtainInstruction('steak', 3)
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    //  ... Your code here
     return obtainInstruction('steak', 4)
  })

  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 5)
  })

  .then( () => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
  })







// Iteration 3 using async/await
// ...





async function makeBroccoli() {
  // ... Your code here
  try {
    const broc0 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${broc0}</li>`;
    const broc1 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${broc1}</li>`;

    const broc2 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${broc2}</li>`;

    const broc3 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${broc3}</li>`;

    const broc4 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${broc4}</li>`;

    const broc5 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${broc5}</li>`;

    const broc6 = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${broc6}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    
    

    console.log('done');
    
  } catch (error) {
    
  }
}

makeBroccoli()


// Bonus 2 - Promise all
// ...

Promise.all( [p1, p2, p3] )
  .then((values) => console.log("values", values));