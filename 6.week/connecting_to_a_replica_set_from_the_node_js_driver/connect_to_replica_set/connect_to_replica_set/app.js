var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27001,localhost:27002,localhost:27003/course", function(err, db) {
    if (err) throw err;

    db.collection("repl").insert({ 'x' : 1 }, function(err, doc) {
        if (err) throw err;

        db.collection("repl").findOne({ 'x' : 1 }, function(err, doc) {
            if (err) throw err;

            console.log(doc);
            db.close();
        });
    });
});
