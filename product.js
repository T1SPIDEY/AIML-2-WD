
        let product= {

              productid: 1234,
              productname: "mobile",
              productprice: 10000,
              productquantity: 10,

        };
        function total_price()
        {
            let total=product.productprice*product.productquantity;
            return total;
        }
        function update_quantity(newquantity)
        {
            product.productquantity = newquantity;
        }
        function display_product()
        {
            console.log("productid: "+product.productid);
            console.log("productname: "+product.productname);
            console.log("productprice: "+product.productprice);
            console.log("productquantity: "+product.productquantity);
            console.log("total_price: "+total_price());
        }
        total_price();
        update_quantity(5);
        display_product();

    