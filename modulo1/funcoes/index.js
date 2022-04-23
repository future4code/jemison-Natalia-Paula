

/* **Exercícios de interpretação de código**
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador 
    **para analisar e pensar sobre o resultado.** 
    
    1. Leia o código abaixo
        
    
        function minhaFuncao(variavel) {
        	console.log(variavel)
            return variavel * 5
        
        console.log(minhaFuncao(2))
        console.log(minhaFuncao(10))

        }
      
        
        
        a) O que vai ser impresso no console?
        
        b) O que aconteceria se retirasse os dois `console.log` 
        e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

    Respostas *

    A) Será impresso os valores 10 e 50.

    b) A chamada da função teria que ser guardada dentro de uma variável.  


     let textoDoUsuario = prompt("Insira um texto");
    
    const outraFuncao = function(texto) {
        return texto.toLowerCase().includes("cenoura")
    }
    
    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)

    
   a. Explique o que essa função faz e qual é sua utilidade
 
    Com o método includes e to LowerCase , o return ira repassar no console os valores se é verdadeiro ou falso e em letras minúsculas.

    Sua utilidade é determinar se o elemento existe ou não dentro de uma array.


    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura`
         ii.  `CENOURA é bom pra vista`
         iii. `Cenouras crescem na terra`
  Resposta 
    b) Para todas as saídas deram "true" impresso no console.

  


    Exercícios de Escrita de código:
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

    ```
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    ```
    
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, 
    apenas imprime essa mensagem.
    
    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
    
    ```
    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].*/

   // A) Resposta
    function dadosPessoais(){
        return  " Eu sou Natália, tenho 30 anos, moro em Belo Horizonte e sou estudante"
    }
    dadosPessoais ()
    console.log(dadosPessoais())


    //B) Resposta 

    function dadosDaPessoa (nome, idade, endereço, profissão){
        console.log (` Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissão}`)

    }
        dadosDaPessoa( 'Gustavo', '7', 'BH', 'estudante')



    /*2-Resposta

    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado.
     Invoque a função e imprima no console o resultado.

    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem,
     juntamente com uma versão dela em letras maiúsculas.
*/

    function numerosParametros (num1, num2){
        return num1 + num2
    }
      console.log(numerosParametros(20,30))

    
    
    
    function oNumeroEMaiorOuIgual (num1, num2){
        return num1 >= num2
}
    console.log(oNumeroEMaiorOuIgual(20,15))




    function eleEParOuNao (num1){
       const numeroPar = 0
        return num1 == 0

        }
    console.log (eleEParOuNao(0))




    function textoDaString(){
        return textoDaString 
    }
    console.log('Texto maiusculo da string'.toUpperCase(length));




  /* 3 Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
     Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores
      inputados pelo usuário sendo o argumento.
     Por fim, mostre no console o resultado das operações:*/

    function operacoesSoma (num1,num2){
        return num1 + num2   
     }
    function operacoesSubitracao (num1, num2){
        return num1- num2
    }

    function operacoesMutiplicacao (num1, num2){
        return num1 * num2 
    
    }

    function operacoesDivisao(num1, num2){
        return num1 / num2 
    }

    
    console.log (prompt("Insira numero aqui"))
    console.log (operacoesSoma (30,3))
    console.log (operacoesSubitracao(30,3))
    console.log (operacoesMutiplicacao(30,3))
    console.log (operacoesDivisao(30,3))

