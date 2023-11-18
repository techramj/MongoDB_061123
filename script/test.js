db.emp.insertMany([
  {
    empId: 101,
    name: { firstName: "Sam", lastName: "J", initial: "Mr" },
    skill: [
      { subject: "java", level: "Intermediate" },
      { subject: "MongoDb", level: "beginner" },
    ],
    address: {
      permanent: { street: "Lane no 1", pincode: "123456", city: "Pune" },
      current: { street: "Lane no 2", pincode: "55555", city: "Mumbai" },
      office: { street: "Lane no 3", pincode: "55555", city: "Mumbai" },
      mailing: { street: "Lane no 4", pincode: "55555", city: "Mumbai" },
    },
  },
  {
    empId: 102,
    name: { firstName: "Ajay", lastName: "Pandey", initial: "Mr" },
    skill: [
      { subject: "java", level: "Intermediate" },
      { subject: "MongoDb", level: "beginner" },
    ],
    address: {
      permanent: { street: "Lane no 1", pincode: "123456", city: "Pune" },
      office: { street: "Lane no 3", pincode: "55555", city: "Mumbai" },
    },
  },
  {
    empId: 103,
    name: { firstName: "Jessica", lastName: "Sharma", initial: "Mrs" },
    skill: [
      { subject: "java", level: "expert" },
      { subject: "MongoDb", level: "Intermediate" },
    ],
    address: {
      permanent: { street: "Lane no 1", pincode: "123456", city: "Pune" },
      current: { street: "Lane no 2", pincode: "55555", city: "Mumbai" },
      office: { street: "Lane no 3", pincode: "55555", city: "Mumbai" },
      mailing: { street: "Lane no 4", pincode: "55555", city: "Mumbai" },
    },
  },
]);

//depth of nesting: 100 level
//size of document: 16 MB
emp: name,salary

db.createCollection("emp",{
  validator:{
    $jsonSchema : {
      bsonType:'object',
      required: ['name','salary'],
      properties: {
        name: {bsonType: 'string', description:'Name is Mandatory and must be a string'},
        salary: {bsonType: 'number', description:'Salary is Mandatory and must be a number'}
      }
    }
  }
});
