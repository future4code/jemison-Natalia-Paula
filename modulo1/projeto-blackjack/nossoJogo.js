/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



 console.log ("Boas vindas ao jogo de Blackjack!")

const  novaRodada = prompt('Quer iniciar uma nova rodada? digite ok ou cancel!');
const naoJogo = 'cancel'

if (novaRodada == 'ok' & naoJogo == 'cancel' ){
	  
} else {
	console.log('O jogo acabou')
}




function  textocomvalor (texto,valor){
  const carta = texto + valor 

  console.log(carta)
}


textocomvalor("K♦️", "10" )
textocomvalor("7♥️", "7")
textocomvalor("A♦️", "11")
textocomvalor("3♣️", "3")





/*const jogadores{
  jogadorum: usuario,
  pontuação: 17,
  // incompleto
}*/





let pontuacao = 20;

if (pontuacao > 17 && pontuacao  > 14 || pontuacao > 20){
  console.log("O usuário ganhou!")
} else if ( pontuacao >17){
  console.log("O computador ganhou!")
} else{
  console.log("Empate!")
}

