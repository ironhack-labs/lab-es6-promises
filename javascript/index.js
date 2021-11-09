// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*getInstruction("mashedPotatoes", 0, (step1) => {
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
  }, (error) => console.log(error));

*/

// Iteration 1 - using callbacks
// ...
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li> ${step5} </li>`;
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>mashedPotatoes is ready</li>`
                    document.getElementById("mashedPotatoesImg").style.display = "block"
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
function obtainInstruction(food, step)  {
  return new Promise (function (resolve, reject) {
     setTimeout(() => {
      let instruction;
      if (food === "mashedPotatoes") {
        instruction = mashedPotatoes[step];
      }
      else if (food === "steak") {
        instruction = steak[step];
      }
      else if (food === "brusselsSprouts") {
        instruction = brusselsSprouts[step];
      }
      else if (food === "broccoli") {
        instruction = broccoli[step];
      };
      if (!instruction) 
      reject("Instructions not found.")
      else resolve(instruction);
    }, 2000); 
  })
};
obtainInstruction("steak",0).then(function(val) {
  document.querySelector("#steak").innerHTML += `<li>${val}</li>`
  obtainInstruction("steak",1)
}
)
obtainInstruction("steak",1).then(function(val) {
  document.querySelector("#steak").innerHTML += `<li>${val}</li>`
  obtainInstruction("steak",2)
}
)
obtainInstruction("steak",2).then(function(val) {
  document.querySelector("#steak").innerHTML += `<li>${val}</li>`
  obtainInstruction("steak",3)
}
)
obtainInstruction("steak",3).then(function(val) {
  document.querySelector("#steak").innerHTML += `<li>${val}</li>`
  obtainInstruction("steak",4)
}
)
obtainInstruction("steak",4).then(function(val) {
  document.querySelector("#steak").innerHTML += `<li>${val}</li>`
  obtainInstruction("steak",5)
}
)
obtainInstruction("steak",5).then(function(val) {
  document.querySelector("#steak").innerHTML += `<li>${val}</li>`
  obtainInstruction("steak",6)
}
)
obtainInstruction("steak",6).then(function(val) {
  document.querySelector("#steak").innerHTML += `<li>${val}</li>`
  obtainInstruction("steak",7)
}
)
obtainInstruction("steak",7).then(function(val) {
  document.querySelector("#steak").innerHTML += `<li>${val}</li>`
  document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`

}
)

 .then(() => console.log("You arrived at your destination!") )
 .then(()=>  document.getElementById("steakImg").style.display = "block")

 .catch((err) => console.log(err))
// Iteration 3 using async/await
async function makeBroccoli() {
  //let val= await obtainInstruction("brusselsSprouts",0) 
    document.querySelector("#brusselsSprouts").innerHTML += `<li>"${await obtainInstruction("brusselsSprouts",0)}"</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>"${await obtainInstruction("brusselsSprouts",1)}"</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>"${await obtainInstruction("brusselsSprouts",2)}"</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>"${await obtainInstruction("brusselsSprouts",3)}"</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>"${await obtainInstruction("brusselsSprouts",4)}"</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>"${await obtainInstruction("brusselsSprouts",5)}"</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>"${await obtainInstruction("brusselsSprouts",6)}"</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>"${await obtainInstruction("brusselsSprouts",7)}"</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>" brusselsSprouts is ready!"</li>`
   
    document.getElementById("brusselsSproutsImg").style.display = "block";

  }
  makeBroccoli();



// Bonus 2 - Promise all
// ...

let promiss=[];
let d=document.querySelector("#broccoli");
 for(let i=0;i<7;i++)
{
promiss[i]=obtainInstruction("broccoli",i)
}
Promise.all(promiss).then(value=>d.innerHTML=value.reduce(function (p,value) {return (p + "<li>"+value+"</li>")}))
.then(d.innerHTML += `<li>" brusselsSprouts is ready!"</li>`)
.then(document.getElementById("broccoliImg").style.display = "block");
