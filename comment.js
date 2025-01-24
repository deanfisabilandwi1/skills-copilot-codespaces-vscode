// Create web server
// Create a server that responds to requests to the /getComments endpoint. It should send back an array of comments.

const express = require('express');
const app = express();

const comments = [
  { username: 'Tammy', comment: 'lolol' },
  { username: 'FishBoi', comment: 'I like fish' },
  { username: 'QueenOfEngland', comment: 'Royals ftw' }
];

app.get('/getComments', (req, res) => {
  res.json(comments);
});

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});