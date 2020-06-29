// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//for (let i = 0; i < steak.length; i++) {
//  addFood(steak[i], '#steak');
//}

/*
//
*/
// Iteration 1 using callbacks


var addSteak =  ()=> {
addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                loadImage(urls[0]);
              });
            });
          });
        });
      });
    });
  });
});
};

// I put the Steak promise in a variable I can use for Promise.all in Bonus 2
//addSteak();
const promiseSteak = new Promise ((resolve, reject) => {
  resolve(addSteak());
})


/*
//
*/
// Iteration 2 using `.then()`

var addMashPotatoes =  ()=> {
addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes");
        loadImage(urls[1]);
      });
    });
  });
});
};

//addMashPotatoes();
// I put the MashPotatoes promise in a variable I can use for Promise.all in Bonus 2
const promiseMashPotatoes = new Promise ((resolve, reject) => {
  resolve(addMashPotatoes());
})



/*
//
*/
// Iteration 3 using async and await

async function makeFood() {
  for (let i = 0; i < brusselSprouts.length; i++) {
    try {
      await addFood(brusselSprouts[i], "#brusselSprouts");
      //console.log("async works");
    } catch (error) {
      //console.log(error);
    }
  }
  loadImage(urls[2]);
}

//makeFood();
// I put the BrusselSprouts promise in a variable I can use for Promise.all in Bonus 2
const promiseBrusselSprouts = new Promise ((resolve, reject) => {
  resolve(makeFood());
})

/*
//
*/
// BONUS #1
// When food is ready , add the image that represents that food


// below are the images urls
var urls = [
  "./public/images/steak.jpg",
  "./public/images/mashPotatoes.jpg",
  "./public/images/brusselSprouts.jpg",
];

//we use them as arguments when calling the function at the very last promise resolved of each dish promise

function loadImage(url) {
  var table = document.getElementById("table");
  return new Promise((resolve, reject) => {
    const image = new Image();
    console.log("in loadImage resolve");
    resolve(image);
    console.log("image resolved");
    image.src = url;
    table.appendChild(image);
  });
}


/*
//
*/
// BONUS #2
// Using promise.all when all dinner items (Steak, Mash Potatoes, and Brussels Sprouts) are all done and added to the table, alert Dinner is served!

//We check if all dish promise is fulfilled before creating and displaying the 'dinner is served button'.

Promise.all([promiseSteak,promiseMashPotatoes,promiseBrusselSprouts]).then(() => {
  var body = document.querySelector('body');
//  console.log('all resolved');
  var dinerServed = document.createElement('button')
  dinerServed.innerText = 'Dinner is served';
  body.appendChild(dinerServed);
});

