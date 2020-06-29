// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < steak.length; i++) {
//   addFood(steak[i], '#steak');
// }

const table=document.getElementById("table")
var stimg=new Image()
stimg.src="../public/images/steak.jpg"

var mpimg=new Image()
mpimg.src="../public/images/mashPotatoes.jpg"

var bsimg=new Image()
bsimg.src="../public/brusselSprouts.jpg"
// Iteration 1 using callbacks
const getSteak=
(addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
            table.innerHTML+='<img src="../public/images/steak.jpg"/>'
              })
            })
          })
        })
      })
    })
  })
})
);

console.log (getSteak)

// Iteration 2 using `.then()`
const getMash=
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes') .then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes') .then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes') .then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
        table.innerHTML+='<img src="../public/images/mashPotatoes.jpg"/>'
        })
      })
    })
  }) 
});

// Iteration 3 using async and await

  
    async function makeFood() {
     for (let i=0;i<brusselSprouts.length;i++){
    const step=brusselSprouts[i]
   const eachStep=await addFood(step,'#brusselSprouts')  
}

  }
  const getSprouts=
  makeFood()
  .then(()=>{
    table.innerHTML+='<img src="../public/images/brusselSprouts.jpg"/>'
  })
  .catch((err)=>{
    console.error(err);
  })



const stp=document.getElementById("steps");

Promise.all([getSteak,getMash,getSprouts]) 
.then(()=>{
const btn=document.createElement('button');
btn.innerHTML='Dinner is served';
stp.append(btn)
})
.catch((err)=>{
  console.error(err);

})





