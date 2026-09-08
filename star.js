function sum(...values)
{
    let total=0;
    for(let n of values)
    {
        total=total+n;
    }
    return total;
}
console.log(sum(10,20));
console.log(sum(10,100,200));
console.log(sum(5,15,25,35));
sum=(name,...values)=>{
    total=0;
    for(let n of values)
    {
        total=total+n;
    }
    console.log("name :", name);
    console.log("total :", total);
}
