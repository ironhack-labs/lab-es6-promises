



![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | #Promise Me Breakfast


## Introduction

Due to the asynchronous nature of Javascript promises & callbacks are very important.

## Requirements

- Fork this repo
- Clone this repo

## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

Create Pull Request so your TAs can check up your work.  Write your JavaScript in the provided `script.js` file.

## Deliverables

** First construct three arrays that place the following steps in the correct order: **

**Eggs**
1. Get eggs from fridge
2. Place eggs in pot with lid closed
3. Boil water for 6 mins
4. Stop and let cool
5. Peel eggs 


**Bacon**
1. Get bacon from fridge
2. Space out the bacon strips on a cool frying pan or griddle
3. Heat the bacon over medium heat until it starts to sizzle. 
4. Cook the bacon strips for 10-12 minutes.
5. Flip the bacon over and fry it for another 7-8 minutes until it's crisp. 
6. Remove the bacon strips with tongs and drain them on a paper towel.


**Orange Juice**
1.  Get the oranges.
2.   Peel the oranges.
3.  Cut or tear them into 1-inch chunks and remove seeds. 
4.  Pour them into a blender, and blend.   
5.  Add water and/or surger until tastes good. 


## Iteration #1: 

Using callbacks print the directions to make eggs in the console in the correct order as shown above.  

`makeFood(eggs)` 
## Iteration #2: 

Using promises and the `then` statement print the directions to make bacon in the correct order

`makeFood(bacon)`

## Iteration #3 

Using promises with the `async` and `await` syntax print the directions to make orange juice in the correct order 
`makeFood(orangeJuice)`

## Iteration #4 

Using `promise.all` when bacon, eggs, and orange juice are all finished being made, log ***Breakfast is made! ***


