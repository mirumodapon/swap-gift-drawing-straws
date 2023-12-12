const express = require('express');
const app = express();

app.use(express.json());

const object = {};

app.post('/tags/:name', function (req, res) {
  const name = req.params.name;
  object[name] = req.body.tags;

  return res.send('OK');
});

app.get('/tags', function (req, res) {
  res.send(object);
});

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(3000, () => console.log(`Server is starting on port 3000...`));
