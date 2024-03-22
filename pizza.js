var toppings = ['Cheese','Ham','Bits','Tomatoes'];

function makePizza(toppings)
{
    return "A tasty pizza with "+toppings.join(' and ');
}

console.log(makePizza(toppings));