// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// :luz_giratoria::luz_giratoria::luz_giratoria: comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
    //addFood(steak[i], '#steak');
    console.log(mashPotatoes[i])
}
// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
    // ... your code here
    for (let index = 1; index < 8; index++) {
        addFood(steak[index], '#steak', () => {})
    }
});
// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
    // ... your code here
    for (let index = 1; index < 5; index++) {
        addFood(mashPotatoes[index], '#mashPotatoes').then(() => [])
    }
});
// Iteration 3 using async and await
async function makeFood(step) {
    // ... your code here
    for (let index = 1; index < 5; index++) {
        try {
            let respuesta = await mashPotatoes[index];
            console.log(respuesta);
        } catch (error) {}
    }
}
makeFood(mashPotatoes);
async function makeFood(step, id) {
    for (let steps of step) {
        await addFood(steps, `#${id}`)
    }
    document.getElementById('table').innerHTML += `<img src= "public/images/${id}.jpg" >`
}
//makeFood(brusselSprouts, '#brusselSprouts');
Promise.all([
        makeFood(mashPotatoes, 'mashPotatoes'),
        makeFood(steak, 'steak'),
        makeFood(brusselSprouts, 'brusselSprouts')
    ])
    .then(() => document.body.innerHTML += `<button>Dinner is serverd!</button>`)