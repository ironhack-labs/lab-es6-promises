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

  :exclamation: **You should not make any changes to this file.**

  

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

<br>

## FAQs


<details>
  <summary>I am stuck and don't know how to solve the problem or where to start. What should I do?</summary>

  <br>

  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.

  For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 

  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How to use <code>then()</code> and <code>catch()</code> with Promises?</summary>

  <br>
  
  When working with Promises or a *function that returns a promise*, you can attach the `.then()` method to handle the resolved value and a `catch()` method to handle the possible rejection value.

  Here is an example of how to use `.then()` and `.catch()` to handle a simple promise:

  ```js
  myPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
  ```

  <br>

  Here is an example of using `.then()` and `.catch()` to handle a promise returned by a function/method:

  ```js
  someAPI.getData()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
  ```

  <br>

  If you are trying to execute multiple promises in a sequence, you can do so by returning a promise from a `.then()` block. Example:

  ```js
  someAPI.getData()
      .then((result1) => {
          console.log(result1);
          return someAPI.getData();
       })    // Return another pending promise
      .then((result2) => { // Handle the returned promise
          console.log(result2);
      })
      .catch((error) => {
          console.log(error);
      })
  ```

  The first line `someAPI.getData()` initiates an asynchronous operation, which returns a promise. The `.then()` method is then called on the promise to handle the resolved value.

  The first `then()` returns another promise with another call to `someAPI.getData()`, which allows to chain another `then()` function that handles the second resolved value, logging it to the console.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How to use <code>async</code> function and <code>await</code>?</summary>

  <br>

  You create an asynchronous function by using the `async` keyword before the function definition.

  An `async` function allows you to use the `await` keyword inside the function body to wait for a promise to resolve.

  When using an `async` function to handle asynchronous code (e.g. API call) that may potentially throw an error, we have to add a `try`/`catch` block to be able to handle any potential errors.

  ##### Syntax

  ```js
  async function doSomething() {
    try {
      // Code that will be executed asynchronously
      // that might throw an error
    }
    catch (error) {
      // Handle the error
    }
  }
  ```

  <br>

  ##### Using `await` inside an `async` function

  Here is an example of using `await` inside of an `async` function to await for a promise to resolve:

  ```js
  async function getData() {
    try {
      let response = await fetch('https://api.github.com/search/repositories?q=js');
      let data = await response.json();
      console.log(data);
    }
    catch (error) {
      // error
    } 
  }
  ```

  <br>

  In the above example, the first `await` is used to wait for the promise returned by `fetch()` to resolve. The value of the resolved promise is then assigned to the variable `response`.

  The second `await` is used to parse the response as json object, and is used to wait for the promise returned by `response.json()`. The resolved value is then assigned to the variable `data`.

  The function uses the `return` keyword to return the `data` to allow consuming the value outside of the function.

  <br>

  ##### An `async` function always returns a Promise

  The difference between a *regular function* and an `async` function is that the **`async` function always returns a Promise**. 

  Once defined, you can invoke an `async` function just like a regular function and **handle the Promise it returns using `.then()` and `.catch()` or `await`**.

  <br>

  Here's an example of using `then` and `catch` to handle a Promise returned by an `async` function:

  ```js
  async function greeting() {
    // An `async` function always returns a promise
    // This value will be returned as a Promise
    return "HELLO IRONHACKERS!";
  }

  greeting()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("Error:", error);
    })
  ```

  <br>

  Here's an example of handling the same `async` function but this time using `await`:

  ```js
  async function greeting() {
    // Async function always returns a promise
    // This value will be returned as a Promise
    return "HELLO IRONHACKERS"!;
  }

  // We need another wrapper `async` function so that we can use `await`
  async function wrapperFunction() {
    try {
      const result = await greeting(
      console.log(result);
    }
    catch (error) {
      console.log("Error:", error);
    }
  }
  ```

  Note that we needed another wrapper `async` function to be able to use `await`.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How to use <code>try</code> / <code>catch</code> block?</summary>

  <br>

  The `try`/`catch`  block is used to handle errors that occur during the execution of a program.

  The `try` block contains the code that might throw an error, and the `catch` block contains the code that will handle the error.

  Here is an example of using a `try`/`catch` block:

  ```js
  try {
    // Code that might throw an error
  } catch (error) {
    // Handle the error
  }
  ```

  <br>

  The `try`/`catch` block is typically used in `async` functions when handling asynchronous code that may potentially throw an error.

  Here is an example of using a `try`/`catch` block in an `async` function when handling a promise:

  ```js
  async function doSomething() {

    try {
      // Code that might throw an error
      const result = await someAsyncFunction();
    }
    catch (error) {
      // Handle the error
      console.error(error);
    }
  }
  ```

  In the above example, the `try` block contains an asynchronous operation that might throw an error:  `await someAsyncFunction()`. If an error is thrown, execution will automatically jump to the `catch` block.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How to use </code>Promise.all()</code>?</summary>

  <br>

  The `Promise.all()` method is used for handling multiple promises at the same time. It works in the following way:



  1. `Promise.all()` takes an array of promises. Example:

     > ```js
     > Promise.all( [promise1, promise2, promise3] )
     > ```  

  2. **`Promise.all()` returns a pending promise**, allowing you to handle it with `.then()` and `catch()` or with `await`. Example:

     > ```js
     > Promise.all( [promise1, promise2, promise3] )
     > .then((result) => {})
     > .catch((error) => {})
     > ```

  3. **It resolves successfully only if all input promises are fulfilled.** The resolved value is an array of resolved input promises. Example:

     > ```js
     > Promise.all( [promise1, promise2, promise3] )
     > .then((values) => { // Resolved value is an array
     >  console.log("promise1 value: ", values[0] );
     >  console.log("promise2 value: ", values[1] );
     >  console.log("promise3 value: ", values[2] );
     > })
     > .catch((error) => {})
     > ```

  4. **If even one of the input promises gets rejected, the returned promise gets rejected** with an Error and the execution jumps to the `catch` block.

  <br>


  ##### Handling `Promise.all()` with `then()` / `catch()`

  Here is an example of using `Promise.all()` and handling the returned promise with `.then()` and `.catch()`:

  ```js
  const promise1 = new Promise((resolve, reject) => {
    resolve("HELLO");
  })

  const promise2 = new Promise((resolve, reject) => {
    resolve("WORLD");
  })


  Promise.all( [promise1, promise2] )
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.log(error);
    })
  ```

  In the above example, we define two new promises, `promise1` and `promise2`, and use the `Promise.all()` to handle them at the same time.

  The `Promise.all( [promise1, promise2] )` returns a new promise, that is fulfilled with an array of fulfilled values from the input promises (`promise1` and `promise2`). We named this array `values`.

  <br>

  ##### Handling `Promise.all()` with `await()`

  Here is another example of handling `Promise.all()` and the returned promise with `await`:

  ```js
  const promise1 = new Promise((resolve, reject) => {
    resolve("HELLO");
  });

  const promise2 = new Promise((resolve, reject) => {
    resolve("WORLD");
  });


  async function handlePromiseAll() {
    try {
      const values = Promise.all( [promise1, promise2] );
      console.log(values);
    }
    catch (error) {
      console.log(error);
    }
  }

  handlePromiseAll()
  ```

  In the above example, we define two new promises, `promise1` and `promise2` just as before, and use the `Promise.all()` to handle them at the same time.

  When working with `await` we also need an `async` function, which is the reason for having the function `handlePromiseAll`. 

  Inside this function, the `await` keyword is used to wait for the returned promise by `Promise.all()` to resolve. The resolved value is assigned to the variable `values`.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am getting an error: "not defined". How do I fix it?</summary>

  <br>

  The "ReferenceError: variable is not defined" error in JavaScript occurs when you try to access a variable or a function that has not been defined yet or is out of scope. 

  To fix the issue, check that you have defined the variable or function that you are trying to use and double-check the spelling to make sure you are using the correct name.

  In case the variable or a function is defined in another file, make sure that the file has been imported or loaded correctly.
  
  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>

  <br>

  There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

  1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

     ```bash
     git add .
     git commit -m "Your commit message"
     git push
     ```

  2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.
     To check which remote repository you have cloned, run the following terminal command from the project folder:

     ```bash
     git remote -v
     ```

  If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first, and then clone your fork to your local machine to be able to push the changes.

  Note: You may want to make a copy of the code you have locally, to avoid losing it in the process.

  <br>

  [Back to top](#faqs)

</details>