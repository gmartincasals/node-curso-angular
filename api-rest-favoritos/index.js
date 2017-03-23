'use strict'

var app = require('./app');
var port = process.env.PORT || 3678;
var moongoose = require('mongoose');

moongoose.connect('mongodb://localhost:27017/cursofavoritos', (err, res) => {
  if (err) {
    throw err;
  }else{
    console.log('Conexion a MongoDB correcta');
    app.listen(port, function() {
      console.log('API Rest favoritos funcionando en http://localhost:'+port);
    });
  }
});
