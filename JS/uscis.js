

var fs = require("fs");
const sqlite3 = require('sqlite3').verbose();

var contentEnglish = fs.readFileSync("../data/others/english.txt");
var contentZomi = fs.readFileSync("../data/others/zomi.txt");


var objEng = JSON.parse(contentEnglish)
var objZo = JSON.parse(contentZomi)

var engList = []
var zoList = []

Object.keys(objEng).map(key => {
  engList.push(objEng[key])
})

Object.keys(objZo).map(key => {
  zoList.push(objZo[key])
})

let db = new sqlite3.Database('../data/sqlite/uscis.sqlite', (err) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log('success')
  }



  for (var i = 0; i < 100; i++) {
    db.run("INSERT INTO uscis(id, qe, ae, qz, az) values(?,?,?,?,?)", [i+1, engList[i].Q, engList[i].A, zoList[i].Q, zoList[i].A], function(err) {
        if (err) {
          return console.log(err.message);
        }
      // get the last insert id
      //console.log(`A row has been inserted with rowid ${this.lastID}`);
      });
  }


})

db.close()