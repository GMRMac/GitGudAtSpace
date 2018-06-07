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
    upcommingLiftoffs=myJson;
})

var upcommingLiftoffs;

//var textArea = document.getElementsByClassName("textAreaContactForm")[0],
//    firstNameInput = document.getElementsByClassName("inputContactForm")[0],
//    lastNameInput = document.getElementsByClassName("inputContactForm")[1],
//    phoneInput = document.getElementsByClassName("inputContactForm")[2],
//    emailInput = document.getElementsByClassName("inputContactForm")[3],
//    subjectInput = document.getElementsByClassName("inputContactForm")[4];
//
//firstNameInput.addEventListener("keyup", validateFirstName);
//lastNameInput.addEventListener("keyup", validateLastName);
//phoneInput.addEventListener("keyup", validatePhoneInput);
//emailInput.addEventListener("keyup", validateEmailInput);
//subjectInput.addEventListener("keyup", validateSubjectInput);
//textArea.addEventListener("keyup", validateTextArea);
//
//function validateFirstName(){
//    if(firstNameInput.value != ""){
//        console.log("fuck off");
//        firstNameInput.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
//        firstNameInput.style.borderBottom = "2px solid #53d400b7";
//    }
//    else{
//        firstNameInput.style.background = "url(img/graph/WHITEtranspSUCCESSsvg90Transp.svg) no-repeat scroll 115% -4px";
//        firstNameInput.style.borderBottom = "2px solid #f9f9f973";
//    }
//}
//function validateLastName(){
//    if(lastNameInput.value != ""){
//        console.log("fuck off");
//        lastNameInput.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
//        lastNameInput.style.borderBottom = "2px solid #53d400b7";
//    }
//    else{
//        lastNameInput.style.background = "url(img/graph/WHITEtranspSUCCESSsvg90Transp.svg) no-repeat scroll 115% -4px";
//        lastNameInput.style.borderBottom = "2px solid #f9f9f973";
//    }
//}
//function validatePhoneInput(){
//    if(phoneInput.value != ""){
//        console.log("fuck off");
//        phoneInput.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
//        phoneInput.style.borderBottom = "2px solid #53d400b7";
//    }
//    else{
//        phoneInput.style.background = "url(img/graph/WHITEtranspSUCCESSsvg90Transp.svg) no-repeat scroll 115% -4px";
//        phoneInput.style.borderBottom = "2px solid #f9f9f973";
//    }
//}
//function validateEmailInput(){
//    if(emailInput.value != ""){
//        console.log("fuck off");
//        emailInput.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
//        emailInput.style.borderBottom = "2px solid #53d400b7";
//    }
//    else{
//        emailInput.style.background = "url(img/graph/WHITEtranspSUCCESSsvg90Transp.svg) no-repeat scroll 115% -4px";
//        emailInput.style.borderBottom = "2px solid #f9f9f973";
//    }
//}
//function validateSubjectInput(){
//    if(subjectInput.value != ""){
//        console.log("fuck off");
//        subjectInput.style.background = "url(img/graph/GREENtranspSUCCESSsvg.svg) no-repeat scroll 100% -4px";
//        subjectInput.style.borderBottom = "2px solid #53d400b7";
//    }
//    else{
//        subjectInput.style.background = "url(img/graph/WHITEtranspSUCCESSsvg90Transp.svg) no-repeat scroll 115% -4px";
//        subjectInput.style.borderBottom = "2px solid #f9f9f973";
//    }
//}
//function validateTextArea(){
//    if(textArea.value != ""){
//        console.log("fuck off");
//        textArea.style.borderBottom = "2px solid #f9f9f9";
//    }
//    else{
//        textArea.style.borderBottom = "2px solid #f9f9f973";
//    }
//}
        

function aFokenFunction(flightNumber,type){
    var overlayDiv = document.getElementById("testId");
    
    if(type == "upcommingEventsContent"){
        var obj = upcommingLiftoffs.find(function(obj){return obj.flight_number === flightNumber;})
//        console.log(obj.rocket.rocket_name);
    }
    if(type == "pastEventsContent"){
        var obj = previousLiftoffs.find(function(obj){return obj.flight_number === flightNumber;})
//        console.log(obj.rocket.rocket_name);
    }
    if(obj){
        var unixDate = new Date((obj.launch_date_unix)*1000),
            dayUnixDate = unixDate.getDate();
        if(dayUnixDate < 10){
            dayUnixDate = "0" + dayUnixDate;
        }
        var monthUnixDate = unixDate.getMonth();
        if(monthUnixDate < 10){
            monthUnixDate = "0" + monthUnixDate;
        }
            year = unixDate.getFullYear();
    }
    
    var flightDetails = "<h2>Details:</h2>";    
    if(obj.details){
        flightDetails = flightDetails + "<p>"+obj.details+"</p>";
    }
    if(obj.launch_site.site_name){flightDetails = flightDetails + "<h3>Launchsite:<h3><p>"+obj.launch_site.site_name+"</p>"}
    var articles = "<h2>Articles</h2>";
    if(obj.links.article_link){articles = articles + "<a href='"+obj.links.article_link+"'><p>Space.com article</p></a>"}
    if(obj.links.reddit_campaign){articles = articles + "<a href='"+obj.links.reddit_campaign+"'><p>Reddit Campaign</p></a>"}
    
    var infoBanner = "<img class='InfoBannerImg'>";
    if(obj.links.mission_patch_small){
        infoBanner = "<img class='InfoBannerImg' src='"+obj.links.mission_patch_small+"'>"
    } else {
        infoBanner = "<img class='InfoBannerImg' src='http://geekmasterrated.com/SpaceXExam/img/graph/logo.svg'>";
    }
//    console.log(obj.links);
//    if(obj.links.presskit){}
    
    overlayDiv.innerHTML = "<div class='showMoreInfoDivBackground' onclick='removeStuff()'>"+infoBanner+"</div><div class='showMoreInfoDivDiv'><h2>" + obj.mission_name + "</h2><h3>Flight " + obj.flight_number + ", " + obj.rocket.rocket_name + "</h3><h3>"+dayUnixDate+"/"+monthUnixDate+"/"+year+"</h3>"+flightDetails+articles+"</div>";
    
    change();
    moveMe();
    
    
}
    
    


function change(){
    var showMoreInfoDivBackground = document.getElementsByClassName("showMoreInfoDivBackground")[0],
        showMoreInfoDiv = document.getElementsByClassName("showMoreInfoDiv")[0],
        showMoreInfoH2 = document.getElementsByClassName("showMoreInfoH2")[0],
        showMoreInfoH3 = document.getElementsByClassName("showMoreInfoH3"),
        InfoBannerImg = document.getElementsByClassName("InfoBannerImg")[0],
        ytvid = document.getElementsByClassName("ytVideo")[0],
        showMoreInfoDivDiv = document.getElementsByClassName("showMoreInfoDivDiv")[0],
        windowsHeight = window.innerHeight;

    showMoreInfoDivDiv.style.marginTop = (windowsHeight/100)*17 + "px";
    
    if(ytvid){
        var ytvidoffsetwidth = ytvid.offsetWidth;
        ytvid.style.height = (ytvidoffsetwidth * 0.5625) + "px";
        console.log(ytvid);
    }
    
    console.log(windowsHeight);
    
    InfoBannerImg.style.marginTop = (windowsHeight/100)*1.5 + "px";
    InfoBannerImg.style.height = (windowsHeight/100)*14.25 + "px";
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

var upcommingLiftoffs,
    previousLiftoffs,
    upcommingI = 10000;

function displayCommingLaunches(myJson,divName){
    var launchesDiv = document.getElementsByClassName(divName)[0],
        myJsonLength = myJson.length,
        viewMoreA = document.getElementsByClassName("viewMoreA"),
        magicNumber = 0;
//    console.log("pastI"+pastI);
//    console.log("upcommingI"+upcommingI
    
//    if(divName == "upcommingEventsContent"){magicNumber = upcommingI;
//                                            upcommingI = upcommingI + 3};
//    if(divName == "pastEventsContent"){magicNumber = pastI;
//                                       pastI = pastI + 3; };
    var whichDivName;
    if(myJsonLength <= magicNumber){return;}
    if(divName == "upcommingEventsContent"){magicNumber = upcommingI;
                                            upcommingI = upcommingI + 6;
                                            whichDivName = "upcommingEventsContent";};
    launchesDiv.innerHTML="";
    for(i = 0; i < magicNumber; i++){
//        console.log(myJson[i].mission_name);
//        console.log(myJson[i].rocket.rocket_name);
//        console.log(myJson[i].launch_date_unix);
        if(myJson[i]){
        var unixDate = new Date((myJson[i].launch_date_unix)*1000),
            dayUnixDate = unixDate.getDate();
        if(dayUnixDate < 10){
            dayUnixDate = "0" + dayUnixDate;
        }
        var monthUnixDate = unixDate.getMonth();
        if(monthUnixDate < 10){
            monthUnixDate = "0" + monthUnixDate;
        }
        
        var dato = unixDate.getMonth();
//        console.log(dato);
        launchesDiv.innerHTML +="<div class='collum-tablet-4'><div class='infoContent'><p>" + myJson[i].mission_name + "</p><p>" + myJson[i].rocket.rocket_name + "</p><p>" + dayUnixDate+"/"+monthUnixDate +"/"+ unixDate.getFullYear() + "</p><img onclick='aFokenFunction(" + myJson[i].flight_number + ",&#34;"+divName+"&#34;)' class='rocketImg' src='img/graph/rocketNext.svg' alt='rocket'><hr></div></div>";
        }
    }
    if(magicNumber >= myJson.length){
        if(divName == "upcommingEventsContent"){
            viewMoreA[0].style.opacity = "0.2";
            viewMoreA[0].style.cursor = "no-drop";
        }
    }
    
}