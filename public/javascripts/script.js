function showFoodImg(id){
  document.getElementById(id).classList.remove("not-displayed");
}

async function addAliment(foodArr, foodId, foodImg){
  let finalPromise = null;
  for (const step of foodArr){
    try{
      finalPromise = await addFood(step, foodId);
    }
    catch(error) {
      console.log(error);
    }
  }
  showFoodImg(foodImg);
  return finalPromise;
}

const foodPromArr = [
  addAliment(steak, '#steak', 'img-steak'), 
  addAliment(mashPotatoes, '#mashPotatoes', 'img-potatoes'), 
  addAliment(brusselSprouts, '#brusselSprouts', 'img-sprouts')
];

Promise.all(foodPromArr)
.then( () => {
  document.getElementById("steps").innerHTML += "<button>Diner is served !</button>"
})
.catch( error => console.log(error));


//===========Below are functions following the lab iterations===========

// Iteration 1 using callbacks

// addFood(steak[0], '#steak', () => {
//   addFood(steak[1], '#steak', () => {
//     addFood(steak[2], '#steak', () => {
//       addFood(steak[3], '#steak', () => {
//         addFood(steak[4], '#steak', () => {
//           addFood(steak[5], '#steak', () => {
//             addFood(steak[6], '#steak', () => {
//               return addFood(steak[7], '#steak', () => {showFoodImg("img-steak")});
//             });
//           });
//         });
//       });
//     });
//   });
// });

// Iteration 2 using `.then()`

// addFood(mashPotatoes[0], '#mashPotatoes')
// .then(() => addFood(mashPotatoes[1], '#mashPotatoes'))
// .then(() => addFood(mashPotatoes[2], '#mashPotatoes'))
// .then(() => addFood(mashPotatoes[3], '#mashPotatoes'))
// .then(() => addFood(mashPotatoes[4], '#mashPotatoes', () => {showFoodImg("img-potatoes")}))

// Iteration 3 using async and await

// async function displaySproutSteps() {
//   for (const step of brusselSprouts){
//     try{
//       await addFood(step, "#brusselSprouts");
//     }
//     catch(error) {
//       console.log(error);
//     }
//   }
//   showFoodImg("img-sprouts");
// };
// displaySproutSteps()