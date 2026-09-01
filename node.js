
let text="something";
console.log(text);
console.log("\n===function==");
    function abes(){
        console.log("welcome student");
    }
console.log("\n===function with parameters==");
function greet(f,l){
    console.log("Hello, " + f + " " + l);
}
greet("Devansh","Agarwal");
console.log("\n===function with return==");
function sum(a,b){
    return a+b;
}
let result=sum(5,10);
console.log(result);

console.log("\n===default arguments==");
function greet1(f="Devansh",l="Agarwal"){
    console.log("Hello, " + f + " " + l);
}
console.log(greet1());
console.log(greet1("John","Doe"));

console.log("\n===percentage program==");
function percentage(marks, total){
    return (marks/total)*100;
}
console.log(percentage(85, 100));
console.log("\n===while loop==");
let i = 0;
while (i < 5) {
    console.log("While loop iteration: " + i);
    i++;
}
console.log("\n===do while loop==");
let j = 0;
do {
    console.log("Do-While loop iteration: " + j);
    j++;
}while (j < 5);

console.log("\n===array for loops==");
let arr = [1, 2, 3, 4, 5];  
let s=0;
for(let k=0;k<arr.length;k++){
    s+=arr[k];
}
console.log("Sum of array elements: " + s);
console.log("\n===2d array==");
let arr2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("2D Array:");
for (let i = 0; i < arr2D.length; i++) {
    console.log(arr2D[i]);
}
console.log("\n===object==");
let person = {
    firstName: "Devansh",
    lastName: "Agarwal",
    age: 20
};
console.log("Person: " + person.firstName + " " + person.lastName + ", Age: " + person.age);