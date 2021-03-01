console.log('JavaScript - Digital Clock');

const start = document.getElementById('start-button');
const stopBtn = document.getElementById('stop-button');
const reset = document.getElementById('reset-button');
const save = document.getElementById('save-button');

let seconds = 0;
const secondsParagraphs = document.querySelectorAll('.seconds p');

let minutes = 0;
const minutesParagraphs = document.querySelectorAll('.minutes p');

let hours = 0;
const hoursParagraphs = document.querySelectorAll('.hours p');

let time;

start.addEventListener('click', startCounting);
stopBtn.addEventListener('click', stopCounting);
reset.addEventListener('click', resetTime);
save.addEventListener('click', saveTime);


function startCounting() {
    time = setInterval(function() {
        renderDigits(seconds, secondsParagraphs);
        renderDigits(minutes, minutesParagraphs);
        renderDigits(hours, hoursParagraphs);
    
        seconds++;
    
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    
        if (hours === 24) {
            hours = 0;
        }
    }, 1000);
}


function stopCounting() {
    clearInterval(time);
}


function resetTime() {
    clearInterval(time);
    seconds = 0;
    minutes = 0;
    hours = 0;

    resetValue(secondsParagraphs);
    resetValue(minutesParagraphs);
    resetValue(hoursParagraphs);
}


function saveTime() {
    const paragraph = document.createElement('p');
    document.body.appendChild(paragraph);
    let sec = checkDigit(seconds);
    let min = checkDigit(minutes);
    let hour = checkDigit(hours);
    paragraph.innerText = `${hour}:${min}:${sec}`;
}


function renderDigits(nr, pList) {
    const stringDigits = nr + '';
    const digitList = stringDigits.split('');

    if (digitList.length === 2) {
        pList[0].innerText = digitList[0];
        pList[1].innerText = digitList[1];
    } else {
        pList[0].innerText = 0;
        pList[1].innerText = digitList[0];
    }
}


function resetValue(pList) {
    pList[0].innerText = 0;
    pList[1].innerText = 0;
}


function checkDigit(digit) {
    if (digit < 10) {
        digit = `0${digit}`; 
    } 
    return digit;
}