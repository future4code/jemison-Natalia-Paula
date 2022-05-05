
/*1-O que o código abaixo está fazendo? Qual o resultado impresso no console

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

O código vai fazer com que o laço repita a ação múltiplas vezes. 
O resultado é = 10.*/


/*2- Leia o código a Baixo.

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

let indice = 0
for (let numero of lista) {
  if (numero > 18) {
    lista.length
	}
}
 console.log(numero)

/*a) O que vai ser impresso no console? 

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
Se sim, o que poderia ser usado para fazer isso?

resposta:
a) Numeros maiores do que 18: 19, 21, 23, 25, 27, 30
b) 


3-Qual seria o resultado impresso no console, se o usuário digitasse o número 4 


  const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
  let quantidadeAtual = 0 
  while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
resposta:
vai ser impresso os asteriscos em 4 linhas.*/


//Exercícios de escrita de código.

/*1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um,
     e guarde esses nomes em um array*/

let quantosBichinhos =  Number(prompt("quantos bichinhos você tem?"))

 while (quantosBichinhos == 0) {
  console.log("Que pena! Voce pode adotar um pet!")

if (quantosBichinhos > 0 ){

console.log =  prompt("Digite o nome de cada pet!")
}

}
console.log(quantosBichinhos)


/*2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números.
 Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
    a) Escreva um programa que **imprime** cada um dos valores do array original.
    
    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original 
    e **imprima** esse novo array
    
    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é:
     `numero`". Depois, **imprima** este novo array.
    
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original*/


    let arrayOriginal = [20, 35, 19, 22, 43, 52, 74, 55] 
    let numeroOriginal = 0
    for (let numerOriginal = 0; i <= 8; i++){
      console.log(arrayOriginal[i])
    }
   
    function divisao(){
      for (i= 1; divisao > 8; i++) {
          i = i / divisao[i=-1];
          console.log(divisao)
      }
  }

    let novoArray =[20, 22, 52, 74]
    let novoNumero = 0
    for (let novoNumero = 0; i <= 4; i++){
      console.log(novoArray[i])
    }


    
    
   arrayString = ("O elementodo index ",i, "é:" ,numero,){
  let numero = 0
  let i = -1
    }
    console.log(arrayString)
    
    



    let maior = 0
    let  numeroMaior = -1;
    for (i = 0; i < numeroMaior.length; i++) {
    if (numeroMaior[i] > maior) {
        maior = numeroMaior[i];
        numeroMaior = i;
    }
}

    let menor = 0
    let numeroMenor = 0
    for (i = 0; i > numeroMenor.length; i++){
    if  (numeroMenor [i]) < menor) {
      menor = numeroMenor[i];
      numeroMenor = i;
    }
  }
    
    
  