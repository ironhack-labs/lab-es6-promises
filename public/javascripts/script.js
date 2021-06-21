// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code

/*for (let i = 0; i < steak.length; i++) {
  addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}
*/

/*THIS IS METHOD 1 (THE SLOPPY WAY). BY CHAINING THE FUNCTIONS WITHIN EACH OTHER, 
YOU ARE CALLING THE FOLLOWING FUNCTION AS THE CALLBACK AFTER EACH TIMEOUT HAS RUN. 
THIS WORKS IN THIS CASE, BUT DOES NOT TAKE ADVANTAGE OF THE ".THEN" METHOD

addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                tableTop.appendChild(steakPic);
              });
            });
          });
        });
      });
    });
  });
});
*/

let tableTop = document.querySelector("#table");
let potatoesPic = new Image(100,100);
potatoesPic.src = "./public/images/mashPotatoes.jpg";
potatoesPic.classList.add("potatoeImage");
let steakPic = new Image(100,100);
steakPic.src = "./public/images/steak.jpg";
steakPic.classList.add("steakImage");
let sproutsPic = new Image(100,100);
sproutsPic.src = "./public/images/brusselSprouts.jpg";
sproutsPic.classList.add("sproutsImage");

/*THIS IS METHOD 2 (THE BETTER WAY). IT TAKES ADVANTAGE OF THE ".THEN" METHOD TO WAIT UNTIL
THE COMPLETION OF EACH PREVIOUS PROMISE BEFORE BEGINNING THE NEXT ONE*/
addFood(steak[0], '#steak')
	.then(() => addFood(steak[1], '#steak'))
	.then(() => addFood(steak[2], '#steak'))
  .then(() => addFood(steak[3], '#steak'))
  .then(() => addFood(steak[4], '#steak'))
  .then(() => addFood(steak[5], '#steak'))
  .then(() => addFood(steak[6], '#steak'))
  .then(() => addFood(steak[7], '#steak'))
  .then(() => tableTop.appendChild(steakPic))


addFood(mashPotatoes[0], '#mashPotatoes')
	.then(() => addFood(mashPotatoes[1], '#mashPotatoes'))
	.then(() => addFood(mashPotatoes[2], '#mashPotatoes'))
  .then(() => addFood(mashPotatoes[3], '#mashPotatoes'))
  .then(() => addFood(mashPotatoes[4], '#mashPotatoes'))
  .then(() => tableTop.appendChild(potatoesPic))


addFood(brusselSprouts[0], '#brusselSprouts')
  .then(() => addFood(brusselSprouts[1], '#brusselSprouts'))
  .then(() => addFood(brusselSprouts[2], '#brusselSprouts'))
  .then(() => addFood(brusselSprouts[3], '#brusselSprouts'))
  .then(() => addFood(brusselSprouts[4], '#brusselSprouts'))
  .then(() => addFood(brusselSprouts[5], '#brusselSprouts'))
  .then(() => addFood(brusselSprouts[6], '#brusselSprouts'))
  .then(() => addFood(brusselSprouts[7], '#brusselSprouts'))
  .then(() => addFood(brusselSprouts[8], '#brusselSprouts'))
  .then(() => tableTop.appendChild(sproutsPic))

  