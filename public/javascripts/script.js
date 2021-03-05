// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//ele tá listando de uma forma não ordenada. Tem que ordenar porque é uma receita
/* for (let i = 0; i < steak.length; i++) {
  addFood(steak[i], "#steak");
  console.log(steak[i]);
}
 */

// Iteration 1 using callbacks
addFood(steak[0], "#steak", () => {
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
                  document.querySelector("#table").appendChild(image);
                  //appendChild porque ele recebe uma tag de html
                };
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
          const image = new Image();
          image.src = "./public/images/mashPotatoes.jpg";

          image.onload = () => {
            document.querySelector("#table").appendChild(image);
          };
        });
      });
    });
  });
});

// Iteration 3 using async and await
//toda função async se torna uma promise e o await só funciona se estiver dentro de uma async
//o await faz a função terminar de fazer o que está fazendo para depois só printar no console (se tiver um console ali)
//o await "transforma" os código assíncronos (que é definido pelo async) e síncronos --> coloca um comportamento síncrono na função
async function makeFood(steps) {
  await addFood(steps[0], "#brusselSprouts");
  await addFood(steps[1], "#brusselSprouts");
  await addFood(steps[2], "#brusselSprouts");
  await addFood(steps[3], "#brusselSprouts");
  await addFood(steps[4], "#brusselSprouts");
  await addFood(steps[5], "#brusselSprouts");
  await addFood(steps[6], "#brusselSprouts");
  await addFood(steps[7], "#brusselSprouts");
  await addFood(steps[8], "#brusselSprouts");

  const image = new Image();
  image.src = "./public/images/brusselSprouts.jpg";

  image.onload = () => {
    document.querySelector("#table").appendChild(image);
  };
}

makeFood(brusselSprouts);

/* //outra forma de fazer o #3
async function makeFood(steps, recipeId) {
  for (let i = 0; i < steps.length; i += 1) {
    await addFood(steps[i], recipeId);
  }
}*/

/* async function makeFood(steps, recipeId, imagePath) {
  for (let i = 0; i < steps.length; i += 1) {
    await addFood(steps[i], recipeId);
  }
  const image = new Image();
  image.src = imagePath;

  image.onload = () => {
    document.querySelector("#table").appendChild(image);
  };
}
 
Promise.all([
  makeFood(brusselSprouts, "#brusselSprouts", './public/images/brusselSprouts.jpg'),
  makeFood(steak, "#steak", "./public/images/steak.jpg")
  makeFood(mashPotatoes, "#mashPotatoes", "./public/images/mashPotatoes.jpg")
])
//temos 3 códigos assíncronos sendo executados 
.then(() => {
  //isso só será executado quando todas as receitas terminarem de listas as etapas
  const button = document.createElement('button')
  button.innerText = 'Dinner is served!';

  document.body.appendChild(button);
})  */
