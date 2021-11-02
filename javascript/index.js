// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
  getInstruction("mashedPotatoes", 0, (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction("mashedPotatoes", 1, (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
      getInstruction("mashedPotatoes", 2, (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
        getInstruction("mashedPotatoes", 3, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
          getInstruction("mashedPotatoes", 4, (step4) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
            document.querySelector('#mashedPotatoesImg').removeAttribute('hidden');
          });
        });
      });
    });
  }, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1) //return promise
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
 })
 .then((step2)=> {
  document.querySelector("#steak").innerHTML +=  `<li>${step2}</li>`;
  return obtainInstruction('steak', 3);
 })
 .then((step3)=> {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
  return obtainInstruction('steak', 4);
 })
 .then((step4)=> {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
  return obtainInstruction('steak', 5);
 })
 .then((step5)=> {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
  return obtainInstruction('steak', 6);
 })
 .then((step6)=> {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
  return obtainInstruction('steak', 7);
 })
 .then((step7)=> {
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  document.querySelector('#steak').innerHTML += `<li>Stake is ready!</li>`;
  document.querySelector('#steakImg').removeAttribute('hidden');
 })
 .catch(error => console.log(error));


// Iteration 3 using async/await
// async function makeBroccoli() {
// 	const step0 = await obtainInstruction('broccoli', 0);
// 	document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
// 	const step1 = await obtainInstruction('broccoli', 1);
// 	document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
// 	const step2 = await obtainInstruction('broccoli', 2);
// 	document.querySelector('#broccoli').innerHTML += `<li>${step2}</li/>`;
// 	const step3 = await obtainInstruction('broccoli', 3);
// 	document.querySelector('#broccoli').innerHTML += `<li>${step3}</li/>`;
// 	const step4 = await obtainInstruction('broccoli', 4);
// 	document.querySelector('#broccoli').innerHTML += `<li>${step4}</li/>`;
// 	const step5 = await obtainInstruction('broccoli', 5);
// 	document.querySelector('#broccoli').innerHTML += `<li>${step5}</li/>`;
// 	const step6 = await obtainInstruction('broccoli', 6);
// 	document.querySelector('#broccoli').innerHTML += `<li>${step6}</li/>`;
// 	document.querySelector('#broccoli').innerHTML += `<li>Broccoli is ready!</li/>`;
// }
//makeBroccoli().catch(error => console.error(error));

// loop over the steps
async function makeBroccoli() {
	//console.log(broccoli.length); // 7 items
	// loop over the steps
	for (let i = 0; i < broccoli.length; i ++) {
		await obtainInstruction('broccoli', i); // index is the number of step
		document.querySelector('#broccoli').innerHTML += `<li>${broccoli[i]}</li/>`;
	}
  document.querySelector('#broccoli').innerHTML += `<li>Broccoli is ready!</li/>`;
	document.querySelector('#broccoliImg').removeAttribute('hidden');
}
makeBroccoli();



// Bonus 2 - Promise all
function makebrussels() {
  // an array to keep all the pending promises
  let promises = [];
  // iterate over the array to obtain the pending promises
  for (let i = 0; i < brusselsSprouts.length; i ++) {
    // get the pending promise
    let promise = obtainInstruction('brusselsSprouts', i);
    // push every pending promise inside the array 'promises'
    promises.push(promise);
  }
  // return the array with all pending promises
  return promises;
}
const promisesBrusselsArray = makebrussels();
//console.log(promisesBrusselsArray)

// (8) [Promise, Promise, Promise, Promise, Promise, Promise, Promise, Promise]
// 0: Promise {<fulfilled>: 'wash brussels sprouts'}
// 1: Promise {<fulfilled>: 'cut off base and chop in half'}
// 2: Promise {<fulfilled>: 'toss in bowl with olive oil, balsamic vinegar and salt'}
// 3: Promise {<fulfilled>: 'preheat oven to 500 F'}
// 4: Promise {<fulfilled>: 'coat baking sheet with olive oil'}
// 5: Promise {<fulfilled>: 'roast in the oven for 20 minutes'}
// 6: Promise {<fulfilled>: 'place back in bowl and add salt and pepper'}
// 7: Promise {<fulfilled>: 'enjoy'}

// Take in the array of promises and retrieve the value
Promise.all(promisesBrusselsArray)
  .then(values => {
    for(let i = 0; i < promisesBrusselsArray.length; i ++) {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[i]}</li>`; // values[i] --> each step
    }
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch(error => console.log(error));