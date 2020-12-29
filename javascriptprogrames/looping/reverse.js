var num=123;
var rem,rev=0;
var n=num;

while(n>0){

rem=n%10;
rev=rev*10+rem;
n=Math.floor(n/10);

}
console.log("reverse of num " +num+" is "+rev)