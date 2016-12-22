var multiline ="linijka pierwsza\ndruga linijka\n\tcześć kochani tu Sławomir!"

//dodawanie
var number1 = 5;
var number2 = 8;

var rest1= number1 + number2;

//konkatenacja

var name= "Jan ";
var surname= "kowalski "

var rest2= name + surname + rest1 ;

//odejmowanie

var rest3 = number2 - number1;

//mnożenie

var rest4 = number1*number2;

//dzielenie

var rest5 = number2/number1;

//modulo

var rest6 = number2 % number1;

number2 += 5;

var rest7 = number1 + number2;

/*
if(number1 == 5){
    console.log("tia")
} else {
    console.log("nje")
}


if(number2 == 5){
    console.log("tia")
} else {
    console.log("nje")
}


if(number2 >= 8){
    console.log("tia")
} else {
    console.log("nje")
}


console.log(number1 >= 5 && number2 <=15)


if(number1>=15 || number2<1){
    console.log("coś się spełniło")
} else {
console.log("TryAgain")
}


var club=""

if(!club){
    console.log("nie została podana")
} else {
    console.log("nie nie została")
}

var name=""

if(name !== "") {
    console.log("Witaj " + name)
} else {
    console.log("Witaj " + "nieznajomy")
}

*/
var name= ""
var username;

username = name ? name : "nieznajomy" ;

console.log("witaj " + username)
