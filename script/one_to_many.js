//questions(id,creator, question)   => answers(id,ans)

db.answers.insertMany([
    { _id: 1, ans: "Schemaless", reference: "http://abc.com?pageno=200" },
    { _id: 2, ans: "Horizontal scaling", reference: "http://test.com?djfka" },
  ]);

db.question.insertMany([
  {
    creator: "Jack",
    question: "Advantage of MongoDB",
    code: "q1",
    ans: [1, 2],
  },
]);

//or

db.question.insertMany([
  {
    creator: "Jack",
    question: "Advantage of MongoDB",
    code: "q1",
    ans: [
      { text: "Schemaless", reference: "http://abc.com?pageno=200" },
      { text: "Horizontal scaling", reference: "http://test.com?djfka" },
    ],
  },
]);

//city => citizen

db.citizens.insertMany([
  { _id: 1, name: "Ram", age: 30, dob: ISODate("2090-02-06T10:10:10Z") },
  { _id: 2, name: "Shyam", age: 31, dob: ISODate("2090-02-06T10:10:10Z") },
  { _id: 3, name: "Sam", age: 40, dob: ISODate("2090-02-06T10:10:10Z") },
]);

db.cities.insertMany([
    {
      name: "Pune",
      state: "MH",
      cordinates: { lat: "1122N", long: "234N" },
      citizens: [1, 2, 3],
    },
  ]);

  //or

  db.cities.insertMany([
    {
      name: "Pune",
      state: "MH",
      cordinates: { lat: "1122N", long: "234N" },
      citizens: [
        { name: "Ram", age: 30, dob: ISODate("2090-02-06T10:10:10Z") },
        { name: "Shyam", age: 31, dob: ISODate("2090-02-06T10:10:10Z") },
        { name: "Sam", age: 40, dob: ISODate("2090-02-06T10:10:10Z") },
      ],
    },
  ]);
