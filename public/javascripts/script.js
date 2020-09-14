// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
const addSteak= addFood(steak[0], "#steak", () => {
  // ... your code here
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                const steakImg = document.createElement("img");
                steakImg.innerHTML = '<img src="./public/images/steak.jpg">';
                steakImg.src = "public/images/steak.jpg";
                table.appendChild(steakImg);
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`

const addMashPotatoes= addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  // ... your code here
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          const potatoesImg = document.createElement("img");
          potatoesImg.innerHTML =
            '<img src="./public/images/mashPotatoes.jpg">';
          potatoesImg.src = "public/images/mashPotatoes.jpg";
          table.appendChild(potatoesImg);
        });
      });
    });
  });
});

// Iteration 3 using async and await
const brusselSproutsImg = document.createElement("img");
brusselSproutsImg.innerHTML = '<img src="./public/images/brusselSprouts.jpg">';
brusselSproutsImg.src = "public/images/brusselSprouts.jpg";



 async function makeFood() {
  // ... your code here
  
  for (let i = 0; i < brusselSprouts.length; i++) {
    await addFood(brusselSprouts[i], "#brusselSprouts");
    addFood(brusselSprouts[i], "#brusselSprouts", ()=>{
      table.appendChild(brusselSproutsImg);

    });
    
  }
}
makeFood();

const addSprouts= makeFood();

Promise.all([addSteak, addMashPotatoes, addSprouts])
.then(()=>
  document.createElement("button").innerText= "Dinner is served!");