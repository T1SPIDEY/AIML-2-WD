let acc = {
       acc_name:"Devansh Agarwal",
       acc_number:1234567890,
       acc_balance:10000,     
};
function deposit(amount)
{
    acc.acc_balance += amount;
}
function withdrawl(amount)
{
    if(amount>acc.acc_balance)
    {
        console.log("Insufficient balance");
    }
    else
    {
        acc.acc_balance -= amount;
    }
}
function display_account()
{
    console.log("acc_name: "+acc.acc_name);
    console.log("acc_number: "+acc.acc_number);
    console.log("acc_balance: "+acc.acc_balance);
}
deposit(5000);
withdrawl(2000);
display_account();