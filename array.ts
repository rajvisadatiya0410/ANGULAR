"use strict";
let a1 = [1, 2, 3, 4, 5];
let a2 = ['a', 'b', 'c', 'd', 'e'];
a1.push(6);
a2.push('f');
console.log("pushed:", a1);
console.log("pushed:", a2);
a1.pop();
a2.pop();
console.log("popped", a1);
console.log("popped", a2);