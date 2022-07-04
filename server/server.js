require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = process.env;
const app = express();

app.use(bodyParser.json());

app.post("/create", (req, res) => {
  console.info("A new robot was created", req.body);

  res.json({
    status: 200,
  });
});

app.listen(PORT, () => {
  console.info(`App is running on port ${PORT}`);
});
