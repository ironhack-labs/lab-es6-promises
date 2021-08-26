// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], "#steak");
//   console.log(mashPotatoes[i]);
// }

const tableElement = document.querySelector("#table");
// Iteration 1 using callbacks
async function iteration1() {
  await addFood(steak[0], "#steak", () => {
    addFood(steak[1], "#steak", () => {
      addFood(steak[2], "#steak", () => {
        addFood(steak[3], "#steak", () => {
          addFood(steak[4], "#steak", () => {
            addFood(steak[5], "#steak", () => {
              addFood(steak[6], "#steak", () => {
                addFood(steak[7], "#steak", () => {
                  const image = new Image();
                  image.src = "./public/images/steak.jpg";
                  image.onload = () => {
                    tableElement.appendChild(image);
                  };
                });
              });
            });
          });
        });
      });
    });
  });
}
// Iteration 2 using `.then()`
async function iteration2() {
  await addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
          addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
            const image = new Image();
            image.src = "./public/images/mashPotatoes.jpg";
            image.onload = () => {
              tableElement.appendChild(image);
            };
          });
        });
      });
    });
  });
}
// Iteration 3 using async/await

async function makeFood([...food]) {
  for (let i = 0; i < food.length; i++) {
    await addFood(food[i], "#brusselSprouts");
  }
}

async function iteration3() {
  await makeFood(brusselSprouts).then(() => {
    const image = new Image();
    image.src = "./public/images/brusselSprouts.jpg";
    image.onload = () => {
      tableElement.appendChild(image);
    };
  });
}

Promise.all([iteration1(), iteration2(), iteration3()]).then(() => {
  const button = document.createElement("button");
  button.innerHTML = "Dinner is served!";
  document.body.appendChild(button);
});
