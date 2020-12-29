function display(val){

var txtdoc=document.querySelector("#displaybox");
txtdoc.value+=val;

}

function solve(){

    var txt=document.querySelector("#displaybox");
    result=eval(txt.value);
    txt.value=result;
}

let clearbox=()=>{

document.querySelector("#displaybox").value="";
}
