const Realm = require('realm');

// Define your models and their properties
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
Realm.open({path: 'data.realm'})
  .then(realm => {
    // Create Realm objects and write to local storage
    realm.write(() => {
      
  });

