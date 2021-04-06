console.log('Course 20 promises');

function firstStep() {
  setTimeout(() => {
    console.log("End of first step -> callback");
    secondStep();
  }, 2000);
}

function secondStep() {
  setTimeout(() => {
    console.log("End of second step -> callback");
    thirdStep();
  }, 1000);
}

function thirdStep() {
  setTimeout(() => {
    console.log("End of third step");
  }, 500);
}

firstStep();

function firstStep(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('End of first step');

            resolve(number + 1);
        }, 2000);
    });
}

function secondStep(param) {
    console.log(param);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("End of second step");
        if (param % 2 === 1) {
          reject("We want even param");
        } else {
          resolve(param / 2);
        }
      }, 1000);
    });
}

function thirdStep(finalValue) {
    setTimeout(() => {
        console.log('End of third step');
        console.log('Final value', finalValue);
    }, 500);
}

firstStep(1)
    .then(secondStep)
    .then(thirdStep)
    .catch((error) => {
        alert(`Promise chain has the following error: ${error}`);  
    });

// fetch example
fetch("https://simple-json-server-scit.herokuapp.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.log(error);
  });