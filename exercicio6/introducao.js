let variavel = (10);
console.log('conta', 10 + ++variavel);
console.log('variavel', variavel);

let resultado;
const preco = 40;

/*if (preco < 40) {
  resultado = "Livro é barato."
}
else {
  resultado = "Livro não é barato."
}
*/

resultado = (preco < 40) ? ("Livro é barato.") : ("Livro não é barato.");

console.log(resultado)

let x = 3;

console.log(x == 3);
console.log(x > 3);
console.log(x == "3");
console.log(x === "3");

const meuObjeto = {
  nome : "Josânderson",
  idade : 23
}

function minhaFuncao(entrada){
  return entrada + 1;
}

const outraFuncao= function(entrada){
  return entrada + 22;
}

const setinha = (entrada) => {
  return entrada + 33;
}

const setinha2 = (entrada) => entrada + 34;