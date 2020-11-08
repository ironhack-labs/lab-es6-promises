// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/* for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
} */

// Iteration 1 using callbacks

/* function addFoodFunction(addfood) {
  if(element < steak.length){
    addFood(steak[element], '#steak',(addFoodFunction)=>{
    element++;
    addfood();
    }) 
} 
} */


//const directionArray = [1,3,4,5,0,2,6,7]
addFood(steak[1], '#steak', () => {
  addFood(steak[3], '#steak', () => {
    addFood(steak[4], '#steak', () => {
      addFood(steak[5], '#steak', () => {
        addFood(steak[0], '#steak', () => {
          addFood(steak[2], '#steak', () => {
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
imgSource="public/images/steak.jpg"
insertImage(imgSource)



 //Iteration 2 using `.then()`
 addFood(mashPotatoes[1], '#mashPotatoes') 
  .then(() => { addFood(mashPotatoes[2], '#mashPotatoes')})
  .then(() => { addFood(mashPotatoes[0], '#mashPotatoes')})
  .then(() => { addFood(mashPotatoes[3], '#mashPotatoes')})
  .then(() => { addFood(mashPotatoes[4], '#mashPotatoes')})
  imgSource="public/images/mashPotatoes.jpg"
  insertImage(imgSource)
 


// Iteration 3 using async and await
async function makeFood(step) {
    for (let i = 0; i < step.length; i++) {
    await addFood(step[i],"#brusselSprouts")
      } 
      imgSource="public/images/brusselSprouts.jpg"
      insertImage(imgSource)
 }
 
makeFood(brusselSprouts);


function insertImage(imgSource){
  let img = document. createElement("img");
  img.src=imgSource;
  const dinnerId = document.getElementById("table");
  dinnerId.appendChild(img);
}


