    var colors = require('colors'),
    request    = require('request'),
    browserify = require('browserify');


//Funcion Bloquante
var restarNumerosSync = function(parametro1, parametro2) {
  var resta = parametro1 - parametro2;
  console.log("Resta Sync".rainbow);
  console.log(resta);
};

//Función no bloqueante o Asyncrona
var restarNumerosAsync = function(par1, par2, cb) {
  var resta = par1 - par2;
  cb(resta);
};


restarNumerosSync(4,2);

restarNumerosAsync(4, 3, function(d) {
    console.log("Resta Async".green);
    console.log(d);
});



