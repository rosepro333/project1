class Student{
    constructor(rol,name,course){
        this.rol=rol;
        this.name=name;
        this.course=course;
    }
    printStudent=()=>{

    console.log("rol  "+this.rol);
    console.log("name  "+this.name);
    console.log("course  "+this.course);


    }


}

//object

let obj=new Student(25,"ajay","cse");
obj.printStudent()

//only student name....

console.log(obj.name)

//outside print
obj.name="ajay";
console.log(obj.name)


//different types of variables
//instance variables
//instance variables are always prepended with this key word
//hear this.age,this.names....
//we can access instance variables with in the class by using  this keyword 
//we can access instance variables outside class by using reference name.instance variable name
//console.log(obj.name)


//set student() ??
//initalizing instance variables

//constructor ()
//duty
//initalizing instance variables
//it is invoked automaticalliy at the time of object creation 

//CALL 
//let obj=new Student(25,"ajay","cse");
//

