/**
  order -> Product
   In an order, we can purchase many Product
   one product can be ordered by many customer
 */

db.products.insertMany([
    {_id:1, item:'Pen', price:25},
    {_id:2, item:'Pencil', price:5},
    {_id:3, item:'Notebook', price:100},
]);

db.customers.insertMany([
    {_id:'cust0001', name:'Jack', age:20},
    {_id:'cust0002', name:'Jessica', age:20},
    {_id:'cust0003', name:'sam', age:20}
]);

db.orders.insertMany([
    {orderId:1,products:[{product:1, qty:10}, {product:2, qty:4}], customer:'cust0001'}
]);

//or

db.products.insertMany([
    {_id:1, item:'Pen', price:20},
    {_id:2, item:'Pencil', price:5},
    {_id:3, item:'Notebook', price:100},
]);
db.customers.updateMany([
  {
    _id: "cust0001",
    name: "Jack",
    age: 20,
    orders: [
      { product: 1, qty: 10 },
      { product: 2, qty: 4 },
    ],
  },
]);

//or

db.products.insertMany([
    {_id:1, item:'Pen', price:30},
    {_id:2, item:'Pencil', price:5},
    {_id:3, item:'Notebook', price:100},
]);

db.customers.updateMany([
  {
    _id: "cust0001",
    name: "Jack",
    age: 20,
    orders: [
      { item:'Pen', price:20, qty: 10 },
      { item:'Pencil', price:5, qty: 4 },
    ],
  },
]);

