const express = require("express");
const app = express();
const postBank = require('./postBank');

app.use(express.static('public'));

app.get("/", (req, res) => {
  //TODO - get all the posts
  res.send(`
    <html>
      <head>
        <link rel='stylesheet' href='/style.css' />
        <title>Wizard News</title>
      </head>
      <body>
        <h1>Wizard News</h1>
      </body>
    </html>
  `);

});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
