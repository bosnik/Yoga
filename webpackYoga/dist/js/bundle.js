/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        placeKoef = place.options[place.selectedIndex].value,
        personsSum = 0,
        daysSum = 0,
        total = 0;
    
    totalValue.innerHTML = 0;
    
    persons.addEventListener('change', function() {
        personsSum = +this.value;
       
        total = daysSum * (personsSum*4000)*placeKoef;
    
        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        }else {
            totalValue.innerHTML = total;
        }
    });
    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = daysSum * (personsSum*4000)*placeKoef;
    
        if(persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        }else {
            totalValue.innerHTML = total;
        }
    });
    
    place.addEventListener('change', function() {
        if(restDays.value == '' || persons.value == '' ) {
            totalValue.innerHTML = 0;
    
        }else {
            placeKoef = this.options[this.selectedIndex].value;
            totalValue.innerHTML = daysSum * personsSum * 4000 * placeKoef;
        }
    });
    
}

module.exports = calc;




/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
    let message = {
        loading: `<img src = 'img/ajax-loader.gif'>`,
        success: `<img src = 'img/success.png'>`,
        failure: `<'img/error.png'`
    };
    
    let form = document.querySelector('.main-form'),
    input = document.getElementsByTagName('input'),
    contactForm = document.querySelector('.contact-form'),
    statusMessege = document.createElement('div');
    
    statusMessege.classList.add('status');
    
    function formConact(elem) {
        elem.addEventListener('submit', function(event){
            event.preventDefault();
            elem.appendChild(statusMessege);
            
            let formData = new FormData(elem);
    
            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
    
                    request.open("POST", "server.php");
    
                    request.setRequestHeader(
                        "Content-Type",
                        "application/json; charset=utf-8"
                    );
    
                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                 } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 3) {
                            resolve();
                 } else {
                            reject();
                            }
                        }
                    };
                    request.send(data);
                });
            } 
    
            function clearInputs() {
                [...input].forEach(elem => (elem.value = ""));
            }
            postData(formData)
                .then(() => (statusMessege.innerHTML = message.loading))
                .then(() => (statusMessege.innerHTML = message.success))
                .catch(() => (statusMessege.innerHTML = message.failure))
                .then(clearInputs);
        });
    }
    
    formConact(form);
    formConact(contactForm);
}

module.exports = form;



/***/ }),

/***/ "./src/js/parts/modalWindow.js":
/*!*************************************!*\
  !*** ./src/js/parts/modalWindow.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalWindow() {
    let overlay = document.querySelector(".overlay"),
    body = document.querySelector("body");
    
    let showModal = function() {
        overlay.style.display = "block";
        info.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    };
    let hideModal = function()  {
        overlay.style.display = "none";
        info.classList.remove("more-splash");
        document.body.style.overflow = "";
    };
    body.addEventListener("click", function forEach(elem){ 
    let target = elem.target;
    
    if (target && target.classList.contains("more")) {
        showModal(target);
    }
    if (target && target.classList.contains("popup-close")) {
        hideModal(target);
    }
    if (target && target.classList.contains("description-btn")) {
        showModal(target);
    }
    });
}

module.exports = modalWindow;



/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');
    
    showSliders(slideIndex);
    
    function showSliders(n) {
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    
    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
    }
    
    function plusSlides(n){
    showSliders(slideIndex += n);
    }
    function currentSlide(n){
    showSliders(slideIndex = n);
    }
    
    prev.addEventListener('click', function() {
    plusSlides(-1);
    });
    
    next.addEventListener('click', function() {
    plusSlides(1);
    });
    
    dotsWrap.addEventListener('click', function(event) {
    for(let i = 0; i < dots.length + 1; i++){
    if(event.target.classList.contains('dot') && event.target == dots[i - 1]){
        currentSlide(i);
    }
    }
    });
}

module.exports = slider;



/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
    let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for(let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
   }
};

       hideTabContent(1);

   let showTabContent = (b) => {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
           }
       };

    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;




/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    let deadline = '2019-05-07';

    function getTimeRemaning(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaning(endtime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
               
        if (t.total <= 0 && t.hours <= 0 & t.minutes <= 0 && t.seconds <= 0) {
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";
                clearInterval(timeInterval);
            }else{
                hours.textContent = ('0' + t.hours).slice(-2);
                minutes.textContent = ('0' + t.minutes).slice(-2);
                seconds.textContent = ('0' + t.seconds).slice(-2);
            }
        }
    }

    setClock('timer', deadline);
}    
    
module.exports = timer;
   

/***/ }),

/***/ "./src/js/parts/validatorPhone.js":
/*!****************************************!*\
  !*** ./src/js/parts/validatorPhone.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function validatorPhone() {
    document.body.addEventListener('input', e => {
        if (e.target.getAttribute('type') === 'tel' ) {
            e.target.value = '+' + e.target.value.replace(/[^\d]/g, '').slice(0, 11);
            if (e.target.value.length == 1) e.target.value = '';
        }
        if (e.target.getAttribute('type') === 'number') {
             e.target.value = e.target.value.replace(/[^\d.]/g, '').slice(0,4);
            }
    });
}

module.exports = validatorPhone;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
        modalWindow = __webpack_require__(/*! ./parts/modalWindow.js */ "./src/js/parts/modalWindow.js"),
        slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"), 
        tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"), 
        timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
        validatorPhone = __webpack_require__(/*! ./parts/validatorPhone.js */ "./src/js/parts/validatorPhone.js");  
    
        calc();
        form();
        modalWindow();
        slider();
        tabs();
        timer();
        validatorPhone();
}); 


 

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map