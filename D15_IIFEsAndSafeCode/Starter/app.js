// IIFE
var firstname = 'John';
var greeting = "Hola"
(function(name) {
    
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
    //global.greeting or this.greeting won't
    
}(firstname)); // IIFE

console.log(greeting);


//IIFEs won't collide with other functions

















