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
        launchesDiv.innerHTML +="<div class='collum-tablet-4'><div class='infoContent'><p>" + o.mission_name + "</p><p>" + o.rocket.rocket_name + "</p><p>" + dayUnixDate+"/"+monthUnixDate +"/"+ unixDate.getFullYear() + "</p><img class='rocketImg' src='img/graph/rocketNext.svg' alt='rocket'><hr></div></div>";
    }
    
}