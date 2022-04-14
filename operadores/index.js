/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)*/



/* 1- Resposta.
a) O resultado é = False
b) O resultado é = False
c) O resultado é = True
d) O resultado é = Boolean*/



/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero =  prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)


/* 2- Resposta
O console não faz a soma dos dois numeros. 
Será impresso no console uma string.*/


/*3- Resposta
 O colega deveria acrescentar "Number" antes de prompt para retornar no console  a soma dos numeros.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero =  Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)*/



/*Exercícios de interpretação de códigos
Exercício -1 */


let idade = Number(prompt("Qual é a sua idade?"))
let melhorAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))

let diferenca = ("Sua idade é maior do que a do seu melhor amigo?")
let idadeMaior = diferenca >= idade 

let diferencaDeIade = idade - melhorAmigo 

console.log (idade)

console.log (idadeMaior)


/*Exercício -2
a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código*/




let numeroPar = Number(prompt("Insira um número par!"))

console.log (10 % 2 )

console.log (20 % 2)

console.log(38 % 2)

// todos os números pares tem na divisão o resultado igual a 0. //


console.log (27 % 2)
console.log (35 % 2)

// Os números impares  na divisão tem o seu resultado igual a 1. //





/* Exercício -3
3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas*/

let idadeEmAnos  = Number(prompt("Qual a sua idade em anos?"))
console.log(30*1)
let idadeEmMeses = Number(prompt("Qual Sua idade em meses?"))
console.log(12*30)
let idadeEmDias  = Number(prompt("Qual a sua idade em dias?"))
console.log (12*30*30)
let idadeEmHoras = Number(prompt("Qual a sua idade em horas"))
console.log (12*30*30*24)



/*4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
    
    
    ```html
    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true
    
    obs: O true ou false vai depender dos números inseridos e do resultado das operações.*/

    let numero1 = Number(prompt("Escreva um número!"))
    let numero2 = Number(prompt("Escreva um segundo número"))

    console.log (100 > 20)
    console.log (100 == 20)
    console.log (100/20)
    console.log (20 / 100)
    












