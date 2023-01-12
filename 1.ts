//基本数据类型
// 布尔
let married:boolean = false

// 数字
let age:number = 20
let firstname:string = 'Cooper Tang'

// 数组
let arr1:number[] = [1,2,3,4,]
let arr2:Array<number> = [6,7,8,9]

// tuple 数量和类型已知的数组
let cooper:[string,number] = ['cooper',22]

// 枚举类型
enum Gender {
    GIRL,
    BOY
}
console.log('Gender.BOY = ',Gender.BOY)

const num:number = 10
console.log('num = ',num)