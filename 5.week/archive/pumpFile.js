var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var stream = fs.createReadStream(__dirname + '/zips.json', {flags: 'r', encoding: 'utf-8'});
var buf = '';

MongoClient.connect('mongodb://localhost:27017/m101', function(err, db){
    if (err) throw err;

stream.on('data', function(d) {
    buf += d.toString(); // when data is read, stash it in a string buffer
    pump(); // then process the buffer
});

function pump() {
    var pos;

    while ((pos = buf.indexOf('\n')) >= 0) { // keep going while there's a newline somewhere in the buffer
        if (pos == 0) { // if there's more than one newline in a row, the buffer will now start with a newline
            buf = buf.slice(1); // discard it
            continue; // so that the next iteration will start with data
        }
        process(buf.slice(0,pos)); // hand off the line
        buf = buf.slice(pos+1); // and slice the processed data off the buffer
    }
}

function process(line) { // here's where we do something with a line

    if (line[line.length-1] == '\r') line=line.substr(0,line.length-1); // discard CR (0x0D)

    if (line.length > 0) { // ignore empty lines
        var obj = JSON.parse(line); // parse the JSON
//        console.log(obj); // do something with the data here!
      dbInsert(obj);
    }
}

function dbInsert(obj) {
  console.log(obj);
  db.collection('zips').insert(obj, function(err, result){
    if (err) throw err;
    console.log(result);
  });
};
db.close();
});
