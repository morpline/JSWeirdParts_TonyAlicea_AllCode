var person = {
    one: 1,
    two: 2,
    add: function(){
        return this.one+this.two;
    }
};
var logTotal = function(e,f){
    console.log("Total: "+this.add());
    console.log("E: "+e+"F: "+f);
    console.log("======");
}
var logPersonTotal = logTotal.bind(person);
logPersonTotal("ee")

logTotal.call(person, "eee","fff");
logTotal.apply(person,["EE","f"]);

function multiply(a,b){
    return a*b;
}

var multiplyByTwo = multiply.bind(this,2);
console.log(multiplyByTwo(4));
var multiplyByThree = multiply.bind(this,3);
console.log(multiplyByThree(4));
