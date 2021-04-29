// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// // 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
  // addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

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
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes')
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(steps, id) {
  
  
  const forLoop = function(steps, id){
    steps.forEach((element, index) => {
      addFood(steps[index], id)
    });
  }
  

  const sectionImg = document.querySelector('#table')
  const img = document.createElement('img')
  img.src = './public/images/brusselSprouts.jpg'

  
  const addImg = function addImg(){
    sectionImg.appendChild(img)
  };


  forLoop(steps, id);
  Const DrawImg = await addImg();

}

makeFood(brusselSprouts, '#brusselSprouts');
