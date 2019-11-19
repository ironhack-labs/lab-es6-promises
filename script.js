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
function makeFood(steps, id){
    steps.forEach(step => {
    setTimeout(() => {
      console.log(step);
      document.querySelector(id).innerHTML += (`<li>${step}</li`)
    }, Math.floor(Math.random() * 5000));
  })
}



makeFood(eggs, '#eggs')
makeFood(bacon, '#bacon')
makeFood(orangeJuice, '#orangeJuice')





