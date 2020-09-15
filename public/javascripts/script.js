// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i]);
// }

let foodPictures = document.getElementById("table");
let body = document.querySelector("body");
// Iteration 1 using callbacks

const steakPromise = addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                let steakPic = document.createElement("img");
                steakPic.src = "../../public/images/steak.jpg";
                foodPictures.appendChild(steakPic);
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
const mashPromise = addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          let mashPic = document.createElement("img");
          mashPic.src = "../../public/images/mashPotatoes.jpg";
          foodPictures.appendChild(mashPic);
        });
      });
    });
  });
});

// Iteration 3 using async and await
async function makeFood(steps) {
  for (let i = 0; i < brusselSprouts.length; i++) {
    const steps = await addFood(
      brusselSprouts[i],
      "#brusselSprouts"
    );
  }
  
  let sproutsPic = document.createElement("img");
  sproutsPic.src = "../../public/images/brusselSprouts.jpg";
  foodPictures.appendChild(sproutsPic);
}
const sproutsPromise  = makeFood(brusselSprouts);


Promise.all([steakPromise, mashPromise, sproutsPromise]).then(() => {
  const alertBtn = document.createElement("button");
  alertBtn.innerHTML = "Dinner is served";
  steps.appendChild(alertBtn);
});