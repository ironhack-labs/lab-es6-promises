
const bistec = addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {});
              let addImage = document.createElement("img");
                  addImage.src = "./public/images/steak.jpg";
                  table.appendChild(addImage);
            })
          })
        })
      })
    })
  })
});


// Iteration 2 using `.then()`
const patatas = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {});
        let addImage = document.createElement("img");
            addImage.src = "./public/images/mashPotatoes.jpg";
            table.appendChild(addImage);
      })
    })
  })
});


// Iteration 3 using async and await
  async function makeFood(step,id) {     
    for (let i = 0; i < brusselSprouts.length; i++) {     
        await addFood(step[i], id);      

      }
      let addImage = document.createElement("img");
      addImage.src = "./public/images/brusselSprouts.jpg";
      table.appendChild(addImage);
   }
    
   Promise.all([
     bistec,
     patatas,
     makeFood(brusselSprouts, "#brusselSprouts"),
     ])
     .then(() => document.body.innerHTML += `<button>Dinner is served!</button>`)
    
    
  
    




