const steak = [
  obtainInstruction('steak', 0)
  .then(step0 => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then(step1 => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then(step2 => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then(step3 => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  // "season steak generously with salt, pepper and garlic powder",
  // "place in zip lock bag",
  // "cook in sous vide at 120 F for 1-2 hours",
  // "remove from bag and pat dry",
  // "heat pan with grapeseed oil and a quarter stick of butter",
  // "cook steak for 30-60 seconds per side using a spoon to baste with butter",
  // "rest for 10 minutes",
  // "enjoy",
  
];

const mashedPotatoes = [
  getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        });
      });
    });
  });
})
  // "boil water",
  // "tear open bag of of instant potato mix and pour into bowl",
  // "pour in water",
  // "mix",
  // "enjoy",
  
];

const brusselsSprouts = Promise.all([
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7),
]).then(steps => {
  const container = document.querySelector("#brusselsSprouts");

  steps.forEach(step => {
    container.innerHTML += `<li>${step}</li>`;
  });

  container.innerHTML += `<li>Brussels sprouts are ready!</li>`;
});

  // 'wash brussels sprouts',
  // 'cut off base and chop in half',
  // 'toss in bowl with olive oil, balsamic vinegar and salt',
  // 'preheat oven to 500 F',
  // 'coat baking sheet with olive oil',
  // 'roast in the oven for 20 minutes',
  // 'place back in bowl and add salt and pepper',
  // 'enjoy'
;

const broccoli = [
  async function makeBroccoli() {
  const step0 = await obtainInstruction('broccoli', 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

  const step1 = await obtainInstruction('broccoli', 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

  const step2 = await obtainInstruction('broccoli', 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

  const step3 = await obtainInstruction('broccoli', 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
},

makeBroccoli()
  // 'wash broccoli in cold water',
  // 'trim and cut the stalk in half, then finely slice it',
  // 'fill a pot with water, add a pinch of salt and bring to the boil',
  // 'once boiling, carefully lower the broccoli into the water',
  // 'cook for 3 to 4 minutes, or until tender',
  // 'drain, then leave to steam dry for a minute',
  // 'enjoy'
];