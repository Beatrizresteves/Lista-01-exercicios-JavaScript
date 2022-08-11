let texto = 'zebra'
let textoCripto = ''
let textoDescripto = ''
let key= 1
// Criptografia
for (let i of texto) {
	if(i === 'z'){
		textoCripto += '@'
	} else if(i === 'Z') {
		textoCripto +='$'
	}else {
		textoCripto += String.fromCharCode(i.charCodeAt(0) + key);
	}
 }
console.log(textoCripto)

//Descriptografia
 for (let y of textoCripto) {
	if(y === '@'){
		textoDescripto += 'z'
	} else if(y === '$') {
		textoDescripto +='Z'
	}else {
 	textoDescripto += String.fromCharCode(y.charCodeAt(0) - key);
	}
 }
 console.log(textoDescripto)