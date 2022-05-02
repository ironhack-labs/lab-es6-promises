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
  (error) => console.log(error);
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    (error) => console.log(error);
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step3}</li>`;
      (error) => console.log(error);
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step4}</li>`;
        (error) => console.log(error);
        getInstruction(
          "mashedPotatoes",
          4,
          (step5) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step5}</li>`;
            (error) => console.log(error);
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>Mashed potatoes are ready</li>`;
            document
              .querySelector("#mashedPotatoesImg")
              .removeAttribute("hidden");
          },
          (error) => console.log(error)
        );
      });
    });
  });
});



// Iteration 2 - using promises
obtainInstruction("steak", 0).then((step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
  obtainInstruction("steak", 1).then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    obtainInstruction("steak", 2).then((step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
      obtainInstruction("steak", 3).then((step4) => {
        document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
        obtainInstruction("steak", 4).then((step5) => {
          document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
          obtainInstruction("steak", 5).then((step6) => {
            document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
            obtainInstruction("steak", 6).then((step7) => {
              document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
              obtainInstruction("steak", 7).then((step8) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step8}</li>`;

                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>Steak is ready!</li>`;
                document.querySelector("#steakImg").removeAttribute("hidden");
                
                
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
  let step0 = await obtainInstruction('broccoli',0);
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
  let step1 = await obtainInstruction('broccoli',1);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  let step2 = await obtainInstruction('broccoli',2);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
  let step3 = await obtainInstruction('broccoli',3);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
  let step4 = await obtainInstruction('broccoli',4);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
  let step5 = await obtainInstruction('broccoli',5);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
  let step6 = await obtainInstruction('broccoli',6);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
  let step7 = await obtainInstruction('broccoli',7);
  document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
 


} catch(err) {
  console.log(err)
} 
document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
document.querySelector("#broccoliImg").removeAttribute("hidden");

}

makeBroccoli()

// Bonus 2 - Promise all

const p1 = brusselsSprouts[0]

const p2 = brusselsSprouts[1]

const p3 = brusselsSprouts[2]

const p4 = brusselsSprouts[3]

const p5 = brusselsSprouts[4]

const p6 = brusselsSprouts[5]

const p7 = brusselsSprouts[6]

const p8 = brusselsSprouts[7]

 Promise.all( [p1,p2,p3,p4,p5,p6,p7,p8] )
  .then((value) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${p1}</li>`;
    
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${p2}</li>`;
    
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${p3}</li>`;
    
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${p4}</li>`;
    
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${p5}</li>`;
    
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${p6}</li>`;
    
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${p7}</li>`;

    document.querySelector("#brusselsSprouts").innerHTML += `<li>${p8}</li>`;

    document.querySelector("#brusselsSprouts").innerHTML += `<li> Brussels Sprouts are ready!</li>`;
document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })