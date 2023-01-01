const express = require("express");
const app = express();
const router = require("./Router/router");
const cors = require('cors');
const port = 3002;
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/", router);



app.listen(port, () => console.log(`Example app listening on port ${port}`));

