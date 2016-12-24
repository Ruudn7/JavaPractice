/*var multiline ="linijka pierwsza\ndruga linijka\n\tcześć kochani tu Sławomir!"

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


var numbers = [1, {firstName: "Sławek"}, 4, 5, [2,5,10]];

console.log(numbers);

numbers.push("XYZ");

numbers.unshift("ZYX");




var arr = ["sławek","darek","kamil","gienek"];

console.log(arr.length);


USUWANIE ELEMENTÓW - TABILCE

var last = arr.pop();
var first = arr.shift();


var last2 = arr.splice(-2,2, "ziom","ziomek");


arr.length=2;



//sortowane

var arr = [5, 8, 1, 2, 1, 33, 23, 18, 4],
    arr2 = ["anita", "Tomek", "Ania", "Andrzej", "Mateusz", "Kasia"];

console.log(arr)


//return -1 oznacza że a zwrócone przed b


arr.sort(function(a,b){
 if(a>b){
    return 1;
} else {
    return 0;
}

return a - b;

});

console.log(arr2)

arr2.sort(function(a, b){

    if(a<b){
        return -1;
    } else {
        return 1;
    }
})



var numbers = [2, 3, 17, 32, 28, 9],
    text = "wylosowane liczby to: ";

    var arrLength = numbers.length;
    
    for(var i = 0; i < arrLength; i++){

        

        if( i !== arrLength - 1) {
            text += numbers[i] +", ";
        } else{
            text += numbers[i];
        }
    }

console.log(text)


var arr = [["Tomasz", "Kowalski", 23],["Anna", "Nowak", 25],["Sławomir", "Wójciga", 24]]

for(var i =0; i<arr.length; i++) {

    console.log("DANE")

for(var j=0;j<arr[i].length;j++){
    console.log(arr[i][j])
}


    console.log("--------------")
}


"SLICE oraz ŁĄCZENIE - PRZESUNIĘCIE DO TYPU STRING"

var arr = [32, 11, 2, 0, 45, 99, 3, 5];

console.log(arr)

var half = arr.slice(-4,6)

// console.log(half)

//console.log(arr.join(", "));

//console.log(arr.indexOf(99) !== -1);

//console.log(arr.concat(half))

arr.forEach(function(value,index, array) {

   // console.log(value);
});

var gt10= arr.filter(function(value){

    return value>10;
})

var negative = arr.map(function(value){
    return value * -1;
})


//Zwracanie funkcji
function sayHello(){
   return "witaj";
}

var hello = sayHello(); 


console.log(sayHello() + " Sławek")




function makeArray (){

    var arr = [1, 2, 3];

    if (3<1){
        return false;
    }

    console.log("cześć")
return true;

}



// Parametry funkcji

function square(num){

    return num * num;

}

function sum(a, b) {

    return a + b;
}

 console.log(square(15));

 console.log(sum(5,8));



var firstName = "Sławek";

var person = {
    firstName: "Sławomir",
    lastName: "Wójciga",
}

 function sayHello(obj) {
     return "Witaj " + obj.firstName + " " + obj.lastName;
 }

 console.log(sayHello(person))

!!!!!!!!!!!!!!!
ZAKRES Zmiennych

zmienna w zmiennej jest możliwa do użycia tylko wewnątrz tej funkcji
wyjątek funkcja window.nazwa
!!!!!!!!!!!!!


function sum(num1, num2){

  //  console.log(arguments[1]);
    //arguments[0] = 10;

if(arguments.length === 2 && typeof num1 === "number" && typeof num2 === "number"){
return num1 + num2;
} else {
    console.log("podaj właściwe dane")
}
    
}

function sum1(){

var total = 0;

for(var i=0; i<arguments.length ;i++){

total = total + arguments[i];

}
return total;
console.log(total)
}

console.log(sum1(2,3,4,5))
 */
(function(){
var arr = [1,45,22,31,3]



function sortFunc(a, b){

return a - b;

}
//arr.sort(function sortFunc(a, b){
  //  return a-b ;
//}
//)
arr.sort(sortFunc);
console.log(arr)

function sayHello(text, getName){

    var result= text + getName();

    return result;

}

console.log(sayHello("witaj ", function(){
    return "Piotr";
}));

})();
