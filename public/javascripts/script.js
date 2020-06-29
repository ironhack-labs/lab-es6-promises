// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/* for (let i = 0; i < steak.length; i++) {
  addFood(steak[i], '#steak');
}
 */
// Iteration 1 using callbacks

const addSteak = addFood(steak[0], '#steak', () => {
    addFood (steak[1], '#steak', () => {
      addFood (steak[2], '#steak', () => {
        addFood (steak[3], '#steak', () => {
          addFood (steak[4], '#steak', () => {
            addFood (steak[5], '#steak', () => {
              addFood (steak[6], '#steak', () => {
                addFood (steak[7], '#steak', () => {
                  loadImages(steakImg)   
                })
               })
              })
            })
          })
        })
      })   
          
});
            

// Iteration 2 using `.then()`
const addPotatoes = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood (mashPotatoes[1], '#mashPotatoes').then(() => {
   addFood (mashPotatoes[2], '#mashPotatoes').then(() => {
    addFood (mashPotatoes[3], '#mashPotatoes').then(() => {
      addFood (mashPotatoes[4], '#mashPotatoes').then(() => {
        loadImages(potatoesImg) 
     })
    })
   })
  })
});

// Iteration 3 using async and await

async function makeFood(){
  for (let i=0; i<brusselSprouts.length; i++){
    const step = brusselSprouts[i]
    await addFood(step, '#brusselSprouts') 
    }
    loadImages(brusselImg) 
}


// Bonus

const target = document.getElementById("table")
const imgs = ["steak.jpg", "mashPotatoes.jpg", "brusselSprouts.jpg"]

function loadImage(url) {
  return new Promise((res, rej) => {
    const img = new Image(); 
    img.src = "public/images/" + url; 

    img.onload = (evt) => {
      res(evt.target); 
    };
    img.onerror = (evt) => {
      rej(evt); 
    };
  });
}

  const steakImg = loadImage(imgs[0]);
  const potatoesImg = loadImage(imgs[1]);
  const brusselImg = loadImage(imgs[2]);

function loadImages(img) {
  Promise.all([img])
    .then((res) => {
      target.append(...res)
    })
    .catch((err) => {
      console.error(err);
    });
}


// BONUS 2

Promise.all([addSteak, addPotatoes, makeFood()]) 
    .then((res) => {
      res
     var text = document.createElement('button')
     text.innerHTML = `Dinner is served !`
     target.appendChild(text)
      
    })
    .catch((err) => {
      console.error(err);
    });


