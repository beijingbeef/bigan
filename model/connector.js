const mysql = require('promise-mysql');
const nconf = require('nconf');

// loads config file.
nconf.add('app', {type: 'file', file: './config/config.json'});

let mysqlConf = nconf.stores.app.get('mysql') || {};


const pool  = mysql.createPool({
  connectionLimit : mysqlConf.poolsize || 10,
  host            : mysqlConf.host || 'localhost',
  port            : mysqlConf.port || 3306,
  user            : mysqlConf.user || 'root',
  password        : mysqlConf.password || 'root',
  database        : mysqlConf.database ||'bigan'
});

pool.test = 0;

module.exports = {
  pool
}
