var time = 0;
var start = 0;

function startPause() {
    if (start == 0) {
        start = 1;
        increment();
        document.getElementById('startPause').innerHTML = 'Pause';
        document.getElementById('startPause').style.background = '#003399';
    } else {
        start = 0;
        document.getElementById('startPause').innerHTML = 'Continue';
        document.getElementById('startPause').style.background = '#00cc00';
    }
}
function timerClear() {
    start = 0;
    time = 0;
    var clear_time = document.getElementById('timer');
    clearInterval(clear_time);
    document.getElementById('startPause').innerHTML = 'Start';
    document.getElementById('timer').innerHTML = '00:00:00:00';
}

function increment() {
   if (start == 1) {
    setTimeout(function() {
        time++;
        var hours = Math.floor(time/10/60/60);﻿
        var minutes = Math.floor( time/10/60);
        var seconds = Math.floor( time/10%60);
        var miliseconds = time % 10;

        if (hours < 10) {
            hours = '0' + hours;
        }
        if ( minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds + ':' + '0' + miliseconds;
        increment();
    }, 100);
   } 
}

