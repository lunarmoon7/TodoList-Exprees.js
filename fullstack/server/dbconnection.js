const mysql = require("mysql");

const db = mysql.createConnection({
  host: 'localhost',
  user: "hwisik",
  password: "12341234",
  database: "Tododb",
});

// port: 3002 적으면 실행이 안됨

db.connect((err) => {
  if (err) console.log('Err is: ', err);
  else console.log("DB is Connected!");
});


module.exports = db;
