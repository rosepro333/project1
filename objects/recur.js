var pattern="ABABC"
//find first recursive element
var dict={}

for(let char of pattern){

 if(char in dict){
           console.log("first recur "+char)
           break;
 }
else{
    dict[char]=1
}


}