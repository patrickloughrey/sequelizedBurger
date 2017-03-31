'use strict'

/* Require connection.js */
var connection = require('../config/connection.js');

/* Helper function to create question marks for SQL query */
function questionMarks(num) {   
    var arr = [];

    for(var i = 0; i < num; i++) {
        arr.push("?");
    }

    arr = arr.toString();
    return arr;
}

/* Helper function for SQL object to proper syntax conversion */
function objectToSql(ob) {
    var arr = [];

    for(var key in ob) {
        if(Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    arr = arr.toString();
    return arr;
}

/* ORM object for all SQL query type */
var orm = {

  all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
          if(err) {
              console.log(err);
              throw err;
          }

          cb(result);

      });

  },

  create: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
          queryString += " (";
          queryString += cols.toString();
          queryString += " VALUES (";
          queryString += questionMarks(vals.length);
          queryString += ") ";

      connection.query(queryString, vals, function(err, result) {
          if(err) {
            console.log(err);
            throw err;
          }

          cb(result);

      });

  },

  update: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
          queryString += " SET ";
          queryString += objectToSql(objColVals);
          queryString += " WHERE ";
          queryString += condition;

      /* console.log(queryString) */
      connection.query(queryString, function(err, result) {
          if(err) {
            console.log(err);
            throw err;
          }

          cb(result);

      });
  }
};

/* Export the ORM */
module.exports = orm;