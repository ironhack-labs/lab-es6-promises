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
function addListElement(Selector,val){
  document.querySelector(Selector).innerHTML += `<li>${val}</li>`
}

function selectorUnhide(Selector){
  document.querySelector(Selector).removeAttribute("hidden");
}

function func1(step,callback) {
  const htmlEdit = (val) => addListElement("#mashedPotatoes",val);

  getInstruction( "mashedPotatoes", step,
    (val) => {
      htmlEdit(val);
      callback();
    },
    (error) => console.log(error)
  );
}

func1(0, () => {
  func1(1, () => {
    func1(2, () => {
      func1(3, () => {
        func1(4, () => {
          addListElement("#mashedPotatoes","Mashed potatoes are ready!");
          selectorUnhide("#mashedPotatoesImg");
        });
      });
    });
  });
});

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
  .then((result)=>{
    addListElement("#steak",result)
    return obtainInstruction("steak", 1)
  })
  .then((result)=>{
    addListElement("#steak",result)
    return obtainInstruction("steak", 2)
  })
  .then((result)=>{
    addListElement("#steak",result)
    return obtainInstruction("steak", 3)
  })
  .then((result)=>{
    addListElement("#steak",result)
    return obtainInstruction("steak", 4)
  })
  .then((result)=>{
    addListElement("#steak",result)
    return obtainInstruction("steak", 5)
  })
  .then((result)=>{
    addListElement("#steak",result)
    return obtainInstruction("steak", 6)
  })
  .then((result)=>{
    addListElement("#steak",result)
    return obtainInstruction("steak", 7)
  })
  .then((result)=>{
    addListElement("#steak",result)
    addListElement("#steak","Stake is ready!");
    selectorUnhide("#steakImg");
  })


// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  for(let i = 0;i<broccoli.length;i++){ 
    const result = await obtainInstruction("broccoli", i)
    addListElement("#broccoli",result);
  }
  
  addListElement("#broccoli","Broccoli is ready!");
  selectorUnhide("#broccoliImg");
  
}
makeBroccoli();

// Bonus 2 - Promise all
// ...

async function makebrusselsSprouts() {
  for(let i = 0;i<brusselsSprouts.length;i++){ 
    const result = await obtainInstruction("brusselsSprouts", i)
    addListElement("#brusselsSprouts",result);
  }
  
  addListElement("#brusselsSprouts","brussels Sprouts are ready!");
  selectorUnhide("#brusselsSproutsImg");
  
}
makebrusselsSprouts();