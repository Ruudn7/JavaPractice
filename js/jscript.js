var multiline ="linijka pierwsza\ndruga linijka\n\tcześć kochani tu Sławomir!"

//dodawanie
var number1 = 7;
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


var name= "Sławek"
var username;

username = name ? name : "nieznajomy" ;

console.log("witaj " + username)


if(number1===5){
    Word = "pięć";
} else 
if(number1===6){
    Word = "sześć";
    } else 
if(number1===7){
    Word = "siedem";
} else {
    Word = "liczba nieznana";    
    }

    console.log("Wartość to " + Word + ".");


    switch(number1) {
        case 5:
            word = "pięć";
            break;

        case 6:
            word = "sześć";
            break;

        case 7:
            word = "siedem";
            break;

        default:
        word = "nieznane"
}


    console.log("Wartość to " + word + ".");

    while (number2 >0) {
        console.log(number2);
        number2--;
    }

    var secretNumber = 2;

    while (prompt("podaj liczbę") != secretNumber) {
        alert ("nie tym razem")
    }

    alert("brawo.!");

    

for(var i=number1; i<=10;i++){
    console.log(i)
}


var club = {
    "Sławek": "MUTD",
    "Zbyszek": "FCB",
    "Rafał": "Real"
};

club2 = {};

for(var key in club ){
    club2[key] = club[key];
}

console.log(club2)

  

for(var i=0; i<=20;i++){

    if( i % 2 !== 0){
     console.log(i);
    }
}


var numbers = [4, 6, 8, 15, 0, 40, 52],
containsZero = false;

for(var i=0; i<=numbers.length; i++){

    console.log(numbers[i])

    if(numbers[i] === 0){
        containsZero = true;
        break;
    }
}
console.log(containsZero)
*/

var numbers = [1, {firstName: "Sławek"}, 4, 5, [2,5,10]];

console.log(numbers);