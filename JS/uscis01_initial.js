const sqlite3 = require('sqlite3').verbose();
var Realm = require('realm');

class StringObjType extends Realm.Object {
}
StringObjType.schema = {
    name: 'stringObj',
    properties: {
        ques: 'string',
        ans: 'string'
    }
};

class Uscis extends Realm.Object {
}
Uscis.schema = {
    name: 'uscis',
    properties: {
      id: 'int',
      english: {type: 'list', objectType: 'stringObj'},
      zomi: {type: 'list', objectType: 'stringObj'},
      burma: {type: 'list', objectType: 'stringObj'},
      bookmark: 'bool'
    }
};
Realm.open({schema: [StringObjType, Uscis]})
  .then(realm => {
    // ...use the realm instance here
    console.log('success')
  })


