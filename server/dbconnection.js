const mysql = require("mysql");

// host에 localhost를 사용하면 Error: connect ECONNREFUSED ::1:3306 발생
// 따라서 127.0.0.1을 사용해야 한다.
// 그런데 localhost와 127.0.0.1은 무슨 차이?
const db = mysql.createConnection({
  host: 'localhost',
  user: "hwisik",
  password: "12341234",
  database: "Tododb"
});

// port: 3002 적으면 실행이 안됨

db.connect((err) => {
  if (err) console.log('Err is: ', err);
  else console.log("DB is Connected!");
});


module.exports = db;
