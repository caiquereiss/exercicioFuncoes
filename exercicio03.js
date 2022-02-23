//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function calculate(base, expoente) {
  // método antigo
  let resultado =  Math.pow(base,expoente )

  //metodo novo
  resultado = base ** expoente;
  return resultado;
}
console.log(calculate(2,3))