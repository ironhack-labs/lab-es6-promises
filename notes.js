// first try 
getInstruction('mashedPotatoes', 0, (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction('mashedPotatoes', 1, (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
      getInstruction('mashedPotatoes', 2, (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
        getInstruction('mashedPotatoes', 3, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
          getInstruction('mashedPotatoes', 4, (step4) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`}
            ,(error) => console.log(error))}
          ,(error) => console.log(error))}
        ,(error) => console.log(error))
  }
    ,(error) => console.log(error))
    // ... Your code here
      // ...
  }, (error) => console.log(error));