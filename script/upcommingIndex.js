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
        monthUnixDate = monthUnixDate+1;
        if(monthUnixDate < 10){
            monthUnixDate = "0" + monthUnixDate;
        }
            year = unixDate.getFullYear();
    }
    
    
    var flightDetails = "<h2>Details:</h2>";    
    if(obj.details){flightDetails = flightDetails + "<p>"+obj.details+"</p>";}
    if(obj.launch_site.site_name){flightDetails = flightDetails + "<p class='launchsiteP'>Launchsite:</p><p>"+obj.launch_site.site_name+"</p>"}
    
    if(obj.links.article_link && obj.links.video_link){
        var articles = "<h2>Articles:</h2><div class='row'>";
        if(obj.links.article_link){articles = articles + "<div class='collum-tablet-6'><a target='_blank' href='"+obj.links.article_link+"'><p>Space.com article</p><img class='rocketImg' src='img/graph/rocketNextBlack.svg' alt='rocket'></a></div>"}
        if(obj.links.reddit_campaign){articles = articles + "<div class='collum-tablet-6'><a target='_blank' href='"+obj.links.reddit_campaign+"'><p>Reddit Campaign</p><img class='rocketImg' src='img/graph/rocketNextBlack.svg' alt='rocket'></a></div>"}
        if(obj.links.reddit_launch){articles = articles + "<div class='collum-tablet-6'><a target='_blank' href='"+obj.links.reddit_launch+"'><p>Reddit launch</p><img class='rocketImg' src='img/graph/rocketNextBlack.svg' alt='rocket'></a></div>"}
        if(obj.links.reddit_media){articles = articles + "<div class='collum-tablet-6'><a target='_blank' href='"+obj.links.reddit_media+"'><p>Reddit media</p><img class='rocketImg' src='img/graph/rocketNextBlack.svg' alt='rocket'></a></div>"}
        if(obj.links.reddit_recovery){articles = articles + "<div class='collum-tablet-6'><a target='_blank' href='"+obj.links.reddit_recovery+"'><p>Reddit recovery</p><img class='rocketImg' src='img/graph/rocketNextBlack.svg' alt='rocket'></a></div>"}
        if(obj.links.wikipedia){articles = articles + "<div class='collum-tablet-6'><a target='_blank' href='"+obj.links.wikipedia+"'><p>Wikipedia article</p><img class='rocketImg' src='img/graph/rocketNextBlack.svg' alt='rocket'></a></div>"}
        if(obj.links.video_link){
            var linken = obj.links.video_link,
                regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
                match = linken.match(regExp);

            if (match && match[2].length == 11) {
                match = match[2];
                articles = articles + "</div><iframe width='100%' class='ytVideo' src='https://www.youtube.com/embed/"+match+"' frameborder='0' allow='encrypted-media' allowfullscreen></iframe>";
            }
        }
    } else {
        articles = "<div style='height:35px;'></div>";
    }
    
    var infoBanner = "<img class='InfoBannerImg'>";
    if(obj.links.mission_patch_small){
        infoBanner = "<img class='InfoBannerImg' src='"+obj.links.mission_patch_small+"'>"
    } else {
        infoBanner = "<img class='InfoBannerImg' src='http://geekmasterrated.com/SpaceXExam/img/graph/logo.svg'>";
    }
//    console.log(obj.links);
//    if(obj.links.presskit){}
    
    overlayDiv.innerHTML = "<div class='showMoreInfoDivBackground' onclick='removeStuff()'>"+infoBanner+"<img class='exitThis' src='../img/graph/X.svg'></div><div class='showMoreInfoDivDiv'><h2>" + obj.mission_name + "</h2><h3>Flight " + obj.flight_number + ", " + obj.rocket.rocket_name + "</h3><h3>"+dayUnixDate+"/"+monthUnixDate+"/"+year+"</h3>"+flightDetails+articles+"</div>";
    
    change();
    
    
}
    
    


function change(){
    var showMoreInfoDivBackground = document.getElementsByClassName("showMoreInfoDivBackground")[0],
        showMoreInfoDiv = document.getElementsByClassName("showMoreInfoDiv")[0],
        showMoreInfoH2 = document.getElementsByClassName("showMoreInfoH2")[0],
        showMoreInfoH3 = document.getElementsByClassName("showMoreInfoH3"),
        InfoBannerImg = document.getElementsByClassName("InfoBannerImg")[0],
        ytvid = document.getElementsByClassName("ytVideo")[0],
        showMoreInfoDivDiv = document.getElementsByClassName("showMoreInfoDivDiv")[0],
        windowWitdh = window.innerWidth,
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
    
    showMoreInfoDivBackground.style.height = document.body.clientHeight + "px";
//    showMoreInfoDiv.style.height = document.body.clientHeight + "px";
    showMoreInfoDivBackground.style.backgroundColor = "#00000073";
//    console.log(InfoBannerImgWidth);

    if(InfoBannerImg.src == "http://geekmasterrated.com/SpaceXExam/img/graph/logo.svg"){
    getImage(windowWitdh, windowsHeight);} else {
        
    var InfoBannerImgWidth = InfoBannerImg.offsetWidth*0.8181818181818181;
    InfoBannerImg.style.marginTop = (windowsHeight/100)*1.5 + "px";
    InfoBannerImg.style.height = (windowsHeight/100)*14.25 + "px";
    }
}

    

function getImage(width, height){
    
    var InfoBannerImg = document.getElementsByClassName("InfoBannerImg")[0],
        InfoBannerImgWidth = InfoBannerImg.offsetWidth*0.8181818181818181;
    InfoBannerImg.style.marginLeft = ((width/2)-(InfoBannerImgWidth/2)) + "px";
    InfoBannerImg.style.marginTop = (height/100)*1.5 + "px";
    InfoBannerImg.style.height = (height/100)*14.25 + "px";
    setTimeout(function(){
        var InfoBannerImg = document.getElementsByClassName("InfoBannerImg")[0],
            InfoBannerImgWidth = InfoBannerImg.offsetWidth*0.8181818181818181;
        InfoBannerImg.style.marginLeft = ((width/2)-(InfoBannerImgWidth/2)) + "px";
        InfoBannerImg.style.marginTop = (height/100)*1.5 + "px";
        InfoBannerImg.style.height = (height/100)*14.25 + "px";
    },10)
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
        monthUnixDate = monthUnixDate+1;
            console.log(monthUnixDate);
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