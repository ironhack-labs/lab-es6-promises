const tableImg = document.getElementById("table");


/*
// Iteration 1 using callbacks
addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                const steakImg = document.createElement("img");
                steakImg.src = "../../public/images/steak.jpg";
                tableImg.appendChild(steakImg);
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
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          const potatoesImg = document.createElement("img");
          potatoesImg.src = "../../public/images/mashPotatoes.jpg";
          tableImg.appendChild(potatoesImg);
        });
      });
    });
  });
});
// Iteration 3 using async and await

async function makeFood(step) {
  for (let i = 0; i < brusselSprouts.length; i++) {
    const recipe = await addFood(
      brusselSprouts[i],
      "#brusselSprouts"
    ).then(() => {});
  }
  const sproutsImg = document.createElement("img");
  sproutsImg.src = "../../public/images/brusselSprouts.jpg";
  tableImg.appendChild(sproutsImg);
}

makeFood(brusselSprouts)
*/


// BONUS 


async function makeFood(steps , id) {
  for (const step of steps) await addFood(step, id)
  document.querySelector("#table").innerHTML += `<img src="public/images/${id.replace("#", "")}.jpg" />`;
}

Promise.all([
  makeFood(steak, "#steak"),
  makeFood(brusselSprouts, "#brusselSprouts"),
  makeFood(mashPotatoes, "#mashPotatoes")
])
.then((res) => {
  document.body.innerHTML += `<button onclick="new Audio('public/media/dinnerIsServed.mp3').play()">Dinner is served`

})
.catch((err) => console.error(err));