var arr1 = [1,2,3];
var mapForEach= function(arr,fn){
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}
var checkPastLimitSimplified = function(limiter) {
    return function (limiter,item) {
        return item>limiter;
    }.bind(this,limiter)
}
var arr2 = mapForEach(arr1,checkPastLimitSimplified(2));
console.log(arr2);