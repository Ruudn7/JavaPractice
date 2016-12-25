function sayHello(){

    var name = "Sławek";
   
    message = "Witaj" ;
   
    var con = confirm("czy wyrażasz zgodę na kontynuacje?");
    var ans = prompt("Jak masz na imię?");
    
    console.log(message + " " + ans)

}

sayHello();

console.log(message);