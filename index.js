const remote = require('electron').remote
const main = remote.require('./main.js')
const r = require('rethinkdb')
var fs = require('fs');
var parse = require('csv-parse');
var csvData=[];
//Converter Class
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

//end_parsed will be emitted once parsing finished
converter.on("end_parsed", function (jsonArray) {
   console.log(jsonArray); //here is your result jsonarray
});

//read from file
var csvData = require("fs").createReadStream("./assets/aqua.csv").pipe(converter);

console.log(csvData);
r.connect({host: 'localhost', db: 'test'}, function(err, conn){
    r.table('aqua').insert(csvData).run(conn);
    r.db('test').table('aqua').run(conn)
});
console.log("DONE")