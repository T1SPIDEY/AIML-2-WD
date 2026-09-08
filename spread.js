function sum(...values) {
    let total = 0;  
    for (let n of values) {
        total += n;
    }
   console.log("total :", total);
}
function sum1(name, ...values) {
    let total = 0;  
    for (let n of values) {
        total += n;
    }
    console.log("name :", name);
    console.log("total :", total);
}
function sum2(name, rollno, ...values) {
    let total = 0;
    for (let n of values) {
        total += n;
    }
    console.log("name :", name);
    console.log("rollno :", rollno);
    console.log("total :", total);
}
sum1(5, 15, 25, 35);
sum1("Devansh", 10, 20, 30);
sum2("Devansh", 12345, 10, 20, 30);





