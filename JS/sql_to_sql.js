const sqlite3 = require('sqlite3').verbose();
var Realm = require('realm');
var fs = require('fs')


let db = new sqlite3.Database('../data/sqlite/phatnalabu.sqlite', (err) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log('success')
  }
  //console.log('success')
})
let dbOut = new sqlite3.Database('../data/sqlite/default.sqlite', (err) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log('success')
  }
  //console.log('success')
})

//dbOut.execSQL("delete from "+ 'PhatNa');
db.serialize(() => {
  db.each('SELECT * FROM PhatNa', (err, row) => {
    if (err) {
      console.error(err.message);
    }
   var raw_result = Object.values(row)
   var result = raw_result.map(function(item, index) {
      if (item === null) {
        item = ''
        return item
      } else if (index == 2) {
        //console.log(item)
        var str = item
        var str1 = str.replace(/\s+/g, '')
        var str2 = str1.replace('.', '')
        var str3 = str2.replace('EY', 'ey')
        var str4 = str3.replace(':', '')
        var str5 = str4.replace(/\\n/g, '')
        return str5
      } else if (index !== 0) {
        // console.log(item)
        var verstr = item 
        var verstr1 = verstr.replace(/\s+/g,' ').trim();
        item = verstr1
        //console.log(item)
        return item
      }
      //console.log(index)
      return item
    });
    //console.log(result)
    dbOut.run("INSERT INTO PhatNa(Id, Title, Key, Verse1, Chorus, Bridge, Verse2, Verse3, Verse4, Verse5, Verse6, Verse7, Verse8) values(?,?,?,?,?,?,?,?,?,?,?,?,?)", [...result], function(err) {
        if (err) {
          console.log('hello')
          return console.log(err.message);
        }
      // get the last insert id
      //console.log(`A row has been inserted with rowid ${this.lastID}`);
      });
    dbOut.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
   
  });

});

 
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});


/*
let dbOut = new sqlite3.Database('../data/sqlite/default.sqlite', (err) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log('success')
  }
  //console.log('success')
})
for (const index of result) {
    console.log(result)
     
    dbOut.run("INSERT INTO PhatNa(Id, Title, Key, Verse1, Chorus, Bridge, Verse2, Verse3, Verse4, Verse5, Verse6, Verse7, Verse8) values(?,?,?,?,?,?,?,?,?,?,?,?,?)", [...result], function(err) {
        if (err) {
          return console.log(err.message);
        }
      // get the last insert id
      //console.log(`A row has been inserted with rowid ${this.lastID}`);
      });
    }
dbOut.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});

*/


