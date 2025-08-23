// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// Iteration 1 - using callbacks
getInstruction(
  'mashedPotatoes',
  0,
  (step0) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`;

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
                    document.querySelector(
                      '#mashedPotatoes'
                    ).innerHTML += `<li><b>Mashed potatoes are ready!</b></li>`;
                    document
                      .querySelector('#mashedPotatoesImg')
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
    document.querySelector(
      '#steak'
    ).innerHTML += `<li><b>Steak is ready!</b></li>`;
    document.querySelector('#steakImg').removeAttribute('hidden');
  })
  .catch((err) => console.error(err));

// Iteration 3 using async/await
async function getBroccoli() {
  const broccoliHtml = (step) =>
    (document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`);
  try {
    const step0 = await obtainInstruction('broccoli', 0);
    broccoliHtml(step0);
    const step1 = await obtainInstruction('broccoli', 1);
    broccoliHtml(step1);
    const step2 = await obtainInstruction('broccoli', 2);
    broccoliHtml(step2);
    const step3 = await obtainInstruction('broccoli', 3);
    broccoliHtml(step3);
    const step4 = await obtainInstruction('broccoli', 4);
    broccoliHtml(step4);
    const step5 = await obtainInstruction('broccoli', 5);
    broccoliHtml(step5);
    const step6 = await obtainInstruction('broccoli', 6);
    broccoliHtml(step6);
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li class='li-bold'>Broccoli is ready!</li>`;

    document.querySelector('#broccoliImg').removeAttribute('hidden');
  } catch (error) {
    console.log(error);
  }
}
getBroccoli();
// Bonus 2 - Promise all
// ...
