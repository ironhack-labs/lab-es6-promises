// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code

// for (let i = 0; i < mashPotatoes.length; i++) {
//  addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }


// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  
   addFood(steak[1], '#steak', () => {

    addFood(steak[2], '#steak', () => {

      addFood(steak[3], '#steak', () => {

        addFood(steak[4], '#steak', () => {

          addFood(steak[5], '#steak', () => {

            addFood(steak[6], '#steak', () => {

              addFood(steak[7], '#steak', () => {

               const steakImage = addImage('steak');

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
  // ... your code here

  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
  
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
    
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {

         const mashImage = addImage('mashPotatoes')
    
          })
        
        })
  
      })

    })
});

// Iteration 3 using async and await

  async function makeFood(step) {
    // ... your code here
    await addFood(step[0],'#brusselSprouts')
    await addFood(step[1],'#brusselSprouts')
    await addFood(step[2],'#brusselSprouts') 
    await addFood(step[3],'#brusselSprouts') 
    await addFood(step[4],'#brusselSprouts') 
    await addFood(step[5],'#brusselSprouts') 
    await addFood(step[6],'#brusselSprouts') 
    await addFood(step[7],'#brusselSprouts') 
    await addFood(step[8],'#brusselSprouts') 

    const brusselImage = addImage('brusselSprouts')
    return brusselImage;
  }
  makeFood(brusselSprouts);


  //bonus 1

  function addImage(food){

    console.log(food)
    document.querySelector('#table').innerHTML += `<img src = "/Users/vitalb2b/lab-es6-promises/public/images/${food}.jpg">`;

  }

  //bonus 2

  Promise.all([steakImage,mashImage, makeFood(brusselImage)]).then(() => {

    alert('Dinner is served!')
  })
