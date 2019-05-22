function form() {
    let message = {
        loading: `<img src = 'img/ajax-loader.gif'>`,
        success: `<img src = 'img/success.png'>`,
        failure: `<'img/error.png'`
    };
    
    let form = document.querySelector('.main-form'),
    input = document.getElementsByTagName('input'),
    contactForm = document.getElementById('form'),
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

                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    let obj = {}; // 
                    data.forEach(function (value, key) {
                        obj[key] = value;
                    });
                   
                    let json = JSON.stringify(obj); 

                    request.send(json);
    
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

