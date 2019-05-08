window.addEventListener('DOMContentLoaded', function() {
    'use strict';
        //tabs
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        function hideTabContent(a) {
            for(let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent (b) {
            if(tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

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
        
            function showModal() {
                overlay.style.display = "block";
                info.classList.add("more-splash");
                document.body.style.overflow = "hidden";
            }
            function hideModal() {
                overlay.style.display = "none";
                info.classList.remove("more-splash");
                document.body.style.overflow = "";
            }
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
                loading: "https://www.flaticon.com/authors/maxim-basinski",
                success: 'Спасибо! скоро мы с вами свяжемся!',
                failure: 'Что-то пошло не так...'
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
                

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
               /*  request.setRequestHeader('Content-Type', 'application/x-ww-form-urlencoded'); */
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                let formData = new FormData(elem);

                let obj = {};
                formData.forEach(function(value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);

                request.send(json);

                /* request.send(formData); */

                request.addEventListener('readystatechange', function(){
                    if(request.readyState < 4){
                        statusMessege.innerHTML = message.loading;

                    }else if(request.readyState === 4 && request.status == 200) {
                        statusMessege.innerHTML = message.success;
                    }else {
                        statusMessege.innerHTML = message.failure;
                    }
                });

                for(let i = 0; i < input.length; i++){
                    input[i].value = '';
                }
            });
        }
            formConact(form);
            formConact(contactForm);

                //Validator phone

            let inputsPhone = document.querySelectorAll('popup-form__input'),
                inputsCounter = document.querySelectorAll('input[type="tel"]');

            function onlyNumber(input) {
                input.onkeydown = function () {
                return (this.value = this.value.replace(/[^0-9]/g, ""));
                };
                }
                inputsPhone.forEach(function(elem){
                onlyNumber(elem);
              });
                inputsCounter.forEach(function(elem){
                onlyNumber(elem);
        }); 

}); 


 