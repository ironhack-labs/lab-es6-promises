// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  console.log(mashPotatoes[i])
}

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
   
  addFood(mashPotatoes[1], '#mashPotatoes')

  addFood(mashPotatoes[2], '#mashPotatoes')

  addFood(mashPotatoes[4], '#mashPotatoes')

  addFood(mashPotatoes[3], '#mashPotatoes')
});

// Iteration 3 using async and await
const newImage1 = document.createElement("img");
image.src = "../images/brusselSprouts.jpg";
image2.src ="../images/mashPotatoes.jpg";
image3.src ="../images/steak.jpg";
document.querySelector('#table').appendChild(image);
document.querySelector('#table').appendChild(image2);
document.querySelector('#table').appendChild(image3);


  async function makeFood(step, id, picname) {
    for(let i=0; i<step.length; i++){
      await addFood(step[i],id,picname[i]);
    }
  };

makeFood(brusselSprouts,"#brusselSprouts","#table");


//Bonus 1




