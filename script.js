/*  
Eggs
1. Get eggs from fridge
2. Place eggs in pot with lid closed
3. Boil water for 6 mins
4. Stop and let cool
5. Peel eggs 


Bacon
1. Get bacon from fridge
2. Space out the bacon strips on a cool frying pan or griddle
3. Heat the bacon over medium heat until it starts to sizzle. 
4. Cook the bacon strips for 10-12 minutes.
5. Flip the bacon over and fry it for another 7-8 minutes until it's crisp. 
6. Remove the bacon strips with tongs and drain them on a paper towel.


OrangeJuice
1.  Get the oranges.
2.   Peel the oranges.
3.  Cut or tear them into 1-inch chunks and remove seeds. 
4.  Pour them into a blender, and blend.   
5.  Add water and/or surger until tastes good. 

*/



const eggs = [
    'Get eggs from fridge',
    'Place eggs in pot with lid closed',
    'Boil water for 6 mins',
    'Stop and let cool',
    'Peel eggs',
]

const steak = [
  'season steak generously with salt, pepper and garlic powder',
  'place in ziplock bag',
  'cook in sous vide at 120 F for 1-2 hours',
  'remove from bag and pat dry',
  'heat pan with grapeseed oil and a quarter stick of butter',
  'cook steak for 30-60 seconds per side using a spoon to baste with butter',
  'rest for 10 mintutes',
  'enjoy the best steak of your life'
]

const brusselSprouts = [
  'wash burussel srouts',
  'cut off base and chop in half',
  'toss in bowl with olive oil, balsamic vinger and salt',
  'preheat oven to 500 F',
  'coat baking sheet with olive oil',
  'place in flat side down',
  'cook for 20 minutes',
  'place back in bowl and add salt and pepper',
  'enjoy'
]

const mashPotatoes = [
  'boil water',
  'tear open bag of of instant potato mix and pour into bowl',
  'pour in water',
  'mix',
  'enojoy'
]

const bacon = [
    'Get bacon from fridge', 
    'Space out the bacon strips on a cool frying pan or griddle',
    'Heat the bacon over medium heat until it starts to sizzle.',
    'Cook the bacon strips for 10-12 minutes.',
    'Flip the bacon over and fry it for another 7-8 minutes until it\'s crisp.',    
    'Remove the bacon strips with tongs and drain them on a paper towel.'
]


const orangeJuice = [
    'Get the oranges.',
    'Peel the oranges.',
    'Cut or tear them into 1-inch chunks and remove seeds.',
    'Pour them into a blender, and blend.',
    'Add water and/or surger until tastes good.'
]

/** DO NOT ALTER **/

function addFood(step, id){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log(step);
      document.querySelector(id).innerHTML += (`<li>${step}</li`)
      resolve(step)
    }, Math.floor(Math.random() * 1000));
  })
}
  
  
// function makeFood(steps, id){
//   for(const step of steps){
//     addFood(step,id)
//   }
//   document.querySelector('#table').innerHTML += (`<img src="images/${id.replace('#','')}.jpg" />`)
//   //document.body.innerHTML += `<button onclick="new Audio('dinnerIsServed.mp3').play()">Dinner is Served!</button>`

// }

// makeFood(steak, '#steak')
// makeFood(mashPotatoes, '#mashPotatoes')
// makeFood(brusselSprouts, '#brusselSprouts')


async function makeFood(steps, id){
  let promises = []
  for(const step of steps){
    console.log(step)
    promises.push( 
      await addFood(step, id)
    )
    //console.log(p)
  }
  console.log('here?', id)
  document.querySelector('#table').innerHTML += (`<img src="images/${id.replace('#','')}.jpg" />`)
  return promises
}





Promise.all([makeFood(steak, '#steak'), makeFood(mashPotatoes, '#mashPotatoes'), makeFood(brusselSprouts, '#brusselSprouts')]).then(res=>{
  console.log('breakfast is made!!',res)
  //prompt('Congrats!' +String(res));
  document.body.innerHTML += `<button onclick="new Audio('dinnerIsServed.mp3').play()">Dinner is served.</button>`
})








