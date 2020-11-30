// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}
let audio = new Audio("../public/media/dinnerIsServed.mp3");

// Iteration 1 using callbacks
const it1 = addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                let image = document.createElement('img');
                image.src = "./public/images/steak.jpg"
                document.getElementById('table').appendChild(image);
              });
            });
          });
        });
      });
    });
  });
});



// Iteration 2 using `.then()`

const it2 = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes')
  addFood(mashPotatoes[2], '#mashPotatoes')
  addFood(mashPotatoes[3], '#mashPotatoes')
  addFood(mashPotatoes[4], '#mashPotatoes')
  let image = document.createElement('img');
    image.src = "./public/images/mashPotatoes.jpg";
    document.getElementById('table').appendChild(image);
});

// Iteration 3 using async and await

  async function makeFood(step) {
    for (let i=0; i < step.length; i++){
      await addFood(step[i], '#brusselSprouts');
    }
    let image = document.createElement('img');
    image.src = "./public/images/brusselSprouts.jpg";
    document.getElementById('table').appendChild(image);
  }
  //makeFood(brusselSprouts);

  Promise.all([it1, it2, makeFood(brusselSprouts)]).then(() => {
  let end = document.querySelector('body');
  end.innerHTML += `<button>Dinner is served!</button>`;
  audio.play();
  });
//ou en forEach (mais ça le fait dans le désordre)
// async function makeFood(stepsList, id) {
//     stepsList.forEach(async function(step) {
//       await addFood(step, id)
//     })
// }
// makeFood(brusselSprouts, '#brusselSprouts');


