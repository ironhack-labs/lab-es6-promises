// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(mashPotatoes[i], '#mashPotatoes');
// }

// Iteration 1 using callbacks
let p1;

addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {

    addFood(steak[2], '#steak', () => {

      addFood(steak[3], '#steak', () => {

        addFood(steak[4], '#steak', () => {

          addFood(steak[5], '#steak', () => {

            addFood(steak[6], '#steak', () => {

              p1 = addFood(steak[7], '#steak', () => {

                document.querySelector("#table").innerHTML += `<img src="public/images/steak.jpg" alt="img-steak">`;

              });

            });

          });

        });

      });

    });

  });
});



// Iteration 2 using `.then()`
let p2 = addFood(mashPotatoes[0], '#mashPotatoes')
.then(() => addFood(mashPotatoes[1], '#mashPotatoes'))
.then(() => addFood(mashPotatoes[2], '#mashPotatoes'))
.then(() => addFood(mashPotatoes[3], '#mashPotatoes'))
.then(() => addFood(mashPotatoes[4], '#mashPotatoes'))
.then(() => document.querySelector("#table").innerHTML += `<img src="public/images/mashPotatoes.jpg" alt="img-steak">`);

// Iteration 3 using async and await

async function makeFood(steps, id) {
  // your code here…
  await addFood(brusselSprouts[0], '#brusselSprouts');
  await addFood(brusselSprouts[1], '#brusselSprouts');
  await addFood(brusselSprouts[2], '#brusselSprouts');
  await addFood(brusselSprouts[3], '#brusselSprouts');
  await addFood(brusselSprouts[4], '#brusselSprouts');
  await addFood(brusselSprouts[5], '#brusselSprouts');
  await addFood(brusselSprouts[6], '#brusselSprouts');
  await addFood(brusselSprouts[7], '#brusselSprouts');
  const res = await addFood(brusselSprouts[8], '#brusselSprouts');
  if(res) document.querySelector("#table").innerHTML += `<img src="public/images/brusselSprouts.jpg" alt="img-steak">`;
  return res;
}
let p3 = makeFood(brusselSprouts, '#brusselSprouts');

Promise.all([p1, p2, p3]).then(() => {
  let dinner = document.createElement("div");
  dinner.innerText = "Dinner is served";
  document.querySelector("body").appendChild(dinner);
});