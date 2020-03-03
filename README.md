



![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | #Promise Me Dinner


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

Create Pull Request so your TAs can check up your work.  Write your JavaScript in the provided `script.js` file.  You'll be calling the `addFood()` function from script.js, but do not alter addFood.js. 

## Out of Sync 
**Notice how the steps to cooking the food are out of order, and all the images are already on the table**
![](images/OutofSync.gif)

## Deliverables

** First construct three arrays that place the following steps in the correct order: **



**Steak**
1. Season steak generously with salt, pepper and garlic powder
2. Place in ziplock bag
3. Cook in sous vide at 120 F for 1-2 hours
4. Remove from bag and pat dry
5. Heat pan with grapeseed oil and a quarter stick of butter
6. Cook steak for 30-60 seconds per side using a spoon to baste with butter
7. Rest for 10 mintutes
8. Enjoy


**Mash Potatoes**
1.  Boil water
2.  Tear open bag of of instant potato mix and pour into bowl
3.  Pour in water
4.  Mix  
5.  Enjoy 


**Brussel Sprouts**
1. Wash burussel srouts
2. Cut off base and chop in half
3. Toss in bowl with olive oil, balsamic vinger and salt
4. Preheat oven to 500
5. Coat baking sheet with olive oil
6. Place in flat side down
7. Cook for 20 minutes
8. Place back in bowl and add salt and pepper
9. Enjoy


## Iteration #1: 

Using callbacks print the directions to make Steak in the correct order as shown above.  Write your JavaScript in the provided `script.js` file.  You'll be calling the `addFood()` function from script.js, but do not alter addFood.js. 

`makeFood(steak)` 
## Iteration #2: 

Using promises and the `then` statement print the directions to make Mash Potatoes in the correct order

`makeFood(mashPotatoes)`

## Iteration #3 

Using promises with the `async` and `await` syntax print the directions to make Brussel Sprouts in the correct order 
`makeFood(brusselSprouts)`

## BONUS 1

When each food item's steps such as `steak` is complete then add that specific food to the `#table` div.

## BONUS 2

Using `promise.all` when Steak, Mash Potatoes, and Brussel Sprouts are all finished being made and added to the table, alert ***Dinner is Served!***


## Final should look like this 
**All the steps in the correct order**

![](images/inSync.gif)