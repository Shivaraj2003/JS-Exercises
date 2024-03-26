var a =10;
var x = (function(){
    var a =12;

    return (function(){
        console.log(a);
    })
})();

x();