const express = require('express');
const router = express.Router();
const {pool} = require('../../model/connector');


/* GET categories listing. */
router.get('/categories', (req, res, next) => {
  let result = [];
  pool.query('SELECT * FROM category')
  .then( (data) => {
    res.json(data);
  }).catch( (error) => {
    res.status(500).json({ error: err });
  });
});

router.put('/categories', (req, res, next) => {
  let name = req.body.name;
  pool.query('INSERT INTO category SET ?', { name: name})
  .then( (data) => {
    res.json({});
  }).catch( (error) => {
    res.status(500).json({ error: err });
  });
});

router.delete('/categories/:id', (req, res, next) => {
  let id = req.params.id;
  pool.query('DELETE FROM category WHERE id = ?', [id])
  .then( (data) => {
    res.json(data);
  }).catch( (error) => {
    res.status(500).json({ error: err });
  });
});

module.exports = router;
