// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < steak.length; i++) {
//   addFood(steak[i], '#steak');
// }

// Iteration 1 using callbacks
let p1 = addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                document.querySelector("#table").innerHTML +=
                  '<img alt="steak" src="./public/images/steak.jpg "/>';
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
let p2 = addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          document.querySelector("#table").innerHTML +=
            '<img alt="mashedPotato" src="./public/images/mashPotatoes.jpg "/>';
        });
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood() {
  for (eachStep in brusselSprouts) {
    await addFood(brusselSprouts[eachStep], "#brusselSprouts");
  }
  document.querySelector("#table").innerHTML +=
    '<img alt="mashedPotato" src="./public/images/brusselSprouts.jpg "/>';
}
let p3 = makeFood();

setInterval(
  Promise.all([p1, p2, p3]).then(
    () => (document.querySelector("#sec2").innerHTML += "<p>Dinner served</p>")
  ),
  10000
);
