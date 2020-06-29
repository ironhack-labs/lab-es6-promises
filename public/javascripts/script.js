// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < steak.length; i++) {
//   addFood(steak[i], '#steak');
// }

const images = document.getElementById('table'); // for bonus 1

// Iteration 1 using callbacks
/* 
addFood(steak[0], '#steak', () => {
   addFood(steak[1], '#steak', () => {
      addFood(steak[2], '#steak', () => {
         addFood(steak[3], '#steak', () => {
            addFood(steak[4], '#steak', () => {
               addFood(steak[5], '#steak', () => {
                  addFood(steak[6], '#steak', () => {
                     addFood(steak[7], '#steak', () => {
                        images.innerHTML += `<img src="./public/images/steak.jpg"  alt="brussel sprout img"/>`; // bonus 1
                     });
                  });
               });
            });
         });
      });
   });
});
*/

// Iteration 2 using `.then()`
/* 
addFood(mashPotatoes[0], '#mashPotatoes')
   .then(() => addFood(mashPotatoes[1], '#mashPotatoes'))
   .then(() => addFood(mashPotatoes[2], '#mashPotatoes'))
   .then(() => addFood(mashPotatoes[3], '#mashPotatoes'))
   .then(() => addFood(mashPotatoes[4], '#mashPotatoes'))
   .then(() => {
      images.innerHTML += `<img src="./public/images/mashPotatoes.jpg"  alt="brussel sprout img"/>`;
   }); // bonus 1
 */

// Iteration 3 using async and await
/* 
async function makeFood() {
   for (eachStep in brusselSprouts) {
      await addFood(brusselSprouts[eachStep], '#brusselSprouts');
   }
   images.innerHTML += `<img src="./public/images/brusselSprouts.jpg"  alt="brussel sprout img"/>`;
} 
// makeFood();
*/

// BONUS 2
// Using promise.all when all dinner items (Steak, Mash Potatoes, and Brussels Sprouts) are all done and added to the table, alert Dinner is served!

const addSteak = Promise.resolve(
   addFood(steak[0], '#steak', () => {
      addFood(steak[1], '#steak', () => {
         addFood(steak[2], '#steak', () => {
            addFood(steak[3], '#steak', () => {
               addFood(steak[4], '#steak', () => {
                  addFood(steak[5], '#steak', () => {
                     addFood(steak[6], '#steak', () => {
                        addFood(steak[7], '#steak', () => {
                           images.innerHTML += `<img src="./public/images/steak.jpg"  alt="brussel sprout img"/>`; // bonus 1
                        });
                     });
                  });
               });
            });
         });
      });
   })
);

const addPotatoes = Promise.resolve(
   addFood(mashPotatoes[0], '#mashPotatoes')
      .then(() => addFood(mashPotatoes[1], '#mashPotatoes'))
      .then(() => addFood(mashPotatoes[2], '#mashPotatoes'))
      .then(() => addFood(mashPotatoes[3], '#mashPotatoes'))
      .then(() => addFood(mashPotatoes[4], '#mashPotatoes'))
      .then(() => {
         images.innerHTML += `<img src="./public/images/mashPotatoes.jpg"  alt="brussel sprout img"/>`;
      })
);

async function addBrussel() {
   for (eachStep in brusselSprouts) {
      await addFood(brusselSprouts[eachStep], '#brusselSprouts');
   }
   images.innerHTML += `<img src="./public/images/brusselSprouts.jpg"  alt="brussel sprout img"/>`;
}

Promise.all([addPotatoes, addSteak, addBrussel()])
   .then(() => {
      window.alert('Dinner is served!');
   })
   .catch((err) => {
      console.error('error : ', err);
   });
