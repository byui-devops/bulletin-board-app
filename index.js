const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const messages = [
  { id: 1, text: "Welcome to the Bulletin Board!" },
  { id: 2, text: "Don't forget to take breaks!" },
  { id: 3, text: "Docker makes deployment easier." }
];

app.get('/', (req, res) => {
  res.json(messages);
});

app.listen(PORT, () => {
  console.log(`Bulletin board running at http://localhost:${PORT}`);
});
