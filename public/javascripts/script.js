// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(mashPotatoes[i], '#mashPotatoes');
// }

let count = 0;
// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                const img =  `
                <img class="animate__animated animate__fadeInRight" src="public/images/steak.jpg">
                `;
        const table = document.querySelector("#table")
        const imgSteak = document.createElement("div");
        table.appendChild(imgSteak)
        imgSteak.innerHTML = img
        count++
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
  addFood(mashPotatoes[1], '#mashPotatoes').then(()=>{
    addFood(mashPotatoes[2], '#mashPotatoes').then(()=>{
      addFood(mashPotatoes[3], '#mashPotatoes').then(()=>{
        addFood(mashPotatoes[4], '#mashPotatoes').then(()=>{
          const img =  `
            <img class="animate__animated animate__fadeInRight" src="public/images/mashPotatoes.jpg">
            `;
    const table = document.querySelector("#table")
    const imgMashPotatoes = document.createElement("div");
    table.appendChild(imgMashPotatoes)
    imgMashPotatoes.innerHTML = img
    count++
        })
      })
    })
  })
});

// Iteration 3 using async and await

async function makeFood(steps, id) {
for(const step of steps){
  await addFood(step,id)
  if(step == "enjoy"){
    const img =  `
    <img class="animate__animated animate__fadeInRight" src="public/images/2brusselSprouts.jpg">
    `;
const table = document.querySelector("#table")
const imgBrusselSprouts = document.createElement("div");
table.appendChild(imgBrusselSprouts)
imgBrusselSprouts.innerHTML = img
count++
if(count==3){
  setTimeout(()=>{
    window.alert("A cenar")
  },2000)
}
  }
}
}
makeFood(brusselSprouts, '#brusselSprouts');


