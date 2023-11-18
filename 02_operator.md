# read operation
        db.<collection_name>.find({filter});
        max record fetch by default =  20


# delete
        db.<collection_name>.deleteOne({filter});  return no of docuement/row deleted
        db.<collection_name>.deleteMany({filter}); return no of docuements/rows deleted
        db.<collection_name>.findOneAndDelete({filter}); return the docuement deleted



# Query and Project Operation:
        db.inventory.insertMany(
        [
                {_id:1,item:{name:'ab',code:'123'},qty:10, tags:['A','B','C']},
                {_id:2,item:{name:'cd',code:'123'},qty:11, tags:['D','E','M']},
                {_id:3,item:{name:'ef',code:'456'},qty:12, tags:['F','B','D']},
                {_id:4,item:{name:'gh',code:'456'},qty:13, tags:['G','O','C']},
                {_id:5,item:{name:'ij',code:'567'},qty:10, tags:['A','E','D']},
                {_id:6,item:{name:'ij',code:'567'},qty:10, tags:[['A','B'],'D']},
                {_id:7,item:{name:'ij',code:'567'},qty:10, tags:['A','B']}
        ]
        );

## $eq
        1. find the item with quantity = 10
        db.inventory.find({qty:10});
        db.inventory.find({qty: {$eq: 10}})

        2. findthe item with name = ab
           db.inventory.find({item.name : {$eq: 'ab'}}); //error , item.name must be in quotes
           db.inventory.find({'item.name' : {$eq: 'ab'}});

        3. find the item with id = 6
           db.inventory.find(_id:{$eq:6});
        
        4. find the item with tag = A
           db.inventory.find({tag: {$eq:'A'}});

        
## $ne (not equal)
        1. find the item with quantity not equal to 10
        db.inventory.find({qty: {$ne: 10}})

## $gt (greater than)
        1. find the item with quantity >  10
        db.inventory.find({qty: {$gt: 10}})

## $gte (greater than equals)
        1. find the item with quantity >=  10
        db.inventory.find({qty: {$gte: 10}})

## $lt (less than)
        1. find the item with quantity < 10
        db.inventory.find({qty: {$lt: 10}})

## $lte (less than and equal)
        1. find the item with quantity <= 10
        db.inventory.find({qty: {$lte: 10}})

## $in 
        1. find the item with qty=11,12
        db.inventory.find({qty: {$in:[11,12]}})

## $nin (not in)
        1. find the item with qty other than 10,12
        db.inventory.find({qty: {$nin:[10,12]}})



# Logical operator
        1. and ($and)
        2. or  ($or)
        3. not ($not)

## $and
        1. find the item with quantity =10 and tags = E
        db.inventory.find({$and:[{qty: {$eq:11}}, {tags: {$eq: 'E'}}]})

## $or
        1. find the item with qty =11 or tags = B
        db.inventory.find({ $or: [{ qty: { $eq: 11 } }, { tags: { $eq: "B" } }] });

         2. find the item with name= ij or tags with A

## $not
        1. find the item with qty not  > 11
        db.inventory.find({qty: {$not:{$gt:11}}})


        find the item with code=567,456 and tags = B

        db.inventory.find({$and:[{'item.code':{$in: ['567','456']}},  {tags: {$eq: 'B'}}]});


       db.inventory.find({$and:['item.code':{$eq:[567,456]},{tags: {$eq: 'B'}}]})



# Element operator

## $exists
        to check whether the field are present or not

        execute script2

        1. find the documents having no quantity
                db.inventory.find({qty: {$exists:false}})
                
        2. find the documents with qty = 11
                db.inventory.find({qty: {$exists:true,$eq:11}});

## $type
        1. find the document with qty as differnt data type
        db.inventory.find({qty:{$type:'string'}});
        db.inventory.find({qty:{$type:'int'}});
        db.inventory.find({qty:{$type:'double'}});

        db.inventory.insertOne({_id:100,qty:10.6});  


# Evaluation
  

## $expr
        1. spent > budget
        db.budgets.find({$expr:{$gt :[$spent, $budget]}}); //wrong
        db.budgets.find({$expr:{$gt :['$spent', '$budget']}}); //wrong

## $mod
       list of budgets where spend is multipe of 100
       db.budgets.find({spent : {$mod:[100,0]}});

       list of inventory with even qty
       llist of inventory woth odd qty


## $text
        note: the field for which text opertor will be used should be indexed
         create index:
        -------------
        db.articles.createIndex({subject:'text'});

        1. articles which contain spring
                db.articles.find({$text: {$search:'spring'}})
                db.articles.find({$text: {$search:'spring', $caseSensitive:true}})

# Array operators
## all
        execute the aritcles_02 script.

        
        db.articles.insertMany([
        {_id:1, code:"xyz", 
        tags:["school","book","bag","headphone"],
        qty:[
                {size:"S", num:10, color: "blue"},
                {size:"M", num:20, color: "blue"},
                {size:"L", num:3, color: "red"}
        ]
        },

        {_id:2, code:"abc", 
        tags:["school","book","headphone","pencil"],
        qty:[
                {size:"S", num:100, color: "blue"},
                {size:"M", num:45, color: "green"},
                {size:"L", num:10, color: "red"}
        ]
        },

        {_id:3, code:"pqr", 
        tags:["bag","headphone"],
        qty:[
                {size:"6", num:10, color: "green"},
                {size:"7", num:40, color: "brown"},
                {size:"8", num:5, color: "red"}
        ]
        }
        ]);

        query: document which contain book, headphone, bag
        db.articles.find({tags: {$all:['book','headphone','bag']}});

## $elemMatch

        //list of item with result >=80 and <=85
        db.inventory.find({result: {$gte:80, $lte:85}})
        db.inventory.find({result: {$elemMatch:{$gte:80, $lte:85}}})

        mostly used in projection:


