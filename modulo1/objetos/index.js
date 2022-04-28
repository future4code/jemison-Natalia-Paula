/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])


 1 Resposta 

A) "Matheus Nachtergaele";
 "Virginia Cavendish";
 "canal: globo, horário: 14h".

 const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

 Resposta 2

A)  O que vai ser impresso no console?
{nome: "Juca", idade: 3, raca: "SRD"}
{nome: "Juba", idade: 3, raca: "SRD"}
{nome: "Jubo", idade: 3, raca: "SRD"}

B)O que faz a sintaxe dos três pontos antes do nome de um objeto?

A sintaxe pode copiar, subistituir ou acrescentar no array as informações do objeto.



function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))



Resposta 3


A)a) O que vai ser impresso no console?

O resultado é "false" e "undefined"

B) Explique o valor impresso no console. Você sabe por que isso aconteceu?

A primeira impressão retornou "false", pois foi atribuído o valor em objeto.
e  a segunda impressão não tem um parâmetro e nem um valor atribuído a ele, por isso retornou "undefined" .


Exercícios de escrita de código

A)*/ const pessoa = {
    nome: "Wenderson",
    apelidos: ["Sabará", "Raposa", "wend"]
}
console.log("Eu sou" ,pessoa.nome,", mas pode me chamar de:",pessoa.apelidos,)

//b)//
 const novaPessoa = {
     ...pessoa,
     nome: "Gustavo",
     apelido: ["chico", "mexirica","Zaracho"]
     
 }
console.log("Eu sou",novaPessoa.nome, ", mas pode me chamar de:",novaPessoa.apelido)


//resposta 2//

const usuario = {

    nome: "Natália",
    idade: 30,
    profissao: "Estudante",

}
console.log (usuario.nome, usuario.nome.length ,usuario.idade, usuario.profissao, usuario.profissao.length) 

const novoUsuario = {
    ...usuario,
    nome: "Wenderson",
    idade: 35,
    profissão:"Operador Industrial",

}

console.log(novoUsuario.nome, novoUsuario.nome.length, novoUsuario.idade, novoUsuario.Profissao, novoUsuario.profissao.length)


// rsposta 3//

            
    const carrinho = ["Banana", "laranja","Morango"]

    const fruta = {
    fruta: "Banana",
    disponibilidade: true

}
    
    const frutaCitrica ={
    fruta: "laranja",
    disponibilidade: true
    }

    const frutaVermelha = {   
    fruta:"Morango",
     disponibilidade: true
    
}
function frutaSacolao (){
    return fruta.push
}
console.log(fruta)