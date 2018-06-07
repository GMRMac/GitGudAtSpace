//https://api.spacexdata.com/v2/info/history
//var innhold = document.getElementById("kulturInnhold");
//var i = 0;

fetch("https://api.spacexdata.com/v2/info/history")
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(myJson){
    console.log(myJson);
    historyData = myJson;
    thisorthat();
});

var historyData;

function predicateBy(prop){
   return function(a,b){
      if( a[prop] > b[prop]){
          return 1;
      }else if( a[prop] < b[prop] ){
          return -1;
      }
      return 0;
   }
}
function predicateByOposite(prop){
   return function(a,b){
      if( a[prop] < b[prop]){
          return 1;
      }else if( a[prop] > b[prop] ){
          return -1;
      }
      return 0;
   }
}

function printStuff(list){
    var content = document.getElementsByClassName("content")[0];
    content.innerHTML = "";
    for(i = 0; i < list.length; i++){
        
        var dato = convertUTCDateToLocalDate(new Date(list[i].event_date_utc));
//        console.log(dato.toLocaleString());
        
        content.innerHTML += "<h2 class='timelineHeader2'>"+list[i].title+"</h2>";
        content.innerHTML += "<p class='timelineDateP'>"+dato+"</p>";
        content.innerHTML += "<p class='timelineDetailsP'>"+list[i].details+"</p>";
        content.innerHTML += "<h3 class='timelineHeader3'>Links:</h3>";
        if(list[i].links.article){content.innerHTML += "<a href='"+list[i].links.article+"'>space.com</a>"}
        if(list[i].links.reddit){content.innerHTML += "<a href='"+list[i].links.reddit+"'>reddit</a>"}
        if(list[i].links.wikipedia){content.innerHTML += "<a href='"+list[i].links.wikipedia+"'>wikipedia</a>"}
//        console.log(list[i].links.article);
        if(i+1 != list.length){
        content.innerHTML += "<div class='barrierTimeline'></div>";
        }
    }
}

function thisorthat(){
    var sorted = historyData.sort(predicateByOposite("event_date_utc"));
    console.log(sorted);
    printStuff(sorted);
    
}

function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();
    newDate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();

//    newDate.setHours(hours - offset);

    return newDate;   
}

function displayTimelineDifferently(){
    var changeTimelineSelect = document.getElementsByClassName("changeTimelineSelect")[0],
        list;
    
    
    if(changeTimelineSelect.value == "oldNew"){
        list = historyData.sort(predicateByOposite("event_date_utc"));
        return printStuff(list);
    } 
    list = historyData.sort(predicateBy("event_date_utc"));
    return printStuff(list);
    
}