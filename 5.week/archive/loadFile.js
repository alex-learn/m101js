var fs = require('fs'),
    MongoClient = require('mongodb').MongoClient;

fs.readFile(__dirname + '/zips.json', 'utf8', function(err, data){
  if (err) throw err;
  insertData(data);
});

/*
//    zipData = JSON.stringify(data);
//    zipData = JSON.parse(JSON.stringify(data));
//    console.log(JSON.parse(zipData));
*/

function insertData(data) {
  MongoClient.connect('mongodb://localhost:27017/m101', function(err, db){
     if (err) throw err;
     var col = db.collection('zips');
     col.insert(data, function(err, result){
       if (err) throw err;
//       console.log(result)
      });
    db.close();
    });
};
