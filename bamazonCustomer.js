var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "Bamazon_DB"

});

connection.connect(function(err){
  if(err) throw(err);
  console.log("You're connected as id " + connection.threadId)
  displayInventory();
});


function shopBamazon(){
  inquirer.prompt([
    {
      name: "id_info",
      type: "input",
      message: "What's the ID of the product you'd like to buy?",
      validate: function(value){
            if(isNaN(value)===false){
              return true;
            }
              return false;
          }
      },
    {
      name: "quantity",
      type: "input",
      message: "How many would you like to buy?",
      validate: function(value){
            if(isNaN(value)===false){
              return true;
            } 
              return false;
          }
      }
    ]).then(function(response){
        updateInventory(response);        
        });
      };
// *******************************************************************************************************+

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

    function displayInventory() {
      var query = "SELECT * FROM products";
      connection.query(query, function(error, response){
        console.table(response);
        shopBamazon();

      });
    }
// **********************************************************************************************************