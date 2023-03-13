// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

  
  /*getInstruction("mashedPotatoes", 0, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", , (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));

  getInstruction("mashedPotatoes",0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
*/

// Iteration 1 - using callbacks
// ...
function boilWater(callBack){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${"boil water"}</li>`;
  callBack()
}
function openBag (callBack){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${"tear open bag of of instant potato mix and pour into bowl"}</li>`;
  callBack()

}

function pourWater (callBack){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${"pour in water"}</li>`;
  callBack()
}

function mix(callBack){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${"mix"}</li>`;
  callBack()
}

function enjoy(callBack){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${"enjoy"}</li>`;
  callBack()
}

function ready(callBack){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${"mashed potatoes are ready"}</li>`;
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden") 
}


boilWater(function (){ 
  openBag(function (){
    pourWater(function (){
      mix(function (){
        enjoy(function (){
          ready()
        })          
        })
      })
    })
  })
  

// Iteration 2 - using promises
// ...

  obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${"season steak generously with salt, pepper and garlic powder"}</li>`
    return obtainInstruction("steak", 1)
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${"put in ziplock bag"}</li>`
    return obtainInstruction("steak", 2)
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${"cook in sous vide at 120 F for 1-2 hours"}</li>`
    return obtainInstruction("steak", 3)
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${"remove from bag and pat dry"}</li>`
    return obtainInstruction("steak", 4)
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${"heat pan with grapeseed oil and a quarter stick of butter"}</li>`
    return obtainInstruction("steak", 5)
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${"cook steak for 30-60 seconds per side using a spoon to baste with butter"}</li>`
    return obtainInstruction("steak", 6)
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${"rest for 10 minutes"}</li>`
    return obtainInstruction("steak", 7)
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${"enjoy"}</li>`
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${"steak is ready"}</li>`
  }
  )
  .then ((step8) => {
    document.querySelector("#steakImg").removeAttribute("hidden");
  })



// Iteration 3 using async/await
// ...
async function makeBroccoli(){

  try {
    const step0 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${"wash broccoli in cold water"}</li>`

    const step1 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${'trim and cut the stalk in half, then finely slice it'}</li>`

    const step2 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${'fill a pot with water, add a pinch of salt and bring to the boil'}</li>`

    const step3 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${'once boiling, carefully lower the broccoli into the water'}</li>`
    
    const step4 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${'cook for 3 to 4 minutes, or until tender'}</li>`

    const step5 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${'drain, then leave to steam dry for a minute'}</li>`

    const step6 = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${"enjoy"}</li>`

    const step7 = "Broccoli is ready!";
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }
  catch (error){}
  
}

makeBroccoli()

// Bonus 2 - Promise all
// ...

const step1 = obtainInstruction("brusselsSprouts", 0);
const step2 = obtainInstruction("brusselsSprouts", 1);
const step3 = obtainInstruction("brusselsSprouts", 2);
const step4 = obtainInstruction("brusselsSprouts", 3);
const step5 = obtainInstruction("brusselsSprouts", 4);
const step6 = obtainInstruction("brusselsSprouts", 5);
const step7 = obtainInstruction("brusselsSprouts", 6);
const step8 = obtainInstruction("brusselsSprouts", 7);

Promise.all([ step1,step2,step3,step4,step5,step6,step7,step8])
.then((stepsArray) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepsArray[0]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepsArray[1]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepsArray[2]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepsArray[3]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepsArray[4]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepsArray[5]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepsArray[6]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepsArray[7]}</li>`;


  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussles Sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
})
.catch ((error)=> {
})
