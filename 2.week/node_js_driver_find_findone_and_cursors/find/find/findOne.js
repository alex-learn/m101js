// require mongo
var mongo = require('mongodb'),
    MongoClient = mongo.MongoClient;

// connect mongo
var db = 'course',
    collection = 'grades';

MongoClient.connect('mongodb://localhost:27017/'+db, function(err, db){
    if (err) throw err;

// set query string
    var query = {"grade": 100};

// set field projections
    var projections = {"_id": 0};

// perform query
    db.collection(collection).findOne(query, projections, function(err, doc){
        if (err) throw err;

// output result
        console.dir(doc);
        db.close();
    });
});

