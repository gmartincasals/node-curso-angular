'use strict'

var Album = require('../models/Album');

function getAlbum(req, res){
	var albumId = req.params.id;

	Album.findById(albumId, (err, album) => {
		if(err){
			res.status(500).send({message: 'Error en la petición'});
		}else{
			if(!album){
				res.status(404).send({message: 'El album no existe !!!'});
			}else{
				res.status(200).send({album});
			}
		}


	});
}

function getAlbums(req, res){

	Album.find({}, (err, album) => {
		if(err){
			res.status(500).send({message: 'Error en la petición'});
		}else{
			if(!album){
				res.status(404).send({message: 'No hay albums !!!'});
			}else{
				res.status(200).send({album});
			}
		}


	});
}

module.exports = {
	getAlbum,
	getAlbums
}