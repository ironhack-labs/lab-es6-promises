const area = document.querySelector("#table")

let carne = document.createElement("img");
let papa = document.createElement("img");
let brocolito = document.createElement("img");

window.onload = function() {
        carne.src = "./public/images/steak.jpg",
            papa.src = "./public/images/mashPotatoes.jpg",
            brocolito.src = "./public/images/brusselSprouts.jpg"
    }
    // This will print in the wrong order
    // we added it for you to test to make sure data is loaded
    // 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
    //addFood(steak[i], '#steak');
    console.log(mashPotatoes[i])
}



// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
    // ... your code here


    addFood(steak[1], '#steak', () => {
        addFood(steak[2], '#steak', () => {
            addFood(steak[3], '#steak', () => {
                addFood(steak[4], '#steak', () => {
                    addFood(steak[5], '#steak', () => {
                        addFood(steak[6], '#steak', () => {
                            addFood(steak[7], '#steak', )
                            table.appendChild(carne)
                                // area.innerHTML += `
                                // <img src="./public/images/steak.jpg"/>` Con este se movian las img como querían
                        })
                    })
                })
            })
        })
    })
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes')
    .then(() => { addFood(mashPotatoes[1], '#mashPotatoes') })
    .then(() => { addFood(mashPotatoes[2], '#mashPotatoes') })
    .then(() => { addFood(mashPotatoes[3], '#mashPotatoes') })
    .then(() => { addFood(mashPotatoes[4], '#mashPotatoes') })
    .then(() => { addFood(mashPotatoes[5], '#mashPotatoes') });
table.appendChild(papa)
    // .then(() => { table.appendChild(papa) });

// area.innerHTML += `
//     <img src="./public/images/mashPotatoes.jpg"/>` CON ESTE SE MOVIAN MIS IMG COMO QUERÍAN

// Iteration 3 using async and await

async function makeFood(step) {

    for (index = 0; index < step.length; index++) {
        await addFood(step[index], '#brusselSprouts')
    }
}
makeFood(brusselSprouts);


table.appendChild(brocolito)


Promise.all([
        makeFood(steak),
        makeFood(mashPotatoes),
        makeFood(brusselSprouts),
    ])
    .then(() => setTimeout(() => alert("Dinner is served!"), 200))
    //Codigos erróneos
    // await addFood(step[0],;
    // makeFood(eachStep);
    //     area.innerHTML +=
    //         `<img src="./public/images/brusselSprouts.jpg"/>`