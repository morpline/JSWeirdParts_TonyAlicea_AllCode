var person = {
    firstname: "DEfault",
    lastname: "Wii",
    getFullName: function(){
        return this.firstname + " "+this.lastname;
    }
}

var john = {
    firstname: "John",
    lastname: "Doo"
}

//just a demo
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);


var jane = {
    firstname: "Jean"
}

jane.__proto__ = person;
console.log(jane.getFullName);