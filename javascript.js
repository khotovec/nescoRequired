/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */

$(document).ready(function getDucID() {
    "use strict";
    if (window.location.href.indexOf("OrderFinalStep.aspx") > -1) {
        var getClass = $('.Duc')[3],
            ducID = getClass.getAttribute("dialid"),
            CheckoutBtn = document.getElementById('ctl00_cphMainContentFooter_WizardStepsNextPrev1_ButtonFinish'),
            textField = document.getElementById('ctl00_cphMainContent_ctl11_Duc' + ducID + '_StringTextBox'),
            textLabel = document.getElementById('ctl00_cphMainContent_ctl11_Duc' + ducID + '_LblDial');
        textField.setAttribute("onkeyup", "verifyCheck();");
        textLabel.innerHTML = "Branch Number <span style='color:red;'>Required</span>";
        CheckoutBtn.style.display = 'none';
    }
});

function verifyCheck() {
    "use strict";
    var checkoutBtn = document.getElementById('ctl00_cphMainContentFooter_WizardStepsNextPrev1_ButtonFinish');
    checkoutBtn.style.display = 'block';
}