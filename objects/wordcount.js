var text="hello hai hello hai hello"

var words=text.split(" ")
console.log(words)

var obj={}

for(let word of words)
{

    if(word in obj){

        obj[word]+=1
    }
    else{
         obj[word]=1

    }
}

console.log(obj)