function validate() {

    var email = document.getElementById("exampleInputEmail1");
    var phone = document.getElementById("exampleInputnumber1");
    var pass = document.getElementById("exampleInputPassword1");
    var emailerror = document.getElementById("email-err");
    var phoneerror = document.getElementById("phone-err");
    var strengthBadge = document.getElementById('StrengthDisp')
    let emailpattern = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let phonepattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[A-Za-z0-9]).{8,}$/;
    let mediumPassword = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[A-Za-z0-9]).{5,})$/;
    var status = false;


    if (!(emailpattern.test(email.value))) {

        emailerror.innerHTML = 'Please Enter Valid Email';

        emailerror.style.color = "red";

        status = false;
    }

    else {
        emailerror.innerHTML = " ";
        status = true;
    }
    if (!(phonepattern.test(phone.value))) {
        phoneerror.innerHTML = 'Please Enter Valid number';

        phoneerror.style.color = "red";

        status = false;
    }

    else {
        phoneerror.innerHTML = "";
        status = true;
    }



    if (pass.value == "") {
        strengthBadge.style.display = 'block';
        strengthBadge.textContent = "Please Enter Valid Password";
        // strengthBadge.style.color = "red";
       
        status = false;
    }
    else if ((strongPassword.test(pass.value))) {


        strengthBadge.style.display = 'block';
        strengthBadge.style.backgroundColor = "green";
        strengthBadge.textContent = 'Strong';
        status = true;

    }
    else if ((mediumPassword.test(pass.value))) {
        strengthBadge.style.display = 'block';
        strengthBadge.style.backgroundColor = 'orange';
        strengthBadge.textContent = 'Medium';
        status = false;
    }
    else {
        strengthBadge.style.display = 'block';
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.textContent = 'Poor';
        status = false;

    }


    return status;


}

function lvalidate() {
    var email = document.getElementById("exampleInputEmail1");
    var pass = document.getElementById("exampleInputPassword1");
    var emailerror = document.getElementById("email-err");
    var passerror = document.getElementById("pass-err");
    let emailpattern = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[A-Za-z0-9]).{8,}$/;
    var status = false;
    if (!(emailpattern.test(email.value))) {

        emailerror.innerHTML = 'Please Enter Valid Email';

        emailerror.style.color = "red";

        status = false;
    }

    else {
        emailerror.innerHTML = " ";
        status = true;
    }
    if (!(passwordpattern.test(pass.value))) {

        passerror.innerHTML = 'Please Enter Valid Password';

        passerror.style.color = "red";

        status = false;
    }

    else {
        passerror.innerHTML = " ";
        status = true;
    }

    return status;
}

