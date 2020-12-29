//objects are stored in key value pairs
var students={
    rol:180,
    name:"ajay",
    course:"bca",
    total:150

}

//key value
//duplicate keys are not allowed
//duplicate values are allowed

//accessing values
//if we want access values we have to use corresonding key

console.log(students["rol"])

console.log(students.rol)

console.log(students.name)




for (let std in students){

    console.log(std+","+students[std])
}

//checking for specific key

console.log("total" in students)

//adding a new key value pair
students["gender"]="male"
console.log(students)

//updation

students["total"]+=25
console.log(students)
