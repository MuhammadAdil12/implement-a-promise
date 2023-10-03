const output = document.querySelector(".output");
const startButton = document.querySelector(".startAlarm");
const stopButton = document.querySelector(".stopAlarm");


let alarmId;

startButton.addEventListener("click", ()=> {
    alarmId = setTimeout(() => {
      output.textContent = "Wake up!";
    }, 2000);
  });


stopButton.addEventListener("click", ()=>{
    clearTimeout(alarmId)
})


console.log(1);
console.log(2);
setTimeout(()=>{
    console.log(3);
}, 0)
console.log(4);


const name = document.querySelector("#number");
const delay = document.querySelector("#delay");
const button = document.querySelector("#setAlarm");
const button2 = document.querySelector("#setAlarm2");
const output2 = document.querySelector("#output");

let intervalId;

function alarm(number, delay) {
    return new Promise((resolve, reject) => {

    if (isNaN(number) || isNaN(delay) || number <= 0 || number > 20) {
        reject("Invalid input");
    }
      else{
            const randomValue = Math.random() * number;
            console.log(randomValue);
            resolve(randomValue);
      }
    });
  }


button.addEventListener("click", () => {
    intervalId = setInterval(() => {
      alarm(name.value, delay.value)
        .then((randomValue) => {
          // Update the DOM with the random value
          output2.textContent = randomValue;
        })
        .catch((error) => (output2.textContent = `Error: ${error}`));
    }, delay.value);
  });

  
button2.addEventListener("click", () => {
    clearInterval(intervalId);
    output2.textContent = "Interval stopped";
  });



