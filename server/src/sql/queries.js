const mysql = require("mysql");
const selectQuery = (connection, query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, async (err, rows) => {
      connection.release();
      if (err) reject(err);
      resolve(rows);
    });
  });
};

const insertQuery = (connection, queryTemplate, formatterArray) => {
  const query = mysql.format(queryTemplate, formatterArray);
  return new Promise((resolve, reject) => {
    connection.query(query, async (err, result) => {
      connection.release();
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  selectQuery,
  insertQuery,
};
