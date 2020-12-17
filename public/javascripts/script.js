// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code


//for (let i = 0; i < mashPotatoes.length; i++) {
//  addFood(steak[i], '#steak');
//  console.log(mashPotatoes[i])
//}

const steackImg = 'public/images/steak.jpg'
const potatoImg = 'public/images/mashPotatoes.jpg'
const brusselImg = 'public/images/brusselSprouts.jpg'

//document.getElementById('table').appendChild(steackImg)

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {

  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                displayImages(steackImg)

              })
            })
          })
        })
      })
    })
  })

});

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes'). then(() => {
          displayImages(potatoImg)
        })
      });
    });
  });
});

// Iteration 3 using async and await



async function makeFood(step) {
for (i = 0; i <= step; i++) {
  await addFood(brusselSprouts[i], '#brusselSprouts');
  
  }
  displayImages(brusselImg)
}

let steps = 8

const img1 = 
makeFood(steps);


function displayImages(image)
{
  let img=document.createElement("img");
  //img.src="public/images/brusselSprouts.jpg"
  img.src = image;
  let foo = document.getElementById("table");
  foo.appendChild(img);
}

