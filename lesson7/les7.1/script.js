'use strict';

let timers = document.querySelector('.timer');

let clock = setTimeout(function timerRun() {
    let time = new Date(),
        h = time.getHours().toString(),
        m = time.getMinutes().toString(),
        s = time.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }
    timers.textContent = h + ':' + m + ':' + s;
    
    document.body.style.backgroundColor = '#4B0082';

    setTimeout(timerRun, 1000);
});