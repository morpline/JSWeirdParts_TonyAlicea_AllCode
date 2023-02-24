var person = new Object();

person['firstname'] = "tony";
person['lastname'] = "alicea";

console.log(person);
console.log(person["firstname"]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 main st";
person.address.city = "new york";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']["state"]);
