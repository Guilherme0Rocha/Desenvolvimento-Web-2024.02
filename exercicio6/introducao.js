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

const meuArray = [21, 34, 'Andergleiston', [32,45]];

var minhaGlobal = 34;

function minhaNovissimaFuncao(){
  var minhaGlobal = 23;
  return minhaGlobal;
}

function minhaFuncaoMaior(entrada){
  let resultado;
  if (entrada % 2 === 0){
    resultado = 'par';
  }
  return resultado;
}

function minhaFuncaoMaior2(entrada){
  let r
  if (entrada % 2 === 0){
    r = 'par';
  } else {
    r = 'impar';
  }
  return r;
}

function minhaFuncaoMaior3(entrada){
  const r = ''; /*retorna erro pois não é permitido alterar o valor de variavel const*/
  if (entrada % 2 === 0){
    r = 'par';
  } else {
    r = 'impar';
  }
  return r;
}

meuArray.forEach((el) => console.log(el))

const funcImprime = (ele, indice) => console.log("Indice", indice, ":", ele)

meuArray.forEach(funcImprime)
