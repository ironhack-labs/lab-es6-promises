// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// For bonus 1
const table = document.querySelector("#table");
const insertImage = (url) => {
  const img = document.createElement("img");
  table.appendChild(img);
  img.src = url;   
}

// Iteration 1 using callbacks
const addSteak = ()=> {addFood(steak[0], "#steak", () => {
  // ... your code here
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {   
                insertImage("./../../public/images/steak.jpg");
              });        
            });
          });
        });
      });
    });
  });
});
};

// Iteration 2 using `.then()`
const addPotatoes = ()=> {addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  // ... your code here
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes")
        .then(()=> {
          insertImage("./../../public/images/mashPotatoes.jpg"); 
        })
      });
    });
  });
});
}

// Iteration 3 using async and await

async function makeFood(steps, id) {
  // ... your code here
  for (let i=0; i<steps.length; i++) {
    await addFood(steps[i], id);
  }
  insertImage("./../../public/images/brusselSprouts.jpg");
}
// makeFood(brusselSprouts, "#brusselSprouts");

// Bonus 2
Promise.all([addSteak(),addPotatoes(),makeFood(brusselSprouts, "#brusselSprouts")])
.then(() => {
const sectionSteps = document.querySelector("#steps");
const dinnerBtn = document.createElement("button");
dinnerBtn.textContent = "Dinner is served";
sectionSteps.appendChild(dinnerBtn);
});