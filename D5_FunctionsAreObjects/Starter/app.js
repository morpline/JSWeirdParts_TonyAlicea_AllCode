function greet() {
    console.log("hi");
}
greet.language = "english";
console.log(greet.language);
greet();

//this is me messing around
function mess() {
    console.log(this.type);
}
let bedroom = {};
bedroom.mess = mess;
bedroom.mess.type = "toys";
console.log(bedroom);
bedroom.mess();