// Iteration 1 - using callbacks
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
                    setTimeout(() => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready</li>`, 2000})
                  },
                  (error) => {
                    console.log(error);
                  }
                );
              },
              (error) => {
                console.log(error);
              }
            );
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);


// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    const result = steak[0];
    return result;
  })
  .then((step1) => {
    
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    const result = steak[1];
    return result;
  })
  .then((step2) => {
    
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    const result = steak[2];
    return result;
  })
  .then((step3) => {
    
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    const result = steak[3];
    return result;
  })
  .then((step4) => {
    
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    const result = steak[4];
    return result;
  })
  .then((step5) => {
    
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    const result = steak[5];
    return result;
  })
  .then((step6) => {
    
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    const result = steak[6];
    return result;
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    const result = steak[7];
    return result;
  })
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
  })  
  .catch(function (err) {
    return err;
  });




//iteration 3 - async and await
async function makeBroccoli() {
      try {
          await obtainInstruction("broccoli",0) 
          document.querySelector("#broccoli").innerHTML += `<li>${broccoli[0]}</li>`;
          await obtainInstruction("broccoli",1) 
          document.querySelector("#broccoli").innerHTML += `<li>${broccoli[1]}</li>`;
          await obtainInstruction("broccoli",2) 
          document.querySelector("#broccoli").innerHTML += `<li>${broccoli[2]}</li>`;
          await obtainInstruction("broccoli",3)
          document.querySelector("#broccoli").innerHTML += `<li>${broccoli[3]}</li>`;
          await obtainInstruction("broccoli",4)
          document.querySelector("#broccoli").innerHTML += `<li>${broccoli[4]}</li>`;
          await obtainInstruction("broccoli",5)
          document.querySelector("#broccoli").innerHTML += `<li>${broccoli[5]}</li>`;
          await obtainInstruction("broccoli",6)
          document.querySelector("#broccoli").innerHTML += `<li>${broccoli[6]}</li>`;
          document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
        } catch (err){
          return err
        }
      }

  makeBroccoli()