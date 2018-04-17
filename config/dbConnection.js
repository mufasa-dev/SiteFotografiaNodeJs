// Importar o MongoDB 

var MongoModule = require('mongodb').MongoClient;
 
const url = 'mongo_dbeliza:27017';
const dbName = 'dbEliza';
 
function dbConnection(){
 this._MongoClient = undefined;
 this._MongoDB = undefined;
}
 
dbConnection.prototype.connectToMongo = function(callback){
 
  MongoModule.connect(url, function(err, client) {
  console.log("Server Conectado Com Sucesso!");
  var MongoClient = client;
  var MongoDB = client.db(dbName);
  
  return callback(MongoClient, MongoDB);
  });
 
}
 
module.exports = function(){
 return dbConnection;
}

//mongodb : // falcoaerobis:Deltor@14@ cluster0-shard-00-00-192m8.mongodb.net:27017,cluster0-shard-00-01-192m8.mongodb.net:27017,cluster0-shard-00-02- 192m8.mongodb.net:27017 / test ? Ssl = true & replicaSet = Cluster0-shard-0 & authSource = admin