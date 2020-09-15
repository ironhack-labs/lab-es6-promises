// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i]);
}

// Iteration 1 using callbacks
addFood(steak[0], "#steak", () => {
  addFood(steak[4], "#steak", () => {
    addFood(steak[5], "#steak", () => {
      addFood(steak[1], "#steak", () => {
        addFood(steak[2], "#steak", () => {
          addFood(steak[3], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {});
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {});
      });
    });
  });
});

// Iteration 3 using async and await

function step1() {
  return new Promise((resolve) => {
    resolve(addFood(brusselSprouts[0], "#brusselSprouts"));
  });
}

function step2() {
  return new Promise((resolve) => {
    resolve(addFood(brusselSprouts[1], "#brusselSprouts"));
  });
}

function step3() {
  return new Promise((resolve) => {
    resolve(addFood(brusselSprouts[2], "#brusselSprouts"));
  });
}

function step4() {
  return new Promise((resolve) => {
    resolve(addFood(brusselSprouts[3], "#brusselSprouts"));
  });
}

function step5() {
  return new Promise((resolve) => {
    resolve(addFood(brusselSprouts[4], "#brusselSprouts"));
  });
}

async function makeFood() {
  const result = await step1();
  const result2 = await step2();
  const result3 = await step3();
  const result4 = await step4();
  const result5 = await step5();
}

makeFood();

function addImage1() {
  var steak = document.createElement("img");
  steak.src = "./public/images/steak.jpg";
  var src = document.getElementById("table");
  src.appendChild(steak);

  return new Promise((resolve) => {
    resolve(steak);
  });
}

function addImage2() {
  var mashPotatoes = document.createElement("img");
  mashPotatoes.src = "./public/images/mashPotatoes.jpg";
  var src = document.getElementById("table");
  src.appendChild(mashPotatoes);

  return new Promise((resolve) =>{
    resolve(mashPotatoes);
  })
}

//BONUSES ENCORE À FAIRE

function addImage3() {

  var brusselSprouts = document.createElement("img");
  brusselSprouts.src = "./public/images/brusselSprouts.jpg";
  var src = document.getElementById("table");
  src.appendChild(brusselSprouts);

  return new Promise((resolve) =>{
    resolve(brusselSprouts);
  })
};

/*async function showImages(){
  const result = await step5();
  const result2 = await addImage1();
  const result3 = await addImage2();
  const result4 = await addImage3();
}

showImages();*/

const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
 
Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
