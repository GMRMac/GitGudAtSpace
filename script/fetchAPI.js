// NEXT LAUNCH //

fetch("https://api.spacexdata.com/v2/launches/next")
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(myJson){
    console.log(myJson);
    var launchdate = myJson.launch_date_unix;
    test(launchdate);
})

//console.log(launchdate);

// COUNTDOWN THING //
//
//
//
//    var now = new Date().getTime();
//
//    // Find the distance between now an the count down date
//    var distance = countDownDate - now;
//
//    // Time calculations for days, hours, minutes and seconds
//    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//    // Output the result in an element with id="demo"
//    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
//    + minutes + "m " + seconds + "s ";





function test(launchDate){

var launchDateUnixTest = new Date(launchDate*1000);
    
var now = new Date();
    
    console.log(now);
    console.log(launchDateUnixTest);
    
//var timestamp = (Date.now()+launchDate/1000) - (Date.now());
var timestamp = launchDateUnixTest - now;

timestamp /= 1000; // from ms to seconds

function component(x, v) {
    return Math.floor(x / v);
}

var coundtown = document.getElementById("countdown");
var i = 0;
if(i == 0){
function butCanYouShowThis() {
    i++;
    console.log("test");
    
    timestamp--;
    
    var days    = component(timestamp, 24 * 60 * 60),
        hours   = component(timestamp,      60 * 60) % 24,
        minutes = component(timestamp,           60) % 60,
        seconds = component(timestamp,            1) % 60;
    
    countdown.innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " secounds";
    
    }
}
butCanYouShowThis();
    
    
    
setInterval(function() {
    
    timestamp--;
    
    var days    = component(timestamp, 24 * 60 * 60),
        hours   = component(timestamp,      60 * 60) % 24,
        minutes = component(timestamp,           60) % 60,
        seconds = component(timestamp,            1) % 60;
    
    countdown.innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " secounds";
    
}, 1000);
}

// UPCOMMING LAUNCHES //

fetch("https://api.spacexdata.com/v2/launches/upcoming")
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(myJson){
    console.log(myJson);
    var missionName = myJson.mission_name;
    var rocketName = myJson.rocket_name;
    var launchDateUnix = myJson.launch_date_unix;
//    console.log(missionName, rocketName, launchDateUnix);
    displayCommingLaunches(myJson,"launches");
})

function displayCommingLaunches(myJson,divName){
    var launchesDiv = document.getElementById(divName);
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
        launchesDiv.innerHTML += o.mission_name + "<br>" + o.rocket.rocket_name + "<br>" + dayUnixDate+"/"+monthUnixDate +"/"+ unixDate.getFullYear() + "<hr>";
    }
    
}

fetch("https://api.spacexdata.com/v2/launches")
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(myJson){
    console.log(myJson);
    var missionName = myJson.mission_name;
    var rocketName = myJson.rocket_name;
    var launchDateUnix = myJson.launch_date_unix;
//    console.log(missionName, rocketName, launchDateUnix);
    displayCommingLaunches(myJson,"pastLaunches");
})
