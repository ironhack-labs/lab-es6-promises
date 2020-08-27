/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */

// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code

/* for (let i = 0; i < mashPotatoes.length; i++) {
  addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
} */

// Iteration 1 using callbacks
/* const steakP = addFood(steak[0], '#steak', () => {
    addFood(steak[1], '#steak', () => {
        addFood(steak[2], '#steak', () => {
            addFood(steak[3], '#steak', () => {
                addFood(steak[4], '#steak', () => {
                    addFood(steak[5], '#steak', () => {
                        addFood(steak[6], '#steak', () => {
                            addFood(steak[7], '#steak', () => {
                                // Bonus 1
                                document.getElementById('table').innerHTML += '<img src="./public/images/steak.jpg">';
                            });
                        });
                    });
                });
            });
        });
    });
}); */

// Iteration 2 using `.then()`
/* const mashPotatoesP = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
            addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
                addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
                    // Bonus 1
                    document.getElementById('table').innerHTML += '<img src="./public/images/mashPotatoes.jpg">';
                });
            });
        });
    });
}); */

// Iteration 3 using async and await

function makeFood(step, id) {
    const newArr = [];
    console.log(step);
    for (let i = 0; i < step.length; i += 1) {
        newArr.push(addFood(step[i], id));
    }
    return newArr;
}

/* let brusselSproutsP;
let steakP;
let mashPotatoesP;

async function makeArrays() {  // WORK IN PROGRESS
    await brusselSproutsP = makeFood(brusselSprouts, '#brusselSprouts');
    await steakP = makeFood(steak, '#steak');
    await mashPotatoesP = makeFood(mashPotatoes, '#mashPotatoes'); // WORK IN PROGRESS
} */


// Bonuns 2

Promise.all([...brusselSproutsP]).then(() => {
    document.getElementById('table').innerHTML += '<img src="./public/images/brusselSprouts.jpg">'; // WORK IN PROGRESS
});

Promise.all([...steakP]).then(() => {
    document.getElementById('table').innerHTML += '<img src="./public/images/steak.jpg">'; // WORK IN PROGRESS
});

Promise.all(mashPotatoesP).then(() => {
    document.getElementById('table').innerHTML += '<img src="./public/images/mashPotatoes.jpg">'; // WORK IN PROGRESS
});
