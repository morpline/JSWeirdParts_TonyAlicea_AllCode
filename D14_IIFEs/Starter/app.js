function game (){
    //code
}
game();

var great = function(){
    //more code
}

great();

var greet = function(){
    //so much code
    return 5;
}();//runs immediately
console.log(greet);
//logs 5
3;
"words";
//expressions go in functions
(function(name){console.log(name);})("jon")
// or
//(function(name){console.log(name);}("jon"))
//^^ was in the video but returns error instead
//logs jon

//these are IIFEs
//(immediately invoked functions expressions)