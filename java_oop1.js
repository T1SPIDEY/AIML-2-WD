class student
{
    constructor(n,r,m)  
    {
        this.name = n;
        this.roll_no = r;
        this.marks = m;
    }
     display()
    {
        console.log("Name: "+this.name);
        console.log("Roll No: "+this.roll_no);
        console.log("Marks: "+this.marks);
        if(this.marks>=35)
        {
            console.log("pass");
        }
        else
        {
            console.log("fail");
        }
    }
    
}
    let s1=new student("devansh",12345,90);
    let s2=new student("ayush",12346,85);
    let s3=new student("sahil",12347,30);
    s1.display();
    s2.display();
    s3.display();