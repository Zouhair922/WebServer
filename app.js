// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', (req, res) => {
  const { username } = req.body;
  res.render('success', { username });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
