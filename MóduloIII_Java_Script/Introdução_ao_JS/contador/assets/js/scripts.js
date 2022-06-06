// Fazendo com document.getElementById:

// var numeroAtualWrapper = document.getElementById("numeroAtual");

// var numeroAtual = 0;

// function increment() {
//     numeroAtual = numeroAtual + 1;
//     numeroAtualWrapper.innerHTML = numeroAtual;
// }

// function decrement() {
//     numeroAtual = numeroAtual - 1;
//     numeroAtualWrapper.innerHTML = numeroAtual;
// }

// Fazendo com addEventListener:

const botaoMais = document.getElementById("adicionar");
const botaoMenos = document.getElementById("subtrair");

botaoMais.addEventListener("click", increment);

botaoMenos.addEventListener("click", decrement);

var numeroAtualWrapper = document.getElementById("numeroAtual");

var numeroAtual = 0;

function increment() {
        numeroAtual += 1; // primeiro vc faz a conta com a variável auxiliar
        numeroAtualWrapper.innerHTML = numeroAtual; // depois vc coloca a variável auxiliar no innerHTML
}
    
function decrement() {
        numeroAtual -= 1;
        numeroAtualWrapper.innerHTML = numeroAtual;
    }