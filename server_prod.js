const express = require('express');
const app = express();
const path    = require("path");

var gulp = require('./gulpfile.js').gulp;
var songs_json = {};

gulp.start('default');

app.get('/api/view/all', function(req, res) {
  return res.sendFile(path.join(__dirname+'/dist/assets/songs.json'))
})

app.get('/api/view', function(req, res) {
  var id = req.query.id;
  return res.json(songs_json[id])
})

app.use(express.static('app'))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
})

app.listen(3003, () => console.log('Server listen on port 3003!'))
