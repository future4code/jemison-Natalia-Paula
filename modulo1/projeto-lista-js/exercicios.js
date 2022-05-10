// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Insira a altura"))
  const largura = Number(prompt("Insira a largura"))
  console.log(altura * largura )

}
 

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Insira o ano atual"))
  const anoDeNascimento = Number(prompt("Insira seu ano de nascimento"))
  console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC() {
  // implemente sua lógica aqui

  return peso / (1,62 * 1,62)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Insira seu nome")
  const idade = prompt("Insira sua idade")
  const email = prompt("Insira seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() 
  // implemente sua lógica aqui

  const cor1 = prompt("Insira sua primeira cor favorita")
  const cor2 = prompt("Insira sua segunda cor favorita")
  const cor3 = prompt("Insira sua terceira cor favorita")
  console.log([cor1, cor2, cor3])


// EXERCÍCIO 06
function retornaStringEmMaiuscula() {
  // implemente sua lógica aqui
arrayMaiuscula[olá]
  return olá.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo() {
  // implemente sua lógica aqui
let custo = 3000 
let valor = 100

 return 3000 / 100

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho() {
  // implemente sua lógica aqui

  arrayMesmoTamanho [olá, abc]
  return olá.length === abc.length
}
  


// EXERCÍCIO 09
function retornaPrimeiroElemento() {
  // implemente sua lógica aqui
arrayFrutas [Abacate, Melão, Morango]
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento() {
  // implemente sua lógica aqui
  array [1,2,3,4,5]
    return array[array.length - 1]
  }


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  arraynumeros [1,2,3,4,5]
  const primeiro = retornaPrimeiroElemento
  const ultimo = retornaUltimoElemento

  array[0] = ultimo
  array[array.length - 1] = primeiro

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const stringCaseUm = ("Banana")
  const stringDois = ("BANANA")
  return string1.toLowerCase() === string2.toLowerCase()



}
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento"))
  const anoEmissao = Number(prompt("Digite o ano de emissão do documento"))

  const idade = anoAtual - anoNascimento
  const tempoCarteira = anoAtual - anoEmissao

  const cond1 = idade <= 20 && tempoCarteira >= 5
  const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
  const cond3 = idade > 50 && tempoCarteira >= 15

  console.log(cond1 || cond2 || cond3)
}




// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui


  const cond1 = 2012 % 400 === 0
  const cond2 = (2012 % 4 === 0) && (2012 % 100 !== 0)
  return cond1 || cond2


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui


  const maiorDeIdade = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log(maiorDeIdade === "Não" && ensinoMedio === "Não" && disponibilidade === "sim")

}
