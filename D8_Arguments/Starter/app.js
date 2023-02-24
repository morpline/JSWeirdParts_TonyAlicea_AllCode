function greet(first,last,language){
    language = language || "en";
    if(arguments.length === 0) {
        console.log("You didnt do something right");
        console.log("---------");
    }

    console.log(first);
    console.log(last);
    console.log(language);
    console.log(arguments);
    console.log("arg 0: "+arguments[0]);
    console.log("---------");

}
greet();
greet("Joe");
greet("Joe","johan");
greet("Joe","dolares","gr");