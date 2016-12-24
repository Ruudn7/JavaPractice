      "CZĘŚĆ DRUGA"
/*
var names = "Sławek"
var lName = "Wójciga"

function sayHello(firstName, lastName){

    return firstName + " " + lastName;
}

function f(firstName, lastName){

    arguments.callee.counter = arguments.callee.counter ? arguments.callee.counter : 1 ;

    return firstName + " " + lastName + ". Funkcja została uruchomiona po raz " + arguments.callee.counter++; 
}




"Funkcje MATH"


console.log(Math.abs(-15)) //wartość aboslutna (moduł)
console.log(Math.round(22.5186486)) //zaokrągla
console.log(Math.ceil(20.0005)) //zaokrągla w górę
console.log(Math.floor(50.99)) //zaokrągla w dół
console.log(Math.max(5,15,8,16,13)) // max wartość
console.log(Math.min(1,513,5,1,581,355,13)) //wartość min
console.log(Math.random()*10 ) // liczba od od 0 do 10 losowa



var d = new Date() ;  //pobranie daty
var d2= new Date(1482615483148) ; //liczba milisekund od 1.1.1970
var d3= new Date(1992, 09, 08, 22, 55) 
/*
console.log(d3.getFullYear())
console.log(d3.getMonth() + 1)
console.log(d3.getDate())
console.log(d3.getHours())
console.log(d3.getMinutes())
console.log(d3.getMilliseconds())
console.log(d3.getDay())
console.log(d3.getTime())

console.log(d3.toLocaleString())

console.log(d3.getDate() + "." +( d3.getMonth() + 1) + "." + d3.getFullYear());

*/

var regex = /a+/gi;

var name = "Ania";

console.log(name.replace(regex, "p"))