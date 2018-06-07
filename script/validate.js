            var inputContactForm = document.getElementsByClassName("inputContactForm"),
                textAreaContactForm = document.getElementsByClassName("textAreaContactForm");
            inputContactForm[0].addEventListener("keyup", validateName);
            inputContactForm[1].addEventListener("keyup", validateLastName);
            inputContactForm[2].addEventListener("keyup", validatePhone);
            inputContactForm[3].addEventListener("keyup", validateMail);
            inputContactForm[4].addEventListener("keyup", validateSubject);
            textAreaContactForm[0].addEventListener("keyup", validateComment);
        
            var validName = false,
                validLastName = false,
                validPhone = false,
                validEmail = false,
                validComment = false,
                validSubject = false;
            
            function validateName(){
//                console.log("Validating name");
                var name = document.getElementsByClassName("inputContactForm")[0];
                if(name.value == "") {
                    name.style.background = "url(img/graph/REDX.svg) no-repeat scroll 100% -4px";
                    name.style.borderBottom = "2px solid #8a0300";
                    validName = false;
                } else {
//                        nameErrorElement.innerHTML = ""
                    name.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
                    name.style.borderBottom = "2px solid #53d400b7";
                    validName = true;
                }
                checkButton();
            }
            function validateLastName(){
//                console.log("Validating last name");
                var lastName = document.getElementsByClassName("inputContactForm")[1];
                if(lastName.value == "") {
                    lastName.style.background = "url(img/graph/REDX.svg) no-repeat scroll 100% -4px";
                    lastName.style.borderBottom = "2px solid #8a0300";
                    validLastName = false;
                } else {
//                        nameErrorElement.innerHTML = ""
                    lastName.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
                    lastName.style.borderBottom = "2px solid #53d400b7";
                    validLastName = true;
                }
                checkButton();
            }
            function validatePhone(){
//                console.log("Validating phone");
                var phone = document.getElementsByClassName("inputContactForm")[2];
                var phonenumber = phone.value.replace(/ /g,'');
                var phonepattern = /^\d{8}$/;
                if(!phonepattern.test(phonenumber)) {
                    console.log(document.getElementsByTagName("input")[2].value)
                    phone.style.background = "url(img/graph/REDX.svg) no-repeat scroll 100% -4px";
                    phone.style.borderBottom = "2px solid #8a0300";
                    validPhone = false;
                } else {
//                        nameErrorElement.innerHTML = ""
                    phone.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
                    phone.style.borderBottom = "2px solid #53d400b7";
                    validPhone = true;
                }
                checkButton();
                    
            }
            function validateMail(){
//                console.log("Validating mail");
                var email = document.getElementsByClassName("inputContactForm")[3];
                var emailpattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                if(!emailpattern.test(email.value)) {
                    email.style.background = "url(img/graph/REDX.svg) no-repeat scroll 100% -4px";
                    email.style.borderBottom = "2px solid #8a0300";
                    validEmail = false;
                } else {
//                        nameErrorElement.innerHTML = ""
                    email.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
                    email.style.borderBottom = "2px solid #53d400b7";
                    validEmail = true;
                }                
                checkButton();
            }
            function validateSubject(){
//                console.log("Validating mail");
                var subject = document.getElementsByClassName("inputContactForm")[4];
                if(subject.value == "") {
                    subject.style.background = "url(img/graph/REDX.svg) no-repeat scroll 100% -4px";
                    subject.style.borderBottom = "2px solid #8a0300";
                    validSubject = false;
                } else {
//                        nameErrorElement.innerHTML = ""
                    subject.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
                    subject.style.borderBottom = "2px solid #53d400b7";
                    validSubject = true;
                }       
                checkButton();
            }

            function validateComment(){
//                console.log("Validating comment");
                var comment = document.getElementsByClassName("textAreaContactForm")[0];
                if(comment.value == "") {
                    comment.style.borderBottom = "2px solid #8a0300";
                    validComment = false;
                } else{
                    comment.style.borderBottom = "2px solid #53d400b7";
                    validComment = true;
                }
                checkButton();
            }
            
            function checkButton() {
//                console.log("really now?")
                var btn = document.getElementsByClassName("buttonContactForm")[0];
                if(validName && validLastName && validPhone && validEmail && validSubject && validComment){
//                    console.log("enabled");
                    btn.onclick = "validateForm()"
                }
                else{
//                    console.log("disabled");
                    btn.onclick = "";
                }
            }
            
            function validateform(){
                validateName();
                validateLastName();
                validatePhone();
                validateMail();
                validateSubject();
                validateComment();

                console.log(validName && validLastName && validPhone && validEmail && validSubject && validComment);

                return validName && validLastName && validPhone && validEmail && validSubject && validComment;
            };