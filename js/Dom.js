/*
function sayHello(){

    var name = "Sławek";
   
    message = "Witaj" ;
   
    var con = confirm("czy wyrażasz zgodę na kontynuacje?");
    var ans = prompt("Jak masz na imię?");
    
    console.log(message + " " + ans)

}

sayHello();


var isChrome = navigator.userAgent.match(/Chrome/i)

if (isChrome){
    
        console.log("tak")

    } else {

        console.log("nie")
}


setTimeout(function(){
    console.log("witaj po 3 sekundach")
}, 3000 );

var counter = 0;
var clock = 0;
/*
function tick(){
if (counter <=5 ){
console.log(counter++);
}}

clock = setInterval(tick, 1000);


function tock(){

    if ( counter <= 5) {
        console.log(counter++)
        setTimeout(tock, 1000)

    }
    else {
        console.log("koniec")
    }
}

tock();


//   WAŻNE!!!!!!!!!!!!!!!!!!!!!!!!
//pobieranie danaych container.getElementById
// getElementsByName --. pobiera elementy po nazwie

// querySelector("ZAPIS HTML/CSS") - tylko jeden elemet


//guerySelectorAll --> wyszystkie
//Można piętrowo na zasadzie drzewa Lekcja 50!
 // jak inaczej można pobierać ?
//document.all;  --> zwraca wszysteki elementy
//document.forms; formularze
//document.images; obrazy
//document.links; linki

//var firtsForm = document.forms[0] --> pierwszy formularze
 // JAK TWORZYĆ ELEMENTY W JS (JESZCZE NIE WIDOCZNE NA STRONIE)
var div = document.createElement("div");
var img = new Image();

var text = document.createTextNode("treść");

//MOŻNA JE PODDAWAĆ ZABIEGOM ALE NIE BĘDĄ JESZCZE WIDOCZNE

*/
// LEKCJA 52!!! ŁĄCZENIE ELEMENTÓW


var list1 = document.querySelector("#list1"),
    list2 = document.querySelector("#list2");

var li = document.createElement("li"),
    text = document.createTextNode("Treść");

li.appendChild( text );

// list1.appendChild(li);

//list1.insertBefore(li, list1.querySelector("li:nth-child(2)"));

//list1.appendChild(list1.querySelector(":first-child"));

//list2.removeChild(list2.querySelector(":last-child"));

list1.replaceChild(text, list1.querySelector(":last-child"));