window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let calc = require('.parts/calc.js'),
        form = require('.parts/form.js'),
        modalWindow = require('.parts/modalWindow.js'),
        slider = require('.parts/slider.js'),
        tabs = require('.parts/tabs.js'),
        timer = require('.parts/timer.js'),
        validatorPhone = require('.parts/validatorPhone.js');

        calc();
        form();
        modalWindow();
        slider();
        tabs();
        timer();
        validatorPhone();

});     

 