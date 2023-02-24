var a = {name:"a"}
var b;
b=a;
b.name = "b";
console.log(a.name);
//it prints "b", how can I stop that from happening?

a.name = "a";

b= JSON.parse(JSON.stringify(a));//works but is lengthy

b= {};
b.name = a.name;// strings are primitives, so it works, but you'll need to copy each property individually

b.name = "b";
//let's check to make sure the name hasn't been changed
console.log(a.name);
//Hooray! 
//It now prints "a", and
console.log(b.name);
// prints "b"!
