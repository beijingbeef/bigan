var express = require('express');
var router = express.Router();

const {pool} = require('../model/connector')

/* GET home page. */
router.get('/', function(req, res, next) {

  pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

  console.log(pool.test);
  pool.test++;
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
