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


