

class Employee{
    constructor(eid,ename,desig,salary){
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.salary=salary;
    }
    printEmployee=()=>{

    console.log("eid  "+this.eid);
    console.log("ename  "+this.ename);
    console.log("desig  "  +this.desig);
    console.log("salary  "  +this.salary);

    }


}

//object

let obj=new Employee(25,"ajay","developer","340000");




let obj1=new Employee(28,"f8f","developer","2000");


let obj2=new Employee(29,"bnf","developer","3547000");


var arr=[]
arr.push(obj)
arr.push(obj1)
arr.push(obj2)
console.log(arr)


//print all employee names only
arr.forEach (emp=>console.log(emp.ename))

//uppercase
arr.forEach (emp=>console.log(emp.ename.toUpperCase() ))

//print all salary>23000
arr.filter(emp=>emp.salary>23000).forEach(emp=>console.log(emp.ename))


//highest salary
var sal=arr.map(emp=>emp.salary).reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)
console.log(sal)







