// THIS IS YOUR CUSTOM JAVASCRIPT UTILITY LIBRARY
// This file is already included in you project!
// Make use of your utility functions, and create some new ones!

(function(){

    this.myUtils = {}

    myUtils = {}

    myUtils.myEach = function (arr, cb){
        var len = arr.length;
        for(var i=0; i<len; i++){
            cb(arr[i], i, arr);
        }
    }
    myUtils.myMap = function(funky, a)
    {
        for (i = 0; i < a.length; i++)
        {
            a[i] = funky(a[i]);
        }
    }

    // myReduce//can reduce numbers but not strings 
    myUtils.myReduce = function(arr, matey){
        var newArr = 0;
        for ( var i = 0; i < (arr.length); i++ ){
            newArr += arr[i];
}
        return matey(newArr);
}

     myUtils.sort = function(x, y){ 
    if (!isNaN){
        compare(x,y);
    }
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
 function compare(a, b) {return a - b;}
///sorting letters this time
///letters.sort(function(a, b)
//{
    var x = a.toLowerCase(), y = b.toLowerCase();
    
    return x < y ? -1 : x > y ? 1 : 0;
///});



    myUtils.buildElement = function(tag, string){
        return '<'+tag+'>'+str+'</'+tag+'>';
    }

    // something like this?  $(tag).append("<div>hello world</div>")


    myUtils.toDollarAmount; = function(amount){
        return (Math.round(amount*100)/100)}

    myUtils.toCurrencyString = function(amount){
        if (amount > 1){
        return '$'+(Math.round(amount*100)/100)}
        else { return '$.0'+(Math.round(amount*100)/100)}
         }
    };

    
}.call(this))