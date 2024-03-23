
function digitProduct(num){
    let product = 1;

    while(num!==0)
    {
        product *=  num%10;
        num=Math.floor(num/10);
    }
    return product;
}

function persistance(num){
    let cnt = 0;
     while(num>9)
     {
        cnt++;
        num = digitProduct(num);
     }

     return cnt;
}

console.log(persistance(999));
console.log(persistance(39));
console.log(persistance(18));
console.log(persistance(4));