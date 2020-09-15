// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }


const imgContent = document.getElementById('table')
const btnContent = document.getElementById('table')
// Iteration 1 using callbacks

  addFood(steak[0], '#steak', () => {
    addFood(steak[1], '#steak', () => {
      addFood(steak[2], '#steak', () => {
        addFood(steak[3], '#steak', () => {
          addFood(steak[4], '#steak', () => {
            addFood(steak[5], '#steak', () => {
              addFood(steak[6], '#steak', () => {
                addFood(steak[7], '#steak', () => {
                  var img = document.createElement('img'); 
                  img.classList.add("img");
                  img.src = '/public/images/steak.jpg'
                  imgContent.appendChild(img);

                })
              })
            })
          })
        })
      })
    })
  });

//   async function makeFood0() {
//     await addFood(steak[0], '#steak');
//     await addFood(steak[1], '#steak');
//     await addFood(steak[2], '#steak');
//     await addFood(steak[3], '#steak');
//     await addFood(steak[4], '#steak'); 
//     await addFood(steak[5], '#steak');
//     await addFood(steak[6], '#steak');
//     await addFood(steak[7], '#steak');
//     var img = document.createElement('img'); 
//     img.classList.add("img");
//     img.src = '/public/images/brusselSprouts.jpg'
//     imgContent.appendChild(img);
//   }

// const p0 = makeFood0();


  // Iteration 2 using `.then()`


  addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
          addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
            var img = document.createElement('img'); 
            img.classList.add("img");
            img.src = '/public/images/mashPotatoes.jpg'
            imgContent.appendChild(img);

          });
        });
      });
    });
  });

//   async function makeFood2() {
//     await addFood(mashPotatoes[0], '#mashPotatoes');
//     await addFood(mashPotatoes[1], '#mashPotatoes');
//     await addFood(mashPotatoes[2], '#mashPotatoes');
//     await addFood(mashPotatoes[3], '#mashPotatoes');
//     await addFood(mashPotatoes[4], '#mashPotatoes');
//     var img = document.createElement('img'); 
//     img.classList.add("img");
//     img.src = '/public/images/brusselSprouts.jpg'
//     imgContent.appendChild(img);
//   }

// const p2 = makeFood2();



// Iteration 3 using async and await

  async function makeFood() {
    await addFood(brusselSprouts[0], '#brusselSprouts');
    await addFood(brusselSprouts[1], '#brusselSprouts');
    await addFood(brusselSprouts[2], '#brusselSprouts');
    await addFood(brusselSprouts[3], '#brusselSprouts');
    await addFood(brusselSprouts[4], '#brusselSprouts');
    await addFood(brusselSprouts[5], '#brusselSprouts');
    await addFood(brusselSprouts[6], '#brusselSprouts');
    await addFood(brusselSprouts[7], '#brusselSprouts');
    await addFood(brusselSprouts[8], '#brusselSprouts');
    var img = document.createElement('img'); 
    img.classList.add("img");
    img.src = '/public/images/brusselSprouts.jpg'
    imgContent.appendChild(img);
  }

const p3 = makeFood();

const arr = [p3]

console.log(arr)


function createBtn() {
  var btn = document.createElement('BUTTON'); 
  btn.textContent = "DINNER IS SERVED.";
  btnContent.appendChild(btn);
}




Promise.all(arr).then(createBtn)