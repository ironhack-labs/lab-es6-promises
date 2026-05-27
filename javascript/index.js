// 🚨 COMMENT OUT THE STARTER CODE ABOVE BEFORE USING THIS

// Iteration 1 - using callbacks

getInstruction(
  'mashedPotatoes',
  0,
  (step0) => {

    document.querySelector('#mashedPotatoes')
      .innerHTML += `<li>${step0}</li>`;

    getInstruction(
      'mashedPotatoes',
      1,
      (step1) => {

        document.querySelector('#mashedPotatoes')
          .innerHTML += `<li>${step1}</li>`;

        getInstruction(
          'mashedPotatoes',
          2,
          (step2) => {

            document.querySelector('#mashedPotatoes')
              .innerHTML += `<li>${step2}</li>`;

            getInstruction(
              'mashedPotatoes',
              3,
              (step3) => {

                document.querySelector('#mashedPotatoes')
                  .innerHTML += `<li>${step3}</li>`;

                getInstruction(
                  'mashedPotatoes',
                  4,
                  (step4) => {

                    document.querySelector('#mashedPotatoes')
                      .innerHTML += `<li>${step4}</li>`;

                    document.querySelector('#mashedPotatoes')
                      .innerHTML += `<li>Mashed potatoes are ready!</li>`;

                    document.querySelector('#mashedPotatoesImg')
                      .removeAttribute('hidden');

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

    document.querySelector('#steak')
      .innerHTML += `<li>${step0}</li>`;

    return obtainInstruction('steak', 1);

  })

  .then((step1) => {

    document.querySelector('#steak')
      .innerHTML += `<li>${step1}</li>`;

    return obtainInstruction('steak', 2);

  })

  .then((step2) => {

    document.querySelector('#steak')
      .innerHTML += `<li>${step2}</li>`;

    return obtainInstruction('steak', 3);

  })

  .then((step3) => {

    document.querySelector('#steak')
      .innerHTML += `<li>${step3}</li>`;

    return obtainInstruction('steak', 4);

  })

  .then((step4) => {

    document.querySelector('#steak')
      .innerHTML += `<li>${step4}</li>`;

    return obtainInstruction('steak', 5);

  })

  .then((step5) => {

    document.querySelector('#steak')
      .innerHTML += `<li>${step5}</li>`;

    return obtainInstruction('steak', 6);

  })

  .then((step6) => {

    document.querySelector('#steak')
      .innerHTML += `<li>${step6}</li>`;

    return obtainInstruction('steak', 7);

  })

  .then((step7) => {

    document.querySelector('#steak')
      .innerHTML += `<li>${step7}</li>`;

    document.querySelector('#steak')
      .innerHTML += `<li>Steak is ready!</li>`;

    document.querySelector('#steakImg')
      .removeAttribute('hidden');

  })

  .catch((error) => {

    console.log(error);

  });


// Iteration 3 - async/await

async function makeBroccoli() {

  try {

    for (let i = 0; i < broccoli.length; i++) {

      const step =
        await obtainInstruction('broccoli', i);

      document.querySelector('#broccoli')
        .innerHTML += `<li>${step}</li>`;

    }

    document.querySelector('#broccoli')
      .innerHTML += `<li>Broccoli is ready!</li>`;

    document.querySelector('#broccoliImg')
      .removeAttribute('hidden');

  }

  catch(error) {

    console.log(error);

  }

}

makeBroccoli();


// Bonus 2 - Promise.all

const promises = [];

for (let i = 0; i < brusselsSprouts.length; i++) {

  promises.push(
    obtainInstruction('brusselsSprouts', i)
  );

}

Promise.all(promises)

  .then((steps) => {

    steps.forEach((step) => {

      document.querySelector('#brusselsSprouts')
        .innerHTML += `<li>${step}</li>`;

    });

    document.querySelector('#brusselsSprouts')
      .innerHTML += `<li>Brussels sprouts are ready!</li>`;

    document.querySelector('#brusselsSproutsImg')
      .removeAttribute('hidden');

  })

  .catch((error) => {

    console.log(error);

  });