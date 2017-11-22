const sqlite3 = require('sqlite3').verbose();
var Realm = require('realm');


let db = new sqlite3.Database('../data/sqlite/uscis.sqlite', (err) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log('success')
  }
  //console.log('success')
})

db.serialize(() => {
  db.each('SELECT * FROM uscis', (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log();
  
   var result = Object.values(row)
   /*
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
        var str5 = str4.replace('\\', '\\\n')
        var str6 = str5.replace('ey', 'ey: ')
        var str7 = str6.replace('BC', 'BC: ')
        return str7
      } else if (index !== 0) {
        // console.log(item)
        var verstr = item 
        var verstr1 = verstr.replace(/\s+/g,' ').trim();
        item = verstr1
        //console.log(item)
        return item
      }*/
      //console.log(index)
      //return item
   // });
   //console.log(result)
   //console.log(typeof(result[6]))
   //console.log(Labu)
   Realm.open({path: './default.realm'})
      .then(realm => {
      
      realm.write(() => {
        let uscis = realm.create('uscis', {
          id: result[0],
          bookmark: false
        });
        uscis.english.push({
          ques: result[1],
          ans: result[2]
        })
        uscis.zomi.push({
          ques: result[3],
          ans: result[4]
        })
        var knayi = new require('knayi-myscript')
        var ques = knayi.fontConvert(result[5], 'unicode')
        var ans = knayi.fontConvert(result[6], 'unicode')

        uscis.burma.push({
          ques: ques,
          ans: ans
        })

      })

    })
  })
});
 
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});


