// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   let retornaTamanhoArray =[1,2,3,4,5,6]
    return array.length
}
  

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const arrayReverse = [15,20,30,40,50]
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const arraycrescente =[2,9,7,5,62,30,22,18]
    return array.sort((a,b)=>a-b);
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
  let numerosPares = [1, 2, 3, 4, 5, 6, 7, 8];
  let retorno = numeros.filter(pares => (pares %2)== 0);
}
  console.log(array);

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

  const retornarParesElevados = array.map(item, numerosPares) => {
    
    return numerosPares == % 2
  }

console.log(retornarParesElevados)
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
const maiorNumero =[5,7,3,40,1,5,40,33];
return Math.max(...array);
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

 const num1 = prompt("Insira um numero!")
 const num2 = prompt("insira outro numero")
        if (num1 === num2) {
      } else {
        (num1 > num2) 
         return ` MaiorNumero: ${num1},  ${num2}`

  }
  
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   

    let numerosPares = [0,2,4,6,8];
    for (let i = 0; numerosPares.length > n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}
console.log(retornaNPrimeirosPares(2))


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {


  if(ladoA == 1 && ladoB == 2 && ladoC == 4) {
    console.log("Éscaleno")
  } else if ( ladoA == 1 && ladoB == 2 && ladoC == 1){
    console.log("Isóseles")
  }else (ladoA == 5 && ladoB == 5 && ladoC == 5)
    console.log("Equilátero")
  

  }
console.log(classificaTriangulo)


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const retornaOSegundo = [1,2,3,4,5,6,7]
  return (retornaOSegundo [1,0])
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const filme ={
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
 }
 console.log("Venha assistir ao filme" ,filme.nome, "de" ,filme.ano, "dirigido por" ,filme.diretor, "e estrelado por" ,filme.atores)
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 const pessoa = {
    nome: "Astrodev",
    idade: 25,
    email: "astrodev@labenu.com.br",
    endereco: "Rua do Futuro, 4"
  } 
  const pessoaAnonima ={
    ... pessoa,
    nome: "ANÔNIMO"
  }
  console.log(pessoaAnonima)
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(Pessoas) {
  let anoAtual = 2022
  const pessoas = [
    { nome: "Paula", idade: 12, altura: 1.8},
    { nome: "João", idade: 20, altura: 1.3},
    { nome: "Pedro", idade: 15, altura: 1.9},
    { nome: "Luciano", idade: 22, altura: 1.8},
    { nome: "Artur", idade: 10, altura: 1.2},
    { nome: "Soter", idade: 70, altura: 1.9}
  ]
const pessoasAutorizadas = pessoas.filter((pessoa) => {
  return ( pessoa.idade >=14 && pessoa.altura >= 1.5)
})
}
console.log(pessoasAutorizadas)

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
const  pessoasNaoAutorizadas = pessoas.filter((pessoa)=>{
  return (pessoas.idade <= 14 &&  pessoas.altura <= 1.5)
  })
}
console.log(pessoasNaoAutorizadas)



// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
const saldo = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
  ]
return (indice.cliente === item.saldoTotal - item.compras)
}
console.log(contas)
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
 const ordemAlfabetica = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" }
  ]
  return ordemAlfabetica.sort()

}
console.log(ordemAlfabetica)
// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) { 
return dataDaConsulta.sort()

} 
console.log(dataDaConsulta)