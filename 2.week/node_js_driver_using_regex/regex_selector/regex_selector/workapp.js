var mongodb 	= require('mongodb'),
    MongoClient = mongodb.MongoClient,
    request 	= require('request');

MongoClient.connect('mongodb://localhost:27017/course', function(err, db){
	if(err) throw err;
	var query 	= {'title': {$regex: 'oogle'}};
	var projection = {'_id': 0, 'title': 1};
	db.collection('reddit').find(query, projection).each(function(err, doc){
		if(err) throw err;

		if(doc == null) {
			return db.close();
		};
		console.dir(doc);
	});
});