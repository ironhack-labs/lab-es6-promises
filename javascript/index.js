// ------------------------------------------------
// Iteration 1 - using callbacks (Mashed Potatoes)
// ------------------------------------------------

getInstruction('mashedPotatoes', 0, function (instruction) {
  const list = document.querySelector('#mashedPotatoes');
  list.innerHTML += `<li>${instruction}</li>`;

  getInstruction('mashedPotatoes', 1, function (instruction) {
    list.innerHTML += `<li>${instruction}</li>`;

    getInstruction('mashedPotatoes', 2, function (instruction) {
      list.innerHTML += `<li>${instruction}</li>`;

      getInstruction('mashedPotatoes', 3, function (instruction) {
        list.innerHTML += `<li>${instruction}</li>`;

        getInstruction('mashedPotatoes', 4, function (instruction) {
          list.innerHTML += `<li>${instruction}</li>`;
          list.innerHTML += `<li>Mashed potatoes are ready!</li>`;

          document
            .querySelector('#mashedPotatoesImg')
            .removeAttribute('hidden');
        });
      });
    });
  });
});

// ------------------------------------------------
// Iteration 2 - using promises (Steak)
// ------------------------------------------------

obtainInstruction('steak', 0)
  .then(step => {
    document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then(step => {
    document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then(step => {
    document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then(step => {
    document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then(step => {
    document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then(step => {
    document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then(step => {
    document.querySelector('#steak').innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then(step => {
    const steakList = document.querySelector('#steak');

    steakList.innerHTML += `<li>${step}</li>`;
    steakList.innerHTML += `<li>Steak is ready!</li>`;

    document.querySelector('#steakImg').removeAttribute('hidden');
  })
  .catch(err => console.error(err));

// ------------------------------------------------
// Iteration 3 - async/await (Broccoli)
// ------------------------------------------------

async function prepareBroccoli() {
  const broccoliList = document.querySelector('#broccoli');

  try {
    for (const [index] of broccoli.entries()) {
      const instruction = await obtainInstruction('broccoli', index);
      broccoliList.innerHTML += `<li>${instruction}</li>`;
    }

    broccoliList.innerHTML += `<li>Broccoli is ready!</li>`;

    document.querySelector('#broccoliImg').removeAttribute('hidden');
  } catch (err) {
    console.error(err);
  }
}

prepareBroccoli();

// ------------------------------------------------
// Bonus Iteration 5 - Promise.all (Brussels Sprouts)
// ------------------------------------------------

const sproutsSteps = brusselsSprouts.map((_, index) =>
  obtainInstruction('brusselsSprouts', index)
);

Promise.all(sproutsSteps)
  .then(results => {
    const sproutsList = document.querySelector('#brusselsSprouts');

    results.forEach(instruction => {
      sproutsList.innerHTML += `<li>${instruction}</li>`;
    });

    sproutsList.innerHTML += `<li>Brussels sprouts are ready!</li>`;

    document
      .querySelector('#brusselsSproutsImg')
      .removeAttribute('hidden');
  })
  .catch(err => console.error(err));