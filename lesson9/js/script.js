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
                isActiveBtn;

            const bindModal = (overlayStatus,overflowStatus,classListMethod,el) => {
                if(classListMethod == 'add') isActiveBtn = el;
                if(!el) el = isActiveBtn;
                overlay.style.display = overlayStatus;
                el.classList[classListMethod]('more-splash');
                document.body.style.overflow = overflowStatus;
            };

            document.body.addEventListener('click' , e => {
                let target = e.target;

                if(target.classList.contains('more') || target.classList.contains('description-btn')) bindModal('block','hidden','add',target);
                if(target.classList.contains('popup-close')) bindModal('none','','remove');
            }); 
}); 

 