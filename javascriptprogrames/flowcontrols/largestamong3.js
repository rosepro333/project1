var n1=10,n2=20,n3=30;
if(n1>n2&n1>n3){
   
     
    if(n2>n3){
        console.log(n2+"is second large ")
    }
    else{
        console.log(n3+"is second large ")
    }

}
else if(n2>n1&n2>n3){
   
    if(n1>n3){
        console.log(n1+"is second large ")
    }
    else{
        console.log(n3+"is second large ")
    }

}
else if(n3>n1&n3>n2 ){
     
    if(n1>n2){
        console.log(n1+"is second large ")
    }
    else{
        console.log(n2+"is second large ")
    }
}