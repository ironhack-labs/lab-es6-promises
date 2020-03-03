



const steak = [
  'season steak generously with salt, pepper and garlic powder',
  'place in ziplock bag',
  'cook in sous vide at 120 F for 1-2 hours',
  'remove from bag and pat dry',
  'heat pan with grapeseed oil and a quarter stick of butter',
  'cook steak for 30-60 seconds per side using a spoon to baste with butter',
  'rest for 10 mintutes',
  'enjoy'
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
  'enjoy',
]

const mashPotatoes = [
  'boil water',
  'tear open bag of of instant potato mix and pour into bowl',
  'pour in water',
  'mix',
  'enjoy'
] 



// for(let i=0; i<steak.length; i++){ //This will print in the wrong order 
//   addFood(steak[i], '#steak') 
// }

//Iteration 1 using callbacks -- Try to streamline with recursion 
addFood(steak[0], '#steak', function(){
  addFood(steak[1], '#steak', function(){

  })
})


//Iteration 2 using then -- Try to streamline with recursion
addFood(mashPotatoes[0], '#mashPotatoes').then(res => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(res => {
    
  })
})


