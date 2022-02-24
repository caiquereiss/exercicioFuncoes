/*
​19) ​O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto
100 Cachorro Quente
200 Hambúrguer Simples
300 Cheeseburguer
400 Bauru
500 Refrigerante
600 Suco
Preço R$ 3,00 R$ 4,00 R$ 5,50 R$ 7,50 R$ 3,50 R$ 2,80
                                          Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.

*/

function calcularVenda(codigoProduto, quantidade =1){
  switch(codigoProduto){
    case 100:
      return  3 * quantidade
    case 200:
      return 4 * quantidade
    case 300:
      return 5.50 * quantidade
    case 400:
      return 7.50 * quantidade
    case 500:
      return 3.50 * quantidade
    case 600:
      return 2.80 * quantidade
    default:
      return 'Infelizmente não trabalhamos com esse produto'
  }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))
console.log(calcularVenda(600))