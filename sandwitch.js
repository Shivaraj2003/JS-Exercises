
function sandwichCalculator(breads,cheeze)
{
    if(breads>=(2*cheeze))
    {
        return cheeze;
    }
    return Math.floor(breads/2);
}

console.log(sandwichCalculator(20,10));
console.log(sandwichCalculator(20,4));
console.log(sandwichCalculator(21,90));