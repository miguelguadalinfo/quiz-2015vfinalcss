exports.authors = function(req,res){
	res.render('author', {
				fotoPerfil: '/images/foto.png',
				Nombre: 'Miguel Gonzalez',
				Video: 'http://vjs.zencdn.net/v/oceans.mp4',
				errors: []
	});
};

