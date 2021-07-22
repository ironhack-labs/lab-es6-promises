// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < steak.length; i++) {
  //addFood(steak[i], '#steak');
 // console.log(mashPotatoes[i])
}

const table = document.getElementById('table')

// Iteration 1 using callbacks
async function makeSteak(){
  addFood(steak[0], '#steak', () => {
  
    addFood(steak[1], '#steak', () => {
  
      addFood(steak[2], '#steak', () => {
  
        addFood(steak[3], '#steak', () => {
  
          addFood(steak[4], '#steak', () => {
  
            addFood(steak[5], '#steak', () => {
  
              addFood(steak[6], '#steak', () => {
                
                addFood(steak[7], '#steak', () => {

                  table.innerHTML += '<img src="./public/images/steak.jpg" alt="steak">'
  
                })
              })
            })
          })
        })      
      })
    })
  });
}




// Iteration 2 using `.then()`
async  function makeMashP(){
  addFood(mashPotatoes[0], '#mashPotatoes').then(() => 

  addFood(mashPotatoes[1], '#mashPotatoes').then(() => 

    addFood(mashPotatoes[2], '#mashPotatoes').then(() => 

      addFood(mashPotatoes[3], '#mashPotatoes').then(() => 

        addFood(mashPotatoes[4], '#mashPotatoes').then(() => 
        
        table.innerHTML += '<img src="./public/images/mashPotatoes.jpg" alt="mashP">'

)))));
}


// Iteration 3 using async/await

  async function makeBrusselS(steps, id) {
    for(let i = 0; i < steps.length; i++){
      await addFood(steps[i], id)
    }
    
    table.innerHTML += '<img src="./public/images/brusselSprouts.jpg" alt="brussels">'
  }
 


  async function dinnerReady(){
    await Promise.all(
      [
        makeSteak(),
        makeMashP(),
        makeBrusselS(brusselSprouts, '#brusselSprouts')
      ]
    )

    const btn = document.createElement('button')
    const btnContent = document.createTextNode('Dinner served!')
    
    btn.appendChild(btnContent)
    document.body.appendChild(btn)

  }

  dinnerReady()