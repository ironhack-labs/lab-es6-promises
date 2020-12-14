// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5],'#steak', () => {
            addFood(steak[6], '#steak', () =>{});
            table.innerHTML += `<img src="./public/images/steak.jpg">`;
          })
        })
      })
    })
  })
});


// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes')
  .then(() => addFood(mashPotatoes[2], '#mashPotatoes'))
  .then(() => addFood(mashPotatoes[3], '#mashPotatoes'))
  .then(() => addFood(mashPotatoes[4], '#mashPotatoes'))
  .then(() => document.getElementById('table').innerHTML);
  table.innerHTML += `<img src="./public/images/mashPotatoes.jpg">`;
});


// Iteration 3 using async and await

  async function makeFood(step, id) {
    // ... your code here
   try {
     for (let i = 0; i < brusselSprouts.length; i++) {
       await addFood(step[i], id);
     }
   } catch (err) {
     console.log(err);
   } finally {
     table.innerHTML += `<img src="./public/images/brusselSprouts.jpg">`;
     document.body.innerHTML += `<button> Dinner is served! </button>`;
     btn = document.querySelector("button");
     btn.addEventListener("click", () => {
       let audio = new Audio("./public/media/dinnerIsServed.mp3");
       audio.play();
     });
    }
    
     makeFood(eachStep);
   }
  
  makeFood(brusselSprouts, "#brusselSprouts");