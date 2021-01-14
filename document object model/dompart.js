

// var heads=document.getElementsByTagName("h1")
// for(head of heads){
//     head.style.color="green";

// }
// var hd=document.getElementById("one")
// hd.style.color="red";

// var hd=document.getElementById("two")
// hd.style.color="blue";

// var lis=document.getElementsByClassName("lis")
// for(ls of lis){
//     ls.style.color="orange";

// }
//...........................................
var hd=document.getElementById("dm")
hd.textContent="document object methods"
 hd.innerHTML="<em>document object method</em>"
//alerting ...........
// var h1=document.getElementById("one")
// alert(h1.textContent)

//font style.............



//..........................................

//let Person={
//age:25,
//name:"ajay",
//getAge:function(){console.log(this.age)},
//getName:function(){console.log(this.name)}
//}
//Person.getAge()
//Person.getName()


//.........................................

//var obj={
  //  url:"heloo"
//}
//console.log(obj.url)

var li=document.querySelectorAll("li")
li.forEach(lis=>lis.style.color="pink")

var ls=document.querySelectorAll(".li")
ls.forEach(lis=>lis.style.color="red")

var hd=document.querySelector("#one")
hd.style.color="green"

