// class student
// {
//     constructor(n,r,y)
//     {
//         this.name=n;
//         this.roll_no=r;
//         this.year=y;
//         console.log(this.name);
//         console.log(this.roll_no);
//         console.log(this.year);
//     }
// }
//  s1=new student();
//  s2=new student("dev",69,"2nd");
 
class student
{
    fn="devansh";
    ln="agarwal";
    display()
    {
        console.log(this.fn);
        console.log(this.ln);
    }
}
// student.display();
let s1=new student();
s1.display();