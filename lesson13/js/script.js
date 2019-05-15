window.addEventListener('DOMContentLoaded', function() {
    'use strict';
        //tabs
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

        // Timer

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

        //Modal Window

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
            
            //Form

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

                //Validator phone

                document.body.addEventListener('input', e => {
                    if (e.target.getAttribute('type') === 'tel' ) {
                        e.target.value = '+' + e.target.value.replace(/[^\d]/g, '').slice(0, 11);
                        if (e.target.value.length == 1) e.target.value = '';
                    }
                    if (e.target.getAttribute('type') === 'number') {
                         e.target.value = e.target.value.replace(/[^\d.]/g, '').slice(0,4);
                        }
                });

               

                //Slider

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

            //Calc

            
           

            
            let persons = document.querySelectorAll('.counter-block-input')[0],
                restDays = document.querySelectorAll('.counter-block-input')[1],
                place = document.getElementById('select'),
                totalValue = document.getElementById('total'),
                personsSum = 0,
                daysSum = 0,
                total = 0;

                totalValue.innerHTML = 0;

                persons.addEventListener('change', function() {
                    personsSum = +this.value;
                    total = (daysSum + personsSum)*4000;

                    if(restDays.value == '' || persons.value == '') {
                        totalValue.innerHTML = 0;
                    }else {
                        totalValue.innerHTML = total;
                    }
                });



                restDays.addEventListener('change', function() {
                    daysSum = +this.value;
                    total = (daysSum + personsSum)*4000;

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
                        let a = total;
                        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
                    }
                });
               
                
                

              
}); 


 