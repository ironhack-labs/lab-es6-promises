// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 /* getInstruction("mashedPotatoes", 0, (step1) => {
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
  }, (error) => console.log(error));*/


//-------------------------------------------------------------------------------------------------------------------------

/* In order to run Bonus Iteration 1, I have commented out 
Iterations 1, 2 and 3 and called the 'makeFood' function below. */

//-------------------------------------------------------------------------------------------------------------------------

function addToRecipe(food, step) {

  document.querySelector(`#${food}`).innerHTML += `<li>${step}</li>`

}

// Iteration 1 - using callbacks--------------------------------------------------------------------------------------------

/*
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  getInstruction("mashedPotatoes",1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

    getInstruction("mashedPotatoes",2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

      getInstruction("mashedPotatoes",3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

        getInstruction("mashedPotatoes",4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          
          addToRecipe('mashedPotatoes','Mashed potatoes are ready!')

        }, (err) => console.log(err));
      }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));
}, (err) => console.log(err));

// Iteration 2 - using promises---------------------------------------------------------------------------------------------

obtainInstruction('steak',0)

    .then((step0) => {

      document.querySelector("#steak").innerHTML += `<li>${step0}</li>`

      return obtainInstruction('steak',1) 

    })
    .then((step1) => {

      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
      
      return obtainInstruction('steak',2) 

    })
    .then((step2) => {

      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
      
      return obtainInstruction('steak',3) 

    })
    .then((step3) => {

      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
      
      return obtainInstruction('steak',4) 

    })
    .then((step4) => {

      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
      
      return obtainInstruction('steak',5) 

    })
    .then((step5) => {

      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
      
      return obtainInstruction('steak',6) 

    })
    .then((step6) => {

      document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
      
      return obtainInstruction('steak',7) 

    })  
    .then((step7) => {

      document.querySelector("#steak").innerHTML += `<li>${step7}</li>`

    })
    .then(()=>{

      addToRecipe(`steak`, `Steak is ready!`)

    })  

    .catch((err) => console.log(err));

// Iteration 3 using async/await------------------------------------------------------------------------------------------

async function makeBroccoli() {

  for(let i=0; i<broccoli.length;i++){
    
    addToRecipe('broccoli', await obtainInstruction("broccoli",i));
   
  }
    addToRecipe('broccoli', 'Broccoli is ready!')
}

makeBroccoli(); 

*/
// Bonus 1----------------------------------------------------------------------------------------------------------------

async function makeFood(foodArr, food ) {

  for(let i=0; i<foodArr.length;i++){
    
    addToRecipe(`${food}`, await obtainInstruction(`${food}`,i));
   
  }
  if(food==='mashedPotatoes'){
    addToRecipe('mashedPotatoes','Mashed potatoes are ready!')
  }
  else if(food==='steak'){
    addToRecipe(`steak`, `Steak is ready!`)
  }
  else if(food==='broccoli'){
    addToRecipe('broccoli', 'Broccoli is ready!')
  }

  document.getElementById(`${food}Img`).removeAttribute('hidden')
  
}

//---------------------------------------------------------------------------------------------------------------------------

/* In order to display the images of the different foods after all their cooking steps are listed, I have commented out 
Iterations 1, 2 and 3 above and called the 'makeFood' function below. */

//---------------------------------------------------------------------------------------------------------------------------

makeFood(mashedPotatoes,'mashedPotatoes')
makeFood(steak,'steak')
//makeFood(brusselsSprouts,'brusselsSprouts') // Commented out for Bonus Iteration 2.
makeFood(broccoli,'broccoli')


// Bonus 2 - Promise all-----------------------------------------------------------------------------------------------------

let brusselsSproutsArr = []

for(let i = 0;i<brusselsSprouts.length;i++){
  brusselsSproutsArr.push(obtainInstruction('brusselsSprouts',i))
}

Promise.all(brusselsSproutsArr)
  .then((values)=>{
 
  for(let item of values){
    addToRecipe('brusselsSprouts',item)
    
  }
  document.querySelector(`#brusselsSprouts`).innerHTML += `<li>Brussels sprouts are ready!</li>`
  document.getElementById(`brusselsSproutsImg`).removeAttribute('hidden')
})

//---------------------------------------------------------------------------------------------------------------------------






