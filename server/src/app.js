// const express = require("express");
// const app = express();
// const mysql = require('mysql');

// const pool = mysql.createPool({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'test_db'
// });

// const log = console.log;

// app.get("/", async (req,res) => {
//     let respRows = [];
//     pool.getConnection(async (err, connection) => {
//         try {
//             if(err) throw err;
//             console.log('connected as id ' + connection.threadId);
//             connection.query('SELECT * from student', async (err, rows) => {
//                 connection.release(); // return the connection to pool
//                 if(err) res.send(err);
//                 res.send(rows);
//                 let i = 1;
//                 for (const row of rows) {
//                     console.log(`Row ${i++}:`);
//                     const keys = Object.keys(row);
//                     for(const key of keys) {
//                         log(`${key} : ${row[key]}`);
//                     }
//                     console.log('');
//                 }
//                 respRows = [...rows];
//                 pool.end(()=> log("Pool closed"));
//             });
//         } catch (err) {
//             res.send(err);
//         }
//     });


// });
