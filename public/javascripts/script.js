// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  // console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
const steakImg = "<img src='./public/images/steak.jpg'>"

addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                document.getElementById('table').innerHTML += steakImg;
              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
const mashPotImg = "<img src='./public/images/mashPotatoes.jpg'>"

addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          document.getElementById('table').innerHTML += mashPotImg;
        });
      });
    });
  });
});

// Iteration 3 using async and await

  let brusselSproutsImg = "<img src='./public/images/brusselSprouts.jpg'></img>"
  let eachStep = 0;
  addBruImg = () => {
    document.getElementById('table').innerHTML += brusselSproutsImg;
  };

  async function makeFood(step) {
    for (let i=0; i<8 ;i++){
      await addFood(brusselSprouts[i], '#brusselSprouts')
    }
    await addBruImg();
  }

  makeFood(eachStep);

  Promise.all([steak, mashPotatoes, brusselSprouts]).then((resolve) => {
    alert("done");
  })