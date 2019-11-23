



async function makeFood(steps, id){
    let promises = []
    for(const step of steps){
      console.log(step)
      promises.push( 
        await addFood(step, id)
      )
    }
    document.querySelector('#table').innerHTML += (`<img src="images/${id.replace('#','')}.jpg" />`)
    return promises
  }
  
  
Promise.all([makeFood(steak, '#steak'), makeFood(mashPotatoes, '#mashPotatoes'), makeFood(brusselSprouts, '#brusselSprouts')]).then(res=>{
    console.log('breakfast is made!!',res)
    document.body.innerHTML += `<button onclick="new Audio('dinnerIsServed.mp3').play()">Dinner is served.</button>`
})
  

  