const sqlite3 = require('sqlite3').verbose();
var Realm = require('realm');
var Regex = require('regex')


let db = new sqlite3.Database('../data/sqlite/phatnalabu.sqlite', (err) => {
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
    //typeof(row)
    //let list = []
    //list.push(row)
    //console.log(list)
    //console.log(typeof(row))
   var raw_result = Object.values(row)
   var result = raw_result.map(function(item) {
      if (item === null) {
        item = ''
      }
      return item
    });
   //var rawKey = result[2]

   var str = result[2];
    //var res = str.replace("Key", "Key: ");
    //console.log(res)
   //console.log(result)
   //console.log(typeof(result[6]))
    /*
   Realm.open({path: '../data/realm/phatnalabu1.realm'})
      .then(realm => {
        //console.log(result)
      // Create Realm objects and write to local storage
      // console.log('realm')
      //console.log(realm.objects('Labu'))
      
      realm.write(() => {
        //let Labu = realm.objects('Labu')
        //Labu[0].title = 'hello'
        //console.log(Labu[0].title)
        //Labu.id = result[0]
        //Labu.title = result[1]
        //Labu.key = result[2]
        //console.log(Labu)

        var rawKey = result[2]
        console.log(rawKey)
      
        realm.create('Labu', {
          id: result[0],
          title: result[1],
          // key: result[2],
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
          bridge: '',
        });
      

      })

    })
    */

  })

});
 
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});


