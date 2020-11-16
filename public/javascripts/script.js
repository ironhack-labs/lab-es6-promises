// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks

const p1 = addFood(steak[0], '#steak', () => {
            addFood(steak[1], '#steak', () => {
              addFood(steak[2], '#steak', () => {
                addFood(steak[3], '#steak', () => {
                  addFood(steak[4], '#steak', () => {
                    addFood(steak[5], '#steak', () => {
                      addFood(steak[6], '#steak', () => {
                        addFood(steak[7], '#steak', () => {
                          document.querySelector("#table").innerHTML += `<img src="public/images/steak.jpg" alt="">`;
                        });
                      });
                    });
                  });
                });
              });
            });
          });



// Iteration 2 using `.then()`

const p2 = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() =>{
          document.querySelector("#table").innerHTML += `<img src="public/images/mashPotatoes.jpg" alt="">`;
        })
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(step) {
    for (let i = step; i < brusselSprouts.length; i++){
      await addFood(brusselSprouts[i], '#brusselSprouts').then(()=>{
        if (i+1 === brusselSprouts.length){
          document.querySelector("#table").innerHTML += `<img src="public/images/brusselSprouts.jpg" alt="">`;
        }
      })
    }
  }
let p3 = makeFood(0);



//Bonus 

Promise.all([p1,p2,p3]).then(()=>{
  let btn = document.createElement("button")
  btn.innerHTML = "Dinner is served."
  document.body.appendChild(btn)
  let audio = new Audio("public/media/dinnerIsServed.mp3")
  audio.play()
})
