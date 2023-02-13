/*const mongoose = require('mongoose');

const db = process.env.ATLAS_URI;

mongoose.connect(db, {
  useNewUrlParser : true,
  useUnifiedTopology : true
}).then(()=>{
  console.log("connection successful")
}).catch((e)=>{
  console.log(e);
})
*/


const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("Sneakers");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};