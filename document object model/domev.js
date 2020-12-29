//https://developer.mozilla.org/en-US/docs/Web/Events
var cl=document.querySelector("#clk")
//pass two arguments...(which event this action perform,what will do when this action performed)
//click
cl.addEventListener("click",()=>{

    cl.textContent="clicked";
    cl.style.color="red";
    
})
//mouse over
var ov=document.querySelector("#over")
ov.addEventListener("mouseover",()=>{

    ov.textContent="mouse currently over me";
    
})
//mouseout
var outt=document.querySelector("#out")
outt.addEventListener("mouseout",()=>{

    outt.textContent="yes..mouse out";
    
})


//doubleclick
var db=document.querySelector("#double")
db.addEventListener("dblclick",()=>{

    db.textContent="two times clicked";
    
})
