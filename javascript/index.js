// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

/* Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (preparation1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${preparation1}</li>`;
  },
  (error) => console.log(error),
);

getInstruction(
  "mashedPotatoes",
  1,
  (preparation2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${preparation2}</li>`;
  },
  (error) => console.log(error),
);

getInstruction(
  "mashedPotatoes",
  2,
  (preparation3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${preparation3}</li>`;
  },
  (error) => console.log(error),
);

getInstruction(
  "mashedPotatoes",
  3,
  (preparation4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${preparation4}</li>`;
  },
  (error) => console.log(error),
);

getInstruction(
  "mashedPotatoes",
  4,
  (preparation5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${preparation5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error),
);*/

// Iteration 1 - using callbacks
const mashedList = document.querySelector("#mashedPotatoes");

getInstruction("mashedPotatoes", 0, function (preparation1) {
  mashedList.innerHTML += `<li>${preparation1}</li>`;

  getInstruction("mashedPotatoes", 1, function (preparation2) {
    mashedList.innerHTML += `<li>${preparation2}</li>`;

    getInstruction("mashedPotatoes", 2, function (preparation3) {
      mashedList.innerHTML += `<li>${preparation3}</li>`;

      getInstruction("mashedPotatoes", 3, function (preparation4) {
        mashedList.innerHTML += `<li>${preparation4}</li>`;

        getInstruction("mashedPotatoes", 4, function (preparation5) {
          mashedList.innerHTML += `<li>${preparation5}</li>`;
          mashedList.innerHTML += "<li>Mashed potatoes are ready!</li>";
          document
            .querySelector("#mashedPotatoesImg")
            .removeAttribute("hidden");
        });
      });
    });
  });
});

// Iteration 2 - using promises
const steakList = document.querySelector("#steak");

function createListItem(text) {
  const item = document.createElement("li");
  item.textContent = text;
  return item;
}

obtainInstruction("steak", 0)
  .then(function (preparation1) {
    steakList.appendChild(createListItem(preparation1));
    return obtainInstruction("steak", 1);
  })
  .then(function (preparation2) {
    steakList.appendChild(createListItem(preparation2));
    return obtainInstruction("steak", 2);
  })
  .then(function (preparation3) {
    steakList.appendChild(createListItem(preparation3));
    return obtainInstruction("steak", 3);
  })
  .then(function (preparation4) {
    steakList.appendChild(createListItem(preparation4));
    return obtainInstruction("steak", 4);
  })
  .then(function (preparation5) {
    steakList.appendChild(createListItem(preparation5));
    return obtainInstruction("steak", 5);
  })
  .then(function (preparation6) {
    steakList.appendChild(createListItem(preparation6));
    return obtainInstruction("steak", 6);
  })
  .then(function (preparation7) {
    steakList.appendChild(createListItem(preparation7));
    const readyItem = document.createElement("li");
    readyItem.textContent = "Stake is ready!";
    steakList.appendChild(readyItem);
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  const broccoliList = document.querySelector("#broccoli");

  function createListItem(text) {
    const item = document.createElement("li");
    item.textContent = text;
    return item;
  }

  try {
    const preparation1 = await obtainInstruction("broccoli", 0);
    broccoliList.appendChild(createListItem(preparation1));

    const preparation2 = await obtainInstruction("broccoli", 1);
    broccoliList.appendChild(createListItem(preparation2));

    const preparation3 = await obtainInstruction("broccoli", 2);
    broccoliList.appendChild(createListItem(preparation3));

    const preparation4 = await obtainInstruction("broccoli", 3);
    broccoliList.appendChild(createListItem(preparation4));

    const preparation5 = await obtainInstruction("broccoli", 4);
    broccoliList.appendChild(createListItem(preparation5));

    const preparation6 = await obtainInstruction("broccoli", 5);
    broccoliList.appendChild(createListItem(preparation6));

    const preparation7 = await obtainInstruction("broccoli", 6);
    broccoliList.appendChild(createListItem(preparation7));

    const readyItem = document.createElement("li");
    readyItem.textContent = "Broccoli is ready!";
    broccoliList.appendChild(readyItem);

    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
const sproutsList = document.querySelector("#brusselsSprouts");

function createListItem(text) {
  const item = document.createElement("li");
  item.textContent = text;
  return item;
}

const sproutsPromises = [];

for (let i = 0; i < brusselsSprouts.length; i++) {
  sproutsPromises.push(obtainInstruction("brusselsSprouts", i));
}

Promise.all(sproutsPromises)
  .then((preparations) => {
    preparations.forEach((preparation) => {
      sproutsList.appendChild(createListItem(preparation));
    });

    const readyItem = document.createElement("li");
    readyItem.textContent = "Brussels sprouts are ready!";
    sproutsList.appendChild(readyItem);

    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));
