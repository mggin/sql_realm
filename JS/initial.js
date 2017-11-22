const sqlite3 = require('sqlite3').verbose();
var Realm = require('realm');


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
Realm.open({schema: [Labu]})
  .then(realm => {
    // ...use the realm instance here
  })

 
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});


