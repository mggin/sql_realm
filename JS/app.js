const sqlite3 = require('sqlite3').verbose();
var Realm = require('realm');


let db = new sqlite3.Database('../data/sqlite/phatnalabu1.sqlite', (err) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log('success')
  }
  //console.log('success')
})

const Labu = {
  name: 'Labu',
  properties: {
    id:  'int',
    title: 'string',
    key: 'string',
    verse1: 'string',
    chorus: 'string',
    verse2: 'string',
    verse3: 'string',
    verse4: 'string',
    verse5: 'string',
    verse6: 'string',
    verse7: 'string',
    verse8: 'string',
    bridge: 'string',
    favorite: 'bool'
  }
};

db.serialize(() => {
  db.each('SELECT * FROM PhatNa', (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log();

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
      }
      //console.log(index)
      return item
    });
   //console.log(result)
   //console.log(typeof(result[6]))
   //console.log(Labu)
   Realm.open({path: 'default.realm'})
      .then(realm => {
      
      realm.write(() => {
        realm.create('Labu', {
          id: result[0],
          title: result[1],
          key: result[2],
          verse1: result[3],
          chorus: result[4],
          verse2: result[6],
          verse3: result[7],
          verse4: result[8],
          verse5: result[9],
          verse6: result[10],
          verse7: result[11],
          verse8: result[12],
          favorite: false,
          bridge: result[5],
        });

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


