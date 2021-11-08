![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | #Promise me a dinner

## Introduction

Due to the asynchronous nature of JavaScript, promises and callbacks are very important. Both allow us to control the flow of the operations and execute tasks in sequence.

<p align="center">

<img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-cover.png" alt="Lab Promise me dinner - final result" width="500" />

</p>

## Requirements

- Fork this repo
- Clone this repo

## Submission

Upon completion, run the following commands:

```shell
$ git add .
$ git commit -m "done"
$ git push origin master
```

Create Pull Request so your TAs can check up your work.

## Instructions

### Iteration 0 | The starter code

We provided you with some starter code:

- `javascript/data.js` - contains four arrays with steps to preparing 4 different foods: _mashed potatoes_, _steak_, _brussels sprouts_ and _broccoli_.

- `javascript/getInstruction.js` - contains a function **`getInstruction`** that **uses callbacks** to asynchronously retrieve instruction steps for any food. It uses `setTimeout` to mimic an asynchronous operation.

  ```js
  getInstruction(food, step, callback, errorCallback)
  ```

  :exclamation: **You should not make any changes in this file.**

  

- `javascript/obtainInstruction.js` - has a function **`obtainInstruction`**  that **uses promises** to asynchronously retrieve instruction steps for any food. It also uses `setTimeout` to mimic an asynchronous operation.

  ```js
  obtainInstruction(food, step)
  ```

  :exclamation: **You should not make any changes to this file either.**

  

- `javascript/index.js` - in this file we left an example to show you how the code should execute. However, the provided code doesn't use nested callbacks or promises *yet*, which is why the steps won't print in the correct order. Your task in the first iteration will be to do this properly, but more on that later. 

- `index.html` - contains a base HTML structure needed so no need to add any code there. Previously mentioned JavaScript files are already linked to the `index.html`. The `data.js` loads first to make sure arrays that hold instructions are already loaded and can be used in other files, where we need them.  
  :exclamation: **You should not make any changes to this file.**



### Out of sync 

 **You should write your code <u>only</u> in the `javascript/index.js` file.** 

Now, open the file and take a look at the starter code provided there. The provided code doesn't use nested callbacks to enforce a sequence of execution, which is why the steps are not displayed in the correct order.

Go ahead and open the `index.html` page in the browser. Notice how the cooking steps are displayed out of order. 


<details>
  <summary><b>Screenshot</b></summary>

  ![Steps out of sync](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-out-of-sync.gif)

</details>



:exclamation: Before you start working on Iteration 1, comment out the initial code in `javascript/index.js`.


<br>

## Iteration 1 | Make the mashed potatoes with callbacks

Using nested callbacks print the cooking steps to make Mashed Potatoes in the correct order. Write your JavaScript in the provided `javascript/index.js` file. Once again, a reminder not to alter the `getInstruction.js` file.

```javascript
// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // ... Your code here
    // ...
});
```



After the last step, you should display an additional `<li>` with the text: `Mashed potatoes are ready!`.



<details>
  <summary><b>Expected Result</b></summary>

![Iteration 1 expected result](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-1-result.gif)

</details>



## Iteration 2 | Make the stake with promises

Using promises and the `then()` statement print the directions to display the cooking instruction for the Stake in the correct order. This time, you will have to call the function `obtainInstruction` which returns a pending Promise.

Continue working in the `javascript/index.js`. You should not alter the `obtainInstruction.js` file.

```javascript
// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    //  ... Your code here
  })
  // ... Your code here
```



After the last step, you should display an additional `<li>` with the text: `Stake is ready!`.



<details>
  <summary><b>Expected Result</b></summary>

![Iteration 2 expected result](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-2-result.gif)

</details>



## Iteration 3 | Make the broccoli with async/await

Using promises with the `async` and `await` syntax print the directions to make Brussels Sprouts in the correct order. You will need the function `obtainInstruction` which returns a pending Promise.

```javascript
async function makeBroccoli() {
  // ... Your code here
}
```



After the last step, you should display an additional `<li>` with the text: `Broccoli is ready!`.



<details>
  <summary><b>Expected Result</b></summary>

![Iteration 3 expected result](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-3-result.gif)

</details>



## Bonus 1

When the specific food is ready to be served (all steps are listed), remove the `hidden` attribute from the `<img />` element that represents the food, so that the image gets displayed.



<details>
  <summary><b>Expected Result</b></summary>

![Bonus Iteration 1 expected result](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-bonus-1-result.gif)

</details>

## Bonus 2

Using `Promise.all` display the cooking steps to make Brussels Sprouts in the correct order.

After the last step, you should display an additional `<li>` with the text: `Brussels sprouts are ready!`.



**The final result should look like this - with all the cooking steps displaying in the correct order**:

![Bonus Iteration 2 expected result](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-bonus-2-result.gif)

<br>

**Happy coding!** :blue_heart:
