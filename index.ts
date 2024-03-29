import { add,money } from "./arithmetics";
 
add(1);
console.log(`money is ${money}`);  // money is 1
 
add(2);
console.log(`money is ${money}`);  // money is 13

// 外部からモジュールの変数を変更できないので以下はエラーとなる。
// money = 10;