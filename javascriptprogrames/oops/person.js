//class
//blue print(object oriented),plan,design pattern
//object
//real world entity
//reference
//ex:led tv,.....tv-class,led tv-object,reference-remote

class Person{
     setPerson=(age,names,gender)=>{
         this.age=age;
         this.names=names;
         this.gender=gender;
     }
     printPerson=()=>{

     console.log("age  "+this.age);
     console.log("names  "+this.names);
     console.log("gender  "+this.gender);


     }


}

//object

var obj=new Person();
obj.setPerson(25,"ajay","male")
obj.printPerson()

var obj1=new Person();
obj1.setPerson(22,"ahhk","male")
obj1.printPerson()

