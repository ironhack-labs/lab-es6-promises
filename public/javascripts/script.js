// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code

// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], '#steak');
//   // console.log(mashPotatoes[i])

// }

// Iteration 1 using callbacks

addFood(steak[0], '#steak', (res) => {
addFood(steak[1], '#steak', (res) => {
 addFood(steak[2], "#steak", (res) => {
addFood(steak[3], "#steak", (res) => {
addFood(steak[4], "#steak", (res) => {
addFood(steak[5], "#steak", (res) => {
addFood(steak[6], "#steak", (res) => {
  addFood(steak[7], "#steak", (res) => {
    let parent = document.getElementById('table')
    let steakImg = document.createElement('img');
    steakImg.src = 'public/images/steak.jpg';
    parent.appendChild(steakImg)
  });
});
});
});
    });
 });
  })
             
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(res=> {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(res=>{
    addFood(mashPotatoes[2], "#mashPotatoes").then((res) => {
  addFood(mashPotatoes[3], "#mashPotatoes").then((res) => {
      addFood(mashPotatoes[4], "#mashPotatoes").then((res) => {
          let parent = document.getElementById("table");
          let potatoeImg = document.createElement("img");
          potatoeImg.src = "public/images/mashPotatoes.jpg";
          parent.appendChild(potatoeImg);
      });
  });

    });
 
  })
         .catch((err) => {
    console.log(err);
});

//Iteration 3 using async and await
async function makeFood(step) {
  for (i = 0; i < step.length; i++) {
    await addFood(step[i], "#brusselSprouts");
  }
  await addFood(step[0], "#brusselSprouts");
  await addFood(step[1], "#brusselSprouts");
  await addFood(step[2], "#brusselSprouts");
  await addFood(step[3], "#brusselSprouts");
  await addFood(step[4], "#brusselSprouts");
  await addFood(step[5], "#brusselSprouts");
  await addFood(step[6], "#brusselSprouts");
  await addFood(step[7], "#brusselSprouts");
  await addFood(step[8], "#brusselSprouts");
  const brusselSprouts = document.createElement("img");
  brusselSprouts.src = "./public/images/brusselSprouts.jpg";
  document.getElementById("table").appendChild(brusselSprouts);

    let allThePromises = [];
  for (i = 0; i < step.length; i++) {
    const curentStepPromise = addFood(step[i], "#brusselSprouts");
    allThePromises.push(curentStepPromise);
}

const allTheResponses = await Promise.all(allThePromises);
  console.log(allTheResponses);
  const brusselSprouts = document.createElement("img");
  brusselSprouts.src = "./public/images/brusselSprouts.jpg";
  document.getElementById("table").appendChild(brusselSprouts);
    makeFood(eachStep);
}
 
