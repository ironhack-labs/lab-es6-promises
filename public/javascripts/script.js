// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }


// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                const img = document.createElement('img')
                img.src = "./public/images/steak.jpg"
                img.alt = "steak image"
                document.getElementById('table').appendChild(img)
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
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          const img = document.createElement('img')
          img.src = "./public/images/mashPotatoes.jpg"
          img.alt = "mashPotatoes image"
          document.getElementById('table').appendChild(img)
        });
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(step) {
  try {
     if (step < brusselSprouts.length) {      
       await addFood(brusselSprouts[step], '#brusselSprouts');
       makeFood(step + 1);       
     } else {
        
        const img = document.createElement('img')
        img.src = "./public/images/brusselSprouts.jpg"
        img.alt = "brusselSprouts image"
        document.getElementById('table').appendChild(img)
        
       throw 'the end'
     }
   } catch (err) {
       console.log(err)
   }
 }

 makeFood(0);

    


  //   // ... your code here
  //   try {
  //     await addFood(brusselSprouts[step], '#brusselSprouts')
      
  //   } catch(err) {
  //     // catches errors both in fetch and response.json
  //     console.log(err);
  //   }
  // }

  // for(let i = 0; i < brusselSprouts.length -1; i++)  makeFood(i);


