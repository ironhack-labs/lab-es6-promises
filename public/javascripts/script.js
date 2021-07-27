// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/*for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}
*/

// Iteration 1 using callbacks
const p1 = new Promise((resolve, reject) => {
  addFood(steak[0], "#steak", () => {
    addFood(steak[1], "#steak", () => {
      addFood(steak[2], "#steak", () => {
        addFood(steak[3], "#steak", () => {
          addFood(steak[4], "#steak", () => {
            addFood(steak[5], "#steak", () => {
              addFood(steak[6], "#steak", () => {
                addFood(steak[7], "#steak", () => {
                  let img = document.createElement("img");
                  img.src = "/public/images/steak.jpg";
                  document.getElementById("table").appendChild(img);
                  console.log("Steak is ready");
                  resolve();
                });
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
const p2 = new Promise((resolve, reject) => {
  addFood(mashPotatoes[0], "#mashPotatoes")
    .then(() => addFood(mashPotatoes[1], "#mashPotatoes"))
    .then(() => addFood(mashPotatoes[2], "#mashPotatoes"))
    .then(() => addFood(mashPotatoes[3], "#mashPotatoes"))
    .then(() => addFood(mashPotatoes[4], "#mashPotatoes"))
    .then(() => {
      let img = document.createElement("img");
      img.src = "public/images/mashPotatoes.jpg";
      document.getElementById("table").appendChild(img);
      console.log("Mash potatoes ready");
      resolve();
    });
});

// Iteration 3 using async/await
const p3 = new Promise((resolve, reject) => {
  async function makeFood() {
    const result0 = await addFood(brusselSprouts[0], "#brusselSprouts");
    const result1 = await addFood(brusselSprouts[1], "#brusselSprouts");
    const result2 = await addFood(brusselSprouts[2], "#brusselSprouts");
    const result3 = await addFood(brusselSprouts[3], "#brusselSprouts");
    const result4 = await addFood(brusselSprouts[4], "#brusselSprouts");
    const result5 = await addFood(brusselSprouts[5], "#brusselSprouts");
    const result6 = await addFood(brusselSprouts[6], "#brusselSprouts");
    const result7 = await addFood(brusselSprouts[7], "#brusselSprouts");
    const result8 = await addFood(brusselSprouts[8], "#brusselSprouts");

    const img = document.createElement("img");
    img.src = "public/images/brusselSprouts.jpg";
    document.getElementById("table").appendChild(img);
    console.log("Brussels are ready");
    resolve();
  }
  makeFood();
});

Promise.all([p1, p2, p3]).then(() => {
  alert("Dinner is served!");
  console.log("Dinner is served");
});
