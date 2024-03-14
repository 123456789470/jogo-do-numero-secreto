listaDeNumerosSorteados = [];
numeroLimite = 10;
let numeroSecreto = gerarNumeros();
let tentativas = 1;
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10.';

//para evitar repetições criamos a função:
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirTextoNaTelaInicial () {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
}

exibirTextoNaTelaInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Parabéns, é o número ${numeroSecreto} e você usou ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativa);
        
        document.getElementById('reiniciar').removeAttribute('disabled');

     } else {
            if(chute > numeroSecreto) {
                exibirTextoNaTela('h1', 'Errou!');
                exibirTextoNaTela('p', `O número secreto é menor que ${chute}.`);
            } else {
                exibirTextoNaTela('h1', 'Errou!');
                exibirTextoNaTela('p', `O número secreto é maior que ${chute}.`);
            }
            tentativas++;
            limparCampo();
    }
}

function gerarNumeros() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if(quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
   }

   // um novo numero seja gerado caso o numero ja esteja na lista
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeros();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeros;
    limparCampo();
    tentativas = 1;
    exibirTextoNaTelaInicial();
    document.getElementById('reiniciar').setAttribute('disabled',
    true);
}