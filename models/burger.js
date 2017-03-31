/* Import orm.js to interact directly with database */
var orm = require('../config/orm.js');

var burger = {

  all: function(cb) {
      orm.all("burgers", function(res) {
          cb(res);
      });
  },

  /* cols & vals are array of object keys */
  create: function(cols, vals cb) {
      orm.create("burgers", cols, vals, function(res) {
          cb(res);
      });
  },

  update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
      });
  }

};

/* Export to the controller */
module.exports = burger;