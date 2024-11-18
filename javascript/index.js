// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*  getInstruction("mashedPotatoes", 0, (step1) => {
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
 }, (error) => console.log(error)); */


// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          document.querySelector("#mashedPotatoes").innerHTML += `<li>foods ready</li>`;
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
//create promise
/* const promise1 = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    resolve('yes');
  } else { reject('no'); }
});
const promise2 = new Promise((resolve, reject) => {
  if (2 + 3 === 5) {
    resolve('yes');
  } else { reject('no'); }
}); */

//consume promise
/* promise1
  .then((response1) => {
    console.log(response1);
    return promise2;
  })
  .then((response2) => {
    console.log(response2);
  })
  .catch((err) => {
    console.log(err);
  }); */

obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await
//const handlePromises = async () =>{}
/* async function handlePromises(params) {
  try {
    const myPromise1 = await promise1;
    // console.log(myPromise1);
    const myPromise2 = await promise2;
    console.log(myPromise1, myPromise2);
    
    } catch (error) {
      console.log(error);
      }
      finally {
        console.log('finally');
        
        }
        } */
//handlePromises();
async function makeBrocc() {
  try {
    //const brokelResponse1 = await obtainInstruction('broccoli', 0);
    const brokelResponse2 = await obtainInstruction('broccoli', 1);
    const brokelResponse3 = await obtainInstruction('broccoli', 2);
    const brokelResponse4 = await obtainInstruction('broccoli', 3);
    const brokelResponse5 = await obtainInstruction('broccoli', 4);
    const brokelResponse6 = await obtainInstruction('broccoli', 5);
    const brokelResponse7 = await obtainInstruction('broccoli', 6);


    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 0)}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${brokelResponse2}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${brokelResponse3}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${brokelResponse4}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${brokelResponse5}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${brokelResponse6}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${brokelResponse7}</li>`;
  } catch (error) {
    console.log(error);

  } finally {
    document.querySelector("#broccoli").innerHTML += `<li>brocc is ready</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }
}
makeBrocc();

// Bonus 2 - Promise all
/* const handleAllPromises = async () => {
  try {
    const allResponses = await Promise.all([promise1, promise2]);
    console.log(allResponses);
  } catch (error) {
    console.log(error);
  }
};
handleAllPromises(); */

/* // Fetch call to handle a promise
fetch("<https://rickandmortyapi.com/api/character>") // API endpoint to fetch data
.then((response) => {
console.log("The response", response); // Log the raw response from the API
return response.json(); // Convert the response to JSON format and return it
})
.then((data) => {
console.log("The data", data); // Log the parsed JSON data
})
.catch((err) => {
console.log(err); // Log any errors that occur during the fetch or JSON parsing
}); */

async function allTheSprouts() {
  try {
    const allResponses = await Promise.all([
      obtainInstruction('brusselsSprouts', 0),
      obtainInstruction('brusselsSprouts', 1),
      obtainInstruction('brusselsSprouts', 2),
      obtainInstruction('brusselsSprouts', 3),
      obtainInstruction('brusselsSprouts', 4),
      obtainInstruction('brusselsSprouts', 5),
      obtainInstruction('brusselsSprouts', 6),
      obtainInstruction('brusselsSprouts', 7),
    ]);
    allResponses.forEach((response) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${response}</li>`;
    });
  } catch (error) {
    console.log(error);

  } finally {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>sprouts are ready</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  }
};
allTheSprouts();