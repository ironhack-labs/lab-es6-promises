// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks

addFood(steak[0], "#steak", (callback) => {
  // ... your code here
  addFood(steak[1], "#steak", (callback) => {
    addFood(steak[2], "#steak", (callback) => {
      addFood(steak[3], "#steak", (callback) => {
        addFood(steak[4], "#steak", (callback) => {
          addFood(steak[5], "#steak", (callback) => {
            addFood(steak[6], "#steak", (callback) => {
              addFood(steak[7], "#steak", (callback) => {
                const img = document.createElement("img");
                img.src = "/public/images/steak.jpg";
                document.getElementById("table").appendChild(img);
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`

addFood(mashPotatoes[0], "#mashPotatoes")
  .then(() => addFood(mashPotatoes[1], "#mashPotatoes"))
  // {
  //   return addFood(mashPotatoes[1], "#mashPotatoes");
  // })
  .then(() => addFood(mashPotatoes[2], "#mashPotatoes"))
  // {
  // //   return addFood(mashPotatoes[2], "#mashPotatoes");
  // // })
  .then(() => addFood(mashPotatoes[3], "#mashPotatoes"))
  // {
  //   return addFood(mashPotatoes[3], "#mashPotatoes");
  // })
  .then(() => addFood(mashPotatoes[4], "#mashPotatoes"));
// {
//   return addFood(mashPotatoes[4], "#mashPotatoes");
// });

// Iteration 3 using async and await

// async function makeFood(step) {
//   // ... your code here
// }
// makeFood(eachStep);
