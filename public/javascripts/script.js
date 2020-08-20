// Iteration 1 using callbacks

let steakImg = document.createElement("img");
function prepareSteak() {
  function showSteak() {
    let table = document.getElementById("table");
    steakImg.setAttribute("src", "../public/images/steak.jpg");
    table.appendChild(steakImg);
  }

  addFood(steak[0], "#steak", () => {
    addFood(steak[1], "#steak", () => {
      addFood(steak[2], "#steak", () => {
        addFood(steak[3], "#steak", () => {
          addFood(steak[4], "#steak", () => {
            addFood(steak[5], "#steak", () => {
              addFood(steak[6], "#steak", () => {
                addFood(steak[7], "#steak", () => {
                  showSteak();
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
function preparePotate() {
  function showPotate() {
    let potateImg = document.createElement("img");
    potateImg.setAttribute("src", "../public/images/mashPotatoes.jpg");
    table.appendChild(potateImg);
  }

  addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
          addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
            showPotate();
          });
        });
      });
    });
  });
}

// Iteration 3 using async and await

function showBru() {
  let bruImg = document.createElement("img");
  bruImg.setAttribute("src", "../public/images/brusselSprouts.jpg");
  table.appendChild(bruImg);
}
async function makeFood(step, id) {
  for (let i = 0; i < brusselSprouts.length; i++) {
    await addFood(brusselSprouts[i], "#brusselSprouts");
  }
  await showBru();
}

//bonus 2
Promise.all([prepareSteak(), preparePotate(), makeFood()]).then(
  () =>
    (document.getElementById(
      "steps"
    ).innerHTML += `<button>Dinner is ready</button>`)
);
