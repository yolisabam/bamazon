var mysql = require("mysql");
var inquirer = require("inquirer");

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

function displayInventory() {
  var query = "SELECT * FROM products";
  connection.query(query, function(error, response){
    console.log(response);
    for(var i=0; i<response.length; i++){
      console.log("******************************");
      console.log(response[i].item_id + "|" + response[i].product_name + "|" + response[i].department_name + "|" + response[i].price + "|" + response[i].stock_quantity);
    }
    shopBamazon();

  });
}

function shopBamazon(){
  inquirer.prompt([
    {
      name: "id_info",
      type: "input",
      message: "What's the ID of the product you'd like to buy?",
      // validate: function(value){
      //       if(isNan(value)===false){
      //         return true;
      //       }
      //         return false;
      //     }
      },
    {
      name: "quantity",
      type: "input",
      message: "How many would you like to buy?",
      // validate: function(value){
      //       if(isNan(value)===false){
      //         return true;
      //       } 
      //         return false;
      //     }
      }
    ]).then(function(response){
        var query = "SELECT stock_quantity FROM products WHERE item_id= response.id_info";
      });
  }
