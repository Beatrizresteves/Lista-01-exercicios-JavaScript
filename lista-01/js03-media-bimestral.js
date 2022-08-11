let notas = [10,8,6,4,2];

let total = 0;

for(var i = 0; i < notas.length; i++) {
	total += notas[i];
}

quantidadeDeNotas = notas.length

let media = total / quantidadeDeNotas


var resultado = '👉 a média das ' + quantidadeDeNotas + ' notas do bimestre é ' + media.toFixed(1)

console.log(resultado);
