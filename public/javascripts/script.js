// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }






// FETCH ELEMENTS
const table = document.getElementById("table");


// Iteration 1 using callback hell
addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                //table.innerHTML += `<img src="./public/images/steak.jpg" alt="steak image"/>`;
              });
              table.innerHTML += `<img src="./public/images/steak.jpg" alt="steak image"/>`;
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
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          table.innerHTML = `<img src="./public/images/mashPotatoes.jpg" alt="mash image"/>`;
        })
      })
    })
})
});

          // Tried to loop to make it more readable
        // for (let index = 0; index < mashPotatoes.length; index++)
        // addFood(mashPotatoes[index], '#mashPotatoes').then(() => {
        // });

// Iteration 3 using async and await

  async function makeFood(step, id) {
    
    try {
      for (let index = 0; index < brusselSprouts.length; index++) {
      await addFood(step[index], id);
      }
      // table.innerHTML += `<img src="./public/images/brusselSprouts.jpg" alt="brussels image"/>`; // Kind of works but  not in the right order
    }
    catch (err) {
       console.error(err);
    }
    finally {
        table.innerHTML += `<img src="./public/images/brusselSprouts.jpg" alt="brussels image"/>`;
        document.body.innerHTML += `<button> Dinner is served! </button>`; // since it is the last promise and we want this button when all the promises are done, we can just add this line

        const btn = document.querySelector("button");
         btn.addEventListener("click", () => {
              var audio = new Audio("./public/media/dinnerIsServed.mp3");
              audio.play();
        });
  
      }
  }
  
  makeFood(brusselSprouts,'#brusselSprouts');

 

//// Bonus 2 - Make the dinner served after all promises fulfilled

// MDN:
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// Try 1:

// Promise.all().then((values) => {
 
// })
