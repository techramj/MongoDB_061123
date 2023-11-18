# list the database
      show dbs

# create database
      use <database_name>

# which db is using
      db

# see the statistics of db
      db.stats()

# drop database
      db.dropDatabase()

# create Collection
      db.createCollection('<collection_name>');

# display list of collection(table)
      show collections

# drop collection
      db.<collection_name>.drop();

# datatype of field(columns)
      typeof db.<collection-name>.findOne().<feild_name>
      typeof db.emp.findOne().name;

# insert document(row)
      db.<collection_name>.insert({field1:value, field2:value},...) => deprecated

      db.<collection_name>.insertOne({field1:value, field2:value},...) 

      eg:
      db.student.insertOne({rollno:1, name:'Jack', age:20 });
      db.student.insertOne({rollno:2, name:'John', age:21 , gender:'Male'});
      db.student.insertOne({_id:3,rollno:3, name:'Jessica', age:21 , gender:'Female'});

# insert documents(rows) more than one row
         db.student.insertMany([
         {rolno:4,name:'Sam'},
         {rollno:5, name:'Gaurav',gender:'Male'},
         {rollno:6, name:'Abhishek', age:21}
         ]);


# display collection data
         db.<collection_name>.find();

# update
         db.<collection_name>.updateOne({filter}, {update}) => deprecated
         db.<collection_name>.updateOne({filter}, {update})

         db.student.updateOne({name:'John'},{$set: {'age':25}}); 
         db.student.updateOne({name:'Gaurav'},{$set: {'age':25}}); 
         
         db.student.find({_id: ObjectId("64acbc04cdc483834050386a")});

         db.student.update({ _id: ObjectId("64acbc04cdc483834050386b")}, {$set: {nationality:'Indian', age:18}})


# Assignment:
      1. create database seed
      2. create the collection student
      3. insert 5 row using insertOne (try of add different field)
      4. insert 16 row using insertMany

      5. update the age to 25 of student with roll no: 5 
      6. list all the documents
      7. drop the collection

      repeat the step 2 to 6 by overriding the _id field




