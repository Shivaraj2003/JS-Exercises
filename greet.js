
var d = new Date(); 
d.getHours(); 
// d.getMinutes(); 
// d.getSeconds(); 

let currentTime = d.getHours();


if(currentTime>=5 && currentTime<=12)
{
    console.log('Good Morning');
}
else if(currentTime>12 && currentTime<=17)
{
    console.log('Good Afternoon');
}
else if(currentTime>17 && currentTime<=20){
    console.log('Good Evening');
}

else{
    console.log('Good Night');
}