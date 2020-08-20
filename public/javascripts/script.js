// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
function makeSteak(){
  addFood(steak[0], '#steak', () => {
    addFood(steak[1], '#steak', () => {
      addFood(steak[2], '#steak', () => {
        addFood(steak[3], '#steak', () => {
          addFood(steak[4], '#steak', () => {
            addFood(steak[5], '#steak', () => {
              addFood(steak[6], '#steak', () => {
                addFood(steak[7], '#steak', () => {
                  addImg(steak)
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
function makePotatoes(){
  addFood(mashPotatoes[0], '#mashPotatoes').then(res => {
    addFood(mashPotatoes[1], '#mashPotatoes').then(res => {
      addFood(mashPotatoes[2], '#mashPotatoes').then(res => {
        addFood(mashPotatoes[3], '#mashPotatoes').then(res => {
          addFood(mashPotatoes[4], '#mashPotatoes').then(res => {
            addImg(mashPotatoes)
          })
        })
      })
    })
  });

}


// Iteration 3 using async and await

  async function makeFood() {
    try {
      for(let i =0; i < brusselSprouts.length; i++){
        let step = brusselSprouts[i]
        await addFood(step, '#brusselSprouts')
      }
      await addImg(brusselSprouts)
    } catch(error){
      console.log(error)
    } 
  }
  

//part bonus 1
 function addImg(dish) {
  const img = document.createElement("img")

  switch(dish){
    case steak: 
      img.src = '/public/images/steak.jpg'
      break;
    case mashPotatoes:
      img.src = '/public/images/mashPotatoes.jpg'
      break;
    case brusselSprouts:
      img.src = '/public/images/brusselSprouts.jpg'

  }
  document.querySelector('#table').appendChild(img)
 }

 //bonus 2
 const button = document.createElement("button")
 button.innerHTML = 'Dinner is served!'
 Promise.all([makeSteak(), makePotatoes(), makeFood()]).then((res => {
   document.querySelector('body').appendChild(button)
 })) 

