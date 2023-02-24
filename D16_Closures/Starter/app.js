function greet(greeting){
    return function(name) {
        console.log(greeting + " "+name);
    }
}
var sayHI = greet("hi");
sayHI("toni");