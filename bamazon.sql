DROP DATABASE IF EXISTS Bamazon_DB;

CREATE DATABASE Bamazon_DB;

USE Bamazon_DB;

CREATE TABLE products(
item_id INT AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT NOT NULL, --should I auto_increment this ?--
PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("iPhone X", "Electronics", 1000, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Vitamix", "Electronics", 380, 7);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("How To Win Friends And Influence People", "Books", 24.95, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Black Bandeau", "Clothing/Accessories", 12.95, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Star Oxford Wedges", "Shoes", 34.95, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Flip Flops", "Shoes", 9.95, 200);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Sofa", "Furniture", 500, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Bookshelf", "Furniture", 250, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Think & Grow Rich", "Books", 24.95, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Pink Beanie", "Clothing Accessories", 13.95, 100);
