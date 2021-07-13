// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}

// Iteration 1 using callbacks
/**Steak**
1. Season steak generously with salt, pepper and garlic powder
2. Place in ziplock bag
3. Cook in sous vide at 120 F for 1-2 hours
4. Remove from bag and pat dry
5. Heat pan with grapeseed oil and a quarter stick of butter
6. Cook steak for 30-60 seconds per side using a spoon to baste with butter
7. Rest for 10 mintutes
8. Enjoy*/


addFood(steak[0], '#steak', () => {
  // ... your code here


  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                document.getElementById("table").innerHTML +=
                  '<img src="/public/images/steak.jpg"/>';
              });
            });
          });
        });
      });
    });
  });
});




// Iteration 2 using `.then()`

/*1.boil water,
  2.tear open bag of of instant potato mix and pour into bowl,
  3.pour in water,
  4.mix,
  5.enjoy*/
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
    addFood(mashPotatoes[1], '#mashPotatoes')
      addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
          addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
            document.getElementById("table").innerHTML +=
                  '<img src="/public/images/mashPotatoes.jpg"/>';
      });
    });
  });
});

// Iteration 3 using async/await

async function makeFood(step) {
  // ... your code here

}
makeFood(eachStep);
