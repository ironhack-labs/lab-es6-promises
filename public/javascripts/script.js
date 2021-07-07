// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}
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

              });
            });
          });
        });
      });
    });
  });
  let table = document.getElementById("table")
          let img = document.createElement("img");
          img.src = "./public/images/steak.jpg"
          table.appendChild(img)
});

//teste
addFood(mashPotatoes[0], '#mashPotatoes', () => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes', () => {
    addFood(mashPotatoes[2], '#mashPotatoes', () => {
      addFood(mashPotatoes[3], '#mashPotatoes', () => {
        addFood(mashPotatoes[4], '#mashPotatoes', () => {
          addFood(mashPotatoes[5], '#mashPotatoes', () => {
          });
        });
      });
    });
  });
  let table = document.getElementById("table")
  let img = document.createElement("img");
  img.src = "./public/images/mashPotatoes.jpg"
  table.appendChild(img)
});

addFood(brusselSprouts[0], '#brusselSprouts', () => {
  // ... your code here
  addFood(brusselSprouts[1], '#brusselSprouts', () => {
    addFood(brusselSprouts[2], '#brusselSprouts', () => {
      addFood(brusselSprouts[3], '#brusselSprouts', () => {
        addFood(brusselSprouts[4], '#brusselSproutsk', () => {
          addFood(brusselSprouts[5], '#brusselSproutsk', () => {
            addFood(brusselSprouts[6], '#brusselSprouts', () => {
              addFood(brusselSprouts[7], '#brusselSprouts', () => {
                addFood(brusselSprouts[8], '#brusselSprouts', () => {
                });
              });
            });
          });
        });
      });
    });
  });
  let table = document.getElementById("table")
          let img = document.createElement("img");
          img.src = "./public/images/brusselSprouts.jpg"
          table.appendChild(img)
});


//teste

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes')
  addFood(mashPotatoes[2], 'mashpotatoes').then(() => {
    addFood(mashPotatoes[2], 'mashpotatoes').then(() => {
      addFood(mashPotatoes[3], 'mashpotatoes').then(() => {
        addfood(mashPotatoes[4], 'mashpotatoes').then(() => {
          document.querySelector('#table').innerHTML += '<img src="public/images/mashpotatoes.jpg" alt=""/>';
        });
      });
    });
  });

});

// Iteration 3 using async/await

async function makeFood(step) {
  for (let i = 0; i < step.length; i++) {
    await addFood(step[i], 'brusselSprouts');
  }
  // ... your code here

  await addFood(step[0], '#brusselSprouts');
  await addFood(step[1], '#brusselSprouts');
  await addFood(step[2], '#brusselSprouts');
  await addFood(step[3], '#brusselSprouts');
  await addFood(step[4], '#brusselSprouts');
  await addFood(step[5], '#brusselSprouts');
  await addFood(step[6], '#brusselSprouts');
  await addFood(step[7], '#brusselSprouts');
  await addFood(step[8], '#brusselSprouts');


}
makeFood(eachStep);

document.querySelector('#table').innerHTML += '<img src="public/images/brusselSprouts.jpg" alt="" />';


makeFood(brusselSprouts);
