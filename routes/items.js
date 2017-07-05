const express = require('express');
const router = express.Router();

const Item = require('../model/item')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let id = req.params.id || '';

  console.log(Item);

  new Item().getItem(id).then( (data) => {
    console.log(data);
  })

  res.render('item', { title: 'Express' });
});

module.exports = router;
