// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(mashPotatoes[i], '#mashPotatoes');
// }

// Iteration 1 using callbacks
const promise1 = addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {

    addFood(steak[2], '#steak', () => {

      addFood(steak[3], '#steak', () => {

        addFood(steak[4], '#steak', () => {
          
          addFood(steak[5], '#steak', () => {
            
            addFood(steak[6], '#steak', () => {
              
              addFood(steak[7], '#steak', () => {
                const steak = new Image()
                steak.src = '/public/images/steak.jpg'
                const table = document.querySelector('#table')
                table.appendChild(steak)
                
              })
            })
          })
        })
      })
    })
  })
  
});

// Iteration 2 using `.then()`
const promise2 = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          const mashPotatoes = new Image()
                mashPotatoes.src = '/public/images/mashPotatoes.jpg'
                const table = document.querySelector('#table')
                table.appendChild(mashPotatoes)
        })
      })
    })
  })
});

// Iteration 3 using async and await

const promise3 = async function makeFood(steps, id) {
  for (let i = 0; i < steps.length; i++){
    await addFood(steps[i], id)
  }
  const bSprouts = new Image()
  bSprouts.src = '/public/images/brusselSprouts.jpg'
  const table = document.querySelector('#table')
  table.appendChild(bSprouts)
}
promise3(brusselSprouts, '#brusselSprouts');

Promise.all([promise1, promise2, promise3]).then(() => {
  const steps = document.querySelector('#steps')
  const header = document.createElement('P')
  steps.appendChild(header)
  header.classList.add('button')
})
