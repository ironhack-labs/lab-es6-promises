// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*   getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden"); 
  }, (error) => console.log(error));*/

// Iteration 1 - using callbacks
getInstruction(
  'mashedPotatoes',
  0,
  (step0) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`;
    // ... Your code here
    // ...
    getInstruction(
      'mashedPotatoes',
      1,
      (step1) => {
        document.querySelector(
          '#mashedPotatoes'
        ).innerHTML += `<li>${step1}</li>`;
        getInstruction(
          'mashedPotatoes',
          2,
          (step2) => {
            document.querySelector(
              '#mashedPotatoes'
            ).innerHTML += `<li>${step2}</li>`;
            getInstruction(
              'mashedPotatoes',
              3,
              (step3) => {
                document.querySelector(
                  '#mashedPotatoes'
                ).innerHTML += `<li>${step3}</li>`;
                getInstruction(
                  'mashedPotatoes',
                  4,
                  (step4) => {
                    document.querySelector(
                      '#mashedPotatoes'
                    ).innerHTML += `<li>${step4}</li>`;
                    document
                      .querySelector('#mashedPotatoesImg')
                      .removeAttribute('hidden');
                    document.querySelector(
                      '#mashedPotatoes'
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector('#steak').innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector('#steak').innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector('#steak').innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector('#steak').innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector('#steak').innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector('#steak').innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector('#steak').innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector('#steak').innerHTML += `<li>${step7}</li>`;
  })
  .catch((err) => {
    console.log('the error is: ', err);
  })
  .finally(() => {
    document.querySelector('#steakImg').removeAttribute('hidden');
    document.querySelector('#steak').innerHTML += `<li>Steak is ready</li>`;
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    for (let i = 0; i < broccoli.length; i++) {
      let curStep = await obtainInstruction('broccoli', i);
      document.querySelector('#broccoli').innerHTML += `<li>${curStep}</li>`;
    }
  } catch (err) {
    console.log('The error is: ', err);
  } finally {
    document.querySelector('#broccoliImg').removeAttribute('hidden');
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>Broccoli is ready</li>`;
  }
}
makeBroccoli();

// Bonus 2 - Promise all
const bruSpr0 = obtainInstruction('brusselsSprouts', 0);
const bruSpr1 = obtainInstruction('brusselsSprouts', 1);
const bruSpr2 = obtainInstruction('brusselsSprouts', 2);
const bruSpr3 = obtainInstruction('brusselsSprouts', 3);
const bruSpr4 = obtainInstruction('brusselsSprouts', 4);
const bruSpr5 = obtainInstruction('brusselsSprouts', 5);
const bruSpr6 = obtainInstruction('brusselsSprouts', 6);
const bruSpr7 = obtainInstruction('brusselsSprouts', 7);

Promise.all([
  bruSpr0,
  bruSpr1,
  bruSpr2,
  bruSpr3,
  bruSpr4,
  bruSpr5,
  bruSpr6,
  bruSpr7,
])
  .then((steps) => {
    steps.forEach((step) => {
      document.querySelector(
        '#brusselsSprouts'
      ).innerHTML += `<li>${step}</li>`;
    });
  })
  .catch((err) => {
    console.log('The error is:', err);
  })
  .finally(() => {
    document.querySelector(
      '#brusselsSprouts'
    ).innerHTML += `<li>The Brussels sprouts are ready</li>`;
    document.querySelector('#brusselsSproutsImg').removeAttribute('hidden');
  });
