class Bank{

    static bankName=()=>{
            console.log("SBI")
    }
    accountCreate=(name,accno,acctype,balance)=>{
        this.name=name;
        this.accno=accno;
        this.acctype=acctype;
        this.balance=balance;
    }
    printBank(){

    console.log("name  "+this.name);
    console.log("accno  "+this.accno);
    console.log("acctype  "  +this.acctype);
    console.log("balance   "  +this.balance);

    }
    depoBank=(amount)=>{
      
        this.balance+=amount;
        console.log("amount credited "+amount+"now balance amount is "+this.balance)


          }
          
    withBank=(amount)=>{
       
        if(this.balance>=amount){

            this.balance=this.balance-amount;
            console.log("can withdraw  "+amount+"now balance is "+this.balance);
        }
        else{
            console.log("withdraw not possible")
        }
        
    } 
    balBank=()=>{

          
            console.log("current balance  "+this.balance)

    }

}

//object

var obj=new Bank();
obj.accountCreate("fff",445,"savings",70000)
obj.printBank();
obj.depoBank(10000);
obj.withBank(20000);
obj.balBank();
//static method calling(classname.methodname)
Bank.bankName()




