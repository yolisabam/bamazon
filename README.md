# Bamazon

### Overview

A command line application that works with mySQL to take "orders" and update mySQL database.

## Getting Started
Git clone this repo, download mySQL, consoletable and inquirer NPM packages and run the Bamazon.js file in terminal.




## Built With
* mySQL - Database used
* Console Table - NPM Package
* Inquirer - NPM Package
* MySQL - NPM Package
* Javascript


## Relevent Code Snippets
My motivation was to make the application as modular as possible so, wherever I could, I made reusable functions like tge one below:
```javascript
function updateInventory(data) {
        var productID = data.id_info;
        var quantityOrdered = data.quantity;
        connection.query("SELECT stock_quantity, price FROM products WHERE ?", {id:productID}, function(err, res){
          var inventory = res[0].stock_quantity;
          var price = res[0].price;
           if(quantityOrdered > inventory){
            console.log("*********Insufficient Quantity********");
            displayInventory();
           } else {
                var totalPrice = quantityOrdered * price;
                var remainingStock = inventory - quantityOrdered;
                console.log("Your total cost is: $" + totalPrice);
                connection.query("UPDATE products SET ? WHERE?", [{stock_quantity:remainingStock},{id:productID}]);
                displayInventory();
            }    
        });

    }
```
## Version Control
Our team used git for version control.




## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements
* Chi Lu, Garret Gruessing & Jerome Chennette


