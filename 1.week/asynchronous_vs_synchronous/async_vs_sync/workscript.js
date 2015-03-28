var mongodb = require('mongodb'),
    mongoClient = mongodb.MongoClient;

mongoClient.connect('mongodb://localhost:27017/test', function(err, db){
		if (err) throw error;

// Find one document in our collection
var doc = db.coll.findOne();

// Print the result
printjson(doc);
});
