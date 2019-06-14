const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://jaimebs:masterkey@cluster0-pw4ip.mongodb.net/insta?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

// middleware socket.io
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server in the ar on http://localhost:3333');
});
