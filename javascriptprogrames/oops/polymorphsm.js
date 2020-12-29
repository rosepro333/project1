//more than one form called polymorphism
//method overloading

class Mathspg{

    add(){
       console.log("no argument")

    }
    add(num){
        console.log("single argumeny")

    }
    add(num1,num2){
        console.log("two argument")

    }
  }

  var m=new Mathspg()
  m.add(10,30)

  //same method ,different arguments...method overloading
  //will exeute only recently implemented method