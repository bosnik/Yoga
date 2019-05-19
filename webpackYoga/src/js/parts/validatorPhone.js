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