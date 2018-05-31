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
    upcommingI = 3,
    pastI = 3;

function displayCommingLaunches(myJson,divName){
    var launchesDiv = document.getElementsByClassName(divName)[0],
        myJsonLength = myJson.length,
        magicNumber = 0;
//    console.log("pastI"+pastI);
//    console.log("upcommingI"+upcommingI
    
//    if(divName == "upcommingEventsContent"){magicNumber = upcommingI;
//                                            upcommingI = upcommingI + 3};
//    if(divName == "pastEventsContent"){magicNumber = pastI;
//                                       pastI = pastI + 3; };
    if(myJsonLength <= magicNumber){return;}
    if(divName == "upcommingEventsContent"){magicNumber = upcommingI;
                                            upcommingI = upcommingI + 3};
    if(divName == "pastEventsContent"){magicNumber = pastI;
                                       pastI = pastI + 3; };
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
        launchesDiv.innerHTML +="<div class='collum-tablet-4'>" + myJson[i].mission_name + "<br>" + myJson[i].rocket.rocket_name + "<br>" + dayUnixDate+"/"+monthUnixDate +"/"+ unixDate.getFullYear() + "<hr></div>";
        }
    }
    
}