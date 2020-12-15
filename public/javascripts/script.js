// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
const promise1 = addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                const steakImg = document.createElement('img');
                steakImg.src = './public/images/steak.jpg';
                document.getElementById('table').appendChild(steakImg);
              });
            });
          });
        });
      });
    });
  });
});



// Iteration 2 using `.then()`
const promise2 = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  return addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    return addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      return addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        return addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          const potatoImg = document.createElement('img');
          potatoImg.src = './public/images/mashPotatoes.jpg';
          document.getElementById('table').appendChild(potatoImg);
        });
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(step) {
    for (let i = 0; i < step.length; i++){
      await addFood(step[i], '#brusselSprouts')
    }
    const sproutsImg = document.createElement('img');
    sproutsImg.src = './public/images/brusselSprouts.jpg';
    document.getElementById('table').appendChild(sproutsImg);
  }
  
  const promise3 = makeFood(brusselSprouts);

  Promise.all([promise1, promise2, promise3]).then(() => {
    const timeToEat = document.querySelector('body');
    timeToEat.innerHTML += '<button>Dinner is served!!</button>';

    let chime = new Audio('/public/media/dinnerIsServed.mp3');
    chime.play();
  });



