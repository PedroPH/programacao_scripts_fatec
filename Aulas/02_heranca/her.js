function Animal() {
	this.barulho = '...';
}

Animal.prototype = {
	fazerBarulho: function () {
		return this.barulho;
	}
}

function Gato() {
	Animal.call(this);
	this.barulho = 'Miau';
}

function Cachorro() {
	Animal.call(this);
	this.barulho = 'Au';
}

var GatoPrototype = new Animal();
var CachorroPrototype = new Animal();

Gato.prototype = GatoPrototype;
Cachorro.prototype = CachorroPrototype;

function Manada() {
	this.animais = [];
}

Manada.prototype = {
	adicionar: function (wAnimal){
		this.animais.push(wAnimal);
	},
	barulhos: function () {
		return ''
	}
}

function ManadaVirgula() {
	Manada.call(this);
}

function ManadaSustenidaDupla() {
	Manada.call(this);
}

var manadaVirgulaProto = new Manada();
manadaVirgulaProto.barulhos = function () {
	var barulho = '';
	for (var i = 0; i < this.animais.length; i++) {
		barulho += this.animais[i].barulho;
		if (i < this.animais.length-1) barulho += ', '
	}
	return barulho;
}
ManadaVirgula.prototype = manadaVirgulaProto;

var manadaSustenidaDuplaProto = new Manada();
manadaSustenidaDuplaProto.barulhos = function () {
	var barulho = '';	
	for (var i = 0; i < this.animais.length; i++) {
		barulho += this.animais[i].barulho + '# ' + this.animais[i].barulho;
		if (i < this.animais.length-1) barulho += '# ';
	}
	return barulho;
}
ManadaSustenidaDupla.prototype = manadaSustenidaDuplaProto;

var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenidaDupla();
var animais = [new Cachorro(), new Gato()];

animais.forEach(function (wAnimal) {
  manadaVirgula.adicionar(wAnimal);
  manadaSustenidaDupla.adicionar(wAnimal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());