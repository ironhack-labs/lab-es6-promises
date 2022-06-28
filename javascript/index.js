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



// Iteration 1 - using callbacks
// ...
getInstruction('mashedPotatoes', 0, (val0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${val0}</li>`;
  getInstruction('mashedPotatoes', 1, (val1)=>{
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${val1}</li>`;
    getInstruction('mashedPotatoes', 2, (val2)=>{
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${val2}</li>`;
      getInstruction('mashedPotatoes', 3, (val3)=>{
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${val3}</li>`;     
        getInstruction('mashedPotatoes', 4, (val4)=>{
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${val4}</li>`;
          getInstruction('mashedPotatoes', 5, null, ()=>{
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          })
        },(err)=>console.log(err))
      },(err)=>console.log(err))
     },(err)=>console.log(err))
  },(err)=>console.log(err))
});
// Iteration 2 - using promises
  // obtainInstruction('steak', 0).then( (qty0) => {
  //   document.querySelector("#steak").innerHTML += `<li>${qty0}</li>`;
  //   obtainInstruction('steak', 1).then( (qty1) => {
  //     document.querySelector("#steak").innerHTML += `<li>${qty1}</li>`;
  //     obtainInstruction('steak', 2).then( (qty2) => {
  //       document.querySelector("#steak").innerHTML += `<li>${qty2}</li>`;
  //       obtainInstruction('steak', 3).then( (qty3) => {
  //         document.querySelector("#steak").innerHTML += `<li>${qty3}</li>`;
  //         obtainInstruction('steak', 4).then( (qty4) => {
  //           document.querySelector("#steak").innerHTML += `<li>${qty4}</li>`;
  //           obtainInstruction('steak', 5).then( (qty5) => {
  //             document.querySelector("#steak").innerHTML += `<li>${qty5}</li>`;
  //             obtainInstruction('steak', 6).then( (qty6) => {
  //               document.querySelector("#steak").innerHTML += `<li>${qty6}</li>`;
  //               obtainInstruction('steak', 7).then( (qty7) => {
  //                 document.querySelector("#steak").innerHTML += `<li>${qty7}</li>`;
  //                 obtainInstruction('steak', 8).catch(()=>{
  //                   document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
  //                   document.querySelector("#steakImg").removeAttribute("hidden");
  //                 })
  //               });
  //             });
  //           });
  //         });
  //       });
  //     });
  //   });
  // });
  obtainInstruction('steak', 0)
    .then((qty0) => {
      document.querySelector("#steak").innerHTML += `<li>${qty0}</li>`;
      return obtainInstruction('steak', 1)
    })
    .then((qty1) => {
      document.querySelector("#steak").innerHTML += `<li>${qty1}</li>`;
      return obtainInstruction('steak', 2)
    }).then((qty2) => {
      document.querySelector("#steak").innerHTML += `<li>${qty2}</li>`;
      return obtainInstruction('steak', 3)
    }).then((qty3) => {
      document.querySelector("#steak").innerHTML += `<li>${qty3}</li>`;
      return obtainInstruction('steak', 4)
    }).then( (qty4) => {
      document.querySelector("#steak").innerHTML += `<li>${qty4}</li>`;
      return obtainInstruction('steak', 5)
    }).then( (qty5) => {
      document.querySelector("#steak").innerHTML += `<li>${qty5}</li>`;
      return obtainInstruction('steak', 6)
    }).then((qty6) => {
      document.querySelector("#steak").innerHTML += `<li>${qty6}</li>`;
      return obtainInstruction('steak', 7)
    }).then((qty7) => {
      document.querySelector("#steak").innerHTML += `<li>${qty7}</li>`;
      return obtainInstruction('steak', 8)
    }).catch(()=>{
      document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
      document.querySelector("#steakImg").removeAttribute("hidden");
    });
  // ... Your code here

// Iteration 3 using async/await
async function makeBroccoli() {
  const qty0 = await obtainInstruction('broccoli', 0);
  document.querySelector("#broccoli").innerHTML += `<li>${qty0}</li>`;

  const qty1 = await obtainInstruction('broccoli', 1);
  document.querySelector("#broccoli").innerHTML += `<li>${qty1}</li>`;

  const qty2 = await obtainInstruction('broccoli', 2);
  document.querySelector("#broccoli").innerHTML += `<li>${qty2}</li>`;

  const qty3 = await obtainInstruction('broccoli', 3);
  document.querySelector("#broccoli").innerHTML += `<li>${qty3}</li>`;

  const qty4 = await obtainInstruction('broccoli', 4);
  document.querySelector("#broccoli").innerHTML += `<li>${qty4}</li>`;

  const qty5 = await obtainInstruction('broccoli', 5);
  document.querySelector("#broccoli").innerHTML += `<li>${qty5}</li>`;

  const qty6 = await obtainInstruction('broccoli', 6);
  document.querySelector("#broccoli").innerHTML += `<li>${qty6}</li>`;

  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;

  document.querySelector("#broccoliImg").removeAttribute("hidden");

  
}
makeBroccoli();  
    
  
 


// Bonus 2 - Promise all
// ...     