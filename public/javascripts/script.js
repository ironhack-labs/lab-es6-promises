// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}

// Iteration 1 using callbacks

//for(let i = 0;i<steak.length;i++){
 //addFood(steak[i],'#steak');
  //console.log(steak[i]);
//}
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2],'#steak',()=>{
      addFood(steak[3],'#steak',()=>{
        addFood(steak[4],'#steak',()=>{
          addFood(steak[5],'#steak',()=>{
            addFood(steak[6],'#steak',()=>{
              addFood(steak[7],'#steak',()=>{
              const image = document.createElement('img');
              image.src = "public/images/steak.jpg";
              document.querySelector('#table').appendChild(image);
              })
            })
          })
        })
      })
    })

  })
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(()=>{
    addFood(mashPotatoes[2],'#mashPotatoes').then(()=>{
      addFood(mashPotatoes[3],'#mashPotatoes').then(()=>{
        addFood(mashPotatoes[4],'#mashPotatoes').then(()=>{
        const image = document.createElement('img');
        image.src = "public/images/mashPotatoes.jpg";
        document.querySelector('#table').appendChild(image);
        })
      })
    })
  })
});

// Iteration 3 using async and await

  async function makeFood(step) {
    // ... your code here
    for(let i = 0 ;i<brusselSprouts.length;i++){
      await addFood(brusselSprouts[i],'#brusselSprouts');
    }
    const image = document.createElement('img');
    image.src = "public/images/brusselSprouts.jpg";
    document.querySelector('#table').appendChild(image);
  }
  makeFood(brusselSprouts);


  //Bonus 2
  /*Promise.all([addSteak,addmashPatotoes,makeFood()]).then(()=> {
    alert("Dinner is served")
  });*/