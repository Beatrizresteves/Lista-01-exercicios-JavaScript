var anoNascimento = 2013

const dataAtual = new Date();
const anoAtual =dataAtual.getFullYear();

var idade = anoAtual - anoNascimento

var resultado = '👉 Quem nasceu em ' + anoNascimento + ', sua idade é ' + idade

console.log(resultado)
