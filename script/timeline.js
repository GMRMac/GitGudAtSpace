https://api.spacexdata.com/v2/info/history
var innhold = document.getElementById("kulturInnhold");
var i = 0;

fetch("http://geekmasterrated.com/JSON/ACOS/kategorier.json")
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(myJson){
    getNeededList(myJson)
    saksbehandlerBokser(listOfItems);
    changeContent();
    changeContent();
//    if(myJson.kategoriSaksbehandler){
//        for(var o of myJson.kategoriSaksbehandler){
//            console.log(o.kategoritype,o.navn,o.populaeritet,o.imgUrl);
//        }
//    }
//    if(myJson.kategoriKultur){
//        for(var o of myJson.kategoriKultur){
//            console.log(o.kategoritype,o.navn,o.populaeritet,o.imgUrl,o.areal,o.plasser);
//        }
//    }
//    console.log(myJson)
});