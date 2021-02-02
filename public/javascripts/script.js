// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
const im1 = document.querySelector("#img1") 
const im2 = document.querySelector("#img2") 
const im3 = document.querySelector("#img3") 



// Iteration 1 using callbacks
  //Sale bien
  addFood(steak[0], '#steak', () => {
    addFood(steak[1], '#steak', () => {
      addFood(steak[2], '#steak', () => {
        addFood(steak[3], '#steak', () => {
          addFood(steak[4], '#steak', () => {
            addFood(steak[5], '#steak', () => {
              addFood(steak[6], '#steak', () => {
                addFood(steak[7], '#steak', () => {
                  im2.innerHTML = `<img src="./public/images/steak.jpg" alt="">`
                });
              });
            });
          });
        });
      });
    });
  });


// Iteration 2 using `.then()` sale bien
addFood(mashPotatoes[0], '#mashPotatoes')
.then(()=>{
  addFood(mashPotatoes[1], '#mashPotatoes')
})
.then(()=>{
  addFood(mashPotatoes[2], '#mashPotatoes')
})
.then(()=>{
  addFood(mashPotatoes[3], '#mashPotatoes')
})
.then(()=>{
  addFood(mashPotatoes[4], '#mashPotatoes')
})
.then(()=>{
  im1.innerHTML = `<img src="./public/images/mashPotatoes.jpg" alt="">`
})





// Iteration 3 using async and await

  async function makeFood(step) {
    for(let i=0;i<brusselSprouts.length;i++){
      await addFood(brusselSprouts[i],"#brusselSprouts")
    }
    im3.innerHTML = `<img src="./public/images/2brusselSprouts.jpg" alt=""></img>`
  }

  makeFood();

