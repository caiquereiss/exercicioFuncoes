// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

const divisor = function (dividendo, divisor){
  console.log(dividendo/divisor, dividendo%divisor)
}

divisor(2,2)

// ou
function divisao(dividendo, divisor) {
  console.log("Resultado da divisão " + Math.floor(dividendo/divisor))
  console.log(`Resto da divisão ${dividendo%divisor}`)
}

divisao(11,4)