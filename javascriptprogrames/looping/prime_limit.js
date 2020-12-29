//lower =10,upper=50



var lower=10;
var upper=50;
var flag=0;

for(let i=lower;i<=upper;i++){ 

    for(let j=2;j<i;j++)
    {

            if(i%j==0){
                              flag=flag+1;
                               break;


                         }
                else{

                    flag=0;
                }
           
                 
    }       
   
    if (i>0 && flag==0){

    
        console.log(i)
   }


}

