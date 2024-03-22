
let greeting = 'hello';
let name = 'world';
 alert(greeting+' '+name);


const reg0 = /o/gi;
const reg1 = /l/gi;
let str = "Hello World";
let newStr = str.replace(reg0, 0).replace(reg1,1);
//  newStr = str.replace(reg1, 0);

console.log(newStr);