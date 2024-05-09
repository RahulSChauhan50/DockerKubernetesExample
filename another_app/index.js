// write a express template
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! i am server 2 listening");
});

app.get("/api", (req, res) => {
  res.send("Hello API!");
});

app.post("/update-api", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`i am server 2 listening at http://localhost:${port}`);
});
