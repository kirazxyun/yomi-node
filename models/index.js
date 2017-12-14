// database
let MongoClient = require('mongodb').MongoClient
let co = require('co')
const DB_CONN_STR = 'mongodb://localhost:27017/yomi'
const COLLECTION_USERS = 'users'
const COLLECTION_PRODUCTS = 'products'

co(function *() {
  const db = yield MongoClient.connect(DB_CONN_STR)
  console.log('Connected successfully to server')

  yield insertDocuemnt(db, null)
  yield findDocument(db, null)
  yield indexCollection(db, null)

  db.close()
}).catch(err => console.log(err))

function insertDocuemnt(db, callback) {
  return co(function *() {
    const results = yield db.collection(COLLECTION_PRODUCTS)
      .insertMany([{
        'name': 'Sun Bakery Trattoria',
        'stars': 4,
        'categories': ['Pizza', 'Pasta', 'Italian', 'Coffee', 'Sandwiches']
      }, {
        'name': 'Blue Bagels Grill',
        'stars': 3,
        'categories': ['Bagels', 'Cookies', 'Sandwiches']
      }, {
        'name': 'Hot Bakery Cafe',
        'stars': 4,
        'categories': ['Bakery', 'Cafe', 'Coffee', 'Dessert']
      }, {
        'name': 'XYZ Coffee Bar',
        'stars': 5,
        'categories': ['Coffee', 'Cafe', 'Bakery', 'Chocolates']
      }, {
        'name': '456 Cookies Shop',
        'stars': 4,
        'categories': ['Bakery', 'Cookies', 'Cake', 'Coffee']
      }])
    console.log(results)
    return results
  })
}

function findDocument(db, callback) {
  return co(function *() {
    const collection = db.collection(COLLECTION_PRODUCTS)
    const docs = yield collection.find({}).toArray()
    console.log('Found the following records')
    console.log(docs)
    return docs
  })
}

function indexCollection(db, callback) {
  return co(function *() {
    const results = yield db.collection(COLLECTION_PRODUCTS).createIndex({ "mame": 1 }, null)
    console.log(results)
    return results
  })
}

// function insertData(db, callback) {
//   let collection = db.collection(COLLECTION_USERS)
//   let data = [{
//     _id: 7,
//     name: 'rose',
//     age: 21
//   }, {
//     _id: 8,
//     name: 'mark',
//     age: 22
//   }]

//   collection.insert(data, function (err, result) {
//     if(err) {
//       console.log('Error:' + err)
//       return
//     }
//     callback(result)
//   })
// }

// MongoClient.connect(DB_CONN_STR, function (err, db) {
//   if(err) {
//     console.log('Error: ' + err)
//     return
//   }
//   console.log('连接成功')
//   console.log(db.collection)
//   insertData(db, function (result) {
//     console.log(result)
//     db.close()
//   })
// })
