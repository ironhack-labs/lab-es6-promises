const areaImg= document.querySelector("#table")


// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  //console.log(mashPotatoes[i])
//}

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () =>{
       addFood(steak[3], '#steak', () =>{
         addFood(steak[4], '#steak', () =>{
           addFood(steak[5], '#steak', () =>{
             addFood(steak[6], '#steak', () =>{
               addFood(steak[7], '#steak')
               areaImg.innerHTML += `
               <img src="./public/images/steak.jpg"/>
               `
             })
           })
         } )

       })
    })

  })
});

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes')
.then(() => {return addFood(mashPotatoes[1], '#mashPotatoes')})
.then(()=>{return addFood(mashPotatoes[2], '#mashPotatoes')})
.then(()=>{return addFood(mashPotatoes[3], '#mashPotatoes')})
.then(()=> {return addFood(mashPotatoes[4], '#mashPotatoes')})
.then(()=>{
  console.log(areaImg)
  return areaImg.innerHTML += `<img src="./public/images/mashPotatoes.jpg"/>`
})

// Iteration 3 using async and await

  async function makeFood(step) {
    await addFood(brusselSprouts[0], '#brusselSprouts')
    await addFood(brusselSprouts[1], '#brusselSprouts')
    await addFood(brusselSprouts[2], '#brusselSprouts')
    await addFood(brusselSprouts[3], '#brusselSprouts')
    await addFood(brusselSprouts[4], '#brusselSprouts')
    await addFood(brusselSprouts[5], '#brusselSprouts')
    await addFood(brusselSprouts[6], '#brusselSprouts')
    await addFood(brusselSprouts[7], '#brusselSprouts')
    await addFood(brusselSprouts[8], '#brusselSprouts') 
    return areaImg.innerHTML += `<img src="./public/images/BrusselSprouts.jpg"/>`
  }
makeFood()

  //makeFood(eachStep);

  //Bonus2


Promise.all([p1, p2, p3]).then((alert) => {
  alert("Dinner is served!")
});

  //no supe como encapsular en constantes(??) las promesas para llamarlas en el promise all.
  //Intenté hacer una nueva asignación de variables, pero no funciona...
  //creo que no entiendo a profundidad en donde están las promesas 