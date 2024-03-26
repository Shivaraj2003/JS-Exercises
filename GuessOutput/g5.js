var a =10;

var x =(function(){
    (function(){
         a =12;
    })();

    return (function(){
        console.log(a);
    });
})();
x();