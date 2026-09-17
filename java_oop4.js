class product
{
    constructor(id, name, price, )
    {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    discounted_price(discount)
    {
        let final_price = this.price - (this.price * discount / 100);
        return final_price;
    }
    display()
    {
        console.log("Product ID: " + this.id);
        console.log("Product Name: " + this.name);
        console.log("Product Price: " + this.price);
        console.log("Discounted Price: " + this.discounted_price(10));
    }
}
let p1 = new product(1, "Laptop", 50000);
let p2 = new product(2, "Mobile", 20000);
p1.display();
p2.display();
if(p1.discounted_price(10) < p2.discounted_price(10))
{
    console.log("Product 2 has a higher price.");
}
else
{
    console.log("Product 1 has a higher price.");
}
class electronnic extends product
{
    constructor(id, name, price)
    {
        super(id, name, price);
        if(name == "Laptop")
        {
            console.log("3 year warranty");
        }
        else if(name == "Mobile")
        {
            console.log("1 year warranty"); 
        }
    }
    display()
    {
        super.display();
       
    }
    
}
let e1 = new electronnic(1, "Laptop", 50000);
let e2 = new electronnic(2, "Mobile", 20000);
e1.display();
e2.display();