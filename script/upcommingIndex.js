fetch("https://api.spacexdata.com/v2/launches/upcoming")
.then(function(response){
//    console.log(response);
    return response.json();
})
.then(function(myJson){
//    console.log(myJson);
    var missionName = myJson.mission_name;
    var rocketName = myJson.rocket_name;
    var launchDateUnix = myJson.launch_date_unix;
//    console.log(missionName, rocketName, launchDateUnix);
    displayCommingLaunches(myJson,"upcommingEventsContent");
})


var textArea = document.getElementsByClassName("textAreaContactForm")[0],
    firstNameInput = document.getElementsByClassName("inputContactForm")[0],
    lastNameInput = document.getElementsByClassName("inputContactForm")[1],
    phoneInput = document.getElementsByClassName("inputContactForm")[2],
    emailInput = document.getElementsByClassName("inputContactForm")[3],
    subjectInput = document.getElementsByClassName("inputContactForm")[4];

firstNameInput.addEventListener("keyup", validateFirstName);
lastNameInput.addEventListener("keyup", validateLastName);
phoneInput.addEventListener("keyup", validatePhoneInput);
emailInput.addEventListener("keyup", validateEmailInput);
subjectInput.addEventListener("keyup", validateSubjectInput);
textArea.addEventListener("keyup", validateTextArea);

function validateFirstName(){
    if(firstNameInput.value != ""){
        console.log("fuck off");
        firstNameInput.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
        firstNameInput.style.borderBottom = "2px solid #53d400b7";
    }
    else{
        firstNameInput.style.background = "url(img/graph/WHITEtranspSUCCESSsvg90Transp.svg) no-repeat scroll 115% -4px";
        firstNameInput.style.borderBottom = "2px solid #f9f9f973";
    }
}
function validateLastName(){
    if(lastNameInput.value != ""){
        console.log("fuck off");
        lastNameInput.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
        lastNameInput.style.borderBottom = "2px solid #53d400b7";
    }
    else{
        lastNameInput.style.background = "url(img/graph/WHITEtranspSUCCESSsvg90Transp.svg) no-repeat scroll 115% -4px";
        lastNameInput.style.borderBottom = "2px solid #f9f9f973";
    }
}
function validatePhoneInput(){
    if(phoneInput.value != ""){
        console.log("fuck off");
        phoneInput.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
        phoneInput.style.borderBottom = "2px solid #53d400b7";
    }
    else{
        phoneInput.style.background = "url(img/graph/WHITEtranspSUCCESSsvg90Transp.svg) no-repeat scroll 115% -4px";
        phoneInput.style.borderBottom = "2px solid #f9f9f973";
    }
}
function validateEmailInput(){
    if(emailInput.value != ""){
        console.log("fuck off");
        emailInput.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
        emailInput.style.borderBottom = "2px solid #53d400b7";
    }
    else{
        emailInput.style.background = "url(img/graph/WHITEtranspSUCCESSsvg90Transp.svg) no-repeat scroll 115% -4px";
        emailInput.style.borderBottom = "2px solid #f9f9f973";
    }
}
function validateSubjectInput(){
    if(subjectInput.value != ""){
        console.log("fuck off");
        subjectInput.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
        subjectInput.style.borderBottom = "2px solid #53d400b7";
    }
    else{
        subjectInput.style.background = "url(img/graph/WHITEtranspSUCCESSsvg90Transp.svg) no-repeat scroll 115% -4px";
        subjectInput.style.borderBottom = "2px solid #f9f9f973";
    }
}
function validateTextArea(){
    if(textArea.value != ""){
        console.log("fuck off");
        textArea.style.borderBottom = "2px solid #f9f9f9";
    }
    else{
        textArea.style.borderBottom = "2px solid #f9f9f973";
    }
}
        

function aFokenFunction(){
    var testId = document.getElementById("testId");
    
    
        testId.innerHTML = "<div class='showMoreInfoDivBackground' onclick='removeStuff()'></div><div class='showMoreInfoDivDiv'><h3>Mission</h3><h2>Flikt number 12,rocket name</h2><h2>launch date</h2></div>";
    
    change();
    moveMe();
    
    
}

function change(){
    var showMoreInfoDivBackground = document.getElementsByClassName("showMoreInfoDivBackground")[0],
        showMoreInfoDiv = document.getElementsByClassName("showMoreInfoDiv")[0],
        showMoreInfoH2 = document.getElementsByClassName("showMoreInfoH2")[0],
        showMoreInfoH3 = document.getElementsByClassName("showMoreInfoH3");
    
    showMoreInfoDivBackground.style.height = document.body.clientHeight + "px";
//    showMoreInfoDiv.style.height = document.body.clientHeight + "px";
    showMoreInfoDivBackground.style.backgroundColor = "#00000073";
    
    
}
function moveMe(){
//    var showMoreInfoDivDiv = document.getElementsByClassName("showMoreInfoImage")[0];
//    showMoreInfoDivDiv.style.marginTop = "0px";
}
function removeStuff(){
    var testId = document.getElementById("testId"),
        showMoreInfoDivBackground = document.getElementsByClassName("showMoreInfoDivBackground")[0],
        showMoreInfoDivDiv = document.getElementsByClassName("showMoreInfoDivDiv")[0];
    
    
    
    setTimeout(function(){showMoreInfoDivBackground.style.opacity = "0";
                          showMoreInfoDivDiv.style.opacity = "0";
                          showMoreInfoDivBackground.style.backgroundColor = "transparent";},250);
    setTimeout(function(){testId.innerHTML = "";},450);
}
//function boxAway(){
//    var counter = 3;
//    var showMoreInfoDivDiv = document.getElementsByClassName("showMoreInfoImage")[0];
//    setTimeout(function(){showMoreInfoDivDiv.style.marginTop = counter*-9000+"px"}, 750);
//    setTimeout(function(){showMoreInfoDivDiv.style.opacity = "0"}, 600);
//    setTimeout(removeStuff,1400);
//    
//}
function displayCommingLaunches(myJson,divName){
    var launchesDiv = document.getElementsByClassName(divName)[0];
    console.log(myJson.length)
    for(var o of myJson){
//        console.log(o.mission_name);
//        console.log(o.rocket.rocket_name);
//        console.log(o.launch_date_unix);
        var unixDate = new Date(o.launch_date_unix*1000);
        var dayUnixDate = unixDate.getDate();
        if(dayUnixDate < 10){
            dayUnixDate = "0" + dayUnixDate;
        }
        var monthUnixDate = unixDate.getMonth();
        if(monthUnixDate < 10){
            monthUnixDate = "0" + monthUnixDate;
        }
        var dato = unixDate.getMonth();
        console.log(dato);
        launchesDiv.innerHTML +="<div class='collum-tablet-4'><div class='infoContent'><p>" + o.mission_name + "</p><p>" + o.rocket.rocket_name + "</p><p>" + dayUnixDate+"/"+monthUnixDate +"/"+ unixDate.getFullYear() + "</p><img onclick='aFokenFunction()' class='rocketImg' src='img/graph/rocketNext.svg' alt='rocket'><hr></div></div>";
    }
    
}