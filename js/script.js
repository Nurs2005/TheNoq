/* Template: Evolo - StartUp HTML Landing Page Template
   Author: Inovatik
   Created: June 2019
   Description: Custom JS file
*/


(function($) {
    "use strict"; 

    function rsubmitForm() {
        // initiate variables with form content
		var name = $("#rname").val();
		var phone = $("#phone").val();
        var select = $("#rselect").val();
        var terms = $("#rterms").val();
        
        $.ajax({
            type: "POST",
            url: "php/requestform-process.php",
            data: "name=" + name  + "&phone=" + phone + "&select=" + select + "&terms=" + terms,
            success: function(text) {
                if (text == "success") {
                    rformSuccess();
                } else {
                    rformError();
                    rsubmitMSG(false, text);
                }
            }
        });
	}

    function rformSuccess() {
        $("#requestForm")[0].reset();
        rsubmitMSG(true, "Request Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function rformError() {
        $("#requestForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function rsubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#rmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    
    function csubmitForm() {
        // initiate variables with form content
		var name = $("#cname").val();
		var email = $("#phone").val();
        var terms = $("#cterms").val();
        $.ajax({
            type: "POST",
            url: "php/index.php",
            data: "name=" + name + "&phone=" + email + "&terms=" + terms,
            success: function(text) {
                if (text == "success") {
                    cformSuccess();
                } else {
                    cformError();
                    csubmitMSG(false, text);
                }
            }
        });
	}

    function cformSuccess() {
        $("#contactForm")[0].reset();
        csubmitMSG(true, "Заявка отправлена!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
        $("textarea").removeClass('notEmpty'); // resets the field label after submission
    }

    function cformError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function csubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }



    function psubmitForm() {
        console.log("ssss");
		var name = $("#fname").val();
		var email = $("#email").val();
        var terms = $("#terms").val();
        
        $.ajax({
            type: "POST",
            url: "php/index.php",
            data: "name=" + name + "&phone=" + email + "&select=" + select + "&terms=" + terms, 
            success: function(text) {
                if (text == "success"){
                    pformSuccess();
                }else {
                    pformError();
                    psubmitMSG(false, text);
              }
            }
        });
	}
})(jQuery);