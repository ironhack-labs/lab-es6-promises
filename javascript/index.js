// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction(
//   "mashedPotatoes",
//   0,
//   (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   1,
//   (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   2,
//   (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   3,
//   (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   4,
//   (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   },
//   (error) => console.log(error)
// );

// Iteration 1 - using callbacks
// ...
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step2}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step3}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step4}</li>`;
                    getInstruction(
                      "mashedPotatoes",
                      0,
                      (step5) => {
                        document.querySelector(
                          "#mashedPotatoes"
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
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
// ...

obtainInstruction("steak", 0).then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  //  ... Your code here
  obtainInstruction("steak", 1).then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    obtainInstruction("steak", 2).then((step0) => {
      document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
      //  ... Your code here
      obtainInstruction("steak", 3).then((step0) => {
        document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
        //  ... Your code here
        obtainInstruction("steak", 4).then((step0) => {
          document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
          //  ... Your code here
          obtainInstruction("steak", 5).then((step0) => {
            document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
            //  ... Your code here
            obtainInstruction("steak", 6).then((step0) => {
              document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
              //  ... Your code here
              obtainInstruction("steak", 7).then((step0) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step0}</li>`;
                obtainInstruction("steak", 0).then((step0) => {
                  document.querySelector(
                    "#steak"
                  ).innerHTML += `<li>Steak is ready!</li>`;
                  //  ... Your code here
                });
                //  ... Your code here
              });
            });
          });
        });
      });
    });
  });
});
// ... Your code here

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here
  try {
    let count = 0;
    while (count < 7) {
      await obtainInstruction("broccoli", count).then((step) => {
        document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
      });
      count++;
    }
    await obtainInstruction("broccoli", 0).then((step) => {
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>Broccoli is ready!</li>`;
    });
  } catch (e) {
    console.error(e);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
