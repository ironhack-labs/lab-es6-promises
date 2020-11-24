// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  //addFood(mashPotatoes[i], '#mashPotatoes');
//}

// Iteration 1 using callbacks
let promise1 = addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
            image = document.createElement('img');
            image.setAttribute('src', './public/images/steak.jpg');
            document.getElementById('table').appendChild(image);    
            });
           });
         });
       });
     });
   });
  });
});

//addFood(steak[0], '#steak', () => {
//addFood(steak[1], '#steak', () => {
//addFood(steak[2], '#steak', () => {
//addFood(steak[3], '#steak', () => {
//addFood(steak[4], '#steak', () => {
//addFood(steak[5], '#steak', () => {
//addFood(steak[6], '#steak', () => {
//addFood(steak[7], '#steak');
//document.querySelector('#table').innerHTML += `<img src="public/images/steak.jpg"/>`;
//});
//});
//});
//});
//});
//});
//});
//});

// Iteration 2 using `.then()`
let promise2 = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(()=> {
    addFood(mashPotatoes[2], '#mashPotatoes').then(()=> {
      addFood(mashPotatoes[3], '#mashPotatoes').then(()=> {
        addFood(mashPotatoes[4], '#mashPotatoes').then(()=> {
          image = document.createElement('img');
          image.setAttribute('src', './public/images/mashPotatoes.jpg');
          document.getElementById('table').appendChild(image); 
    });
   });
  });
 });
});
//addFood(mashPotatoes[0], '#mashPotatoes')
//.then(() => addFood(mashPotatoes[1], '#mashPotatoes'))
//.then(() => addFood(mashPotatoes[2], '#mashPotatoes'))
//.then(() => addFood(mashPotatoes[3], '#mashPotatoes'))
//.then(() => addFood(mashPotatoes[4], '#mashPotatoes'))
//.then(() => document.querySelector('#table').innerHTML += `<img src="public/images/mashPotatoes.jpg"/>`);

// Iteration 3 using async and await
async function makeFood(step) {
  for (let i = 0; i < brusselSprouts.length; i++) {
   await addFood(brusselSprouts[i], '#brusselSprouts');
  }

  image = document.createElement('img');
  image.setAttribute('src', './public/images/brusselSprouts.jpg');
  document.getElementById('table').appendChild(image);
}
//async function makeFood(steps, id) {
//for (const step of steps) {
//await addFood(step, id);
//}
//document.querySelector('#table').innerHTML += `<img src="public/images/${id.replace('#', '')}.jpg" />`;
//}
//makeFood(brusselSprouts, '#brusselSprouts');

let promise3 = makeFood(brusselSprouts);
Promise.all([promise1, promise2, promise3]).then(() => {
  setTimeout(()=> {
    alert('Dinner is served!');
  }, 800)
});
//async function makeFood(steps, id) {
//for (const step of steps) {
//await addFood(step, id);
//}
//document.querySelector('#table').innerHTML += `<img src="public/images/${id.replace('#', '')}.jpg" />`;
//}
//Promise.all([
//makeFood(steak, '#steak'),
//makeFood(brusselSprouts, '#brusselSprouts'),
//makeFood(mashPotatoes, '#mashPotatoes')
//]).then(res => {
//document.body.innerHTML += `<button onclick="new Audio('public/media/dinnerIsServed.mp3').play()">Dinner is served.</button>`;
//});