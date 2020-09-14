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
                let img = document.createElement('img');
                img.src ='./public/images/steak.jpg';
                document.getElementById('table').appendChild(img);

                
                // console.log(allActions);
              });
            });
          });
        });
      });
    });
  });
});


/*
for(let i=0; i < steak.length; i++ ) {
  addFood(steak[i], '#steak', () => {});
}
*/




// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then((res) => {
  
  addFood(mashPotatoes[1], '#mashPotatoes').then((res) => {
    addFood(mashPotatoes[2], '#mashPotatoes').then((res) => {
      addFood(mashPotatoes[3], '#mashPotatoes').then((res) => {
        addFood(mashPotatoes[4], '#mashPotatoes').then((res) => {
          let img = document.createElement('img');
          img.src ='./public/images/mashPotatoes.jpg';
          document.getElementById('table').appendChild(img);
        });
      });
    });
  });
});
/*
for(let i=0; i < steak.length; i++ ) {
  addFood(mashPotatoes[i], '#mashPotatoes').then((res) => {});
}
*/


// Iteration 3 using async and await


  async function makeFood(step, id) {
    // ... your code her
    
    let result = await addFood(brusselSprouts[0], '#brusselSprouts');
    result = await addFood(brusselSprouts[1], '#brusselSprouts');
    result = await addFood(brusselSprouts[2], '#brusselSprouts');
    result = await addFood(brusselSprouts[3], '#brusselSprouts');
    result = await addFood(brusselSprouts[4], '#brusselSprouts');
    result = await addFood(brusselSprouts[5], '#brusselSprouts');
    result = await addFood(brusselSprouts[6], '#brusselSprouts');
    result = await addFood(brusselSprouts[7], '#brusselSprouts');
    result = await addFood(brusselSprouts[8], '#brusselSprouts');
    
    let img = document.createElement('img');
    img.src ='./public/images/brusselSprouts.jpg';
    document.getElementById('table').appendChild(img);
  }

  
  async function myMakeFood(step, id) {
    var resu = [];
    for(let i = 0; i < step.length; i++) {
      resu.push(await addFood(step[i], id));
    }
    return resu;
  }
 
  //makeFood(eachStep);

  Promise.all([
      myMakeFood(steak, '#steak'),
      myMakeFood(brusselSprouts, '#brusselSprouts'),
      myMakeFood(mashPotatoes, '#mashPotatoes')
    ]).then(() => {
      let msg =  document.createElement('div');
      msg.innerHTML += `Dinner is served!`;
      document.getElementById('table').appendChild(msg);
    }).then(() => {      
    
      var soundPlayer = document.getElementById('sound');
      soundPlayer.src = './public/media/dinnerIsServed.mp3';
      console.log(soundPlayer);
      soundPlayer.preload = false;
      soundPlayer.muted = false;
      soundPlayer.play();
    });
