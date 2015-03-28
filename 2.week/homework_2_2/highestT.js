var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    var data = db.collection('data');

    var options = {'sort' : [['State', 1]] };
    var cursor = data.find({}, {}, options);
    var state = '';
    var temp = 0;
    var id = 0;
    var count = 0;

    cursor.each(function(err, doc) {

        if(err) throw err;

        if(doc == null) {

            console.dir("================== month_high (" + count + ") " + id + " " + state + " " + temp);

               
            return db.close();
        } else {
            count++;
//            console.dir(count + " " + doc.State);

            if(state != doc.State) {
if(id)              
 console.dir("================== month_high (" + count + ") " + id + " " + state + " " + temp);                

                state = doc.State;
                temp = doc.Temperature;
                id = doc._id;

//console.dir("================== new state   (" + count + ") " + id + " " + state + " " + temp);
            } else {
                if(temp < doc.Temperature) { 
                    temp = doc.Temperature; 
                    id = doc._id;
//console.dir("================== updated     (" + count + ") " + id + " " + state + " " + temp);
                };
            };
        };
    });        
});




