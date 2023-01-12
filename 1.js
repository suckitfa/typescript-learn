//基本数据类型
// 布尔
var married = false;
// 数字
var age = 20;
var firstname = 'Cooper Tang';
// 数组
var arr1 = [1, 2, 3, 4,];
var arr2 = [6, 7, 8, 9];
// tuple 数量和类型已知的数组
var cooper = ['cooper', 22];
// 枚举类型
var Gender;
(function (Gender) {
    Gender[Gender["GIRL"] = 0] = "GIRL";
    Gender[Gender["BOY"] = 1] = "BOY";
})(Gender || (Gender = {}));
console.log('Gender.BOY = ', Gender.BOY);
var num = 10;
console.log('num = ', num);
