//21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130



function convenio(idade){
  let valorPlano = 100
 if( idade >= 0 && idade < 10 ){
    console.log(`Se a idade é entre 0 e 9 :  ${valorPlano+= 80}`)
 } else if(idade >= 10 && idade < 30 ) {
    console.log(`Se a idade é entre 10 e 29 :  ${valorPlano += 50}`)
 } else if(idade >= 30 && idade <= 60 ){
    console.log(`Se a idade é entre 30 e 60 : ${valorPlano+= 95}`)
 }else if(idade > 60){
   console.log(`Se for maior que 60 :  ${valorPlano+= 130}`)
 }
 
}

convenio(5)
convenio(10)
convenio(20)
convenio(30)
convenio(40)
convenio(60)
convenio(70)
