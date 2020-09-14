// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//for (let i = 0; i < mashPotatoes.length; i++) {
//addFood(steak[i], '#steak');
//console.log(mashPotatoes[i])
//}

// Iteration 1 using callbacks

let p1 = addFood(steak[0], '#steak', () => {
    // ... your code here
    addFood(steak[1], '#steak', () => {
        addFood(steak[2], '#steak', () => {
            addFood(steak[3], '#steak', () => {
                addFood(steak[4], '#steak', () => {
                    addFood(steak[5], '#steak', () => {
                        addFood(steak[6], '#steak', () => {
                            addFood(steak[7], '#steak', () => {
                                document.querySelectorAll("img")[1].classList.remove("hidden");
                                console.log("steak");
                            });
                        });
                    });
                });
            });
        });
    });
});




// Iteration 2 using `.then()`

let p2 = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
    // ... your code here
    addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
            addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
                addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
                    document.querySelectorAll("img")[0].classList.remove("hidden");
                    console.log("potato");
                });
            });
        });
    });
});


// Iteration 3 using async and await

async function makeFood(step) {
    // ... your code here
    await addFood(brusselSprouts[step], '#brusselSprouts');
}

async function showSprout() {
    for (let i = 0; i < brusselSprouts.length; i++) {
        await makeFood(i);
    }
    document.querySelectorAll("img")[2].classList.remove("hidden");
    console.log("sprout");
}
//showSprout();

const p3 = showSprout();
let audio = new Audio("../../public/media/dinnerIsServed.mp3");

Promise.all([p1, p2, p3])
    .then(() => {
        console.log([p1, p2, p3]);
        let btn = document.createElement("button");
        btn.innerText = "Dinner is served !";
        btn.onclick = audio.play;
        document.getElementById("steps").appendChild(btn);
        console.log("dinner");
    })
    .catch((err) => {
        console.log(err);
    });



// -------------------->


// async function makeFood2(steps, id) {
//     for (const step of steps) await addFood(step, id);
//     document.querySelector(
//         "#table"
//     ).innerHTML += `<img src="public/images/${id.replace("#", "")}.jpg" />`;
// }

// Promise.all([
//         makeFood2(steak, "#steak"),
//         makeFood2(brusselSprouts, "#brusselSprouts"),
//         makeFood2(mashPotatoes, "#mashPotatoes"),
//     ])
//     .then((res) => {
//         document.body.innerHTML += `<button onclick="new Audio('public/media/dinnerIsServed.mp3').play()">Dinner is served.</button>`;
//     })
//     .catch((err) => console.error(err));