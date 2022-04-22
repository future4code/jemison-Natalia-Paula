/*let array
console.log('a. ', array)

a) A resposta é indefinida.

array = null
console.log('b. ', array)

b) A resposta é null 

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

c) A quantidade de caracteres é = 11

let i = 0
console.log('d. ', array[i])

d) Na programação começamos contando pelo 0, ou seja, o resultado é = a 3

array[i+1] = 19
console.log('e. ', array)

e) O resultado trocará os valores 4 pelo 19.

const valor = array[i+6]
console.log('f. ', valor)

f) O valor é = 9



const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

O resultado é : "SUBI NUM ÔNIBUS EM MIRROCOS" e o numero de caracteres ficou = 27*/



/*Exercício de escrita de código.*/

/*1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!*/


    const nomeDoUsuario = prompt ("Nome do usuário!")
    const emailDoUsuario = prompt ("Email do usuário!")

    let email = "natalia@gmail.com" 
    console.log(email.trim())

    alert ( "O e-mail "+emailDoUsuario+ "foi cadastrado com sucesso. Seja bem-vinda(o)," +nomeDoUsuario)



    /*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário.
     Imprima no console a nova lista*/


    let comidasPreferidas = [
            
        "Macarronada", 
        "Salada",
        "Frango com quiabo",
        "Batata frita", 
        "Feijão tropeiro"
    ] 
    console.log(comidasPreferidas)


console.log("Essas são minhas comidas preferidas:", comidasPreferidas)

let perguntaUsuario = prompt("Qual é a sua comida preferida?")

let comidaUsuario = comidasPreferidas.replaceall("Salada","Omelete")




/*3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console*/
    
    - 

 let listaDeTarefas = [`Levantar cedo`, `ir para o trabalho`, `estudar a noite`]

 let tarefa = prompt("Qual a primeira tarefa do dia?")
 let segundaTarefa = prompt("Qual a segunda tarefa do dia?")
 let terceiraTarefa = prompt("Qual a terceira tarefa do dia?")
 
console.log(listaDeTarefas)

let indiceDeTarefas = prompt("digite o indice de uma tarefa 0 a 2")

console.log(listaDeTarefas[indiceDeTarefas])

listaDeTarefas.splice(1)

console.log(listaDeTarefas)




