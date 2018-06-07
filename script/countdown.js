// NEXT LAUNCH //

fetch("https://api.spacexdata.com/v2/launches/next")
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(myJson){
    console.log(myJson);
    var launchdate = myJson.launch_date_unix;
    test(launchdate,myJson.flight_number);
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





function test(launchDate,flightNumber){

var launchDateUnixTest = new Date(launchDate*1000),
    learnMoreTimeLeftDiv = document.getElementsByClassName("learnMoreTimeLeftDiv")[0],
    now = new Date();
    
    learnMoreTimeLeftDiv.innerHTML = "<a href='#!' class='timeLeftA' onclick='aFokenFunction("+flightNumber+",&#34;upcommingEventsContent&#34;)'><p>View more</p></a>"
    
//    console.log(now);
//    console.log(launchDateUnixTest);
    
//var timestamp = (Date.now()+launchDate/1000) - (Date.now());
var timestamp = launchDateUnixTest - now;

timestamp /= 1000; // from ms to seconds

function component(x, v) {
    return Math.floor(x / v);
}

var countdown = document.getElementsByClassName("timeLeftTime"),
    i = 0;
if(i == 0){
function butCanYouShowThis() {
    i++;
    console.log("test");
    
    timestamp--;
    
    var days    = component(timestamp, 24 * 60 * 60),
        hours   = component(timestamp,      60 * 60) % 24,
        minutes = component(timestamp,           60) % 60,
        seconds = component(timestamp,            1) % 60;
    
    countdown[0].innerHTML = days;
    countdown[1].innerHTML = hours;
    countdown[2].innerHTML = minutes;
    countdown[3].innerHTML = seconds;
    
    }
}
butCanYouShowThis();
    
    
    
setInterval(function() {
    
    timestamp--;
    
    var days    = component(timestamp, 24 * 60 * 60),
        hours   = component(timestamp,      60 * 60) % 24,
        minutes = component(timestamp,           60) % 60,
        seconds = component(timestamp,            1) % 60;
    
    countdown[0].innerHTML = days;
    countdown[1].innerHTML = hours;
    countdown[2].innerHTML = minutes;
    countdown[3].innerHTML = seconds;
    
}, 1000);
}