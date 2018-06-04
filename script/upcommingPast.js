fetch("https://api.spacexdata.com/v2/launches/upcoming")
.then(function(response){
//    console.log(response);
    return response.json();
})
.then(function(myJson){
//    console.log(myJson);
    var missionName = myJson.mission_name,
        rocketName = myJson.rocket_name,
        launchDateUnix = myJson.launch_date_unix;
//    console.log(missionName, rocketName, launchDateUnix);
    displayCommingLaunches(myJson,"upcommingEventsContent");
    upcommingLiftoffs = myJson;
});

fetch("https://api.spacexdata.com/v2/launches")
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(myJson){
    console.log(myJson);
    var missionName = myJson.mission_name,
        rocketName = myJson.rocket_name,
        launchDateUnix = myJson.launch_date_unix;
//    console.log(missionName, rocketName, launchDateUnix);
    displayCommingLaunches(myJson,"pastEventsContent");
    previousLiftoffs = myJson;
});

var upcommingLiftoffs,
    previousLiftoffs,
    upcommingI = 6,
    pastI = 6;

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
    if(divName == "pastEventsContent"){magicNumber = pastI;
                                       pastI = pastI + 12; };
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
        console.log(dato);
        launchesDiv.innerHTML +="<div class='collum-tablet-4'><div class='infoContent'><p>" + myJson[i].mission_name + "</p><p>" + myJson[i].rocket.rocket_name + "</p><p>" + dayUnixDate+"/"+monthUnixDate +"/"+ unixDate.getFullYear() + "</p><img onclick='aFokenFunction(" + myJson[i].flight_number + ",&#34;"+divName+"&#34;)' class='rocketImg' src='img/graph/rocketNext.svg' alt='rocket'><hr></div></div>";
        }
    }
    if(magicNumber >= myJson.length){
        if(divName == "upcommingEventsContent"){
            viewMoreA[0].style.opacity = "0.2";
            viewMoreA[0].style.cursor = "no-drop";
        }
        if(divName == "pastEventsContent"){
            viewMoreA[1].style.opacity = "0.2";
            viewMoreA[1].style.cursor = "no-drop";
        }
    }
    
}
function aFokenFunction(flightNumber,type){
    console.log(flightNumber);
    var overlayDiv = document.getElementById("overlayDiv");
    
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
    if(obj.links.article_link){articles = articles + "<a href='"+obj.links.article_link+"'><p>foken</p></a>"}
    var infoBanner = "<img class='InfoBannerImg'>";
    if(obj.links.mission_patch_small){
        infoBanner = "<img class='InfoBannerImg' src='"+obj.links.mission_patch_small+"'>"
    } else {
        infoBanner = "<img class='InfoBannerImg' src='http://geekmasterrated.com/SpaceXExam/img/graph/logo.svg'>";
    }
    console.log(obj.links);
    if(obj.links.presskit){}
    
    overlayDiv.innerHTML = "<div class='showMoreInfoDivBackground' onclick='removeStuff()'>"+infoBanner+"</div><div class='showMoreInfoDivDiv'><h3>" + obj.mission_name + "</h3><h2>Flight " + obj.flight_number + ", " + obj.rocket.rocket_name + "</h2><h2>"+dayUnixDate+"/"+monthUnixDate+"/"+year+"</h2>"+flightDetails+articles+"</div>";
    
    change();
    moveMe();
    
    
}

//article_link
//:
//"https://www.space.com/37304-liftoff-spacex-second-launch-three-days.html"
//mission_patch
//:
//"https://images2.imgbox.com/3f/f0/7zaluW42_o.png"
//mission_patch_small
//:
//"https://images2.imgbox.com/cd/99/lNWjUnUS_o.png"
//presskit
//:
//"http://www.spacex.com/sites/spacex/files/iridium2presskit.pdf"
//reddit_campaign
//:
//"https://www.reddit.com/r/spacex/comments/6bp4fj/"
//reddit_launch
//:
//"https://www.reddit.com/r/spacex/comments/6j67ti/"
//reddit_media
//:
//"https://www.reddit.com/r/spacex/comments/6j7va6/"
//reddit_recovery
//:
//"https://www.reddit.com/r/spacex/comments/6k16ho/"
//video_link
//:
//"https://www.youtube.com/watch?v=7tIwZg8F9b8"
//wikipedia
//:
//"https://en.wikipedia.org/wiki/Iridium_satellite_constellation"


function change(){
    var showMoreInfoDivBackground = document.getElementsByClassName("showMoreInfoDivBackground")[0],
        showMoreInfoDiv = document.getElementsByClassName("showMoreInfoDiv")[0],
        showMoreInfoH2 = document.getElementsByClassName("showMoreInfoH2")[0],
        showMoreInfoH3 = document.getElementsByClassName("showMoreInfoH3");
    
    showMoreInfoDivBackground.style.height = document.body.clientHeight + "px";
//    showMoreInfoDiv.style.height = document.body.clientHeight + "px";
    showMoreInfoDivBackground.style.backgroundColor = "#000000C3";
    
    
}
function moveMe(){
//    var showMoreInfoDivDiv = document.getElementsByClassName("showMoreInfoImage")[0];
//    showMoreInfoDivDiv.style.marginTop = "0px";
}
function removeStuff(){
    var overlayDiv = document.getElementById("overlayDiv"),
        showMoreInfoDivBackground = document.getElementsByClassName("showMoreInfoDivBackground")[0],
        showMoreInfoDivDiv = document.getElementsByClassName("showMoreInfoDivDiv")[0];
    
    
    
    setTimeout(function(){showMoreInfoDivBackground.style.opacity = "0";
                          showMoreInfoDivDiv.style.opacity = "0";
                          showMoreInfoDivBackground.style.backgroundColor = "transparent";},250);
    setTimeout(function(){overlayDiv.innerHTML = "";},450);
}

//launchesDiv.innerHTML +="<div class='collum-tablet-4'><div class='infoContent'><p>" + o.mission_name + "</p><p>" + o.rocket.rocket_name + "</p><p>" + dayUnixDate+"/"+monthUnixDate +"/"+ unixDate.getFullYear() + "</p><img onclick='aFokenFunction()' class='rocketImg' src='img/graph/rocketNext.svg' alt='rocket'><hr></div></div>"
