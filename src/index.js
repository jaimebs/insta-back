const express = require('express');
const app = express();

app.use(require('./routes'));

app.listen(3333, () => {
  console.log('Server in the ar on http://localhost:3333');
});
