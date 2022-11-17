// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/* getInstruction(
  'mashedPotatoes',
  0,
  (step1) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  1,
  (step2) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  2,
  (step3) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  3,
  (step4) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  4,
  (step5) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step5}</li>`;
    document.querySelector('#mashedPotatoesImg').removeAttribute('hidden');
  },
  (error) => console.log(error)
); */

// Iteration 1 - using callbacks
getInstruction(
  'mashedPotatoes',
  0,
  (res) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${res}</li>`;
    getInstruction('mashedPotatoes', 1, (res) => {
      document.querySelector('#mashedPotatoes').innerHTML += `<li>${res}</li>`;
      getInstruction('mashedPotatoes', 2, (res) => {
        document.querySelector(
          '#mashedPotatoes'
        ).innerHTML += `<li>${res}</li>`;
        getInstruction('mashedPotatoes', 3, (res) => {
          document.querySelector(
            '#mashedPotatoes'
          ).innerHTML += `<li>${res}</li>`;
          getInstruction('mashedPotatoes', 4, (res) => {
            document.querySelector(
              '#mashedPotatoes'
            ).innerHTML += `<li>${res}</li>`;
            document
              .querySelector('#mashedPotatoesImg')
              .removeAttribute('hidden');
            document.querySelector(
              '#mashedPotatoes'
            ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
          });
        });
      });
    });
  },
  (err) => {
    console.error(err);
  }
);
// ...

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((res) => {
    document.querySelector('#steak').innerHTML += `<li>${res}</li>`;
    obtainInstruction('steak', 1).then((res) => {
      document.querySelector('#steak').innerHTML += `<li>${res}</li>`;
      obtainInstruction('steak', 2).then((res) => {
        document.querySelector('#steak').innerHTML += `<li>${res}</li>`;
        obtainInstruction('steak', 3).then((res) => {
          document.querySelector('#steak').innerHTML += `<li>${res}</li>`;
          obtainInstruction('steak', 4).then((res) => {
            document.querySelector('#steak').innerHTML += `<li>${res}</li>`;
            obtainInstruction('steak', 5).then((res) => {
              document.querySelector('#steak').innerHTML += `<li>${res}</li>`;
              obtainInstruction('steak', 6).then((res) => {
                document.querySelector('#steak').innerHTML += `<li>${res}</li>`;
                obtainInstruction('steak', 7).then((res) => {
                  document.querySelector(
                    '#steak'
                  ).innerHTML += `<li>${res}</li>`;
                  document.querySelector('#steakImg').removeAttribute('hidden');
                });
              });
            });
          });
        });
      });
    });
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    document.querySelector('#steak').innerHTML += `<li>Stake is ready!</li>`;
  });
// ...

// Iteration 3 using async/await
async function getBroccoli(vegetable) {
  let res = await obtainInstruction(vegetable, 0);
  document.querySelector('#broccoli').innerHTML += `<li>${res}</li>`;

  res = await obtainInstruction(vegetable, 1);
  document.querySelector('#broccoli').innerHTML += `<li>${res}</li>`;

  res = await obtainInstruction(vegetable, 2);
  document.querySelector('#broccoli').innerHTML += `<li>${res}</li>`;

  res = await obtainInstruction(vegetable, 3);
  document.querySelector('#broccoli').innerHTML += `<li>${res}</li>`;

  res = await obtainInstruction(vegetable, 4);
  document.querySelector('#broccoli').innerHTML += `<li>${res}</li>`;

  res = await obtainInstruction(vegetable, 5);
  document.querySelector('#broccoli').innerHTML += `<li>${res}</li>`;

  res = await obtainInstruction(vegetable, 6);
  document.querySelector('#broccoli').innerHTML += `<li>${res}</li>`;
  document.querySelector('#broccoliImg').removeAttribute('hidden');
  document.querySelector(
    '#broccoli'
  ).innerHTML += `<li>Broccoli is ready!</li>`;
}
// ...

// Bonus 2 - Promise all
Promise.all([
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7),
])
  .then((values) => {
    values.forEach((value, index) => {
      document.querySelector(
        '#brusselsSprouts'
      ).innerHTML += `<li>${value}</li>`;
      if (index === 7)
        document.querySelector('#brusselsSproutsImg').removeAttribute('hidden');
    });
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    document.querySelector(
      '#brusselsSprouts'
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
  });
// ...

getBroccoli('broccoli');
