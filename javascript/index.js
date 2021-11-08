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

// ---- comment out callbacks (iteration 1) to see promises (iteration 2) ---- //

Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, step0 => {
  document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, step1 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, step2 => {
      document.querySelector(
        '#mashedPotatoes'
      ).innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, step3 => {
        document.querySelector(
          '#mashedPotatoes'
        ).innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, step4 => {
          document.querySelector(
            '#mashedPotatoes'
          ).innerHTML += `<li>${step4}</li>`;
          getInstruction('mashedPotatoes', 4, () => {
            document.querySelector(
              '#mashedPotatoes'
            ).innerHTML += `<li>${`Mashed potatoes are ready!`}</li>`;
            document
              .querySelector('#mashedPotatoesImg')
              .removeAttribute('hidden');
          });
        });
      });
    });
  });
});

getInstruction('steak', 0, step0 => {
  document.querySelector('#steak').innerHTML += `<li>${step0}</li>`;
  getInstruction('steak', 1, step1 => {
    document.querySelector('#steak').innerHTML += `<li>${step1}</li>`;
    getInstruction('steak', 2, step2 => {
      document.querySelector('#steak').innerHTML += `<li>${step2}</li>`;
      getInstruction('steak', 3, step3 => {
        document.querySelector('#steak').innerHTML += `<li>${step3}</li>`;
        getInstruction('steak', 4, step4 => {
          document.querySelector('#steak').innerHTML += `<li>${step4}</li>`;
          getInstruction('steak', 5, step5 => {
            document.querySelector('#steak').innerHTML += `<li>${step5}</li>`;
            getInstruction('steak', 6, step6 => {
              document.querySelector('#steak').innerHTML += `<li>${step6}</li>`;
              getInstruction('steak', 7, step7 => {
                document.querySelector(
                  '#steak'
                ).innerHTML += `<li>${step7}</li>`;
                document.querySelector('#steakImg').removeAttribute('hidden');
              });
            });
          });
        });
      });
    });
  });
});

getInstruction('brusselsSprouts', 0, step0 => {
  document.querySelector('#brusselsSprouts').innerHTML += `<li>${step0}</li>`;
  getInstruction('brusselsSprouts', 1, step1 => {
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step1}</li>`;
    getInstruction('brusselsSprouts', 2, step2 => {
      document.querySelector(
        '#brusselsSprouts'
      ).innerHTML += `<li>${step2}</li>`;
      getInstruction('brusselsSprouts', 3, step3 => {
        document.querySelector(
          '#brusselsSprouts'
        ).innerHTML += `<li>${step3}</li>`;
        getInstruction('brusselsSprouts', 4, step4 => {
          document.querySelector(
            '#brusselsSprouts'
          ).innerHTML += `<li>${step4}</li>`;
          getInstruction('brusselsSprouts', 5, step5 => {
            document.querySelector(
              '#brusselsSprouts'
            ).innerHTML += `<li>${step5}</li>`;
            getInstruction('brusselsSprouts', 6, step6 => {
              document.querySelector(
                '#brusselsSprouts'
              ).innerHTML += `<li>${step6}</li>`;
              getInstruction('brusselsSprouts', 7, step7 => {
                document.querySelector(
                  '#steak'
                ).innerHTML += `<li>${step7}</li>`;
                document
                  .querySelector('#brusselsSproutsImg')
                  .removeAttribute('hidden');
              });
            });
          });
        });
      });
    });
  });
});

getInstruction('broccoli', 0, step0 => {
  document.querySelector('#broccoli').innerHTML += `<li>${step0}</li>`;
  getInstruction('broccoli', 1, step1 => {
    document.querySelector('#broccoli').innerHTML += `<li>${step1}</li>`;
    getInstruction('broccoli', 2, step2 => {
      document.querySelector('#broccoli').innerHTML += `<li>${step2}</li>`;
      getInstruction('broccoli', 3, step3 => {
        document.querySelector('#broccoli').innerHTML += `<li>${step3}</li>`;
        getInstruction('broccoli', 4, step4 => {
          document.querySelector('#broccoli').innerHTML += `<li>${step4}</li>`;
          getInstruction('broccoli', 5, step5 => {
            document.querySelector(
              '#broccoli'
            ).innerHTML += `<li>${step5}</li>`;
            getInstruction('broccoli', 6, step6 => {
              document.querySelector(
                '#broccoli'
              ).innerHTML += `<li>${step6}</li>`;
              document.querySelector('#broccoliImg').removeAttribute('hidden');
            });
          });
        });
      });
    });
  });
});


/////////////////////////////////////////////////////////////////////
// ---- comment out promises (below) to see callbacks (above) ---- //

// Iteration 2 - using promises
obtainInstruction('mashedPotatoes', 0)
  .then(step0 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('mashedPotatoes', 1);
  })
  .then(step1 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('mashedPotatoes', 2);
  })
  .then(step2 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('mashedPotatoes', 3);
  })
  .then(step3 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('mashedPotatoes', 4);
  })
  .then(step4 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step4}</li>`;
    document.querySelector('#mashedPotatoesImg').removeAttribute('hidden');
  });

obtainInstruction('steak', 0)
  .then(step0 => {
    document.querySelector('#steak').innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then(step1 => {
    document.querySelector('#steak').innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then(step2 => {
    document.querySelector('#steak').innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then(step3 => {
    document.querySelector('#steak').innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then(step4 => {
    document.querySelector('#steak').innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then(step5 => {
    document.querySelector('#steak').innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then(step6 => {
    document.querySelector('#steak').innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then(step7 => {
    document.querySelector('#steak').innerHTML += `<li>${step7}</li>`;
    document.querySelector('#steakImg').removeAttribute('hidden');
  });

obtainInstruction('brusselsSprouts', 0)
  .then(step0 => {
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('brusselsSprouts', 1);
  })
  .then(step1 => {
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('brusselsSprouts', 2);
  })
  .then(step2 => {
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('brusselsSprouts', 3);
  })
  .then(step3 => {
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('brusselsSprouts', 4);
  })
  .then(step4 => {
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('brusselsSprouts', 5);
  })
  .then(step5 => {
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('brusselsSprouts', 6);
  })
  .then(step6 => {
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('brusselsSprouts', 7);
  })
  .then(step7 => {
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step7}</li>`;
    document.querySelector('#brusselsSproutsImg').removeAttribute('hidden');
  });

obtainInstruction('broccoli', 0)
  .then(step0 => {
    document.querySelector('#broccoli').innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('broccoli', 1);
  })
  .then(step1 => {
    document.querySelector('#broccoli').innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('broccoli', 2);
  })
  .then(step2 => {
    document.querySelector('#broccoli').innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('broccoli', 3);
  })
  .then(step3 => {
    document.querySelector('#broccoli').innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('broccoli', 4);
  })
  .then(step4 => {
    document.querySelector('#broccoli').innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('broccoli', 5);
  })
  .then(step5 => {
    document.querySelector('#broccoli').innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('broccoli', 6);
  })
  .then(step6 => {
    document.querySelector('#broccoli').innerHTML += `<li>${step6}</li>`;
  });
document.querySelector('#broccoliImg').removeAttribute('hidden');

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...
