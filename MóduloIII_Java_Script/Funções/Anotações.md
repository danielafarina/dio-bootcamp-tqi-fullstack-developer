# Funções


## Função Anônima

const SOMA = function (a, b) {
    return a + b;
}


## Função Autoinvocável: não pode receber parâmetros!

### Exemplo 1:
(
    function() {
        ler name = "DIO";
        return name;
    }
)();

### Exemplo 2:
(
    function (a, b) {
        return a + b;
    }
)(1, 2);

// 3


## Callback

Uma função passada como argumento para outra.

const CALC = function (operacao, a, b) {
    return operacao(a, b);
}
const SOMA = function(a, b) {
    return a + b;
}
const SUB = function(a, b) {
    return a - b;
}
const RESULT_SOMA = CALC(SOMA, 1, 2);
const RESULT_SUB = CALC(SUB, 1, 2);
console.log(RESULT_SUB);
console.log(RESULT_SOMA);


## Valores padrão (pós-ES2015)

function exponencial(array, num = 1) { // se num não existir, ele será por padrão, 1.

}


## Arguments

### Exemplo 1:

function findMax() {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

### Exemplo 2:

function showArguments() {
    return arguments;
}


## Arrays

### Spread: uma forma de lidar separadamente com elementos
(usa quando está chamando a função)

const NUMBERS = [1,2,3];

Suponha que você quer passar esses elementos para uma função que recebe três argumentos:

funcao(...numbers);

### Rest: combina os elementos em uma array
(usa quando está declarando a função)

function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho() // 0
confereTamanho(2, 3, 4) // 3

### Object Destructuring

const user = {
    id: 42,
    displayName: 'jdoe';
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    } 
};
function userId({id}) {
    return id;
}
function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId(user) // 42
getFullName(user) // John Doe

