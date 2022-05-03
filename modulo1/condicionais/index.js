
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

Resposta 
a) Explique o que o código faz. Qual o teste que ele realiza?

O código faz uma estrutura condicional para executar uma afirmação. 
Se o teste for verdadeiro será usado a condicional "if", se for falso será usado a condicional "else".


b) Para que tipos de números ele imprime no console "Passou no teste"? 

Números pares.

c) Para que tipos de números a mensagem é "Não passou no teste"?

Números impares.


 2- O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:


let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
     break;// BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?

O código funciona usando os "cases" se for verdadeiro ele vai exercutar o bloco, senão usará o "default" como resposta padrão
 se as respostas não se encaixarem em nenhum dos "cases".


b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

"o preço da fruta maçã  é R$2,25"

c) Considere que um usuário queira comprar uma `Pêra`, 
qual seria a mensagem impressa no console se retirássemos o `break`
 que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

A resposta será impressa com o "default" como resposta padrão para o preço da fruta.

"O preço da fruta Pêra é R$ 5"



3- 
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
let mensagem = "Essa mensagem é secreta!!!"

}

console.log(mensagem)



/*
a) O que a primeira linha está fazendo?

 Abrindo uma caixa de perguntas para o Usuário

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

O resultado é: 10 > 0 
A mensagem será impressa "Esse número passou no teste"
 A resposta não foi impressa no console.

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. 

Sim. Essa variável não  está declarada no escopo global.
*/





 /* Exercícios de escrita de códigos.


    1. Faça um programa que pergunta ao usuário qual a idade dele e 
    imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir.
     Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`*/


    const idadeMinima = Number(prompt("Qual é a sua idade?"))
    const numero = Number (idadeMinima)

        if (idadeMinima > 17) {
            
        console.log("Você Pode dirigir")

    }   else {
        console.log("Você não pode dirigir")
    }


    /* 2. Agora faça um programa que verifica que turno do dia um aluno estuda.
     Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno).
     Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
    */

        

    const qualTurnoEstuda = prompt("Digite a letra **M**, **V**, ou **N** para dizer qual turno estuda!")


        if (qualTurnoEstuda === 'M'){

         console.log('Bom dia!')

    }   else if (qualTurnoEstuda === 'V'){

         console.log('Boa tarde!')

    }   else { (qualTurnoEstuda === 'N')

        console.log('Boa noite!')

    }
   // 3.Repita o exercício anterior, mas utilizando a estrutura de switch case agora.//

    let TurnoDoDia = prompt("Digite a letra M, V, ou N para dizer qual turno estuda!");

    switch (TurnoDoDia) {
    case 'M':
    console.log('Bom dia');
    break;
    case 'V':
    console.log('Boa tarde!');
    break;
    case'N':
    console.log('Boa Noite');
    break;
    default: 
    turno = ('Turno Não registrado');
    break;
}

    /*4.
    Considere a situação: você vai ao cinema com um amigo ou amiga,
    porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e
    se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário
    qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
    então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, 
    imprima no console a mensagem: "Bom filme!", caso contrário,
    imprima "Escolha outro filme :("  */


    const filmeNoCinema = prompt("Genero do filme?")
    let ingresso = Number(prompt("Preço do ingresso"))



      if (filmeNoCinema == 'fantasia' && ingresso <= 15){
         console.log('Bom filme')

    } else {
        console.log('Escolha outro filme')
    }
