const LinkedList = require("./list");

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);

console.log(list.toString());

list.reverse();

console.log(list.toString());

list.append(1);
console.log(list.toString());

list.prepend(-5);
console.log(list.toString());

list.insert(-100, 5);
console.log(list.toString());

list.fromArray([1, 2, -5, 20, 14]);
console.log(list.toString());
