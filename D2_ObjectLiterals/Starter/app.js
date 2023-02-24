var tony  = {
    firstname:"tony",
    lastname:"alicea",
    address:{
        street:"111 main street",
        city:"new Yowk",
        atate:"NY"
    }
};
function getre (person){
    console.log("Hi "+person.firstname);
}
getre(tony);
getre({
    firstname:"mary"
})
tony.address2 = {
    street:"333 Second ST."
};