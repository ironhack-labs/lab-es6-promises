const directions = [
    "Starting point: Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
  ];
   
  function getDirections(step) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {    
        if (!directions[step]) {
          reject("Instructions not found.");
        } else {
          resolve(directions[step]);
        }
      }, Math.random() * 1000);
    });
  }
  
  const errorCallback = function (error) {
    console.error('Error: ', error);
  }
  
  function getMeteo() {
    return fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
  } 
  
  getMeteo()
    .then(res => res.json())
    .then(({ latitude, longitude }) => console.log(latitude, longitude))
    .catch(err => {
      console.error('Error: ', err)
    })
    .finally(() => {
      console.log('Finally -----')
    })
  
  // getDirections(0);
  // getDirections(1);
  // getDirections(2);
  // getDirections(3);
  
  // const getSecondCb = function () {
  //   getDirections(1, () => {
  //     getDirections(2, () => {
  //       getDirections(3, () => {
  //         console.log('Finish ---> ')
  //       }, errorCallback);
  //     }, errorCallback);
  //   }, errorCallback);
  // }
  console.log('Loader true --->')
  getDirections(0)
    .then((response) => {
      console.log(response);
      return getDirections(1);
    })
    .then((response) => {
      console.log(response);
      return getDirections(2);
    })
    .then((response) => {
      console.log(response);
      return getDirections(3);
    })
    .then((response) => {
      console.log(response);
      const endDirection = response
      document.querySelector('#paragraph').innerText = endDirection
      return `END is ... ${endDirection}`
    })
    .then((response) => {
      console.log('RESPONSE -------------->>> ', response);
    })
    .catch(errorCallback)
    .finally(() => {
      console.log('Finally')
      console.log('Loader false --->')
    });
  
  const promiseArray = [
    getDirections(0),
    getDirections(1),
    getDirections(2),
    getDirections(3)
  ];
  
  Promise.all(promiseArray)
    .then((response) => {
      console.log('ARRAY ---> ', response);
    })
    .catch(errorCallback)
    .finally(() => {
      console.log('Finally Promise all')
    });