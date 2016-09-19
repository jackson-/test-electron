const remote = require('electron').remote
const main = remote.require('./main.js')
const r = require('rethinkdb')
var fs = require('fs');
var parse = require('csv-parse');
var conn = r.connect({db: 'marvel'});

var csvData=[];
fs.createReadStream('./assets/aqua.csv')
    .pipe(parse({delimiter: ':'}))
    .on('data', function(csvrow) {
        //do something with csvrow
        csvData.push(csvrow);
    })
    .on('end',function() {
      //do something with csvData
      r.table("aqua").insert(csvData).run(conn)
      console.log(csvData);
    });