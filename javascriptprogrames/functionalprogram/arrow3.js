var arr=[10,11,8,7,6,12,13]

//USING MAP() AND FILTER()

//square of each element
var data=arr.map(num=>num**2)
console.log(data)

//cube of each element

var data=arr.map(num=>num**3)
console.log(data)

//double of each element

var dble=arr.map(num=>num+num)
console.log(dble)



var data=arr.filter(num=>num%2==0)
console.log(data)


var names=["albi","alan","ali","alat"]

var data1=names.map(name=>name.toUpperCase() )
console.log(data1)

var data2=names.filter(name=>name.charAt(0)=='a')
console.log(data2)


