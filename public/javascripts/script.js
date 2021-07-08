// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
addFood(steak[0], '#steak', result => {  
  addFood(steak[1], '#steak', result => {
    addFood(steak[2], '#steak', result => {
      addFood(steak[3], '#steak', result => {
        addFood(steak[4], '#steak', result => {
          addFood(steak[5], '#steak', result => {
            addFood(steak[6], '#steak', result => {
              addFood(steak[7], '#steak', result => {
                let steakImg = document.createElement('img');
                steakImg.src = "./public/images/steak.jpg"
                let src = document.getElementById("table");
                src.appendChild(steakImg);
              })
            })
          })
        })
      })
    })
  })
});

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then((result) => {
  addFood(mashPotatoes[1], '#mashPotatoes').then((result) => {
    addFood(mashPotatoes[2], '#mashPotatoes').then((result) => {
      addFood(mashPotatoes[3], '#mashPotatoes').then((result) => {
        addFood(mashPotatoes[4], '#mashPotatoes').then((result) => {
          let mashPotatoesImg = document.createElement('img');
          mashPotatoesImg.src = "./public/images/mashPotatoes.jpg"
          let src = document.getElementById("table");
          src.appendChild(mashPotatoesImg);
        });
      });
    });
  });
});

// Iteration 3 using async/await
async function makeFood(step) {
    let result 
    for (let i = 0; i < step.length; i++) {
      result = await addFood(step[i], '#brusselSprouts')  
    }
    let brusselSproutsImg = document.createElement('img');
    brusselSproutsImg.src = "./public/images/brusselSprouts.jpg"
    let src = document.getElementById("table");
    src.appendChild(brusselSproutsImg);
  }
makeFood(brusselSprouts);
