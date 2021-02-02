'use strict'

let minutes = 0;
let seconds = 0;
let ticker = document.getElementById('stopWatch');
let buttonStart = document.querySelector('.btn-start');
let buttonStop = document.querySelector('.btn-stop');
let buttonReset = document.querySelector('.btn-reset');
let returnInterval = '';

buttonStart.addEventListener('click', function(){
    returnInterval = setInterval(updatedCount, 1000);
});

buttonStop.addEventListener('click', function(){
    clearInterval(returnInterval);
});

buttonReset.addEventListener('click', function(){
    minutes = 0;
    seconds = 0;
    ticker.innerHTML = `0${minutes}:0${seconds}`
    clearInterval(returnInterval);

})

function updatedCount () {
    if(seconds >= 59){
        minutes++;
        seconds = 0;
    } else seconds++;
    if(seconds < 10){
        ticker.innerHTML = `0${minutes}:0${seconds}`
    } else
    ticker.innerHTML = `0${minutes}:${seconds}`;
};

