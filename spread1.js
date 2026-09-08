function sum(...values)
{
    let t=0;
    for(let n of values)
    {
        t+=n;
    }
    console.log("total :", t);
}
let arr=[10,20,30,40,50];
sum(...arr);

var a1=[1,2,3];
var a2=[4,5,6];
var a3=a1.concat(a2);
a3=[60,...a1,70,...a2,80];
a3=[...a1,...a2];
console.log("a3 :", a3);
