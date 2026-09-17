class Bankaccount
{
    constructor(accno, name, balance)
    {
        this.accno=accno;
        this.name=name;
        this.balance=balance;
    }
    deposit(amount)
    {
        this.balance+=amount;
    }
    withdrawl(amount)
    {
        if(amount>this.balance)
        {
            console.log("Insufficient balance");
        }
        else
        {
            this.balance-=amount;
        }
    }
    display_account()
    {
        console.log("acc_name: "+this.name);
        console.log("acc_number: "+this.accno);
        console.log("acc_balance: "+this.balance);
    }
}
let acc1=new Bankaccount(1234567890,"Devansh Agarwal",10000);
acc1.deposit(5000);
acc1.withdrawl(2000);
acc1.display_account();