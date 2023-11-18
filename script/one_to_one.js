/*********one to one************/
//emp(id,name,salary) -> address(stree,city, pincode)
db.emp.insertOne({_id:101, name:"Jack", salary:5000});
db.address.insertOne({_id:101, street:'Lane no 1', city:'Pune', pin:'123456'});

or

db.emp.insertOne({
  _id: 101,
  name: "Jack",
  salary: 5000,
  address: { street: "Lane no 1", city: "Pune", pin: "123456" }
});