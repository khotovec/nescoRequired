/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */

$(document).ready(function getDucID() {
    "use strict";
    if (window.location.href.indexOf("index.html") > -1) {
        var getClass = $('.Duc')[1],
            ducID = getClass.getAttribute("dialid"),
            CheckoutBtn = document.getElementById('ctl00_cphMainContentFooter_WizardStepsNextPrev1_ButtonFinish'),
            textField = document.getElementById('ctl00_cphMainContent_ctl11_Duc' + ducID + '_StringTextBox');
        textField.setAttribute("onkeyup", "verifyCheck();");
        CheckoutBtn.style.display = 'none';
    }
});

function verifyCheck() {
    "use strict";
    var checkoutBtn = document.getElementById('ctl00_cphMainContentFooter_WizardStepsNextPrev1_ButtonFinish');
    checkoutBtn.style.display = 'block';
}