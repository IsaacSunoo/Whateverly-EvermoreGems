const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');

const students = require('./datasets/alumni.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);

app.get('/students', (request, response) => {
  response.send({ students });
});

app.get('/students/:id', (request, response) => {
  const { id } = request.params;
  const student = students.find(student => student.id == id);
  if (student) { return response.send(student); }
  return response.sendStatus(404);
});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`Dataset is running on ${app.get('port')}.`);
  });
}

module.exports = app;