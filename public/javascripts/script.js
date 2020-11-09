// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i]);
// }

// Iteration 1 using callbacks
addFood(steak[0], "#steak", () => {
  // ... your code here
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                let img = document.createElement("img");
                img.src = "public/images/steak.jpg";
                document.querySelector("#table").appendChild(img);
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  // ... your code here
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          let img = document.createElement("img");
          img.src = "public/images/mashPotatoes.jpg";
          document.querySelector("#table").appendChild(img);
        });
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(steps) {
  // ... your code here
  // console.log("steps", steps);

  for (let step of steps) {
    await addFood(step, "#brusselSprouts");
  }
  // await addFood(brusselSprouts[0], "#brusselSprouts");
  // await addFood(brusselSprouts[1], "#brusselSprouts");
  // await addFood(brusselSprouts[2], "#brusselSprouts");
  // await addFood(brusselSprouts[3], "#brusselSprouts");
  // await addFood(brusselSprouts[4], "#brusselSprouts");
  // await addFood(brusselSprouts[5], "#brusselSprouts");
  // await addFood(brusselSprouts[6], "#brusselSprouts");
  // await addFood(brusselSprouts[7], "#brusselSprouts");
  // await addFood(brusselSprouts[8], "#brusselSprouts");
  let img = document.createElement("img");
  img.src = "public/images/brusselSprouts.jpg";
  document.querySelector("#table").appendChild(img);
}
makeFood(brusselSprouts);

//another solution:

// const addImage = img => document.querySelector('#table').innerHTML +=
//   `<img src="public/images/${img}.jpg" />`

// async function makeFood(steps, id) {
//   for (let step of steps) {
//     await addFood(step, id)
//   }
//   addImage(id.slice(1))
// }
// Promise.all([
//   makeFood(steak, '#steak'),
//   makeFood(brusselSprouts, '#brusselSprouts'),
//   makeFood(mashPotatoes, '#mashPotatoes')
// ]).then(() => {
//   document.body.innerHTML += `
//   <button onclick="new Audio('public/media/dinnerIsServed.mp3').play()">
//   Dinner is served
//   </button>
//   `
// })
