//highest elemnt in array

var arr=[10,11,8,7,6,12,13]

let max=arr.reduce((num1,num2)=>num1>num2?num1:num2)

console.log(max)

//sort asending....
arr.sort((no1,no2)=>no1-no2)
console.log(arr)

//sort decenting...
arr.sort((no1,no2)=>no2-no1)
console.log(arr)

//total sum in array

let tot=arr.reduce((num1,num2)=>num1+num2)

console.log(tot)