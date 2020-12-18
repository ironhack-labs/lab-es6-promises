function makeFood(step, id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector(id).innerHtml += `<li>${step}</li`;
            resolve(step);
        }, Math.floor(Math.random()* 1000));
    });
}