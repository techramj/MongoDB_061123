# RDBMS

        SQL: RDBMS => data is store in a table

        person details with mobiles
        name
        age
        nationality
        mobiles

        person 			
        personid	name	age	nationality
        1	        jackie	19	Indian
                    
                    
                    
        mobiles	
        personid	mobileNo
        1	        m1
        1	        m2
        1	        m3

        1. RDBMS
        2. the db have fixed or static or predefined schema
        3. vertically scalable
        4. follow ACID property
        Atomicity
          update accounts balance = balance-10000 where accountId =1;
          update accounts balance = balance+10000 where accountId =2;
          insert into audit_table() values (...);
          update atm set balance = balance-10000 where atm_id =?;
        Consistency
        Isolation
        Durability




# NoSQL 
    NoSQL:= Not only SQL db
    persons:[
        {"id":1, 
        "name":"jackie", 
        "age":19, 
        "natioinality":"Indian", 
        "mobiles":["m1","m2"]
        } ,
        {"id":1, 
        "name":"jackie", 
        "natioinality":"Indian", 
        "birthmark":"cut on eyebrow",
        "mobiles":["m1","m2"]
        }   
        ]                                  

    1. Non-relation or distributed db system
    2. They have dynamic schema
    3. Horizontally scalable
    4. follows BASE property



# NoSQL Types:
        Graph Database => Neo4j, Hyper Graph DB
        Document-oriented => MongoDb, CouchDB
        Column family => Cassandra, HBASE


# Mongo-DB vs SQL

        relate sql with NoSQl
        Oracle SQL          MongoDB
        ---------           -------
        Database             Database 
        Table                Collection
        Row                  Document
        Column               Field
        Join                 Embedded Document
        Partition            Shard    


# step to download Mongo DB
        # step 1
        click the link: https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.7-signed.msi

        data directory: C:\Program Files\MongoDB\Server\6.0\data\

        # step 2
        register the path in system environment
        Navigate to : program Files => Mongodb => bin folder
                      C:\Program Files\MongoDB\Server\6.0\bin

        edit the path and click on new and add the path "C:\Program Files\MongoDB\Server\6.0\bin"

        to check: 
        go to the cmd and execute mongod


        #step 3: download mongosh:
        https://www.mongodb.com/try/download/shell and click on download

        or
        https://downloads.mongodb.com/compass/mongosh-1.10.1-win32-x64.zip

        unzip the folder and copy mongosh application and copy to the bin folder(C:\Program Files\MongoDB\Server\6.0\bin)

# execute the mongo db command
  cmd: execute mongosh commnad

# execute the script


# import json



# git command
    git commit -m *
    git branch -M main
    git remote add origin https://github.com/techramj/mongodb_10_jul_23.git
    git push -u origin main


# execute sql script(.sql) vs mongo script(.js)
        SQL
        open and login the sql prompt and execute the below command.
        @ absolute_path
        @D:\workspace\JS\seed\mongodb_10_july\script1.sql

        Mongo
        open command prompt
        mongosh <database_name> absoulte_path
        
# import json
        step 1: download json-tool
        https://www.mongodb.com/try/download/database-tools
        or
        https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.7.3.zip

        step 2: exact the zip file and copy the application in mongodb bin folder

        step 3: execute the below command to load the json
                mongoimport json-file -d <database name> -c <collection-name> --jsonArray
                mongoimport movie.json -d seed -c movie --jsonArray
                note: path of cmd should be same as json-file path

# datatype
        type of json
                string
                number
                date
                boolean

        data stored in mongo is in BSON format
        String
        integer
        Number
        NumberLong
        NumberDecimal
        ISODate
        Timestamp
        Boolean
        Embedded document
        Array
        ObjectId

        check the datatype