const { MongoClient } = require("mongodb");
const dotenv    = require("dotenv");
dotenv.config()
//constante de base de datos
const Db = process.env.ATLAS_URI;
let  db;
const client = new MongoClient(Db, {
    
});

module.exports = {
    connectToServer : function(callback) {
      client.connect(client, {
          useUnifiedTopology: true
        }, (err, client) => {
          if (err) return console.error(err)
      
          db = client.db('admin');
          console.log('Connected to Database');
  
          return callback(null)
       });
    },
  
    getDb: function () {
      return db;
    }
  }

var _db;