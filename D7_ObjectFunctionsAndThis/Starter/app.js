console.log(this);
function a(){
    console.log(this);
}
var b = function(){
    console.log(this);
}
a();
b();
//these all point to the window object


var c = {
    name:"c",
    log:function(){
        var self = this;
        self.name = "new c";
        console.log(self);
        //self points to c
        var setname = function(newname){
            self.name = newname;
        }
        setname("c version 3");
        console.log(self);
    }
}
c.log();