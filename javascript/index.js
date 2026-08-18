// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
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
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

/*
 
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
// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)

    //  ... Your code here
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
    // ... Your code here
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
    const imageSteak = document.querySelector('#steakImg')
    imageSteak.removeAttribute('hidden')
  })
// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// ...
const makeBroccoli = async () =>  {
  try{
    const resultat = await obtainInstruction('broccoli', 0);
        document.querySelector("#broccoli").innerHTML += `<li>${resultat}</li>`

    const resultat1 = await obtainInstruction('broccoli', 1);
        document.querySelector("#broccoli").innerHTML += `<li>${resultat1}</li>`

        const resultat2 = await obtainInstruction('broccoli', 2);
        document.querySelector("#broccoli").innerHTML += `<li>${resultat2}</li>`

        const resultat3 = await obtainInstruction('broccoli', 3);
        document.querySelector("#broccoli").innerHTML += `<li>${resultat3}</li>`

        const resultat4 = await obtainInstruction('broccoli', 4);
        document.querySelector("#broccoli").innerHTML += `<li>${resultat4}</li>`

        const resultat5 = await obtainInstruction('broccoli', 5);
        document.querySelector("#broccoli").innerHTML += `<li>${resultat5}</li>`

        const resultat6 = await obtainInstruction('broccoli', 6);
        document.querySelector("#broccoli").innerHTML += `<li>${resultat6}</li>`
        document.querySelector("#broccoliImg").removeAttribute("hidden")
        document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
        
  }catch(erro){
    console.log(erro)
  }
}
makeBroccoli()



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
.then((values) => {
    values.forEach((element)=> {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`
    })
      document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;

     document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
     

          

})
  .catch((error) => console.log(error));
// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// 'wash brussels sprouts',
  'cut off base and chop in half',
  'toss in bowl with olive oil, balsamic vinegar and salt',
  'preheat oven to 500 F',
  'coat baking sheet with olive oil',
  'roast in the oven for 20 minutes',
  'place back in bowl and add salt and pepper',
  'enjoy'