// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code

/*
for (let i = 0; i < mashPotatoes.length; i++) {
 
 // addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}
*/

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {

  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
              })
            })
          })
        })
      })
    })
  })
 })



addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
addFood(mashPotatoes[1], '#mashPotatoes').then(() => { 
 addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
 addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
});
});
});
});
});


// Iteration 3 using async and await

  async function makeFood(steps, foodtype) {

    for(let eachStep = 0; eachStep < steps.length; eachStep++) {
      await addFood(steps[eachStep],foodtype)
    }
  }
  makeFood(brusselSprouts, '#brusselSprouts');


 


  /* 

  const brusselSprouts = [
  'wash brussel sprouts',
  'cut off base and chop in half',
  'toss in bowl with olive oil, balsamic vinegar and salt',
  'preheat oven to 500 F',
  'coat baking sheet with olive oil',
  'place in flat side down',
  'cook for 20 minutes',
  'place back in bowl and add salt and pepper',
  'enjoy'
];


  
async function getNumber() {
    try {
        const number = await createRandomNumber(4);
        console.log(number);
    } catch (error) {
        console.log('The following error has ocurred: ', error.message);
    }
}



  */ 