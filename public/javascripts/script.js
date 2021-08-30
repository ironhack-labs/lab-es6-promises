// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
// 	//addFood(steak[i], '#steak');
// 	console.log(mashPotatoes[i]);
// }
//img steak
// let steakImg = new Image();
// steakImg.src = '/public/images/steak.jpg';
//img potato
// let potato = new Image();
// potato.src = '/public/images/mashPotatoes.jpg';
//img brussel
// let brussel = new Image();
// brussel.src = '../images/brusselSprouts.jpg';
//https://stackoverflow.com/questions/2735881/adding-images-to-an-html-document-with-javascript
//table
let table = document.getElementById('table');

// Iteration 1 using callbacks
const food1 = addFood(steak[0], '#steak', () => {
	// ... your code here
	addFood(steak[1], '#steak', () => {
		addFood(steak[2], '#steak', () => {
			addFood(steak[3], '#steak', () => {
				addFood(steak[4], '#steak', () => {
					addFood(steak[5], '#steak', () => {
						addFood(steak[6], '#steak', () => {
							addFood(steak[7], '#steak', () => {
								//alert('Hello');
								let steakImg = new Image();
								steakImg.src = '/public/images/steak.jpg';
								steakImg.onload = () => {
									table.appendChild(steakImg);
								};
							});
						});
					});
				});
			});
		});
	});
});

// Iteration 2 using `.then()`
const food2 = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
	// ... your code here
	addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
		addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
			addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
				addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
					let potato = new Image();
					potato.src = '/public/images/mashPotatoes.jpg';
					potato.onload = () => {
						table.appendChild(potato);
					};
				});
			});
		});
	});
});

// Iteration 3 using async/await
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
async function makeFood(step, id) {
	// ... your code here
	for (let i = 0; i < step.length; i++) {
		await addFood(step[i], id);
	}
	let brussel = new Image();
	brussel.src = '/public/images/brusselSprouts.jpg';
	brussel.onload = () => {
		table.appendChild(brussel);
	};
}
const food3 = makeFood(brusselSprouts, '#brusselSprouts');

Promise.all([ food1, food2, food3 ])
	.then(() => {
		alert('Dinner time');
	})
	.catch(() => {
		alert('No dinner time');
	});
