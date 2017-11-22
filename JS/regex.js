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

var relist = []
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
   //console.log(result)
   //console.log(typeof(result[6]))
   var str = result[2]
   //var relist = []
   //var res = str.replace('ey', 'ey: ')
   //var nn = res.replace('\\', '\n')
   var str1 = str.replace(/\s+/g, '')
   var str2 = str1.replace('.', '')
   var str3 = str2.replace('EY', 'ey')
   var str4 = str3.replace(':', '')
   var str5 = str4.replace('n', '')
   relist.push(str5)
   console.log(relist.toString())
   
  
   fs.writeFile("./test", relist.toString(), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

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


