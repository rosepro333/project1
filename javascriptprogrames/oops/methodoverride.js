//method overriding

class Parent{
    phone=()=>{

        console.log("i have nokia")
    }
    
}
class Child extends Parent {
    phone=()=>{

        console.log(" i have iphone")
    }
}

var ch=new Child()
ch.phone();
