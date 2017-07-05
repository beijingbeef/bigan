const {pool} = require('../model/connector')

function Item() {};

Item.prototype.getItem = (id) => {
  return Promise.resolve({
    a: 'xx'
  });
}

module.exports = Item;
