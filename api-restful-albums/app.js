'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();


//carga de rutas
var album_routes = require('./routes/album');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cabeceras

//rutas base
app.use('/api', album_routes);

module.exports = app;