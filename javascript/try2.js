const ourPromise = new Promise((resolve, reject) => {
    if (2 + 2 === 5) {
      resolve("Yes that is great! 2 + 2 does equal 4");
    } else {
      reject("Oh no, thats not good");
    }
  });




  // ourPromise with async/await****************************************************
async function getCharacter() {
  try{
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const parsed= await response.json();
    console.log(  "parsed", parsed);
  } catch(err){
    console.log("the error", err);
  }
}
getCharacter();
  // fetch("https://rickandmortyapi.com/api/character")
  //   .then((responseIfSuccessful) => {
  //     console.log("before json", responseIfSuccessful);
  //     return responseIfSuccessful.json();
  //   })
  //   .then((parsed) => {
  //     console.log("made it here", parsed);
  //   })
  //   .catch((err) => {
  //     console.log("the error", err);
  //   })
  //   // .finally(() => {
  //   //   console.log("this always happens");
  //   // });