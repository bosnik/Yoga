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

        info.addEventListener('click', event => {
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

        let deadline = '2019-05-14';

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
                    let t = getTimeRemaning(endtime),
                    h = t.hours.toString(),
                    m = t.minutes.toString(),
                    s = t.seconds.toString();
                   
            if (t.total <= 0 && t.hours <= 0 & t.minutes <= 0 && t.seconds <= 0) {
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
                    clearInterval(timeInterval);
                }else{
                    hours.textContent = h.length < 2 ? `0${h}` : h;
                    minutes.textContent = m.length < 2 ? `0${m}` : m;
                    seconds.textContent = s.length < 2 ? `0${s}` : s;
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
            }
           let hideModal = function()  {
                overlay.style.display = "none";
                info.classList.remove("more-splash");
                document.body.style.overflow = "";
            }
            body.addEventListener("click", elem =>{ 
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
}); 

 