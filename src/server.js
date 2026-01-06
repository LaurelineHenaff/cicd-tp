const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/hello/:name?", (req, res) => {
  const name = req.params.name;

  if (!name) {
    res.send("Hello world!");
  } else {
    res.send(`Hello world! From ${name}`);
  }
});

app.post("/hello", (req, res) => {
  const name = req.headers["x-name"];

  if (!name) {
    res.status(400).send("Missing x-name header");
  } else {
    res.send(`Hello world! From ${name}`);
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
