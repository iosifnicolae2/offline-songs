const express = require('express');
const app = express();
const path    = require("path");
const songs_json = require('./app/assets/songs.json');
const request = require('request');

var gulp = require('./gulpfile.js').gulp;

gulp.start('serve');

app.get('/api/view/all', function(req, res) {
  return res.json(songs_json)
})

app.get('/api/view', function(req, res) {
  var id = req.query.id;
  return res.json(songs_json[id])
})

app.use(express.static('app'))

app.use('*', function(req, res) {
  request('localhost:4000').pipe(res);
})

app.listen(3005, () => console.log('Server listen on port 3005 for debugging purpouse!'))
