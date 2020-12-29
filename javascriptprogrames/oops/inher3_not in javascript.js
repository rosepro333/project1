//this is same multilevel
//one more is there multiple inheritance that is not used in javscript


class Parent{
    m1=()=>{

      console.log("nokia 1")
     }
  
}
class Child extends Parent {


  m2=()=>{

      console.log("nokia 2")
  }
}
class SubChild extends Child {


  m3=()=>{

      console.log("nokia 3")
  }
}

var sb=new SubChild()
sb.m3()
sb.m2()
sb.m1()


var ch=new Child()
sb.m2()
sb.m1()

var p=new Parent()
p.m1()