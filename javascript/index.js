// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction(
    "mashedPotatoes",
    1,
    (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
      getInstruction(
        "mashedPotatoes",
        2,
        (step2) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
          getInstruction(
            "mashedPotatoes",
            3,
            (step3) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
              getInstruction(
                "mashedPotatoes",
                4,
                (step4) => {
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
                  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
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
});

// Iteration 2 - using promises
// ...

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...
