function greet(firstname, lastname, language) {
        language = language || "en";
        if(language == "en"){
                console.log("Hello "+firstname + " "+lastname);
        } else if (language == "es"){
                console.log("Hola "+firstname + " " + lastname);
        }
}
//i can't define a different function with the same name
//but i can define default values and functions that adjust according to how many arguments are given.