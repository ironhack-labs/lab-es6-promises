// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/* for (let i = 0; i < brusselSprouts.length; i++) {
    addFood(brusselSprouts[i], '#brusselSprouts');
    console.log(brusselSprouts[i])
} */

// Iteration 1 using callbacks
promisse1 = addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                let image = new Image();
                image.src = '/public/images/steak.jpg'
                document.getElementById('table').appendChild(image);
              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
promisse2 = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          let image1 = new Image();
          image1.src = '/public/images/mashPotatoes.jpg'
          document.getElementById('table').appendChild(image1);
        })
      })
    })
  })
});
// Iteration 3 using async/await

  async function makeFood(array) {
    // ... your code here
   for (let i = 0; i < array.length; i++) {
       await addFood(array[i], '#brusselSprouts');
     // console.log(array[i])
    }
    let image2 = new Image();
    image2.src = '/public/images/brusselSprouts.jpg'
    image2.onload=() => document.getElementById('table').appendChild(image2);   
  }
  let promisse3 = makeFood(brusselSprouts);
/*   for (let i = 0; i < brusselSprouts.length; i++) {
    addFood(brusselSprouts[i], '#brusselSprouts');
    console.log(brusselSprouts[i])
  } */

  Promise.all([promisse1, promisse2, promisse3]).then((values) => {
    console.log(values);
    console.log('Dinner is Served');
    const button = document.createElement("button");
    button.innerHTML = "Dinner is served!";
    document.body.appendChild(button);
  });

  