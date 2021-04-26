/*
var modelo = 'Mercedes-Benz Monobloco O-371 RSL';
var ano = 1993;
var capacidade = 50;

var acelerar = function() {
  console.log('vrum vrum');
}

var busao = {
  modelo: modelo,
  ano: ano,
  capacidade: capacidade,
  acelerar : acelerar
}

busao.acelerar(); // vrum vrum

*/

var modelo = 'Mercedes-Benz Monobloco O-371 RSL';
var ano = 1993;
var capacidade = 50;


var busao = {
  modelo,
  ano,
  capacidade,
  acelerar() {
      console.log('vrum vrum');
  }
}

busao.acelerar(); // vrum vrum