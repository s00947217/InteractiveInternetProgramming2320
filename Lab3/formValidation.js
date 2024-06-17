"use strict";

function mstatusChange() {
    var mstatus = document.getElementById('mstatus').value;
    var sname = document.getElementById('sname');
    if (mstatus === 'Married') {
        sname.disabled = false;
    } else {
        sname.disabled = true;
        sname.value = ''; // Clear spouse name field if disabled
    }
}

function processForm() {
    var formGood = true;
    var errorMsg = document.getElementById('errorMsg');
    errorMsg.innerHTML = '';
    
    var fields = ['fname', 'lname', 'address1', 'city', 'state', 'zipcode', 'mstatus'];
    if (document.getElementById('mstatus').value === 'Married') {
        fields.push('sname');
    }

    fields.forEach(function(field) {
        var input = document.getElementById(field);
        var label = document.getElementById(field + 'Label');
        if (input.value.trim() === '') {
            formGood = false;
            label.className = 'redtext';
        } else {
            label.className = 'blacktext';
        }
    });

    if (!formGood) {
        errorMsg.innerHTML = "Please correct the following errors:";
    } else {
        document.getElementById('myForm').submit();
    }
}
