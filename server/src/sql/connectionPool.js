const mysql = require("mysql");

const configs = {
  connectionLimit: 2,
  host: "34.72.180.149", //"localhost",
  user: "root",
  password: "root",
  database: "urlshortner",
};

const pool = mysql.createPool(configs);
const getConnection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) reject(error);
      resolve(connection);
    });
  });
};

console.log("pool created");
module.exports = {
  getConnection,
};
