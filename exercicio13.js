//13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function semana(dia){
  switch(dia) {
      case 1: 
      console.log('Domingo')
    break;
    case 2:
      console.log('Segunda-feira')
      break;
    case 3:
      console.log('Terça-feira')
      break;
    case 4:
      console.log('Quarta-feira')
      break;
    case 5:
      console.log('Quinta-feira')
      break;
    case 6:
      console.log('Sexta-feira')
      break;
    case 7:
      console.log('Sabado')
      break;
      default:
        console.log('Dia invalido')

  }
}

semana(1)
semana(2)
semana(3)
semana(4)
semana(5)
semana(6)
semana(7)
semana(0)

console.log('===================Dia ultil===================')

function diaUltil(numero){
  switch(numero){
    case 1:
      return 'Fim de semana'
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 'Dia util'
      case 7:
        return 'Fim de semana'
      default:
        return 'Dia invalido'
  }
}
console.log(diaUltil(1))
console.log(diaUltil(2))
console.log(diaUltil(3))
console.log(diaUltil(4))
console.log(diaUltil(5))
console.log(diaUltil(6))
console.log(diaUltil(7))
console.log(diaUltil(0))