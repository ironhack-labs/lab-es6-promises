// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i]);
}

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  let promise1 = addFood(steak[0],'#steak', ()=>{
    addFood(steak[1], '#steak', () => {
      addFood(steak[2], '#steak', () => {
        addFood(steak[3], '#steak', () => {
          addFood(steak[4], '#steak', () => {
            addFood(steak[5], '#steak', () => {
              addFood(steak[6], '#steak', () => {
                addFood(steak[7], '#steak', () => {
                });
              });
            });
          });
        });
      });
    });
  });
});
  



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
}).then(() => {
  return addFood(mashPotatoes[1], '#mashPotatoes'); //durch das Verwenden von return, gehört der Teil zur ersten Funktion und deshalb wartet die nächste Funktion, bis die erste fertig (returnt) ist bzw. hat. Es ist ein schöner Weg eine callback function zu schreiben/refactoring
}).then(() => {
  return addFood(mashPotatoes[2], '#mashPotatoes');
}).then(() => {
  return addFood(mashPotatoes[3], '#mashPotatoes');
}).then(() => {
  return addFood(mashPotatoes[4], '#mashPotatoes');
});

// Iteration 3 using async and await

async function makeFood(step) {
  await addFood(step[0], '#brusselSprouts');
  await addFood(step[1], '#brusselSprouts');
  await addFood(step[2], '#brusselSprouts');
  await addFood(step[3], '#brusselSprouts');
  await addFood(step[4], '#brusselSprouts');
  await addFood(step[5], '#brusselSprouts');
  await addFood(step[6], '#brusselSprouts');
  await addFood(step[7], '#brusselSprouts');
  addFood(step[8], '#brusselSprouts');
};
makeFood(brusselSprouts);