const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.render('category', { title: 'Express' });
});

module.exports = router;
