const { application } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../dbconnection.js");

router.get("/api/get", (req, res) => {
  const qry = "SELECT * FROM todotable";
  db.query(qry, (err, ret) => {
    res.send(ret);
  });
});

router.post("/api/delete", (req, res) => {
    const id = req.body.id;

    const qry = `DELETE FROM todotable where id=${id}`;
    db.query(qry, [id], (err, result) => {
        if(err) throw err;
        else res.send("DELETE SUCCESS!");
    });
});

router.post("/api/update", (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const author = req.body.author;
    const content = req.body.content;

    const qry = `UPDATE todotable SET title = ?, author = ?, content = ? where id=${id}`;
    db.query(qry, [title, author, content, id], (err, ret) => {
        if(err) throw err;
        else res.send("UPDATE SUCCESS!");
    });
});

router.post("/api/insert", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const author = req.body.author;
  const content = req.body.content;

  // todoID 부분 설정 필요함.
  // 임의로 설정하지 않도록...
  const qry =
    "INSERT INTO todotable (author, title, content) VALUES (?,?,?)";
  db.query(qry, [author, title, content], (err, result) => {
    if (err) throw err;
    else res.send("INSERT SUCCESS!");
  });
});

module.exports = router;

