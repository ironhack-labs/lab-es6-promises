// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/*
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}
*/

// Iteration 1 using callbacks
async function promise1(){
  await addFood(steak[0], '#steak', () => {
    addFood(steak[1], '#steak', () => {
      addFood(steak[2], '#steak', () => {
        addFood(steak[3], '#steak', () => {
          addFood(steak[4], '#steak', () => {
            addFood(steak[5], '#steak', () => {
              addFood(steak[6], '#steak', () => {
                addFood(steak[7], '#steak', () => {
                  const image = new Image();
                    image.src = "./public/images/steak.jpg";
                      image.onload = () => {
                        document.getElementById('table').appendChild(image);
                      };
                })
              })
            })
          })
        })
      })
    })
  })
};



// Iteration 2 using `.then()`
async function promise2(){
  await addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[3], '#mashPotatoes').then(() => { 
          addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
            const image = new Image();
              image.src = "./public/images/mashPotatoes.jpg";
                image.onload = () => {
                  document.getElementById('table').appendChild(image);
                };
          });
        });
      });
    });
  });
}

// Iteration 3 using async/await

  async function makeFood(step){
    for (let i = 0; i < step.length; i++) {
      await addFood(step[i], '#brusselSprouts');
    }
  }

  async function promise3() {
    await makeFood(brusselSprouts).then(() => {
      const image = new Image();
        image.src = "./public/images/brusselSprouts.jpg";
          image.onload = () => {
            document.getElementById('table').appendChild(image);
          };
    });
  }
  // makeFood(brusselSprouts);

  Promise.all([promise1(), promise2(), promise3()]).then((values) => {
    console.log(values);
    const btn = document.createElement('button');
      btn.innerText = 'Dinner is served!';
      document.body.appendChild(btn);
  });

  //Se puder me explicar a função do values, eu e o Renan agradecemos heheh
  //e porque no console.log(values) retorna undefined.