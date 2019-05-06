'use strict';

    let age = {
        value : '30'
    };
function showUser(surname, name) {

    alert("Пользователь " +  surname + " " + name + ", его возраст " + this.value);   
    
}
showUser.call(age, 'Makr', 'Kru');