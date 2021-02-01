// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/*
for (let i = 0; i < mashPotatoes.length; i++) {
  addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}
*/

let mash = document.createElement('img');
mash.src = '../images/mashPotatoes.jpg';



// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(()=> {
    addFood(mashPotatoes[2], '#mashPotatoes').then(()=> {
      addFood(mashPotatoes[3], '#mashPotatoes').then(()=> {
        addFood(mashPotatoes[4], '#mashPotatoes').then(()=> {
          addFood(mashPotatoes[5], '#mashPotatoes').then(()=> {
          })
        })
      })
    })
  })
}).then(function(){
  document.querySelector('#table').appendChild(mash)
});


// Iteration 3 using async and await

const eachStep = [addFood(brusselSprouts[1], '#brusselSprouts'),addFood(brusselSprouts[2], '#brusselSprouts'),addFood(brusselSprouts[3], '#brusselSprouts'),addFood(brusselSprouts[4], '#brusselSprouts'),addFood(brusselSprouts[5], '#brusselSprouts'),addFood(brusselSprouts[6], '#brusselSprouts'),addFood(brusselSprouts[7], '#brusselSprouts'),addFood(brusselSprouts[8], '#brusselSprouts')]

  async function makeFood(eachStep) {
    try {

    const resultArray = await Promise.all(eachStep[1],eachStep[2],eachStep[3],eachStep[4],eachStep[5],eachStep[6],eachStep[7],eachStep[8]); 

    console.log(resultArray);

    } catch(error){
      console.log(error)
    }
    
  }
  
  makeFood(eachStep);



