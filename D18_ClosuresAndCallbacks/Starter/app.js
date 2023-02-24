function sayHiLater(){
    var greeting = "Hi";
    setTimeout(() => {
        console.log(greeting);
    }, 3000);
}
sayHiLater();

function tellMeWhenDone(callback){
    var a = 1000;
    var b = 2000;
    callback();
}
tellMeWhenDone(function(){
    console.log("I am done");
})
tellMeWhenDone(function(){
    tellMeWhenDone(()=>{
        console.log();
    })
})