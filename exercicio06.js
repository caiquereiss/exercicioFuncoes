/**
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */
/**
 * Fórmula dos juros simples:

J = C × i × t

J = 1200 × 0,02 × 14

J = 336

Montante:

M = C + J

M = 1200 + 336

M = 1536
 */

function jurosSimples(capitalInicial,taxa, tempo){
    const taxaPercentual = taxa / 100
    return capitalInicial + ( capitalInicial * taxaPercentual * tempo)
}

console.log(jurosSimples(1200,2,14))

function jurosComposto(capitalInicial,taxa, tempo){
  const taxaPercentual = taxa / 100
  return capitalInicial * (1 + taxaPercentual) ** tempo
}
console.log(jurosComposto(620,1.5,24).toFixed(2).toString().replace(".", ","))



// function jurosSimples (capitalInicial, taxa, tempo) {
//   return capitalInicial + (capitalInicial * taxa * tempo)
// }

// function jurosCompostos (capitalInicial, taxa, tempo) {
//   return capitalInicial * (1 + taxa) ** tempo
// }

// console.log(jurosSimples(400, 25/100, 4));
// console.log(jurosCompostos(400, 25/100, 4));